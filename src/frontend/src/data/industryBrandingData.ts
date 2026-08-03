export interface QAItem {
  id: string;
  question: string;
  answer: string;
}

export interface WorksheetField {
  id: string;
  label: string;
  placeholder: string;
}

export interface BusinessSizeStrategy {
  title: string;
  body: string;
  example: string;
}

export interface BusinessSizeTab {
  id: string;
  label: string;
  intro: string;
  items: BusinessSizeStrategy[];
}

export interface IndustryBrandingData {
  emoji: string;
  label: string;
  to: string;
  hash: string;
  principles: string[];
  color: string;
  bg: string;
  qa: QAItem[];
  worksheetFields: WorksheetField[];
  voiceOptions: string[];
  businessSizeTabs: BusinessSizeTab[];
}

const DELI_QA: QAItem[] = [
  {
    id: "deli-qa-1",
    question: "How do I make my deli memorable without a big marketing budget?",
    answer:
      "Focus on sensory branding: the smell of fresh bread, the sound of sizzling grills, and the warmth of knowing customers by name. Document your origin story: why you opened, where your recipes come from: and share it on social media. A deli that feels like home does not need billboards.",
  },
  {
    id: "deli-qa-2",
    question: "What makes a deli brand 'appreciated' rather than just known?",
    answer:
      "Appreciation comes from consistency and care. Remember regulars' orders, ask about their families, and show up for the community during tough times. When customers feel seen, they become ambassadors who bring friends.",
  },
  {
    id: "deli-qa-3",
    question: "How do I compete with chain sandwich shops?",
    answer:
      "Chains cannot replicate your personality. Highlight what they cannot offer: family recipes, local sourcing, custom orders, and genuine conversation. Your 'imperfections' are your superpower: lean into them.",
  },
];

const SALON_QA: QAItem[] = [
  {
    id: "salon-qa-1",
    question: "How do I build trust with new clients?",
    answer:
      "Before/after storytelling is your most powerful tool. With permission, share transformation stories that show your skill and care. Let clients see the journey, not just the result. Trust builds when people see you understand their vision.",
  },
  {
    id: "salon-qa-2",
    question: "What turns a one-time visitor into a loyal regular?",
    answer:
      "Celebrate client milestones: birthdays, anniversaries, new jobs. Send a handwritten note after a big transformation. Make every visit feel like catching up with a friend who happens to be incredibly talented.",
  },
  {
    id: "salon-qa-3",
    question: "How do I price my services to reflect my brand?",
    answer:
      "Price communicates value. If you position as a luxury experience, your space, products, and consultation process must match. If you are community-focused, offer accessible pricing with transparent add-ons. Consistency between price and experience is what builds appreciation.",
  },
];

const RESTAURANT_QA: QAItem[] = [
  {
    id: "restaurant-qa-1",
    question: "Is the chef's story really that important for branding?",
    answer:
      "Absolutely. In 2026, diners choose restaurants based on connection, not just cuisine. Your journey: why you cook, what you overcame, what your grandmother taught you: is the emotional hook that turns a meal into an experience.",
  },
  {
    id: "restaurant-qa-2",
    question: "How do I create 'ritual' in my restaurant?",
    answer:
      "Ritual is predictable delight. It could be the bread service, the way you greet regulars, or a signature amuse-bouche. The key is consistency: every guest experiences the same thoughtful touch, creating anticipation before they even arrive.",
  },
  {
    id: "restaurant-qa-3",
    question: "What should I do when a customer has a bad experience?",
    answer:
      "Recoveries are branding gold. Acknowledge immediately, apologize sincerely, and over-correct. A guest who had a problem that was beautifully resolved tells more people than a guest who had an ordinary good meal.",
  },
];

const POOL_HALL_QA: QAItem[] = [
  {
    id: "pool-qa-1",
    question: "How do I make a pool hall feel welcoming to everyone?",
    answer:
      "Start with atmosphere: good lighting, clean tables, and music that does not dominate conversation. Train staff to greet newcomers warmly and offer a quick rules refresher. A pool hall that feels like a living room builds community faster than one that feels like a tournament venue.",
  },
  {
    id: "pool-qa-2",
    question: "Can leagues and tournaments really build my brand?",
    answer:
      "Yes: they create belonging. When players wear your hall's shirt, post about league night, and bring friends to watch, they are marketing for you. The key is making leagues accessible to all skill levels, not just sharks.",
  },
  {
    id: "pool-qa-3",
    question: "How do I attract people who have never played pool?",
    answer:
      "Host 'Learn to Play' nights with free mini-lessons. Partner with local businesses for team-building events. Position pool as social connection, not competition. First-timers who feel welcomed become regulars.",
  },
];

const RETAIL_QA: QAItem[] = [
  {
    id: "retail-qa-1",
    question: "How do I compete with online shopping?",
    answer:
      "You cannot beat Amazon on price or selection. What you can offer is curation, discovery, and human connection. A customer who walks in stressed and leaves with the perfect gift: plus a story about why it is perfect: got something no algorithm can deliver.",
  },
  {
    id: "retail-qa-2",
    question: "What makes a retail experience 'insider' feeling?",
    answer:
      "Remember preferences, offer first looks at new arrivals, and create moments of surprise. A handwritten thank-you in the bag, a small sample of something new, or a text when an item they have been watching goes on sale: these micro-moments build fierce loyalty.",
  },
  {
    id: "retail-qa-3",
    question: "How do I train staff to embody my brand?",
    answer:
      "Hire for empathy, train for product knowledge. Give staff autonomy to solve problems and delight customers. When employees feel trusted, they naturally extend that trust to customers. Your brand lives in every interaction.",
  },
];

const FITNESS_QA: QAItem[] = [
  {
    id: "fitness-qa-1",
    question: "How do I build a fitness 'tribe' instead of just a gym?",
    answer:
      "Celebrate member milestones publicly: first pull-up, 100th class, consistency streaks. Create inside jokes, traditions, and shared challenges. When members feel they are part of something bigger than a workout, they do not just renew: they recruit.",
  },
  {
    id: "fitness-qa-2",
    question: "What is the best way to welcome beginners?",
    answer:
      "Pair every new member with a 'buddy' for their first two weeks. Offer a private orientation that covers equipment, etiquette, and how to modify any workout. Beginners who feel competent on day one stay for years.",
  },
  {
    id: "fitness-qa-3",
    question: "How do I handle member churn?",
    answer:
      "Reach out personally before they quit. A simple 'Have not seen you: everything okay?' text can re-engage someone who was about to ghost. For those who do leave, make the exit graceful: 'The door is always open.' They often return.",
  },
];

const BAKERY_QA: QAItem[] = [
  {
    id: "bakery-qa-1",
    question: "How do I make my bakery stand out in a crowded market?",
    answer:
      "Your aroma and warmth are your brand. Invest in open-kitchen design so customers see the craft. Share the story of your flour source, your early-morning routine, and the recipe that started it all. People buy from bakers they feel they know.",
  },
  {
    id: "bakery-qa-2",
    question: "Does local sourcing really matter for branding?",
    answer:
      "In 2026, provenance is trust. When customers know your berries come from the farm down the road and your honey from the neighborhood beekeeper, they are not just buying a croissant: they are supporting a local ecosystem.",
  },
  {
    id: "bakery-qa-3",
    question: "How do I turn occasional visitors into daily regulars?",
    answer:
      "Create rituals: a signature morning pastry that is only available until 9am, a loyalty card that rewards consistency, and staff who remember names and orders. The bakery that feels like a morning habit becomes indispensable.",
  },
];

