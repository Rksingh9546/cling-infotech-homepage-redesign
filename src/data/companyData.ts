export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  badge: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  deliverables: string[];
  impact: string;
  metrics: { label: string; value: string }[];
  image: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  verified: boolean;
}

export interface GlobalLocation {
  country: string;
  region: string;
  flag: string;
  keyWork: string;
  clientCount: string;
  x: number; // percentage on map
  y: number; // percentage on map
}

export const COMPANY_STATS = [
  {
    value: "32M+",
    exact: "32,387,122",
    label: "Lines of Code",
    subtext: "Production-grade, clean engineered codebase delivered globally"
  },
  {
    value: "350+",
    exact: "350+",
    label: "Happy Clients",
    subtext: "Global enterprises, high-growth startups and innovators"
  },
  {
    value: "390+",
    exact: "390+",
    label: "Projects Completed",
    subtext: "On-time delivery across web, mobile, AI and ERP ecosystems"
  },
  {
    value: "1,500+",
    exact: "1500+",
    label: "Coffee With Clients",
    subtext: "Deep collaborative sessions shaping visionary digital products"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    badge: "Next-Gen Intelligence",
    shortDesc: "Cutting-edge computer vision, neural networks, predictive modeling, and intelligent workflow automation built for enterprise scale.",
    fullDesc: "We build proprietary machine learning models, computer vision systems, and automated cognitive engines that extract actionable intelligence from unstructured data, video feeds, and complex datasets.",
    features: [
      "Computer Vision & Real-time Object Tracking",
      "Surveillance Anomaly & Security Detection",
      "Custom Natural Language Processing (NLP)",
      "Predictive Analytics & Forecasting Models"
    ],
    deliverables: ["Custom Model Training", "Edge & Cloud Deployment", "REST / gRPC Inference APIs", "Data Pipeline Automation"],
    techStack: ["PyTorch", "TensorFlow", "OpenCV", "FastAPI", "NVIDIA CUDA", "Python"]
  },
  {
    id: "web-dev",
    title: "Web Development",
    badge: "Zero-Template Architecture",
    shortDesc: "Bespoke, high-performance web applications and enterprise portals engineered from the ground up for speed, security, and conversion.",
    fullDesc: "Don't let your website be just another URL on the web! We never use pre-designed templates. Every layout, component, and interaction is custom-designed and architected to meet rigorous performance standards.",
    features: [
      "Zero-Template Custom Web Platforms",
      "High-Performance SPA & SSR Applications",
      "Enterprise Web Portals & Dashboards",
      "Search Engine Optimized (SEO) Architecture"
    ],
    deliverables: ["Responsive UI/UX System", "Cloud-native Infrastructure", "Content Management Architecture", "Speed & Core Web Vitals Optimization"],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    badge: "iOS & Android",
    shortDesc: "Native and cross-platform mobile apps engineered for fluid 120Hz performance, intuitive user experience, and enterprise stability.",
    fullDesc: "Take advantage of the rapidly growing mobile segment with intuitive apps tailored to user behavior. From consumer-facing mobile solutions to mission-critical field operations apps.",
    features: [
      "Cross-Platform Native Experience",
      "Offline-First Data Synchronization",
      "Secure Biometric & In-App Payments",
      "Push Notifications & Real-Time Sync"
    ],
    deliverables: ["iOS App Store Submission", "Google Play Store Publishing", "Mobile Design System", "Continuous OTA Updates"],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "WebSockets"]
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    badge: "Unified Operations",
    shortDesc: "Integrated enterprise resource planning systems that connect front-office customer touchpoints with back-office operations effortlessly.",
    fullDesc: "Manage complex business operations by seamlessly unifying supply chain, inventory, accounting, CRM, and human resource management into a centralized, real-time command center.",
    features: [
      "End-to-End Back & Front Office Integration",
      "Custom Workflow Automation & Approvals",
      "Multi-Entity Financials & Invoicing",
      "Inventory, Asset & Supply Chain Tracking"
    ],
    deliverables: ["Custom ERP Architecture", "Legacy System Migration", "Staff Role-Based Access Control", "Executive Analytics BI Dashboard"],
    techStack: ["Node.js", "Python", "PostgreSQL", "Docker", "Redis", "Apache Kafka"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    badge: "Data-Driven ROI",
    shortDesc: "Performance marketing, technical SEO, and conversion optimization strategies focused strictly on verifiable business growth.",
    fullDesc: "Move past vanity metrics to real customer acquisition. We combine analytical performance media, content positioning, and conversion rate optimization to scale your customer base profitably.",
    features: [
      "Search Engine Optimization (SEO)",
      "High-ROI Performance Advertising",
      "Social Media Growth & Brand Strategy",
      "Conversion Rate Optimization (CRO)"
    ],
    deliverables: ["Full-Funnel Acquisition Strategy", "Custom Tracking & Attribution", "Creative Ad Assets & Copy", "Transparent Monthly ROI Reporting"],
    techStack: ["Google Analytics 4", "Meta Ads Manager", "Google Search Console", "Semrush", "Tag Manager"]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    badge: "Dedicated Engineering",
    shortDesc: "Dedicated software engineering teams and bespoke software portals built to turn ambitious concepts into scalable commercial reality.",
    fullDesc: "Whether you need a dedicated engineering squad for your next venture or a purpose-built B2B workflow system, our experienced architects and developers deliver robust, battle-tested software.",
    features: [
      "Dedicated On-Demand IT Squads",
      "Scalable Microservices Architecture",
      "Robust API Design & 3rd-Party Integrations",
      "Comprehensive QA & Automated Testing"
    ],
    deliverables: ["Source Code Ownership", "System Architecture Blueprints", "Automated CI/CD Pipelines", "SLA-backed Maintenance & Support"],
    techStack: ["TypeScript", "Go", "AWS", "Google Cloud", "Kubernetes", "GraphQL"]
  }
];

