import { TopicBadge } from "@/components/TopicBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import {
  useApproveContribution,
  usePendingContributions,
  useRejectContribution,
} from "@/hooks/useContributions";
import {
  useAdminStats,
  useCreateGuide,
  useDeleteGuide,
  useGuides,
  useSetGuidePublished,
  useUpdateGuide,
} from "@/hooks/useGuides";
import {
  type NewsletterTopic,
  useAddNewsletterTopic,
  useNewsletterContent,
  useNewsletterSubscribers,
  useNewsletterTopics,
  useRemoveNewsletterTopic,
  useRenameNewsletterTopic,
  useSetNewsletterContent,
} from "@/hooks/useNewsletter";
import { type Guide, type GuideInput, TOPIC_LABELS, Topic } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Edit2,
  Eye,
  EyeOff,
  FileText,
  Inbox,
  Mail,
  Pencil,
  Plus,
  Send,
  Tag,
  Trash2,
  Users,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// ---- Guide Form ----
type GuideFormMode = "create" | "edit";

interface GuideFormProps {
  open: boolean;
  mode: GuideFormMode;
  initial?: Guide;
  onClose: () => void;
}

const emptyForm = (): GuideInput & { businessTypeTagsRaw: string } => ({
  title: "",
  topic: Topic.googleMaps,
  content: "",
  businessTypeTags: [],
  businessTypeTagsRaw: "",
  authorName: "",
  excerpt: "",
  readTimeMinutes: 5n,
  recommendedNext: [],
});