const CLEANING_QA: QAItem[] = [
  {
    id: "cleaning-qa-1",
    question: "How do I build trust when customers cannot see my work?",
    answer:
      "Document everything: before/after photos, checklists signed by clients, and video walkthroughs. Transparency is your brand. When customers see the care you put into corners they never check, trust becomes unshakeable.",
  },
  {
    id: "cleaning-qa-2",
    question: "What makes a cleaning service 'appreciated'?",
    answer:
      "Reliability and the little extras: folding towels into swans, leaving a fresh flower, or a note saying 'Have a great week.' These touches cost nothing and create the emotional connection that turns a transaction into a relationship.",
  },
  {
    id: "cleaning-qa-3",
    question: "How do I handle a complaint about missed spots?",
    answer:
      "Apologize immediately, return to fix it at no charge, and add a complimentary deep-clean of one extra area. A complaint handled with grace creates a more loyal customer than one who never had an issue.",
  },
];

const BOUTIQUE_QA: QAItem[] = [
  {
    id: "boutique-qa-1",
    question: "How does curation become a brand story?",
    answer:
      "Every item in your boutique should have a reason for being there. Share why you chose each piece, the designer's story, or how you discovered the collection. Curation with narrative turns shopping into discovery.",
  },
  {
    id: "boutique-qa-2",
    question: "Can personal styling really drive loyalty?",
    answer:
      "Absolutely. When you remember a client's preferences, send a text when something perfect arrives, and offer private styling sessions, you are not selling clothes: you are building a wardrobe partnership. Loyalty follows naturally.",
  },
  {
    id: "boutique-qa-3",
    question:
      "How do I create an in-store experience that online cannot match?",
    answer:
      "Design your space as a destination: complimentary champagne on weekends, a beautiful fitting room with perfect lighting, and staff who offer honest styling advice. The experience of feeling seen and styled is irreplaceable.",
  },
];

const DELI_WORKSHEET: WorksheetField[] = [
  {
    id: "deli-ws-1",
    label: "My deli exists because...",
    placeholder:
      "e.g. I grew up in my grandmother's kitchen and wanted to share her recipes with the neighborhood...",
  },
  {
    id: "deli-ws-2",
    label: "The problem I solve for my customers is...",
    placeholder:
      "e.g. busy professionals need fresh, affordable meals that feel like home cooking...",
  },
  {
    id: "deli-ws-3",
    label: "My deli values are (pick 3)...",
    placeholder: "e.g. Freshness, Community, Generosity",
  },
  {
    id: "deli-ws-4",
    label: "My ideal customer is...",
    placeholder:
      "e.g. a working parent who wants quality food without the time to cook...",
  },
];

const SALON_WORKSHEET: WorksheetField[] = [
  {
    id: "salon-ws-1",
    label: "My salon exists because...",
    placeholder:
      "e.g. I believe everyone deserves to feel confident when they look in the mirror...",
  },
  {
    id: "salon-ws-2",
    label: "The problem I solve for my clients is...",
    placeholder:
      "e.g. clients want a stylist who listens and delivers consistent results every visit...",
  },
  {
    id: "salon-ws-3",
    label: "My salon values are (pick 3)...",
    placeholder: "e.g. Creativity, Trust, Empowerment",
  },
  {
    id: "salon-ws-4",
    label: "My ideal client is...",
    placeholder:
      "e.g. someone who sees their hair as self-expression and values a genuine relationship with their stylist...",
  },
];

const RESTAURANT_WORKSHEET: WorksheetField[] = [
  {
    id: "restaurant-ws-1",
    label: "My restaurant exists because...",
    placeholder:
      "e.g. I traveled through Italy and realized my hometown had no place for slow, intentional dining...",
  },
  {
    id: "restaurant-ws-2",
    label: "The problem I solve for my guests is...",
    placeholder:
      "e.g. people want a dining experience that feels special without being pretentious...",
  },
  {
    id: "restaurant-ws-3",
    label: "My restaurant values are (pick 3)...",
    placeholder: "e.g. Hospitality, Craft, Community",
  },
  {
    id: "restaurant-ws-4",
    label: "My ideal guest is...",
    placeholder:
      "e.g. a couple celebrating their anniversary who wants to feel like the only table in the room...",
  },
];

const POOL_HALL_WORKSHEET: WorksheetField[] = [
  {
    id: "pool-ws-1",
    label: "My pool hall exists because...",
    placeholder:
      "e.g. I wanted to create a space where people put down their phones and actually talk to each other...",
  },
  {
    id: "pool-ws-2",
    label: "The problem I solve for my players is...",
    placeholder:
      "e.g. adults need affordable, social entertainment that does not require a reservation weeks ahead...",
  },
  {
    id: "pool-ws-3",
    label: "My pool hall values are (pick 3)...",
    placeholder: "e.g. Community, Fair Play, Inclusivity",
  },
  {
    id: "pool-ws-4",
    label: "My ideal player is...",
    placeholder:
      "e.g. a group of coworkers looking for a relaxed after-work hangout...",
  },
];

const RETAIL_WORKSHEET: WorksheetField[] = [
  {
    id: "retail-ws-1",
    label: "My store exists because...",
    placeholder:
      "e.g. I could not find quality, affordable home goods that were not mass-produced...",
  },
  {
    id: "retail-ws-2",
    label: "The problem I solve for my customers is...",
    placeholder:
      "e.g. shoppers want curated, unique items without the overwhelm of big-box stores...",
  },
  {
    id: "retail-ws-3",
    label: "My store values are (pick 3)...",
    placeholder: "e.g. Curation, Sustainability, Discovery",
  },
  {
    id: "retail-ws-4",
    label: "My ideal customer is...",
    placeholder:
      "e.g. a new homeowner who wants their space to reflect their personality, not a catalog...",
  },
];

const FITNESS_WORKSHEET: WorksheetField[] = [
  {
    id: "fitness-ws-1",
    label: "My studio exists because...",
    placeholder:
      "e.g. I was intimidated by big gyms and wanted a supportive space for real people...",
  },
  {
    id: "fitness-ws-2",
    label: "The problem I solve for my members is...",
    placeholder:
      "e.g. people want accountability and community, not just equipment access...",
  },
  {
    id: "fitness-ws-3",
    label: "My studio values are (pick 3)...",
    placeholder: "e.g. Inclusivity, Progress, Joy",
  },
  {
    id: "fitness-ws-4",
    label: "My ideal member is...",
    placeholder:
      "e.g. someone who has tried gyms before but never felt like they belonged...",
  },
];

