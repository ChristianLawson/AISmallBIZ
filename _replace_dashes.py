#!/usr/bin/env python3
"""Replace em dashes (—, U+2014) and en dashes (–, U+2013) in user-facing prose."""
import os
import re

ROOT = "/home/ubuntu/workspace/app/src/frontend"
EM = "\u2014"
EN = "\u2013"


def replace_em_dash_in_clause(text, idx):
    """
    Returns (replacement, consume_before) where consume_before is the number
    of characters immediately before idx that the caller should also drop
    (used to absorb a preceding space so punctuation attaches correctly).
    The caller is responsible for removing text[idx-consume_before:idx] and
    inserting `replacement` in its place, then skipping the dash at idx.
    """
    before = text[:idx]
    after = text[idx + 1:]
    sent_start = 0
    for i in range(idx - 1, -1, -1):
        c = text[i]
        if c == "\n":
            sent_start = i + 1
            break
        if c in ".!?":
            j = i + 1
            if j < idx and text[j] in " \t" and j + 1 < idx:
                nxt = text[j + 1] if j + 1 < len(text) else ""
                if nxt.isupper() or nxt == "":
                    sent_start = j + 1
                    break
    sentence = text[sent_start:idx]
    prev_em = sentence.rfind(EM)
    after_stripped = after.lstrip()
    m = re.match(r"([A-Za-z]+)", after_stripped)
    after_first_word = m.group(1) if m else ""
    space_before = bool(before) and before[-1] in " \t"
    space_after = bool(after) and after[0] in " \t"

    # Parenthetical close: there's an opening em dash earlier in this sentence.
    if prev_em != -1:
        insertion = sentence[prev_em + 1:]
        # Closing parenthetical when the main clause resumes after this dash.
        resumes = bool(after_first_word) and after_first_word[0].islower()
        if len(insertion) < 120 and (resumes or not after_first_word):
            # consume the space before so we get "word) and" not "word ) and"
            return (")", 1 if space_before else 0)

    if not after_stripped:
        return (":", 1 if space_before else 0)
    first_char = after_stripped[0]

    if first_char.isupper():
        before_clause = text[sent_start:idx].rstrip()
        if len(before_clause) < 45:
            return (": ", 1 if space_before else 0)
        # strong break -> period + space (after already capital)
        return (". " if space_after else ".", 1 if space_before else 0)
    if first_char.isdigit() or first_char in "$\u00a3\u20ac":
        return (": ", 1 if space_before else 0)
    if first_char.islower():
        before_clause = text[sent_start:idx].rstrip()
        wc = len(before_clause.split())
        if wc <= 6:
            return (": ", 1 if space_before else 0)
        return (", ", 1 if space_before else 0)
    if first_char in "\"'`":
        return (": ", 1 if space_before else 0)
    return (": ", 1 if space_before else 0)


def replace_em_dashes_in_text(text):
    out = []
    i = 0
    while i < len(text):
        if text[i] == EM:
            repl, consume = replace_em_dash_in_clause(text, i)
            # drop `consume` trailing chars from out (the preceding space)
            if consume:
                del out[-consume:]
            out.append(repl)
        else:
            out.append(text[i])
        i += 1
    return "".join(out)


def replace_en_dashes_in_text(text):
    result = []
    i = 0
    while i < len(text):
        c = text[i]
        if c == EN:
            before = text[:i]
            after = text[i + 1:]
            space_before = bool(before) and before[-1] in " \t"
            space_after = bool(after) and after[0] in " \t"
            if space_before and space_after:
                repl, consume = replace_em_dash_in_clause(text, i)
                if consume:
                    del result[-consume:]
                result.append(repl)
            else:
                result.append("-")
        else:
            result.append(c)
        i += 1
    return "".join(result)


def replace_dashes_in_text(text):
    return replace_en_dashes_in_text(replace_em_dashes_in_text(text))


def _replace_dash_in_string_context(src, i, n, quote, is_em):
    """Returns (replacement, consume_before) for a dash at position i inside a string."""
    if is_em:
        j = i + 1
        while j < n:
            if src[j] == "\\":
                j += 2
                continue
            if src[j] == quote:
                break
            j += 1
        local = src[i:j]
        repl, consume = replace_em_dash_in_clause(local, 0)
        # consume is relative to local (which starts at the dash), so the
        # preceding space is not in local. Translate to actual preceding space.
        prev_char = src[i - 1] if i > 0 else ""
        actual_consume = 1 if (consume and prev_char in " \t") else 0
        return (repl, actual_consume)
    prev_char = src[i - 1] if i > 0 else ""
    next_char = src[i + 1] if i + 1 < n else ""
    if prev_char in " \t" and next_char in " \t":
        j = i + 1
        while j < n:
            if src[j] == "\\":
                j += 2
                continue
            if src[j] == quote:
                break
            j += 1
        local = src[i:j]
        repl, consume = replace_em_dash_in_clause(local, 0)
        actual_consume = 1 if (consume and prev_char in " \t") else 0
        return (repl, actual_consume)
    return ("-", 0)