export const INNOVATION_PILLARS = [
  {
    id: "ai-cv",
    title: "Computer Vision & Surveillance AI",
    badge: "Real-time Detection",
    description: "Deep learning models engineered for real-time anomaly detection, video surveillance analytics, and automated suspicious activity alerts.",
    stat: "99.2% Accuracy",
    tags: ["YOLOv8", "DeepSORT", "Edge Inference", "Real-time Alerts"]
  },
  {
    id: "automation",
    title: "Enterprise Process Automation",
    badge: "Zero-Latency Workflows",
    description: "Autonomous bot workflows that bridge legacy systems, eliminate manual data entry, and orchestrate complex business operations.",
    stat: "85% Manual Effort Saved",
    tags: ["RPA", "Event-Driven", "Webhook Hubs", "Fault-Tolerant"]
  },
  {
    id: "3d-visuals",
    title: "3D Animation & Immersive Tech",
    badge: "Next-Gen Visuals",
    description: "Photorealistic 3D product animations, VR hall visualizations (e.g., Samsung Galaxy showcase), and cinematic interactive media.",
    stat: "4K 60fps CGI",
    tags: ["Blender", "Three.js", "VR Hall Demos", "WebGL"]
  },
  {
    id: "cloud-scale",
    title: "Cloud-Native Infrastructure",
    badge: "Resilient Systems",
    description: "Multi-region scalable cloud architectures engineered with containerized microservices, zero-downtime rollouts, and automatic failovers.",
    stat: "99.99% Target SLA",
    tags: ["Kubernetes", "Terraform", "Serverless", "Security Compliance"]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "piaah",
    title: "Piaah - Modern Fashion & Lifestyle E-Commerce",
    client: "Piaah.com",
    category: "Web & E-Commerce",
    summary: "Bespoke digital shopping platform engineered from the ground up with lightning-fast catalog navigation, personalized product feeds, and instant checkout flow.",
    deliverables: ["Custom Headless Storefront", "Payment Gateway Integration", "Inventory Management", "Mobile-Optimized UX"],
    impact: "+210% sales conversion within 90 days of platform launch",
    metrics: [
      { label: "Page Load Speed", value: "< 1.2s" },
      { label: "Checkout Conversion", value: "+38%" },
      { label: "Catalog Items", value: "10,000+" }
    ],
    image: "/images/mobile_app_platform_1790691599688.jpg",
    tags: ["E-Commerce", "React", "Next.js", "Node.js"]
  },
  {
    id: "phonologix",
    title: "Speech All / PhonoLogix - Tele-practice Portal",
    client: "Speech All Inc.",
    category: "Custom Software",
    summary: "HIPAA-compliant telemedicine and speech therapy management platform featuring encrypted live video sessions, interactive digital therapy tools, and patient tracking.",
    deliverables: ["WebRTC Video Room Engine", "Patient Clinical Records", "Interactive Diagnostic Board", "Automated Scheduling"],
    impact: "Connected therapists and patients across 8 countries seamlessly",
    metrics: [
      { label: "Tele-sessions Delivered", value: "50,000+" },
      { label: "Patient Satisfaction", value: "98.7%" },
      { label: "Global Reach", value: "8 Countries" }
    ],
    image: "/images/enterprise_erp_suite_1790691586342.jpg",
    tags: ["Healthcare", "WebRTC", "TypeScript", "Cloud Storage"]
  },
  {
    id: "ai-surveillance",
    title: "Deep Vision - AI Surveillance & Anomaly Engine",
    client: "Commercial Security Client",
    category: "AI & Machine Learning",
    summary: "Intelligent computer vision surveillance model capable of identifying suspicious activities, unattended objects, and perimeter breaches in high-density video feeds.",
    deliverables: ["Custom Object Detection Models", "Edge Processing Pipelines", "Real-Time Telemetry Dashboard", "Automated Incident Dispatch"],
    impact: "Reduced false alarms by 74% while ensuring instantaneous alerts",
    metrics: [
      { label: "Detection Latency", value: "< 45ms" },
      { label: "False Alarm Reduction", value: "-74%" },
      { label: "Streams Processed", value: "128+ Live" }
    ],
    image: "/images/ai_vision_telemetry_1790691571467.jpg",
    tags: ["Computer Vision", "PyTorch", "OpenCV", "Edge AI"]
  },
  {
    id: "kalco-erp",
    title: "Kalco Green Building - Operational ERP",
    client: "Kalco Solutions",
    category: "ERP Solutions",
    summary: "Comprehensive manufacturing and supply chain ERP unifying production floor scheduling, architectural aluminium glass specifications, and distributor billing.",
    deliverables: ["Production Flow Dashboard", "Multi-Warehouse Inventory", "B2B Dealer Ordering Portal", "Executive KPI Tracking"],
    impact: "Unified 5 regional manufacturing hubs under a single cloud database",
    metrics: [
      { label: "Order Processing Speed", value: "3x Faster" },
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Hubs Connected", value: "5 Centers" }
    ],
    image: "/images/enterprise_erp_suite_1790691586342.jpg",
    tags: ["Enterprise ERP", "PostgreSQL", "Workflow Engine", "Role Access"]
  }
];