const BAKERY_WORKSHEET: WorksheetField[] = [
  {
    id: "bakery-ws-1",
    label: "My bakery exists because...",
    placeholder:
      "e.g. I believe mornings should start with something made by hand, not a factory...",
  },
  {
    id: "bakery-ws-2",
    label: "The problem I solve for my customers is...",
    placeholder:
      "e.g. people want fresh, local baked goods that remind them of simpler times...",
  },
  {
    id: "bakery-ws-3",
    label: "My bakery values are (pick 3)...",
    placeholder: "e.g. Craft, Warmth, Local",
  },
  {
    id: "bakery-ws-4",
    label: "My ideal customer is...",
    placeholder:
      "e.g. a neighbor who stops in every morning for coffee and conversation...",
  },
];

const CLEANING_WORKSHEET: WorksheetField[] = [
  {
    id: "cleaning-ws-1",
    label: "My cleaning service exists because...",
    placeholder:
      "e.g. I saw how stressed busy families were and knew I could give them back their weekends...",
  },
  {
    id: "cleaning-ws-2",
    label: "The problem I solve for my clients is...",
    placeholder:
      "e.g. families want a clean home without sacrificing their limited free time...",
  },
  {
    id: "cleaning-ws-3",
    label: "My service values are (pick 3)...",
    placeholder: "e.g. Trust, Thoroughness, Care",
  },
  {
    id: "cleaning-ws-4",
    label: "My ideal client is...",
    placeholder:
      "e.g. a working parent who wants to come home to a clean, calm space...",
  },
];

const BOUTIQUE_WORKSHEET: WorksheetField[] = [
  {
    id: "boutique-ws-1",
    label: "My boutique exists because...",
    placeholder:
      "e.g. I wanted to create a space where style is personal, not dictated by trends...",
  },
  {
    id: "boutique-ws-2",
    label: "The problem I solve for my customers is...",
    placeholder:
      "e.g. women want to feel confident in their clothes but are tired of fast fashion...",
  },
  {
    id: "boutique-ws-3",
    label: "My boutique values are (pick 3)...",
    placeholder: "e.g. Individuality, Quality, Connection",
  },
  {
    id: "boutique-ws-4",
    label: "My ideal customer is...",
    placeholder:
      "e.g. a professional woman who wants her wardrobe to reflect her personality and values...",
  },
];

const DELI_TABS: BusinessSizeTab[] = [
  {
    id: "micro",
    label: "Micro",
    intro:
      "A one-person deli or small counter. Your brand is you: every interaction is personal.",
    items: [
      {
        title: "Know Every Regular",
        body: "With a small customer base, you can know names, orders, and stories. This intimacy is your competitive advantage.",
        example:
          "Maria's Deli greets every customer by name and has their usual order started before they reach the counter.",
      },
      {
        title: "Share Your Origin Story",
        body: "Your personal journey is the brand. Post photos of your prep process, your family recipes, and your early mornings.",
        example:
          "Tony posts a 6am video of fresh bread coming out of the oven with the caption 'This is why we open early.'",
      },
      {
        title: "Community Presence",
        body: "Sponsor a Little League team, donate sandwiches to the fire station, or host a free tasting for neighbors.",
        example:
          "Every Friday, Deli Corner provides free lunch to the local senior center: and the community talks about it all week.",
      },
    ],
  },
  {
    id: "small",
    label: "Small",
    intro:
      "A deli with 2-5 employees. You are scaling personal connection while adding systems.",
    items: [
      {
        title: "Train Staff in Your Voice",
        body: "Create a simple 'deli culture' guide: how to greet, how to remember names, how to handle complaints. Your brand lives in every employee.",
        example:
          "The Deli House has a 'Three Questions' rule: staff must ask about the customer's day, their family, and their weekend plans.",
      },
      {
        title: "Loyalty with Personality",
        body: "A punch card is fine, but a 'Sandwich of the Month' named after a regular is memorable.",
        example:
          "The 'Mike Special': named after a customer who orders the same thing every day: became the deli's best-selling item.",
      },
      {
        title: "Local Partnerships",
        body: "Partner with nearby businesses for cross-promotion. A coffee shop down the street can send customers your way.",
        example:
          "Deli & Co. partners with the local bookstore: show a receipt from one, get 10% off at the other.",
      },
    ],
  },
  {
    id: "medium",
    label: "Medium",
    intro:
      "Multiple locations or a larger space. Maintain the personal touch while professionalizing operations.",
    items: [
      {
        title: "Empower Location Managers",
        body: "Each location should feel like its own neighborhood deli, not a franchise clone. Let managers adapt the menu and events to their community.",
        example:
          "Deli Chain East Village hosts poetry readings; Deli Chain Williamsburg hosts live jazz. Same brand, different soul.",
      },
      {
        title: "Technology for Personalization",
        body: "Use a POS system that tracks preferences so any staff member can greet a regular knowledgeably.",
        example:
          "When a regular walks in, the system alerts staff: 'Sarah: turkey on rye, no mustard, extra pickles.'",
      },
      {
        title: "Community Investment at Scale",
        body: "Create a 'Deli Foundation' that supports local causes across all locations.",
        example:
          "The Deli Group donates 1% of revenue to local food banks and invites customers to volunteer alongside staff.",
      },
    ],
  },
  {
    id: "large",
    label: "Large",
    intro:
      "A regional or national deli brand. Humanize the scale with stories and local presence.",
    items: [
      {
        title: "Humanize the Brand",
        body: "Feature real employees and customers in national campaigns. Show the people behind the counter, not stock photos.",
        example:
          "National Deli's 'Faces of the Deli' campaign profiles sandwich artists from every state, building connection at scale.",
      },
      {
        title: "Localize the Menu",
        body: "Offer regional specialties that reflect local tastes and ingredients. A national brand can still feel local.",
        example:
          "In Texas, the menu features brisket sandwiches; in Maine, lobster rolls. Same brand, local flavor.",
      },
      {
        title: "Employee Advocacy",
        body: "Encourage employees to share their stories on social media. Authentic employee voices are more trusted than corporate messaging.",
        example:
          "National Deli's #MyDeliStory campaign lets employees share why they love their job: and customers respond.",
      },
    ],
  },
];

