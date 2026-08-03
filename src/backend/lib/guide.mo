import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/guide";
import Common "../types/common";

module {
  public func listPublished(
    guides : List.List<Types.Guide>,
    filter : Types.GuideFilter,
  ) : [Types.Guide] {
    let filtered = guides.filter(func(g : Types.Guide) : Bool {
      if (not g.isPublished) return false;
      switch (filter.topic) {
        case (?t) { if (g.topic != t) return false };
        case null {};
      };
      switch (filter.businessTypeTag) {
        case (?tag) {
          let hasTag = g.businessTypeTags.find(func(bt : Text) : Bool { bt == tag });
          if (hasTag == null) return false;
        };
        case null {};
      };
      switch (filter.keyword) {
        case (?kw) {
          let kl = kw.toLower();
          let inTitle = g.title.toLower().contains(#text kl);
          let inExcerpt = g.excerpt.toLower().contains(#text kl);
          if (not inTitle and not inExcerpt) return false;
        };
        case null {};
      };
      true;
    });
    filtered.toArray();
  };

  public func getById(
    guides : List.List<Types.Guide>,
    id : Common.GuideId,
  ) : ?Types.Guide {
    guides.find(func(g : Types.Guide) : Bool { g.id == id });
  };

  public func getFeatured(
    guides : List.List<Types.Guide>,
  ) : [Types.Guide] {
    let published = guides.filter(func(g : Types.Guide) : Bool { g.isPublished });
    let sorted = published.sort(func(a : Types.Guide, b : Types.Guide) : { #less; #equal; #greater } {
      let ta = switch (a.publishedAt) { case (?t) t; case null 0 };
      let tb = switch (b.publishedAt) { case (?t) t; case null 0 };
      if (tb > ta) #less else if (tb < ta) #greater else #equal;
    });
    sorted.toArray().sliceToArray(0, 5);
  };

  public func createGuide(
    guides : List.List<Types.Guide>,
    state : { var nextGuideId : Nat },
    input : Types.GuideInput,
    authorType : Types.AuthorType,
  ) : Types.Guide {
    let id = state.nextGuideId;
    state.nextGuideId += 1;
    let guide : Types.Guide = {
      id;
      title = input.title;
      topic = input.topic;
      content = input.content;
      authorName = input.authorName;
      authorType;
      businessTypeTags = input.businessTypeTags;
      publishedAt = null;
      isPublished = false;
      readTimeMinutes = input.readTimeMinutes;
      excerpt = input.excerpt;
      recommendedNext = input.recommendedNext;
    };
    guides.add(guide);
    guide;
  };

  public func updateGuide(
    guides : List.List<Types.Guide>,
    id : Common.GuideId,
    input : Types.GuideInput,
  ) : Bool {
    var found = false;
    guides.mapInPlace(func(g : Types.Guide) : Types.Guide {
      if (g.id == id) {
        found := true;
        {
          g with
          title = input.title;
          topic = input.topic;
          content = input.content;
          authorName = input.authorName;
          businessTypeTags = input.businessTypeTags;
          readTimeMinutes = input.readTimeMinutes;
          excerpt = input.excerpt;
          recommendedNext = input.recommendedNext;
        };
      } else g;
    });
    found;
  };

  public func deleteGuide(
    guides : List.List<Types.Guide>,
    id : Common.GuideId,
  ) : Bool {
    let before = guides.size();
    let remaining = guides.filter(func(g : Types.Guide) : Bool { g.id != id });
    guides.clear();
    guides.append(remaining);
    guides.size() < before;
  };

  public func setPublished(
    guides : List.List<Types.Guide>,
    id : Common.GuideId,
    published : Bool,
  ) : Bool {
    var found = false;
    guides.mapInPlace(func(g : Types.Guide) : Types.Guide {
      if (g.id == id) {
        found := true;
        {
          g with
          isPublished = published;
          publishedAt = if (published) ?Time.now() else g.publishedAt;
        };
      } else g;
    });
    found;
  };

  public func getAdminStats(
    guides : List.List<Types.Guide>,
    pendingCount : Nat,
  ) : Types.AdminStats {
    let totalPublished = guides.filter(func(g : Types.Guide) : Bool { g.isPublished }).size();
    let recent = getFeatured(guides);
    { totalPublished; pendingContributions = pendingCount; recentGuides = recent };
  };

  // Seed the 5 sample guides into the stable-backed guides store.
  // Idempotent: only seeds on the very first deploy when stable memory is empty
  // (guides.size() == 0). On every subsequent upgrade/restart the guard short-
  // circuits and the already-persisted guides are loaded from stable memory
  // without re-seeding. The hardcoded text array remains in source as the one-
  // time first-init seed source; it is compiled into Wasm but only ever
  // instantiated on first deploy, so it does not contribute to runtime heap on
  // restarts.
  public func seedSampleGuides(
    guides : List.List<Types.Guide>,
    state : { var nextGuideId : Nat },
  ) : () {
    if (guides.size() > 0) return;
    let samples : [(Types.GuideInput, Types.AuthorType)] = [
      (
        {
          title = "Google Maps Optimization: The #1 Secret Most SMBs Miss";
          topic = #googleMaps;
          content = "Your Google Business Profile is indexed EVERY DAY. If your listing has not been updated recently, Google interprets this as inactivity and lowers your local search ranking.\n\n**1. Post Weekly Updates**\nAdd a Google Post at least once per week - promotions, events, or tips. This signals freshness to Google's algorithm.\n\n**2. Respond to Every Review Within 24 Hours**\nGoogle rewards engagement. Even a thank-you reply lifts your visibility.\n\n**3. Keep Your Hours and Services Accurate**\nOutdated information is penalised. If your hours change for a holiday, update them immediately.\n\n**4. Use Keywords in Your Business Description**\nInclude what you do and where you are. Google reads this for relevance.\n\n**5. Upload New Photos Every Month**\nListings with recent photos receive 35% more clicks. Show your shopfront, team, and products.\n\n**6. Add Products and Services**\nFill in every product and service you offer with descriptions and prices. These appear directly in search results.\n\nDeloitte Digital: Local SEO is now a core component of digital brand strategy for SMBs. Consistent NAP data (Name, Address, Phone) across all platforms directly correlates with higher map pack rankings.";
          authorName = "AISmallBiz Editorial Team";
          businessTypeTags = ["all", "deli", "salon", "retail", "restaurant", "consulting"];
          readTimeMinutes = 7;
          excerpt = "Most SMBs don't know their Google Maps listing is indexed daily - and penalised for inactivity. Here's how to stay at the top.";
          recommendedNext = [1, 3];
        },
        #admin,
      ),
      (
        {
          title = "Social Media Advertising: A Practical Playbook for Small Businesses";
          topic = #socialAds;
          content = "Social advertising does not require a big budget - it requires a smart strategy.\n\n**Choose the Right Platform for Your Business**\n- Facebook & Instagram: Best for B2C, local audiences, visual products\n- LinkedIn: Best for B2B, consulting, professional services\n- TikTok: Best for younger demographics, food, fashion, entertainment\n\n**Set Up Your Pixel First**\nBefore spending a dollar, install the Meta Pixel on your website. This allows retargeting and accurate ROI tracking.\n\n**Start with a Retargeting Campaign**\nTarget people who have already visited your website. Conversion rates are 3-5x higher than cold audiences.\n\n**The Creative Hierarchy**\n1. Video (15-30 seconds) - highest engagement\n2. Carousel - best for showcasing multiple products\n3. Single image - simplest, good for brand awareness\n\n**Budget Guidance**\nPWC recommends allocating 7-10% of revenue to marketing for growth-stage SMBs.\n\n**Measure What Matters**\nFocus on Cost Per Acquisition (CPA), not clicks or impressions.";
          authorName = "AISmallBiz Editorial Team";
          businessTypeTags = ["all", "retail", "restaurant", "salon"];
          readTimeMinutes = 8;
          excerpt = "A step-by-step social ads playbook for SMBs - from pixel setup to scaling winning campaigns.";
          recommendedNext = [3, 4];
        },
        #admin,
      ),
      (
        {
          title = "Writing a Business Plan: The Big Four Framework Approach";
          topic = #businessPlanning;
          content = "The world's top consulting firms - Deloitte, PwC, EY, and KPMG - use structured frameworks to evaluate business viability.\n\n**1. Executive Summary** (McKinsey Pyramid Principle)\nLead with your conclusion: what is the business, why will it succeed, what do you need?\n\n**2. Market Analysis** (Deloitte Market Sizing)\nDefine your TAM (Total Addressable Market), SAM (Serviceable Addressable Market), and SOM (Serviceable Obtainable Market).\n\n**3. Competitive Landscape** (PwC Porter's Five Forces)\nAnalyse: competitive rivalry, supplier power, buyer power, threat of substitution, threat of new entry.\n\n**4. Financial Projections** (EY Financial Modelling Standards)\nInclude 3-year P&L, cash flow statement, and break-even analysis. Use conservative, base, and optimistic scenarios.\n\n**5. Operations Plan** (KPMG Operational Excellence)\nDocument your supply chain, staffing plan, and key processes.\n\n**6. Risk Register**\nList top 5 risks with likelihood, impact, and mitigation strategy.";
          authorName = "AISmallBiz Editorial Team";
          businessTypeTags = ["all", "deli", "restaurant", "retail", "consulting"];
          readTimeMinutes = 10;
          excerpt = "Apply Deloitte, PwC, EY, and KPMG frameworks to write a business plan that stands up to professional scrutiny.";
          recommendedNext = [2, 4];
        },
        #admin,
      ),
      (
        {
          title = "Branding Fundamentals: How to Make Your Business Instantly Recognisable";
          topic = #branding;
          content = "Strong branding is not about a logo - it is about consistency and emotional connection.\n\n**Define Your Brand Identity**\n- Mission: Why do you exist?\n- Vision: Where are you going?\n- Values: What do you stand for?\n- Voice: How do you communicate? (Professional, Friendly, Bold, Calm?)\n\n**Visual Consistency**\nChoose 2-3 brand colours and stick to them. Use the same fonts across your website, signage, menus, and social media.\n\n**Appreciated Branding Techniques (EY Brand Equity Framework)**\n1. Authenticity - genuine stories outperform polished advertising\n2. Community - local involvement builds loyalty\n3. Social proof - showcase real customer outcomes\n4. Consistency - same message, same look, everywhere\n\n**Practical Steps This Week**\n1. Audit your current brand across all platforms\n2. Identify the top 3 inconsistencies\n3. Fix them before spending on new marketing";
          authorName = "AISmallBiz Editorial Team";
          businessTypeTags = ["all", "salon", "retail", "restaurant", "deli"];
          readTimeMinutes = 6;
          excerpt = "Branding is consistency and emotional connection. Here are the techniques that build lasting recognition for SMBs.";
          recommendedNext = [0, 1];
        },
        #admin,
      ),
      (
        {
          title = "Technology Upgrades Every SMB Should Consider in 2025";
          topic = #techUpgrades;
          content = "Technology is no longer optional - it is a competitive necessity.\n\n**1. Point of Sale (POS) System Upgrade**\nModern POS systems (Square, Lightspeed, Toast) include inventory management, customer loyalty programs, and sales analytics.\n\n**2. Customer Relationship Management (CRM)**\nEven a simple CRM (HubSpot Free, Zoho) ensures you never lose a customer lead.\n\n**3. Accounting Automation**\nXero or QuickBooks Online connect to your bank, auto-categorise transactions, and generate GST/VAT reports automatically - saving 5-10 hours per month.\n\n**4. Online Booking / Scheduling**\nIf you take appointments, tools like Calendly or Fresha eliminate phone tag and reduce no-shows by 30%.\n\n**5. Email Marketing Automation**\nMailchimp or Klaviyo for automated welcome sequences, abandoned cart recovery, and birthday campaigns.\n\n**6. AI-Powered Customer Service**\nA simple chatbot on your website handles FAQs 24/7, freeing your team for complex queries.\n\nDeloitte Digital research shows SMBs that adopt 3+ digital tools grow revenue 2.3x faster than those with 0-1 tools.";
          authorName = "AISmallBiz Editorial Team";
          businessTypeTags = ["all", "retail", "restaurant", "salon", "consulting"];
          readTimeMinutes = 8;
          excerpt = "The technology upgrades with the highest ROI for SMBs in 2025 - from POS systems to AI customer service.";
          recommendedNext = [1, 3];
        },
        #admin,
      ),
    ];
    for ((input, authorType) in samples.values()) {
      let g = createGuide(guides, state, input, authorType);
      ignore setPublished(guides, g.id, true);
    };
  };
};