export const GLOBAL_PRESENCE_DATA: GlobalLocation[] = [
  { country: "India", region: "South Asia (HQ)", flag: "🇮🇳", keyWork: "Global Development Centers & Regional Offices", clientCount: "180+ Projects", x: 68, y: 48 },
  { country: "United States", region: "North America", flag: "🇺🇸", keyWork: "Enterprise Software & Cloud Platforms", clientCount: "65+ Projects", x: 22, y: 35 },
  { country: "United Kingdom", region: "Europe", flag: "🇬🇧", keyWork: "Fintech & SaaS Development", clientCount: "35+ Projects", x: 48, y: 26 },
  { country: "Dubai (UAE)", region: "Middle East", flag: "🇦🇪", keyWork: "Commerce & Digital Transformation", clientCount: "40+ Projects", x: 61, y: 43 },
  { country: "Saudi Arabia", region: "Middle East", flag: "🇸🇦", keyWork: "Enterprise ERP & Government Portals", clientCount: "25+ Projects", x: 58, y: 45 },
  { country: "Singapore", region: "Southeast Asia", flag: "🇸🇬", keyWork: "AI Logic & High-Growth Startups", clientCount: "20+ Projects", x: 77, y: 56 },
  { country: "Australia", region: "Oceania", flag: "🇦🇺", keyWork: "Custom Web Portals & Mobile Apps", clientCount: "18+ Projects", x: 86, y: 76 },
  { country: "South Africa", region: "Africa", flag: "🇿🇦", keyWork: "B2B Solutions & Commerce", clientCount: "14+ Projects", x: 54, y: 72 },
  { country: "Ireland", region: "Europe", flag: "🇮🇪", keyWork: "HealthTech & Tele-practice Systems", clientCount: "12+ Projects", x: 45, y: 25 },
  { country: "Spain", region: "Europe", flag: "🇪🇸", keyWork: "Web Applications & Creative Tech", clientCount: "10+ Projects", x: 46, y: 34 },
  { country: "Oman", region: "Middle East", flag: "🇴🇲", keyWork: "Corporate Portals & Logistics", clientCount: "8+ Projects", x: 62, y: 46 },
  { country: "Mauritius", region: "Indian Ocean", flag: "🇲🇺", keyWork: "Financial Services & IT Support", clientCount: "6+ Projects", x: 63, y: 69 }
];