const SALON_TABS: BusinessSizeTab[] = [
  {
    id: "micro",
    label: "Micro",
    intro:
      "A solo stylist or chair renter. Your brand is your artistry and your relationships.",
    items: [
      {
        title: "Portfolio as Brand",
        body: "Every transformation is content. With permission, document the journey and share it. Your work is your billboard.",
        example:
          "Solo stylist Jamie posts before/after stories for every client, building a following of 10k+ in her city.",
      },
      {
        title: "The Consultation Ritual",
        body: "Spend 15 minutes understanding the client's life, not just their hair. The consultation is where trust is built.",
        example:
          "Alexa starts every appointment with 'Tell me about your week': and clients say it is their favorite part.",
      },
      {
        title: "Follow-Up Care",
        body: "Text clients a week after their appointment to check in. Small gestures create fierce loyalty.",
        example:
          "Mia texts every client: 'How are you loving your new color? Let me know if you need any tips!'",
      },
    ],
  },
  {
    id: "small",
    label: "Small",
    intro:
      "A salon with 3-8 stylists. Build a collective brand while celebrating individual artistry.",
    items: [
      {
        title: "Stylist Spotlights",
        body: "Feature each stylist's specialty and personality. Clients should feel they are choosing an artist, not a time slot.",
        example:
          "The salon website has a 'Meet Our Artists' page where each stylist shares their inspiration and favorite techniques.",
      },
      {
        title: "Client Milestone Program",
        body: "Celebrate client anniversaries, referral milestones, and personal achievements with small gifts or shoutouts.",
        example:
          "After a client's 10th visit, they receive a complimentary deep conditioning treatment and a handwritten thank-you.",
      },
      {
        title: "Community Events",
        body: "Host styling workshops, product education nights, or charity cut-a-thons. Events turn clients into community.",
        example:
          "The salon hosts monthly 'Wine & Style' nights where clients learn quick styling tips over drinks.",
      },
    ],
  },
  {
    id: "medium",
    label: "Medium",
    intro:
      "Multiple locations or a large salon. Scale the personal touch through systems and culture.",
    items: [
      {
        title: "Brand Standards with Soul",
        body: "Create service standards that feel personal, not scripted. 'Greet by name' is a standard; the warmth is culture.",
        example:
          "Every location has a 'Wall of Regulars' with photos and fun facts so new staff can learn the community quickly.",
      },
      {
        title: "Technology for Connection",
        body: "Use booking software that remembers preferences, sends personalized product recommendations, and tracks client history.",
        example:
          "The app suggests 'Your last color lasted 8 weeks: ready for a refresh?' at just the right time.",
      },
      {
        title: "Stylist Development",
        body: "Invest in continuing education and celebrate stylist growth. A salon that invests in its people attracts clients who value quality.",
        example:
          "The salon sponsors one stylist per quarter to attend a national conference: and clients love hearing about it.",
      },
    ],
  },
  {
    id: "large",
    label: "Large",
    intro:
      "A regional or national salon chain. Maintain intimacy through local leadership and authentic storytelling.",
    items: [
      {
        title: "Localize Leadership",
        body: "Hire local managers who understand the community and can adapt the brand to local tastes and trends.",
        example:
          "Each region has a 'Style Director' who curates looks based on local fashion and climate.",
      },
      {
        title: "Customer Stories at Scale",
        body: "Collect and share real customer transformation stories across all channels. Authenticity scales when it is real.",
        example:
          "The 'Real Women, Real Styles' campaign features unretouched photos and genuine testimonials from everyday clients.",
      },
      {
        title: "Employee Voices",
        body: "Let stylists speak directly to customers through social media, not corporate marketing. Employee advocacy builds trust.",
        example:
          "Stylists run their own Instagram accounts under the salon umbrella, sharing their unique style and personality.",
      },
    ],
  },
];

const RESTAURANT_TABS: BusinessSizeTab[] = [
  {
    id: "micro",
    label: "Micro",
    intro:
      "A food truck, pop-up, or tiny kitchen. Your brand is your passion and your presence.",
    items: [
      {
        title: "Chef as Brand",
        body: "You are the face of the food. Share your story, your process, and your failures. Vulnerability builds connection.",
        example:
          "Chef Lena posts Instagram stories of burnt dishes with captions like 'Lesson learned: tomorrow we try again.'",
      },
      {
        title: "Regulars as Family",
        body: "In a small operation, regulars are everything. Remember their names, their orders, and their stories.",
        example:
          "The food truck has a 'Regulars Board' where the 20 most frequent customers get a free meal on their birthday.",
      },
      {
        title: "Pop-Up Partnerships",
        body: "Collaborate with breweries, markets, and events to expand your reach without expanding your overhead.",
        example:
          "The taco truck partners with a local brewery every Thursday: 'Tacos & Taps' night draws crowds.",
      },
    ],
  },
  {
    id: "small",
    label: "Small",
    intro:
      "A single restaurant with 10-30 seats. Your brand lives in every detail of the experience.",
    items: [
      {
        title: "The Welcome Ritual",
        body: "Create a signature greeting or gesture that every guest receives. Rituals create anticipation and memory.",
        example:
          "Every guest receives a small amuse-bouche and a personal greeting from the chef: 'Welcome to our table.'",
      },
      {
        title: "Story-Driven Menu",
        body: "Every dish should have a story: the farmer who grew the tomatoes, the grandmother who inspired the recipe, the trip that sparked the idea.",
        example:
          "The menu does not just list ingredients: it tells the story of each dish in 2-3 sentences.",
      },
      {
        title: "Staff as Storytellers",
        body: "Train servers to share the stories behind the food. When staff believe in the narrative, guests feel it.",
        example:
          "Servers are trained to share one personal story about a dish they love, making every table feel special.",
      },
    ],
  },
  {
    id: "medium",
    label: "Medium",
    intro:
      "Multiple locations or a larger restaurant. Scale the experience without losing the soul.",
    items: [
      {
        title: "Experience Standards",
        body: "Document what makes your restaurant special: the greeting, the pacing, the farewell: and train every location to deliver it.",
        example:
          "The '5-Moment Standard' ensures every guest experiences a welcome, a story, a check-in, a dessert offer, and a farewell.",
      },
      {
        title: "Local Sourcing Stories",
        body: "Even at scale, highlight local suppliers. A 'Meet Your Farmer' series on social media humanizes the supply chain.",
        example:
          "Each location features a different local supplier each month, with photos and interviews on Instagram.",
      },
      {
        title: "Community Tables",
        body: "Design spaces that encourage connection. Community tables and shared plates turn dining into social experience.",
        example:
          "The 'Stranger Table': a communal table where solo diners are encouraged to sit together: became a local legend.",
      },
    ],
  },
  {
    id: "large",
    label: "Large",
    intro:
      "A regional or national restaurant group. Humanize scale through local stories and employee advocacy.",
    items: [
      {
        title: "Chef Stories at Scale",
        body: "Feature individual chefs and their journeys across all locations. Every kitchen has a story worth telling.",
        example:
          "The 'Chef's Table' video series profiles head chefs from each location, sharing their personal culinary journeys.",
      },
      {
        title: "Local Menu Adaptation",
        body: "Allow each location to adapt 20% of the menu to local tastes and ingredients. National consistency, local soul.",
        example:
          "The Miami location features Cuban-inspired dishes; the Seattle location highlights Pacific Northwest seafood.",
      },
      {
        title: "Employee Recognition",
        body: "Create national recognition programs that celebrate exceptional service. Employees who feel valued deliver value.",
        example:
          "The 'Heart of the House' award recognizes one employee per month per location, with a bonus and company-wide shoutout.",
      },
    ],
  },
];