def process_tsx(src):
    out = []
    i = 0
    n = len(src)
    state = "code"
    quote = None
    jsx_level = 0
    in_jsx_tag = False
    jsx_expr_depth = 0
    while i < n:
        c = src[i]
        nxt = src[i + 1] if i + 1 < n else ""
        if state == "code":
            if c == "/" and nxt == "/":
                out.append(c); state = "line_comment"; i += 1; continue
            if c == "/" and nxt == "*":
                out.append(c); state = "block_comment"; i += 1; continue
            if c in ('"', "'", "`"):
                quote = c; out.append(c); state = "string"; i += 1; continue
            if c == "<":
                is_jsx = False
                if nxt.isalpha() or nxt == "/":
                    if jsx_level > 0:
                        is_jsx = True
                    else:
                        j = len(out) - 1
                        while j >= 0 and out[j] in " \t":
                            j -= 1
                        prev_sig = out[j] if j >= 0 else ""
                        if prev_sig in ("(", "=", ">", ",", "{", "&", "|", "?", "!", ";", "}", "") or prev_sig == "\n":
                            is_jsx = True
                if is_jsx:
                    if nxt == "/":
                        jsx_level = max(0, jsx_level - 1)
                    else:
                        jsx_level += 1
                    out.append(c); in_jsx_tag = True; i += 1; continue
                out.append(c); i += 1; continue
            if c == ">":
                if in_jsx_tag and jsx_level > 0:
                    out.append(c); in_jsx_tag = False; state = "jsx_text"; i += 1; continue
                out.append(c); i += 1; continue
            out.append(c); i += 1; continue
        if state == "jsx_text":
            if c == "<":
                out.append(c); state = "code"
                if nxt == "/":
                    jsx_level = max(0, jsx_level - 1)
                else:
                    jsx_level += 1
                in_jsx_tag = True; i += 1; continue
            if c == "{":
                out.append(c); state = "jsx_expr"; jsx_expr_depth = 1; i += 1; continue
            j = i
            while j < n and src[j] != "<" and src[j] != "{":
                j += 1
            out.append(replace_dashes_in_text(src[i:j]))
            i = j; continue
        if state == "jsx_expr":
            if c == "{":
                out.append(c); jsx_expr_depth += 1; i += 1; continue
            if c == "}":
                jsx_expr_depth -= 1; out.append(c)
                if jsx_expr_depth <= 0:
                    state = "jsx_text"
                i += 1; continue
            if c == "/" and nxt == "/":
                out.append(c); k = i + 1
                while k < n and src[k] != "\n":
                    out.append(src[k]); k += 1
                i = k; continue
            if c in ('"', "'", "`"):
                q = c; out.append(c); k = i + 1
                while k < n:
                    if src[k] == "\\" and k + 1 < n:
                        out.append(src[k]); out.append(src[k + 1]); k += 2; continue
                    if src[k] == q:
                        out.append(src[k]); k += 1; break
                    if src[k] == EM:
                        out.append(_replace_dash_in_string_context(src, k, n, q, True)); k += 1; continue
                    if src[k] == EN:
                        out.append(_replace_dash_in_string_context(src, k, n, q, False)); k += 1; continue
                    out.append(src[k]); k += 1
                i = k; continue
            out.append(c); i += 1; continue
        if state == "line_comment":
            out.append(c)
            if c == "\n":
                state = "code"
            i += 1; continue
        if state == "block_comment":
            out.append(c)
            if c == "*" and nxt == "/":
                out.append(nxt); state = "code"; i += 2; continue
            i += 1; continue
        if state == "string":
            if c == "\\":
                out.append(c)
                if i + 1 < n:
                    out.append(src[i + 1]); i += 2
                else:
                    i += 1
                continue
            if quote == "`" and c == "$" and nxt == "{":
                out.append(c); out.append(nxt); state = "code"; i += 2; continue
            if c == quote:
                out.append(c); state = "code"; quote = None; i += 1; continue
            if c == EM:
                out.append(_replace_dash_in_string_context(src, i, n, quote, True)); i += 1; continue
            if c == EN:
                out.append(_replace_dash_in_string_context(src, i, n, quote, False)); i += 1; continue
            out.append(c); i += 1; continue
    return "".join(out)


def process_css(src):
    out = []; i = 0; n = len(src); state = "code"; quote = None
    while i < n:
        c = src[i]; nxt = src[i + 1] if i + 1 < n else ""
        if state == "code":
            if c == "/" and nxt == "*":
                out.append(c); state = "block_comment"; i += 1; continue
            if c in ('"', "'"):
                quote = c; out.append(c); state = "string"; i += 1; continue
            out.append(c); i += 1; continue
        if state == "block_comment":
            out.append(c)
            if c == "*" and nxt == "/":
                out.append(nxt); state = "code"; i += 2; continue
            i += 1; continue
        if state == "string":
            if c == "\\":
                out.append(c)
                if i + 1 < n:
                    out.append(src[i + 1]); i += 2
                else:
                    i += 1
                continue
            if c == quote:
                out.append(c); state = "code"; quote = None; i += 1; continue
            if c == EM:
                out.append(_replace_dash_in_string_context(src, i, n, quote, True)); i += 1; continue
            if c == EN:
                out.append(_replace_dash_in_string_context(src, i, n, quote, False)); i += 1; continue
            out.append(c); i += 1; continue
    return "".join(out)