export const CLIENT_LOGOS = [
  { name: "Skuad", sector: "HR Tech & Global Payroll" },
  { name: "BeatRoute", sector: "Enterprise Field Sales" },
  { name: "PhonoLogix", sector: "Tele-practice & Healthcare" },
  { name: "ePayLater", sector: "Fintech & Digital Credit" },
  { name: "Apptrove", sector: "Trackier Performance Marketing" },
  { name: "Forescribe", sector: "SaaS Intelligence" },
  { name: "Kite Digiceutix", sector: "Digital Therapeutics" },
  { name: "Piaah", sector: "Fashion & Lifestyle" },
  { name: "Indian Racing Festival", sector: "Sports & Motorsport" },
  { name: "Kalco Green Building", sector: "Architectural Solutions" },
  { name: "Wings Autism Center", sector: "Child Development & Health" },
  { name: "NK Architects", sector: "Architecture & Design" },
  { name: "Vakeel At Home", sector: "Legal Services Platform" },
  { name: "MintHR", sector: "Human Resource Systems" },
  { name: "Solidarity Investment", sector: "Wealth & Asset Management" },
  { name: "FDX Group", sector: "Industrial & Logistics" },
  { name: "Jumpie", sector: "Consumer Tech" },
  { name: "Delhi Public Int.", sector: "Education & Learning" }
];