const POOL_HALL_TABS: BusinessSizeTab[] = [
  {
    id: "micro",
    label: "Micro",
    intro:
      "A small pool room or bar with a few tables. Your brand is atmosphere and regulars.",
    items: [
      {
        title: "The Regulars' Wall",
        body: "Celebrate your most loyal players. A photo wall or a 'Hall of Fame' board makes regulars feel like legends.",
        example:
          "The back wall features framed photos of league champions going back 20 years: new players dream of making it.",
      },
      {
        title: "Atmosphere First",
        body: "Lighting, music, and cleanliness matter more than table count. A welcoming vibe attracts players who stay for hours.",
        example:
          "The hall dims lights at 8pm, switches to jazz, and offers half-price wings: 'Evening Mood' is a local tradition.",
      },
      {
        title: "Learn-to-Play Nights",
        body: "Host free beginner nights with patient instructors. New players who feel welcomed become regulars.",
        example:
          "Every Tuesday is 'Rookie Night': free lessons, discounted tables, and experienced players volunteer to mentor.",
      },
    ],
  },
  {
    id: "small",
    label: "Small",
    intro:
      "A dedicated pool hall with 8-15 tables. Build community through leagues and events.",
    items: [
      {
        title: "League Culture",
        body: "Create leagues for all skill levels, not just sharks. Inclusive leagues build a bigger, more loyal community.",
        example:
          "The hall runs four leagues: Beginner, Intermediate, Advanced, and 'Just for Fun': the 'Just for Fun' league is the biggest.",
      },
      {
        title: "Event Programming",
        body: "Host tournaments, themed nights, and charity events. A hall with a calendar feels like a community center.",
        example:
          "Monthly 'Battle of the Bars' pits local business teams against each other for charity: and the hall is packed.",
      },
      {
        title: "Food & Beverage Story",
        body: "Your menu should reflect your brand. Local beers, named cocktails after pool legends, and comfort food create identity.",
        example:
          "The 'Eight-Ball Burger' and 'Break Shot IPA' are local favorites that customers order by name at other bars.",
      },
    ],
  },
  {
    id: "medium",
    label: "Medium",
    intro:
      "A larger hall or multiple locations. Scale community while maintaining the neighborhood feel.",
    items: [
      {
        title: "Location Identity",
        body: "Each location should have its own personality while sharing core values. One might be family-friendly; another, late-night competitive.",
        example:
          "The downtown location hosts corporate events; the suburban location is known for family leagues and birthday parties.",
      },
      {
        title: "Technology for Engagement",
        body: "Use apps for league standings, table reservations, and social features. Tech should enhance connection, not replace it.",
        example:
          "The hall's app lets players challenge each other, track stats, and book tables: but the real magic is the post-game handshake.",
      },
      {
        title: "Youth Programs",
        body: "Invest in junior leagues and scholarship programs. Youth players become adult regulars, and parents become advocates.",
        example:
          "The 'Future Sharks' junior league offers free coaching and a scholarship for the most improved player each year.",
      },
    ],
  },
  {
    id: "large",
    label: "Large",
    intro:
      "A regional or national pool hall chain. Maintain the local feel through empowered managers and community investment.",
    items: [
      {
        title: "Manager Autonomy",
        body: "Let local managers program events, choose music, and adapt the space to their community. National brand, local soul.",
        example:
          "Each location's manager curates the event calendar, from 'Ladies Night' to 'Seniors Morning' based on their community.",
      },
      {
        title: "National Tournaments, Local Stories",
        body: "Host national tournaments but feature local players and stories in the marketing. Scale with authenticity.",
        example:
          "The national championship livestream includes profiles of local qualifiers, turning viewers into fans of individual players.",
      },
      {
        title: "Community Investment",
        body: "Create a foundation that supports local youth programs, veterans' groups, and community centers through each location.",
        example:
          "Every location donates 5% of league fees to a local charity chosen by the players themselves.",
      },
    ],
  },
];

const RETAIL_TABS: BusinessSizeTab[] = [
  {
    id: "micro",
    label: "Micro",
    intro:
      "A solo shopkeeper or market stall. Your brand is your taste and your relationships.",
    items: [
      {
        title: "Curator as Brand",
        body: "Every item you stock is a statement about your taste. Share why you chose each piece: the story is the sell.",
        example:
          "The shopkeeper writes handwritten tags for every item: 'Found this at a estate sale in Vermont. The craftsmanship is unreal.'",
      },
      {
        title: "The Personal Touch",
        body: "Wrap purchases beautifully, include a handwritten note, and remember what customers bought last time.",
        example:
          "Every purchase comes wrapped in brown paper with a sprig of lavender and a note: 'Thank you for supporting local.'",
      },
      {
        title: "Social Proof",
        body: "Encourage customers to share photos of their purchases. User-generated content is more powerful than any ad.",
        example:
          "The shop reposts every customer photo with a thank-you, building a community of brand ambassadors.",
      },
    ],
  },
  {
    id: "small",
    label: "Small",
    intro:
      "A boutique with 2-5 employees. Scale personal service through systems and staff empowerment.",
    items: [
      {
        title: "Staff as Curators",
        body: "Let each staff member curate a 'staff pick' section. When employees feel ownership, they sell with passion.",
        example:
          "Each employee has a 'My Current Obsession' shelf that changes monthly: customers come specifically to see what is new.",
      },
      {
        title: "Loyalty with Surprise",
        body: "Beyond points, surprise loyal customers with exclusive access, early looks, and personal invitations.",
        example:
          "Top 20 customers get a private shopping hour before the holiday rush: with champagne and first pick of new arrivals.",
      },
      {
        title: "In-Store Experience",
        body: "Design your space as a destination. Comfortable seating, good lighting, and ambient music make shopping an event.",
        example:
          "The store has a 'reading nook' with complimentary coffee: customers linger longer and buy more.",
      },
    ],
  },
  {
    id: "medium",
    label: "Medium",
    intro:
      "Multiple locations or a larger store. Maintain curation while adding operational efficiency.",
    items: [
      {
        title: "Localized Curation",
        body: "Each location should reflect its neighborhood. What sells in Brooklyn might not work in Boulder.",
        example:
          "The Austin location stocks more local artisan goods; the Boston location leans into preppy, heritage brands.",
      },
      {
        title: "Technology for Personalization",
        body: "Use CRM to track preferences and purchase history. A customer who feels known spends more.",
        example:
          "When a regular browses online, the site highlights new arrivals in their favorite categories and sizes.",
      },
      {
        title: "Community Events",
        body: "Host workshops, trunk shows, and maker meetups. A store that hosts community becomes community.",
        example:
          "Monthly 'Maker Nights' feature local artisans demonstrating their craft: and sales of featured items spike 40%.",
      },
    ],
  },
  {
    id: "large",
    label: "Large",
    intro:
      "A regional or national retail brand. Humanize scale through local stories and employee voices.",
    items: [
      {
        title: "Local Stories, National Platform",
        body: "Use your national reach to amplify local stories. Feature neighborhood suppliers, local employees, and community impact.",
        example:
          "The 'Hometown Heroes' campaign profiles employees and suppliers from every state, building connection at scale.",
      },
      {
        title: "Employee Advocacy",
        body: "Encourage employees to share their favorite products and styling tips on social media. Authentic voices build trust.",
        example:
          "Store associates run 'Style Sessions' on Instagram Live, sharing how they wear the brand: and viewers shop while watching.",
      },
      {
        title: "Sustainability as Brand",
        body: "At scale, sustainability commitments matter. Transparent supply chains and eco-initiatives attract values-driven consumers.",
        example:
          "The 'From Farm to Rack' program traces every garment's journey, with QR codes in stores showing the full story.",
      },
    ],
  },
];