function GuideFormDialog({ open, mode, initial, onClose }: GuideFormProps) {
  const create = useCreateGuide();
  const update = useUpdateGuide();
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (open) {
      if (mode === "edit" && initial) {
        setForm({
          title: initial.title,
          topic: initial.topic,
          content: initial.content,
          businessTypeTags: initial.businessTypeTags,
          businessTypeTagsRaw: initial.businessTypeTags.join(", "),
          authorName: initial.authorName,
          excerpt: initial.excerpt,
          readTimeMinutes: initial.readTimeMinutes,
          recommendedNext: initial.recommendedNext,
        });
      } else {
        setForm(emptyForm());
      }
    }
  }, [open, mode, initial]);

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: GuideInput = {
      title: form.title,
      topic: form.topic,
      content: form.content,
      businessTypeTags: form.businessTypeTagsRaw
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      authorName: form.authorName,
      excerpt: form.excerpt,
      readTimeMinutes: BigInt(form.readTimeMinutes),
      recommendedNext: form.recommendedNext,
    };
    try {
      if (mode === "create") {
        await create.mutateAsync(payload);
        toast.success("Guide created successfully");
      } else if (initial) {
        await update.mutateAsync({ id: initial.id, input: payload });
        toast.success("Guide updated successfully");
      }
      onClose();
    } catch {
      toast.error("Failed to save guide. Please try again.");
    }
  };

  const isPending = create.isPending || update.isPending;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto"
        data-ocid="guide.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-lg">
            {mode === "create" ? "Add New Guide" : "Edit Guide"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="guide-title">Title</Label>
              <Input
                id="guide-title"
                data-ocid="guide.input"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                placeholder="Guide title"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="guide-topic">Topic</Label>
              <Select
                value={form.topic}
                onValueChange={(v) => set("topic", v as Topic)}
              >
                <SelectTrigger id="guide-topic" data-ocid="guide.select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(TOPIC_LABELS) as Topic[]).map((t) => (
                    <SelectItem key={t} value={t}>
                      {TOPIC_LABELS[t]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="guide-author">Author Name</Label>
              <Input
                id="guide-author"
                value={form.authorName}
                onChange={(e) => set("authorName", e.target.value)}
                placeholder="e.g. AISmallBiz Team"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="guide-read-time">Read Time (minutes)</Label>
              <Input
                id="guide-read-time"
                type="number"
                min={1}
                max={60}
                value={Number(form.readTimeMinutes)}
                onChange={(e) =>
                  set("readTimeMinutes", BigInt(e.target.value || "1"))
                }
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="guide-tags">Business Type Tags</Label>
              <Input
                id="guide-tags"
                value={form.businessTypeTagsRaw}
                onChange={(e) => set("businessTypeTagsRaw", e.target.value)}
                placeholder="deli, salon, retail (comma-separated)"
              />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="guide-excerpt">Excerpt</Label>
              <Textarea
                id="guide-excerpt"
                rows={2}
                value={form.excerpt}
                onChange={(e) => set("excerpt", e.target.value)}
                placeholder="Short summary shown in guide cards"
                required
              />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="guide-content">Content</Label>
              <Textarea
                id="guide-content"
                data-ocid="guide.textarea"
                rows={8}
                value={form.content}
                onChange={(e) => set("content", e.target.value)}
                placeholder="Full guide content (Markdown supported)"
                required
                className="font-mono text-sm"
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              data-ocid="guide.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              data-ocid="guide.submit_button"
            >
              {isPending
                ? "Saving…"
                : mode === "create"
                  ? "Create Guide"
                  : "Save Changes"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ---- Delete Confirm Dialog ----
interface DeleteDialogProps {
  open: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  isPending: boolean;
}

function DeleteConfirmDialog({
  open,
  title,
  onConfirm,
  onCancel,
  isPending,
}: DeleteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onCancel()}>
      <DialogContent className="max-w-sm" data-ocid="guide.dialog">
        <DialogHeader>
          <DialogTitle>Delete Guide?</DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">
          Are you sure you want to delete{" "}
          <span className="font-medium text-foreground">{title}</span>? This
          cannot be undone.
        </p>
        <div className="flex justify-end gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            data-ocid="guide.cancel_button"
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            disabled={isPending}
            onClick={onConfirm}
            data-ocid="guide.confirm_button"
          >
            {isPending ? "Deleting…" : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ---- Guides Tab ----
function GuidesTab() {
  const { data: guides = [], isLoading } = useGuides({});
  const deleteGuide = useDeleteGuide();
  const setPublished = useSetGuidePublished();
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<GuideFormMode>("create");
  const [editTarget, setEditTarget] = useState<Guide | undefined>();
  const [deleteTarget, setDeleteTarget] = useState<Guide | undefined>();

  const openCreate = () => {
    setFormMode("create");
    setEditTarget(undefined);
    setFormOpen(true);
  };

  const openEdit = (g: Guide) => {
    setFormMode("edit");
    setEditTarget(g);
    setFormOpen(true);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteGuide.mutateAsync(deleteTarget.id);
      toast.success("Guide deleted");
    } catch {
      toast.error("Failed to delete guide");
    } finally {
      setDeleteTarget(undefined);
    }
  };

  const handleTogglePublish = async (g: Guide) => {
    try {
      await setPublished.mutateAsync({ id: g.id, published: !g.isPublished });
      toast.success(g.isPublished ? "Guide unpublished" : "Guide published");
    } catch {
      toast.error("Failed to update publish status");
    }
  };

  const formatDate = (ts?: bigint) => {
    if (!ts) return "Not set";
    return new Date(Number(ts) / 1_000_000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {guides.length} guide{guides.length !== 1 ? "s" : ""} total
        </p>
        <Button
          type="button"
          onClick={openCreate}
          className="gap-2"
          data-ocid="guide.add_button"
        >
          <Plus className="size-4" />
          Add New Guide
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-2" data-ocid="guide.loading_state">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-14 rounded-lg" />
          ))}
        </div>
      ) : guides.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center py-16 text-center bg-muted/30 rounded-xl border border-dashed border-border"
          data-ocid="guide.empty_state"
        >
          <BookOpen className="size-10 text-muted-foreground mb-3" />
          <p className="font-medium text-foreground">No guides yet</p>
          <p className="text-sm text-muted-foreground mt-1">
            Create your first guide to get started.
          </p>
          <Button
            type="button"
            className="mt-4"
            onClick={openCreate}
            data-ocid="guide.add_button"
          >
            <Plus className="size-4 mr-2" />
            Add First Guide
          </Button>
        </div>
      ) : (
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/40 border-b border-border">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Title
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Topic
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell">
                  Author
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Status
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden lg:table-cell">
                  Published
                </th>
                <th className="text-right px-4 py-3 font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {guides.map((guide, idx) => (
                <tr
                  key={guide.id.toString()}
                  data-ocid={`guide.item.${idx + 1}`}
                  className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
                >
                  <td className="px-4 py-3 font-medium max-w-xs">
                    <span className="line-clamp-1">{guide.title}</span>
                  </td>
                  <td className="px-4 py-3">
                    <TopicBadge topic={guide.topic} size="sm" />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                    {guide.authorName}
                  </td>
                  <td className="px-4 py-3">
                    {guide.isPublished ? (
                      <Badge
                        variant="default"
                        className="bg-primary/10 text-primary hover:bg-primary/10 text-xs"
                      >
                        Published
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        Draft
                      </Badge>
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                    {formatDate(guide.publishedAt)}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        title={guide.isPublished ? "Unpublish" : "Publish"}
                        onClick={() => handleTogglePublish(guide)}
                        data-ocid={`guide.toggle.${idx + 1}`}
                      >
                        {guide.isPublished ? (
                          <EyeOff className="size-4" />
                        ) : (
                          <Eye className="size-4" />
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        title="Edit"
                        onClick={() => openEdit(guide)}
                        data-ocid={`guide.edit_button.${idx + 1}`}
                      >
                        <Edit2 className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        title="Delete"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => setDeleteTarget(guide)}
                        data-ocid={`guide.delete_button.${idx + 1}`}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <GuideFormDialog
        open={formOpen}
        mode={formMode}
        initial={editTarget}
        onClose={() => setFormOpen(false)}
      />
      <DeleteConfirmDialog
        open={!!deleteTarget}
        title={deleteTarget?.title ?? ""}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(undefined)}
        isPending={deleteGuide.isPending}
      />
    </div>
  );
}

// ---- Contribution Row ----
function ContributionRow({
  contribution,
  index,
}: {
  contribution: import("@/types").Contribution;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const approve = useApproveContribution();
  const reject = useRejectContribution();

  const handleApprove = async () => {
    try {
      await approve.mutateAsync(contribution.id);
      toast.success("Contribution approved and published");
    } catch {
      toast.error("Failed to approve contribution");
    }
  };

  const handleReject = async () => {
    try {
      await reject.mutateAsync({
        id: contribution.id,
        reason: rejectReason.trim() || null,
      });
      toast.success("Contribution rejected");
      setShowReject(false);
      setRejectReason("");
    } catch {
      toast.error("Failed to reject contribution");
    }
  };

  const submittedDate = new Date(
    Number(contribution.submittedAt) / 1_000_000,
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      data-ocid={`contribution.item.${index + 1}`}
      className="border border-border rounded-xl overflow-hidden bg-card"
    >
      <div className="flex items-start gap-4 px-5 py-4">
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-foreground line-clamp-1">
              {contribution.title}
            </span>
            <TopicBadge topic={contribution.topic} size="sm" />
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <FileText className="size-3" />
              {contribution.authorName}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3" />
              {submittedDate}
            </span>
            {contribution.businessContext && (
              <span className="truncate max-w-xs">
                Context: {contribution.businessContext}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="gap-1.5 text-muted-foreground"
            onClick={() => setExpanded((v) => !v)}
            data-ocid={`contribution.toggle.${index + 1}`}
          >
            {expanded ? (
              <ChevronUp className="size-4" />
            ) : (
              <ChevronDown className="size-4" />
            )}
            Preview
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-1.5 border-destructive/40 text-destructive hover:bg-destructive/5"
            onClick={() => setShowReject((v) => !v)}
            data-ocid={`contribution.reject_button.${index + 1}`}
          >
            <XCircle className="size-4" />
            Reject
          </Button>
          <Button
            type="button"
            size="sm"
            className="gap-1.5"
            disabled={approve.isPending}
            onClick={handleApprove}
            data-ocid={`contribution.approve_button.${index + 1}`}
          >
            <CheckCircle2 className="size-4" />
            {approve.isPending ? "Publishing…" : "Approve"}
          </Button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-border bg-muted/20 px-5 py-4">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Full Content Preview
          </p>
          <div className="text-sm text-foreground whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
            {contribution.content}
          </div>
        </div>
      )}

      {showReject && (
        <div className="border-t border-border bg-muted/20 px-5 py-4 space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            Rejection reason (optional)
          </p>
          <Textarea
            rows={2}
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            placeholder="Explain why this contribution is being rejected…"
            data-ocid={`contribution.reject_reason.${index + 1}`}
          />
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setShowReject(false);
                setRejectReason("");
              }}
              data-ocid={`contribution.cancel_button.${index + 1}`}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              disabled={reject.isPending}
              onClick={handleReject}
              data-ocid={`contribution.confirm_button.${index + 1}`}
            >
              {reject.isPending ? "Rejecting…" : "Confirm Rejection"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ---- Contributions Tab ----
function ContributionsTab() {
  const { data: contributions = [], isLoading } = usePendingContributions();

  if (isLoading) {
    return (
      <div className="space-y-3" data-ocid="contribution.loading_state">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-20 rounded-xl" />
        ))}
      </div>
    );
  }

  if (contributions.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-16 text-center bg-muted/30 rounded-xl border border-dashed border-border"
        data-ocid="contribution.empty_state"
      >
        <Inbox className="size-10 text-muted-foreground mb-3" />
        <p className="font-medium text-foreground">No pending contributions</p>
        <p className="text-sm text-muted-foreground mt-1">
          When SMB users submit guides for review, they will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        {contributions.length} pending review
      </p>
      {contributions.map((c, i) => (
        <ContributionRow key={c.id.toString()} contribution={c} index={i} />
      ))}
    </div>
  );
}

// ---- Newsletter Tab ----
function NewsletterTab() {
  const { data: topics = [], isLoading: topicsLoading } = useNewsletterTopics();
  const [selectedTopicId, setSelectedTopicId] = useState<bigint | undefined>();
  const [formTopic, setFormTopic] = useState<bigint | undefined>();
  const [subject, setSubject] = useState("");
  const [htmlBody, setHtmlBody] = useState("");

  const { data: content, isLoading: contentLoading } =
    useNewsletterContent(selectedTopicId);
  const { data: subscribers = [], isLoading: subsLoading } =
    useNewsletterSubscribers(selectedTopicId);

  const saveContent = useSetNewsletterContent();
  const addTopic = useAddNewsletterTopic();
  const renameTopic = useRenameNewsletterTopic();
  const removeTopic = useRemoveNewsletterTopic();

  // Default to the first topic once topics load.
  useEffect(() => {
    if (topics.length > 0 && selectedTopicId === undefined) {
      setSelectedTopicId(topics[0].id);
    }
  }, [topics, selectedTopicId]);

  // Initialize the compose draft once per selected topic.
  useEffect(() => {
    if (selectedTopicId === undefined || contentLoading) return;
    if (formTopic === selectedTopicId) return;
    setSubject(content?.subject ?? "");
    setHtmlBody(content?.htmlBody ?? "");
    setFormTopic(selectedTopicId);
  }, [selectedTopicId, content, contentLoading, formTopic]);

  const [addOpen, setAddOpen] = useState(false);
  const [addName, setAddName] = useState("");
  const [renameTarget, setRenameTarget] = useState<
    NewsletterTopic | undefined
  >();
  const [renameName, setRenameName] = useState("");
  const [removeTarget, setRemoveTarget] = useState<
    NewsletterTopic | undefined
  >();

  const verifiedCount = subscribers.filter((s) => s.verified).length;

  const handleSave = async () => {
    if (selectedTopicId === undefined) return;
    try {
      await saveContent.mutateAsync({
        topicId: selectedTopicId,
        subject,
        htmlBody,
      });
      toast.success("Newsletter content saved");
    } catch {
      toast.error("Failed to save newsletter content");
    }
  };

  const handleAddTopic = async () => {
    const name = addName.trim();
    if (!name) return;
    try {
      await addTopic.mutateAsync(name);
      toast.success("Topic added");
      setAddName("");
      setAddOpen(false);
    } catch {
      toast.error("Failed to add topic");
    }
  };

  const handleRename = async () => {
    if (!renameTarget) return;
    const name = renameName.trim();
    if (!name) return;
    try {
      await renameTopic.mutateAsync({
        topicId: renameTarget.id,
        newName: name,
      });
      toast.success("Topic renamed");
      setRenameTarget(undefined);
    } catch {
      toast.error("Failed to rename topic");
    }
  };

  const handleRemove = async () => {
    if (!removeTarget) return;
    try {
      await removeTopic.mutateAsync(removeTarget.id);
      toast.success("Topic removed");
      if (selectedTopicId === removeTarget.id) {
        setSelectedTopicId(undefined);
        setFormTopic(undefined);
      }
      setRemoveTarget(undefined);
    } catch {
      toast.error("Failed to remove topic");
    }
  };

  return (
    <div className="space-y-6">
      {/* Topic selector + add */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Label htmlFor="newsletter-topic" className="shrink-0">
            Topic
          </Label>
          <Select
            value={selectedTopicId?.toString() ?? ""}
            onValueChange={(v) => {
              setSelectedTopicId(v ? BigInt(v) : undefined);
              setFormTopic(undefined);
            }}
          >
            <SelectTrigger
              id="newsletter-topic"
              className="w-64"
              data-ocid="newsletter.topic_select"
            >
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              {topics.map((t) => (
                <SelectItem key={t.id.toString()} value={t.id.toString()}>
                  {t.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          type="button"
          onClick={() => setAddOpen(true)}
          className="gap-2"
          data-ocid="newsletter.add_topic_button"
        >
          <Plus className="size-4" />
          Add Topic
        </Button>
      </div>

      {topicsLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <Skeleton className="h-72 rounded-xl lg:col-span-3" />
          <Skeleton className="h-72 rounded-xl lg:col-span-2" />
        </div>
      ) : topics.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center py-16 text-center bg-muted/30 rounded-xl border border-dashed border-border"
          data-ocid="newsletter.empty_state"
        >
          <Tag className="size-10 text-muted-foreground mb-3" />
          <p className="font-medium text-foreground">
            No newsletter topics yet
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Add a topic to start composing weekly and monthly newsletters.
          </p>
          <Button
            type="button"
            className="mt-4"
            onClick={() => setAddOpen(true)}
            data-ocid="newsletter.add_topic_button"
          >
            <Plus className="size-4 mr-2" />
            Add First Topic
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Compose card */}
            <div className="newsletter-compose lg:col-span-3">
              <div className="newsletter-compose-header">
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">
                    Compose Newsletter
                  </h3>
                </div>
                <span
                  className="schedule-summary"
                  data-ocid="newsletter.schedule_summary"
                >
                  <Send className="size-3.5" />
                  {verifiedCount} verified subscriber
                  {verifiedCount !== 1 ? "s" : ""} will receive this send
                </span>
              </div>
              <div className="newsletter-compose-body space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="newsletter-subject">Subject</Label>
                  <Input
                    id="newsletter-subject"
                    data-ocid="newsletter.subject_input"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Email subject line"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="newsletter-body">HTML Body</Label>
                  <Textarea
                    id="newsletter-body"
                    data-ocid="newsletter.body_textarea"
                    rows={10}
                    value={htmlBody}
                    onChange={(e) => setHtmlBody(e.target.value)}
                    placeholder="Compose the newsletter HTML body here"
                    className="font-mono text-sm"
                  />
                </div>
                <div className="flex justify-end pt-1 border-t border-border">
                  <Button
                    type="button"
                    disabled={saveContent.isPending}
                    onClick={handleSave}
                    data-ocid="newsletter.save_button"
                  >
                    {saveContent.isPending ? "Saving…" : "Save Content"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Subscriber card */}
            <div className="newsletter-compose lg:col-span-2">
              <div className="newsletter-compose-header">
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">
                    Subscriber Management
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {subscribers.length} total
                </span>
              </div>
              <div className="newsletter-compose-body p-0">
                {subsLoading ? (
                  <div
                    className="p-4 space-y-2"
                    data-ocid="newsletter.loading_state"
                  >
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-10 rounded-lg" />
                    ))}
                  </div>
                ) : subscribers.length === 0 ? (
                  <div
                    className="flex flex-col items-center justify-center py-12 text-center"
                    data-ocid="newsletter.subscribers_empty_state"
                  >
                    <Inbox className="size-8 text-muted-foreground mb-2" />
                    <p className="text-sm font-medium text-foreground">
                      No subscribers yet
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 px-6">
                      Subscribers for this topic will appear here once they sign
                      up.
                    </p>
                  </div>
                ) : (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/40 border-b border-border">
                        <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                          Email
                        </th>
                        <th className="text-right px-4 py-3 font-medium text-muted-foreground">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscribers.map((s, idx) => (
                        <tr
                          key={s.email}
                          data-ocid={`newsletter.subscriber_row.${idx + 1}`}
                          className={`subscriber-row border-b border-border last:border-0 ${
                            s.verified ? "" : "pending"
                          }`}
                        >
                          <td className="px-4 py-3 text-foreground truncate max-w-[12rem]">
                            {s.email}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex justify-end">
                              <span
                                className={`badge-status ${
                                  s.verified ? "verified" : "pending"
                                }`}
                              >
                                {s.verified ? "Verified" : "Pending"}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>

          {/* Topic management */}
          <div className="newsletter-compose">
            <div className="newsletter-compose-header">
              <div className="flex items-center gap-2">
                <Tag className="size-4 text-primary" />
                <h3 className="font-display font-semibold text-foreground">
                  Newsletter Topics
                </h3>
              </div>
            </div>
            <div className="newsletter-compose-body p-0">
              <ul className="divide-y divide-border">
                {topics.map((t, idx) => (
                  <li
                    key={t.id.toString()}
                    data-ocid={`newsletter.topic_item.${idx + 1}`}
                    className="flex items-center justify-between gap-4 px-5 py-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="size-1.5 rounded-full bg-primary inline-block shrink-0" />
                      <span className="font-medium text-foreground truncate">
                        {t.name}
                      </span>
                      {t.id === selectedTopicId && (
                        <span className="text-xs text-muted-foreground">
                          (selected)
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        title="Rename"
                        onClick={() => {
                          setRenameTarget(t);
                          setRenameName(t.name);
                        }}
                        data-ocid={`newsletter.rename_button.${idx + 1}`}
                      >
                        <Pencil className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        title="Remove"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => setRemoveTarget(t)}
                        data-ocid={`newsletter.remove_button.${idx + 1}`}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

      {/* Add topic dialog */}
      <Dialog open={addOpen} onOpenChange={(v) => !v && setAddOpen(false)}>
        <DialogContent className="max-w-sm" data-ocid="newsletter.add_dialog">
          <DialogHeader>
            <DialogTitle className="font-display text-lg">
              Add Newsletter Topic
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void handleAddTopic();
            }}
            className="space-y-4 pt-2"
          >
            <div className="space-y-1.5">
              <Label htmlFor="newsletter-add-name">Topic Name</Label>
              <Input
                id="newsletter-add-name"
                data-ocid="newsletter.add_topic_input"
                value={addName}
                onChange={(e) => setAddName(e.target.value)}
                placeholder="e.g. Weekly Small Biz Tips"
                autoFocus
                required
              />
            </div>
            <div className="flex justify-end gap-3 pt-2 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => setAddOpen(false)}
                data-ocid="newsletter.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={addTopic.isPending}
                data-ocid="newsletter.submit_button"
              >
                {addTopic.isPending ? "Adding…" : "Add Topic"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Rename topic dialog */}
      <Dialog
        open={!!renameTarget}
        onOpenChange={(v) => !v && setRenameTarget(undefined)}
      >
        <DialogContent
          className="max-w-sm"
          data-ocid="newsletter.rename_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-lg">
              Rename Topic
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void handleRename();
            }}
            className="space-y-4 pt-2"
          >
            <div className="space-y-1.5">
              <Label htmlFor="newsletter-rename-name">Topic Name</Label>
              <Input
                id="newsletter-rename-name"
                data-ocid="newsletter.rename_input"
                value={renameName}
                onChange={(e) => setRenameName(e.target.value)}
                autoFocus
                required
              />
            </div>
            <div className="flex justify-end gap-3 pt-2 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => setRenameTarget(undefined)}
                data-ocid="newsletter.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={renameTopic.isPending}
                data-ocid="newsletter.submit_button"
              >
                {renameTopic.isPending ? "Saving…" : "Save"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Remove topic confirm dialog */}
      <Dialog
        open={!!removeTarget}
        onOpenChange={(v) => !v && setRemoveTarget(undefined)}
      >
        <DialogContent
          className="max-w-sm"
          data-ocid="newsletter.remove_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-lg">
              Remove Topic?
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground text-sm">
            Are you sure you want to remove{" "}
            <span className="font-medium text-foreground">
              {removeTarget?.name}
            </span>
            ? This cannot be undone.
          </p>
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setRemoveTarget(undefined)}
              data-ocid="newsletter.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              disabled={removeTopic.isPending}
              onClick={handleRemove}
              data-ocid="newsletter.confirm_button"
            >
              {removeTopic.isPending ? "Removing…" : "Remove"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ---- Stats Bar ----
function StatsBar() {
  const { data: stats, isLoading } = useAdminStats();

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      data-ocid="admin.stats_panel"
    >
      <div className="bg-card border border-border rounded-xl px-5 py-4 flex items-center gap-4">
        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <BookOpen className="size-5 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            Published Guides
          </p>
          {isLoading ? (
            <Skeleton className="h-7 w-12 mt-1" />
          ) : (
            <p className="text-2xl font-display font-semibold text-foreground">
              {stats?.totalPublished?.toString() ?? "0"}
            </p>
          )}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl px-5 py-4 flex items-center gap-4">
        <div className="size-10 rounded-lg bg-chart-5/15 flex items-center justify-center shrink-0">
          <Clock className="size-5 text-chart-5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            Pending Contributions
          </p>
          {isLoading ? (
            <Skeleton className="h-7 w-12 mt-1" />
          ) : (
            <p className="text-2xl font-display font-semibold text-foreground">
              {stats?.pendingContributions?.toString() ?? "0"}
            </p>
          )}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl px-5 py-4">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
          Recently Added
        </p>
        {isLoading ? (
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : stats?.recentGuides && stats.recentGuides.length > 0 ? (
          <ul className="space-y-1">
            {stats.recentGuides.slice(0, 3).map((g) => (
              <li
                key={g.id.toString()}
                className="text-sm text-foreground line-clamp-1 flex items-center gap-1.5"
              >
                <span className="size-1.5 rounded-full bg-primary inline-block shrink-0" />
                {g.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">No guides yet</p>
        )}
      </div>
    </div>
  );
}

// ---- Main Admin Page ----
export default function Admin() {
  const { isAdmin, isAuthenticated, loginStatus, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      loginStatus !== "idle" &&
      loginStatus !== "logging-in" &&
      isAuthenticated &&
      !isAdmin
    ) {
      navigate({ to: "/" });
      toast.error("Access denied. Admin privileges required.");
    }
  }, [isAdmin, isAuthenticated, loginStatus, navigate]);

  if (!isAuthenticated || loginStatus === "logging-in") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4 max-w-sm">
          <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
            <BookOpen className="size-7 text-primary" />
          </div>
          <h1 className="font-display text-xl font-semibold">Admin Panel</h1>
          <p className="text-muted-foreground text-sm">
            Sign in with your admin account to manage guides and contributions.
          </p>
          <Button
            type="button"
            onClick={() => login()}
            className="w-full"
            data-ocid="admin.login_button"
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div
          className="text-center space-y-4 max-w-sm"
          data-ocid="admin.error_state"
        >
          <XCircle className="size-10 text-destructive mx-auto" />
          <p className="font-medium">Access Denied</p>
          <p className="text-sm text-muted-foreground">
            You do not have admin privileges.
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate({ to: "/" })}
          >
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" data-ocid="admin.page">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="size-4 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display font-semibold text-foreground">
                AISmallBiz™
              </span>
              <span className="ml-2 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                Admin
              </span>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => navigate({ to: "/" })}
          >
            Back to Site
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div>
          <h1 className="font-display text-2xl font-semibold text-foreground">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage your guides, review contributions, and track content
            performance.
          </p>
        </div>

        <StatsBar />

        <Tabs defaultValue="guides" data-ocid="admin.tab">
          <TabsList className="bg-muted/50 border border-border">
            <TabsTrigger
              value="guides"
              className="gap-2"
              data-ocid="admin.guides_tab"
            >
              <BookOpen className="size-4" />
              Guides
            </TabsTrigger>
            <TabsTrigger
              value="contributions"
              className="gap-2"
              data-ocid="admin.contributions_tab"
            >
              <FileText className="size-4" />
              Contributions
            </TabsTrigger>
            <TabsTrigger
              value="newsletter"
              className="gap-2"
              data-ocid="admin.newsletter_tab"
            >
              <Mail className="size-4" />
              Newsletter
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="mt-6">
            <GuidesTab />
          </TabsContent>

          <TabsContent value="contributions" className="mt-6">
            <ContributionsTab />
          </TabsContent>

          <TabsContent value="newsletter" className="mt-6">
            <NewsletterTab />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/40 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AISmallBiz™ · Admin Panel · Built with
          love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            caffeine.ai
          </a>
          <br />
          AISmallBiz™ is a trademark of Christian Lawson. Trademark registration
          pending.
        </div>
      </footer>
    </div>
  );
}