export const WHY_CLING_POINTS = [
  {
    number: "01",
    title: "Zero-Template Architecture",
    description: "Every web, mobile, and software project is engineered bespoke from first principles to match your unique brand identity and operational workflow."
  },
  {
    number: "02",
    title: "End-to-End Capabilities",
    description: "From rapid concept discovery and full-stack software development to enterprise ERP integration and proprietary AI models, we handle the entire lifecycle."
  },
  {
    number: "03",
    title: "Battle-Tested Global Delivery",
    description: "Over 390 successful enterprise implementations and 32M+ lines of code deployed across 12 countries with proven resilience and scalability."
  },
  {
    number: "04",
    title: "Agile Problem-Solving Culture",
    description: "We work directly alongside founders and enterprise stakeholders with complete transparency, rapid sprint milestones, and dedicated engineering pods."
  },
  {
    number: "05",
    title: "Production-Grade AI & Modern Tech",
    description: "We don't chase hype; we implement concrete, production-ready computer vision, workflow automations, and cloud architectures that generate quantifiable ROI."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "praveen-shetty",
    quote: "Working with Cling Info Tech was a game-changer for our business. Their expertise and dedication helped us achieve remarkable results. I highly recommend them to anyone looking for top-notch service.",
    name: "Praveen Shetty",
    role: "Managing Director",
    company: "Enterprise Partner",
    initials: "PS",
    verified: true
  },
  {
    id: "swatee-agrawal",
    quote: "Cling Info Tech's professionalism and efficiency surpassed our expectations, understanding our needs exceptionally well. Rarely do we find such a reliable partner in today's market. Their dedication sets them apart.",
    name: "Swatee Agrawal",
    role: "Founder",
    company: "Piaah.com",
    initials: "SA",
    verified: true
  },
  {
    id: "elizabeth-jean-thomas",
    quote: "Choosing Cling Info Tech was one of the best decisions we made. Their creativity and strategic approach transformed our vision into reality. We are grateful for their outstanding support and guidance throughout the process.",
    name: "Elizabeth Jean Thomas",
    role: "Founder & Clinical Director",
    company: "Speech All / PhonoLogix",
    initials: "ET",
    verified: true
  }
];

export const LEADERSHIP_TEAM = [
  {
    name: "Akshay Gupta",
    role: "Chief Executive Officer (CEO)",
    bio: "Pioneering Cling's technological vision, global expansion, and client relationships across international markets.",
    focus: "Strategic Vision & Global Scale"
  },
  {
    name: "Ramesh Singh",
    role: "Co-Founder & Director",
    bio: "Steering operational excellence, enterprise architecture, and technical engineering governance.",
    focus: "Engineering Excellence & Architecture"
  },
  {
    name: "Ashi Gupta",
    role: "Managing Director",
    bio: "Leading organizational growth, client success programs, and business delivery strategies.",
    focus: "Client Success & Operations"
  }
];

export const COMPANY_OFFICES = [
  {
    city: "Noida (Head Office)",
    address: "130, 131, 132, 2nd Floor, Wave Galleria, Wave City, NH-24, Noida, Uttar Pradesh - 201015",
    type: "Headquarters & Engineering Hub",
    badge: "Global HQ"
  },
  {
    city: "Pune",
    address: "2nd Floor, Raj Square, Pashan - Sus Rd, near Abhinav Kala College, opposite Reliance Fresh, Sutarwadi, Pashan, Pune, Maharashtra - 411021",
    type: "Western Regional Tech Office",
    badge: "Innovation Center"
  },
  {
    city: "Moradabad",
    address: "2/652, Avas Vikas, Buddhi Vihar, Moradabad, Uttar Pradesh - 244001",
    type: "Development & Support Hub",
    badge: "Operations Center"
  }
];

export const JOURNEY_MILESTONES = [
  {
    year: "2019",
    title: "Foundational Growth & Learning",
    description: "Cling Info Tech was established with a clear mandate: deliver bespoke digital solutions without generic shortcuts. Built our initial core engineering culture and early client trust."
  },
  {
    year: "2020",
    title: "Solidifying Presence & Diversifying",
    description: "Expanded into comprehensive ERP systems and mobile app ecosystems. Maintained an unwavering commitment to engineering quality and client satisfaction during unprecedented global shifts."
  },
  {
    year: "2021",
    title: "Momentum & Recognition",
    description: "Crossed 200+ completed projects, gained international clientele across the US, UK, and UAE, and embraced modern cloud-native architectures and containerized deployments."
  },
  {
    year: "2022+",
    title: "Enterprise Scale & AI Leadership",
    description: "Matured into a global technological ally delivering proprietary Computer Vision models, deep ERP automation, and high-performance web platforms for 350+ clients."
  }
];