const FITNESS_TABS: BusinessSizeTab[] = [
  {
    id: "micro",
    label: "Micro",
    intro:
      "A solo trainer or tiny studio. Your brand is your energy and your results.",
    items: [
      {
        title: "Results as Marketing",
        body: "Document client transformations with permission. Before/after photos and testimonials are your most powerful ads.",
        example:
          "Trainer Jordan posts weekly 'Transformation Tuesday' stories featuring clients who hit milestones: no paid ads needed.",
      },
      {
        title: "The Personal Check-In",
        body: "Text clients on rest days, not just workout days. Care between sessions builds relationships that last.",
        example:
          "Every Sunday, Alex sends a 'Week Ahead' text with workout tips and a motivational quote: clients say it is their favorite message.",
      },
      {
        title: "Community Over Competition",
        body: "Create a private group for clients to share wins, ask questions, and support each other. The tribe trains together.",
        example:
          "The '6am Crew' WhatsApp group celebrates every personal best, creating accountability and belonging.",
      },
    ],
  },
  {
    id: "small",
    label: "Small",
    intro:
      "A studio with 2-10 instructors. Build a collective brand while celebrating individual coaching styles.",
    items: [
      {
        title: "Instructor Spotlights",
        body: "Feature each instructor's specialty and personality. Clients should feel they are choosing a coach, not a class time.",
        example:
          "The studio website has video intros where each instructor shares their fitness philosophy and favorite workout playlist.",
      },
      {
        title: "Milestone Celebrations",
        body: "Celebrate member achievements publicly: first pull-up, 100th class, consistency streaks. Recognition builds retention.",
        example:
          "The 'Wall of Fame' features member milestones with photos and quotes: new members dream of making it.",
      },
      {
        title: "Community Challenges",
        body: "Host monthly challenges that bring members together. Shared goals create shared identity.",
        example:
          "The '30-Day Plank Challenge' had 80% participation: members posted daily updates and cheered each other on.",
      },
    ],
  },
  {
    id: "medium",
    label: "Medium",
    intro:
      "Multiple locations or a larger gym. Scale community through technology and culture.",
    items: [
      {
        title: "Technology for Connection",
        body: "Use apps for workout tracking, social features, and personalized programming. Tech should enhance community, not replace it.",
        example:
          "The app shows a leaderboard for friendly competition and suggests workout partners with similar schedules.",
      },
      {
        title: "Culture Standards",
        body: "Document and train the behaviors that make your gym special: how to greet, how to encourage, how to celebrate.",
        example:
          "The 'High-Five Rule': every staff member must high-five at least 5 members per shift: became a beloved tradition.",
      },
      {
        title: "Specialized Programming",
        body: "Offer programs for specific goals and populations. A gym that serves everyone deeply beats one that serves everyone shallowly.",
        example:
          "The 'New Mom Strong' program offers childcare, modified workouts, and a supportive community: retention is 95%.",
      },
    ],
  },
  {
    id: "large",
    label: "Large",
    intro:
      "A regional or national fitness brand. Humanize scale through local stories and member advocacy.",
    items: [
      {
        title: "Localize the Experience",
        body: "Each location should feel like its own community, not a franchise clone. Local managers should know members by name.",
        example:
          "The 'Home Gym' initiative lets each location customize 30% of classes and events to local preferences.",
      },
      {
        title: "Member Stories at Scale",
        body: "Collect and share real member transformation stories across all channels. Authenticity is your competitive advantage.",
        example:
          "The 'Real Results' campaign features unretouched photos and genuine testimonials from members of all ages and abilities.",
      },
      {
        title: "Employee Wellness",
        body: "Invest in instructor health and happiness. Energized employees create energized classes.",
        example:
          "The 'Instructor Wellness Program' includes free classes, mental health days, and continuing education: turnover dropped 60%.",
      },
    ],
  },
];

const BAKERY_TABS: BusinessSizeTab[] = [
  {
    id: "micro",
    label: "Micro",
    intro:
      "A home baker or farmers market stall. Your brand is your craft and your warmth.",
    items: [
      {
        title: "The Baker's Story",
        body: "Share your journey: why you bake, what you love, your early mornings. People buy from people they know.",
        example:
          "Home baker Sam posts '4am with Sam' videos showing the quiet magic of dough rising: 50k followers and a waitlist.",
      },
      {
        title: "Seasonal Specials",
        body: "Limited-time offerings create urgency and excitement. A 'Summer Berry Tart' that only appears in July becomes legendary.",
        example:
          "The 'Peach Cobbler Season': just 6 weeks each summer: has customers lining up before the market opens.",
      },
      {
        title: "Community Gifting",
        body: "Surprise regulars with a free sample or a birthday treat. Small gestures create lifelong customers.",
        example:
          "Every regular gets a free 'Birthday Dozen': and they always bring friends to share.",
      },
    ],
  },
  {
    id: "small",
    label: "Small",
    intro:
      "A bakery with 2-6 employees. Scale warmth through systems and staff training.",
    items: [
      {
        title: "The Morning Ritual",
        body: "Create a signature morning experience: the smell of fresh bread, the sound of friendly greeting, the taste of a free sample.",
        example:
          "Every customer gets a warm 'Good morning!' and a sample of the day's fresh bread: the bakery smells like happiness.",
      },
      {
        title: "Staff as Family",
        body: "Train staff to remember names and orders. When employees feel like family, customers feel like family too.",
        example:
          "The 'Name Game': staff earn a bonus for learning 50 regulars' names and orders in their first month.",
      },
      {
        title: "Local Partnerships",
        body: "Partner with coffee shops, florists, and bookstores for cross-promotion. A bakery that supports local becomes local.",
        example:
          "The bakery supplies fresh pastries to the coffee shop next door: customers say it is the best breakfast in town.",
      },
    ],
  },
  {
    id: "medium",
    label: "Medium",
    intro:
      "Multiple locations or a larger bakery. Maintain the home-baked feel while professionalizing operations.",
    items: [
      {
        title: "Location Personality",
        body: "Each location should have its own character while sharing core recipes and values. One might be rustic; another, modern.",
        example:
          "The downtown location has an open kitchen and industrial design; the suburban location feels like a country kitchen.",
      },
      {
        title: "Transparency",
        body: "Show the baking process. Open kitchens, ingredient sourcing stories, and 'meet the baker' events build trust.",
        example:
          "Monthly 'Behind the Dough' tours let customers see the baking process: and sales of featured items jump 25%.",
      },
      {
        title: "Community Programs",
        body: "Offer baking classes, youth programs, and charity partnerships. A bakery that teaches becomes a community institution.",
        example:
          "The 'Junior Bakers' Saturday class for kids has a 6-month waitlist: and parents become loyal customers.",
      },
    ],
  },
  {
    id: "large",
    label: "Large",
    intro:
      "A regional or national bakery chain. Humanize scale through local stories and artisan pride.",
    items: [
      {
        title: "Artisan Stories",
        body: "Feature the real bakers behind the bread in every location. Customers want to know who made their croissant.",
        example:
          "Every bag has a sticker with the baker's name and a QR code linking to their story and favorite recipe.",
      },
      {
        title: "Local Specialties",
        body: "Allow each location to create regional specialties using local ingredients. National consistency, local flavor.",
        example:
          "The Vermont location offers maple danishes; the California location features avocado toast with local sourdough.",
      },
      {
        title: "Sustainability Commitment",
        body: "At scale, sustainable sourcing and waste reduction become powerful brand stories. Show, do not just tell.",
        example:
          "The 'Zero Waste' initiative donates day-old bread to food banks and composts everything else: customers are proud to support it.",
      },
    ],
  },
];