PROSE_ATTRS = {"title", "content", "alt", "aria-label", "aria-describedby",
               "placeholder", "label", "name", "description", "value"}


def process_html(src):
    out = []; i = 0; n = len(src); state = "text"; quote = None; current_attr = None
    while i < n:
        c = src[i]
        if state == "text":
            if c == "<":
                out.append(c); state = "tag"; current_attr = None; i += 1; continue
            j = i
            while j < n and src[j] != "<":
                j += 1
            out.append(replace_dashes_in_text(src[i:j])); i = j; continue
        if state == "tag":
            if c == ">":
                out.append(c); state = "text"; current_attr = None; i += 1; continue
            if c in ('"', "'"):
                quote = c; out.append(c); state = "attr_value"; i += 1; continue
            if c.isalpha() or c == "-":
                m = re.match(r"[a-zA-Z][a-zA-Z0-9-]*", src[i:])
                if m:
                    current_attr = m.group(0).lower()
                out.append(c); i += 1; continue
            out.append(c); i += 1; continue
        if state == "attr_value":
            if c == "\\":
                out.append(c)
                if i + 1 < n:
                    out.append(src[i + 1]); i += 2
                else:
                    i += 1
                continue
            if c == quote:
                out.append(c); state = "tag"; current_attr = None; quote = None; i += 1; continue
            if current_attr in PROSE_ATTRS:
                if c == EM:
                    out.append(_replace_dash_in_string_context(src, i, n, quote, True)); i += 1; continue
                if c == EN:
                    out.append(_replace_dash_in_string_context(src, i, n, quote, False)); i += 1; continue
            out.append(c); i += 1; continue
    return "".join(out)


def process_json(src):
    out = []; i = 0; n = len(src); state = "code"; quote = None
    while i < n:
        c = src[i]
        if state == "code":
            if c == '"':
                quote = '"'; out.append(c); state = "string"; i += 1; continue
            out.append(c); i += 1; continue
        if state == "string":
            if c == "\\":
                out.append(c)
                if i + 1 < n:
                    out.append(src[i + 1]); i += 2
                else:
                    i += 1
                continue
            if c == quote:
                out.append(c); state = "code"; quote = None; i += 1; continue
            if c == EM:
                out.append(_replace_dash_in_string_context(src, i, n, quote, True)); i += 1; continue
            if c == EN:
                out.append(_replace_dash_in_string_context(src, i, n, quote, False)); i += 1; continue
            out.append(c); i += 1; continue
    return "".join(out)


def process_md(src):
    lines = src.split("\n")
    in_fence = False; fence_marker = None; result_lines = []
    for line in lines:
        stripped = line.lstrip()
        if stripped.startswith("```") or stripped.startswith("~~~"):
            mk = stripped[:3]
            if not in_fence:
                in_fence = True; fence_marker = mk; result_lines.append(line); continue
            elif mk == fence_marker:
                in_fence = False; fence_marker = None; result_lines.append(line); continue
        if in_fence:
            result_lines.append(line); continue
        new_line = []; j = 0
        while j < len(line):
            if line[j] == "`":
                k = j + 1
                while k < len(line) and line[k] != "`":
                    k += 1
                new_line.append(line[j:k + 1]); j = k + 1; continue
            new_line.append(line[j]); j += 1
        result_lines.append(replace_dashes_in_text("".join(new_line)))
    return "\n".join(result_lines)


def process_file(path):
    ext = os.path.splitext(path)[1].lower()
    with open(path, "r", encoding="utf-8") as f:
        src = f.read()
    if ext in (".tsx", ".ts"):
        new_src = process_tsx(src)
    elif ext == ".css":
        new_src = process_css(src)
    elif ext in (".html", ".htm"):
        new_src = process_html(src)
    elif ext == ".json":
        new_src = process_json(src)
    elif ext in (".md", ".mdx"):
        new_src = process_md(src)
    else:
        return False
    if new_src != src:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_src)
        return True
    return False


def main():
    changed = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        if "node_modules" in dirpath:
            continue
        for fn in filenames:
            ext = os.path.splitext(fn)[1].lower()
            if ext in (".tsx", ".ts", ".css", ".html", ".htm", ".json", ".md", ".mdx"):
                p = os.path.join(dirpath, fn)
                if process_file(p):
                    changed.append(os.path.relpath(p, ROOT))
    print("CHANGED FILES:")
    for c in changed:
        print("  " + c)
    print(f"Total: {len(changed)} files changed")


if __name__ == "__main__":
    main()