const CLEANING_TABS: BusinessSizeTab[] = [
  {
    id: "micro",
    label: "Micro",
    intro:
      "A solo cleaner or small team. Your brand is reliability and the personal touch.",
    items: [
      {
        title: "Trust Through Transparency",
        body: "Document your work: before/after photos, checklists, and video walkthroughs. Trust is built on proof.",
        example:
          "Solo cleaner Pat sends a photo checklist after every job: clients feel confident even when they are not home.",
      },
      {
        title: "The Extra Touch",
        body: "Small surprises create big loyalty: folded towels, a fresh flower, or a note saying 'Have a great week.'",
        example:
          "Every client gets a handwritten note and a small chocolate on their pillow: 'Pat's signature touch' is famous.",
      },
      {
        title: "Referral Rewards",
        body: "Happy clients are your best marketers. Offer a free deep-clean for every referral that books.",
        example:
          "The 'Share the Sparkle' program gives both the referrer and new client a free oven cleaning: bookings doubled.",
      },
    ],
  },
  {
    id: "small",
    label: "Small",
    intro:
      "A cleaning service with 3-10 cleaners. Scale trust through systems and team culture.",
    items: [
      {
        title: "Team as Brand Ambassadors",
        body: "Train cleaners to be friendly, professional, and observant. A cleaner who notices a leaky faucet and reports it builds trust.",
        example:
          "Cleaners are trained to leave a 'Care Note' for any maintenance issues spotted: clients feel looked after.",
      },
      {
        title: "Consistency Standards",
        body: "Create detailed checklists for every room. Consistency is what turns a service into a brand.",
        example:
          "The '52-Point Checklist' ensures every clean meets the same standard: and clients can request the checklist.",
      },
      {
        title: "Feedback Loops",
        body: "Follow up after every clean with a simple survey. Quick response to feedback shows you care.",
        example:
          "A text survey after every job: 'How did we do?': issues are addressed within 24 hours, guaranteed.",
      },
    ],
  },
  {
    id: "medium",
    label: "Medium",
    intro:
      "A larger service or multiple teams. Maintain quality while scaling operations.",
    items: [
      {
        title: "Quality Assurance",
        body: "Implement spot checks, mystery clients, and performance reviews. Quality at scale requires vigilance.",
        example:
          "Monthly 'Mystery Home' evaluations keep standards high: top performers get bonuses and public recognition.",
      },
      {
        title: "Technology for Trust",
        body: "Use apps for scheduling, real-time updates, and photo documentation. Clients love knowing exactly when their team arrives.",
        example:
          "The app sends a notification when the team arrives, with photos of each room as it is completed.",
      },
      {
        title: "Employee Investment",
        body: "Happy cleaners do better work. Offer fair wages, benefits, and growth paths. Your brand is your team.",
        example:
          "The 'Career Clean' program offers training certifications and promotion paths: turnover is half the industry average.",
      },
    ],
  },
  {
    id: "large",
    label: "Large",
    intro:
      "A regional or national cleaning service. Humanize scale through local teams and transparent practices.",
    items: [
      {
        title: "Local Team Identity",
        body: "Let local teams develop their own identity while sharing core values. A team with pride delivers pride.",
        example:
          "Each regional team has a name, mascot, and local charity they support: 'The Sparkle Squad' is a client favorite.",
      },
      {
        title: "Sustainability Leadership",
        body: "At scale, eco-friendly products and practices become a powerful differentiator. Lead the industry.",
        example:
          "The 'Green Clean Guarantee' uses only EPA-approved products and publishes annual sustainability reports.",
      },
      {
        title: "Customer Advocacy Program",
        body: "Turn loyal clients into brand ambassadors with rewards, recognition, and exclusive perks.",
        example:
          "The 'Clean Club' gives top referrers priority booking, free add-ons, and an annual 'Sparkle Award' dinner.",
      },
    ],
  },
];

const BOUTIQUE_TABS: BusinessSizeTab[] = [
  {
    id: "micro",
    label: "Micro",
    intro:
      "A solo stylist or online boutique. Your brand is your taste and your relationships.",
    items: [
      {
        title: "Personal Styling as Service",
        body: "Offer one-on-one styling sessions, wardrobe audits, and personal shopping. Your expertise is your product.",
        example:
          "Solo stylist Taylor offers 'Closet Refresh' sessions: clients purge, plan, and shop with expert guidance.",
      },
      {
        title: "Curation with Story",
        body: "Every piece should have a reason for being in your collection. Share the designer's story, the fabric's origin, and why you love it.",
        example:
          "Each item has a handwritten tag: 'I found this in a Paris showroom. The drape is unreal.: Taylor'",
      },
      {
        title: "Client Relationships",
        body: "Remember birthdays, style preferences, and life events. A boutique that feels like a friend's closet builds loyalty.",
        example:
          "Taylor texts clients when a perfect piece arrives: 'This reminded me of you immediately. Want to see it first?'",
      },
    ],
  },
  {
    id: "small",
    label: "Small",
    intro:
      "A boutique with 2-5 staff. Scale personal service through systems and empowered employees.",
    items: [
      {
        title: "Staff as Stylists",
        body: "Train staff to offer genuine styling advice, not just sales pitches. When employees feel like experts, customers feel confident.",
        example:
          "Every staff member has a 'Style Profile' on the website showing their personal aesthetic and favorite pieces.",
      },
      {
        title: "The Fitting Room Experience",
        body: "Design fitting rooms as sanctuaries: good lighting, honest mirrors, and a staff member who brings options without being pushy.",
        example:
          "The fitting room has a 'Call for Options' button: staff arrive with curated pieces based on what you are trying on.",
      },
      {
        title: "Loyalty with Exclusivity",
        body: "Offer early access, private shopping events, and personalized lookbooks for your best customers.",
        example:
          "VIP clients get a 'First Look' email 48 hours before new arrivals hit the floor: and they feel like insiders.",
      },
    ],
  },
  {
    id: "medium",
    label: "Medium",
    intro:
      "Multiple locations or a larger boutique. Maintain intimacy through localized curation and technology.",
    items: [
      {
        title: "Localized Curation",
        body: "Each location should reflect its neighborhood's style. What works in SoHo might not work in Santa Fe.",
        example:
          "The Nashville location leans into bohemian, artisanal pieces; the Chicago location features sleek, urban styles.",
      },
      {
        title: "Technology for Personalization",
        body: "Use CRM to track preferences, sizes, and purchase history. A customer who feels known spends more.",
        example:
          "The app suggests new arrivals based on past purchases and sends a 'Your size is back in stock!' alert.",
      },
      {
        title: "Community Events",
        body: "Host styling workshops, designer meetups, and charity fashion shows. A boutique that hosts community becomes community.",
        example:
          "Monthly 'Style & Sip' events feature local designers and donate proceeds to women's shelters.",
      },
    ],
  },
  {
    id: "large",
    label: "Large",
    intro:
      "A regional or national boutique brand. Humanize scale through local stories and authentic voices.",
    items: [
      {
        title: "Local Stories, National Reach",
        body: "Use your national platform to amplify local designers, stylists, and community impact.",
        example:
          "The 'Local Love' collection features one designer from each state, with their story and process highlighted.",
      },
      {
        title: "Employee Advocacy",
        body: "Encourage stylists to share their expertise on social media. Authentic voices build trust more than corporate campaigns.",
        example:
          "Stylists run their own 'Style Diaries' on Instagram, sharing how they wear the brand in real life.",
      },
      {
        title: "Sustainability as Standard",
        body: "At scale, transparent supply chains and ethical practices become table stakes. Lead with honesty.",
        example:
          "Every garment has a 'Transparency Tag' showing where it was made, who made it, and its environmental impact.",
      },
    ],
  },
];

export const INDUSTRY_BRANDING_DATA: Record<string, IndustryBrandingData> = {
  deli: {
    emoji: "🥪",
    label: "Deli",
    to: "/deli-guide",
    hash: "branding",
    principles: [
      "Share the story behind every sandwich",
      "Remember regulars by name & order",
    ],
    color: "border-primary/40 hover:border-primary",
    bg: "bg-primary/5",
    qa: DELI_QA,
    worksheetFields: DELI_WORKSHEET,
    voiceOptions: [
      "Warm",
      "Generous",
      "Authentic",
      "Nostalgic",
      "Energetic",
      "Neighborly",
    ],
    businessSizeTabs: DELI_TABS,
  },
  salon: {
    emoji: "💇",
    label: "Salon",
    to: "/salon-guide",
    hash: "branding",
    principles: [
      "Before/after storytelling builds trust",
      "Client milestones = brand moments",
    ],
    color: "border-primary/40 hover:border-primary",
    bg: "bg-primary/5",
    qa: SALON_QA,
    worksheetFields: SALON_WORKSHEET,
    voiceOptions: [
      "Warm",
      "Expert",
      "Bold",
      "Playful",
      "Trustworthy",
      "Inspiring",
    ],
    businessSizeTabs: SALON_TABS,
  },
  restaurant: {
    emoji: "🍽️",
    label: "Restaurant",
    to: "/restaurant-guide",
    hash: "branding",
    principles: [
      "The chef's story IS the brand",
      "Consistent ritual creates emotional loyalty",
    ],
    color: "border-primary/30 hover:border-primary",
    bg: "bg-primary/5",
    qa: RESTAURANT_QA,
    worksheetFields: RESTAURANT_WORKSHEET,
    voiceOptions: [
      "Warm",
      "Expert",
      "Bold",
      "Artisan",
      "Trustworthy",
      "Passionate",
    ],
    businessSizeTabs: RESTAURANT_TABS,
  },
  "pool-hall": {
    emoji: "🎱",
    label: "Pool Hall",
    to: "/pool-hall-guide",
    hash: "branding",
    principles: [
      "Community hub atmosphere drives loyalty",
      "Tournaments & leagues create belonging",
    ],
    color: "border-primary/30 hover:border-primary",
    bg: "bg-primary/5",
    qa: POOL_HALL_QA,
    worksheetFields: POOL_HALL_WORKSHEET,
    voiceOptions: [
      "Warm",
      "Casual",
      "Bold",
      "Playful",
      "Inclusive",
      "Competitive",
    ],
    businessSizeTabs: POOL_HALL_TABS,
  },
  retail: {
    emoji: "🛍️",
    label: "Retail",
    to: "/retail-guide",
    hash: "branding",
    principles: [
      "Make regulars feel like insiders",
      "The store experience is the brand",
    ],
    color: "border-primary/30 hover:border-primary",
    bg: "bg-primary/5",
    qa: RETAIL_QA,
    worksheetFields: RETAIL_WORKSHEET,
    voiceOptions: [
      "Warm",
      "Curated",
      "Bold",
      "Playful",
      "Trustworthy",
      "Discovery",
    ],
    businessSizeTabs: RETAIL_TABS,
  },
  "fitness-studio": {
    emoji: "💪",
    label: "Fitness Studio",
    to: "/fitness-studio-guide",
    hash: "branding",
    principles: [
      "Celebrate member milestones publicly",
      "Build a tribe, not just a gym",
    ],
    color: "border-primary/30 hover:border-primary",
    bg: "bg-primary/5",
    qa: FITNESS_QA,
    worksheetFields: FITNESS_WORKSHEET,
    voiceOptions: [
      "Energetic",
      "Expert",
      "Bold",
      "Playful",
      "Inclusive",
      "Inspiring",
    ],
    businessSizeTabs: FITNESS_TABS,
  },
  bakery: {
    emoji: "🥐",
    label: "Bakery & Café",
    to: "/bakery-guide",
    hash: "branding",
    principles: [
      "The aroma and warmth ARE the brand",
      "Local sourcing stories build trust",
    ],
    color: "border-primary/30 hover:border-primary",
    bg: "bg-primary/5",
    qa: BAKERY_QA,
    worksheetFields: BAKERY_WORKSHEET,
    voiceOptions: [
      "Warm",
      "Artisan",
      "Nostalgic",
      "Playful",
      "Trustworthy",
      "Wholesome",
    ],
    businessSizeTabs: BAKERY_TABS,
  },
  "cleaning-service": {
    emoji: "🧹",
    label: "Cleaning Service",
    to: "/cleaning-service",
    hash: "branding",
    principles: [
      "Reliability and trust are everything",
      "Spotless results speak louder than ads",
    ],
    color: "border-primary/30 hover:border-primary",
    bg: "bg-primary/5",
    qa: CLEANING_QA,
    worksheetFields: CLEANING_WORKSHEET,
    voiceOptions: [
      "Warm",
      "Professional",
      "Trustworthy",
      "Detail-Oriented",
      "Caring",
      "Reliable",
    ],
    businessSizeTabs: CLEANING_TABS,
  },
  boutique: {
    emoji: "👗",
    label: "Boutique Clothing Store",
    to: "/boutique-guide",
    hash: "branding",
    principles: [
      "Curated selection tells a style story",
      "Personal styling creates loyal fans",
    ],
    color: "border-primary/30 hover:border-primary",
    bg: "bg-primary/5",
    qa: BOUTIQUE_QA,
    worksheetFields: BOUTIQUE_WORKSHEET,
    voiceOptions: [
      "Warm",
      "Curated",
      "Bold",
      "Playful",
      "Trustworthy",
      "Stylish",
    ],
    businessSizeTabs: BOUTIQUE_TABS,
  },
};

export const INDUSTRY_KEYS = [
  "deli",
  "salon",
  "restaurant",
  "pool-hall",
  "retail",
  "fitness-studio",
  "bakery",
  "cleaning-service",
  "boutique",
] as const;

export type IndustryKey = (typeof INDUSTRY_KEYS)[number];
