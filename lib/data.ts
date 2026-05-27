export const BOOKING_URL =
  "https://n832181.alteg.io/company/724486/personal/select-master?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

export const INSTAGRAM_URL = "https://www.instagram.com/mens.space.waw";

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type PriceItem = {
  service: string;
  price: string;
};

export type Barber = {
  id: string;
  name: string;
  role: string;
  description: string;
  instagram: string;
  photo: string;
  pricelist: PriceItem[];
};

export type Case = {
  id: number;
  clientName: string;
  services: string[];
  barberId: string;
  photo: string;
};

export const services: Service[] = [
  {
    id: "mens-haircut",
    name: "Men's Haircut",
    description: "Precision cut tailored to your face shape and personal style",
    icon: "Scissors",
  },
  {
    id: "beard-trimming",
    name: "Beard Trimming",
    description: "Sculpted lines and defined edges that frame your face perfectly",
    icon: "Layers",
  },
  {
    id: "buzz-cut",
    name: "Buzz Cut",
    description: "Clean, confident clipper work for a sharp, effortless look",
    icon: "Zap",
  },
  {
    id: "shaving",
    name: "Shaving",
    description: "Traditional straight-razor shave with hot towel and premium foam",
    icon: "Feather",
  },
  {
    id: "beard-coloring",
    name: "Beard Coloring",
    description: "Natural tones or bold shades — precision coloring for your beard",
    icon: "Paintbrush",
  },
  {
    id: "head-coloring",
    name: "Head Coloring",
    description: "Full or partial color treatments to refresh or transform your look",
    icon: "Palette",
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Smooth, clean results for eyebrows, ears, nose, and more",
    icon: "Sparkles",
  },
  {
    id: "hair-perm",
    name: "Hair Perm",
    description: "Modern texture and curl treatments for a distinctive, lasting style",
    icon: "Waves",
  },
];

export const barbers: Barber[] = [
  {
    id: "mykhailo",
    name: "Mykhailo",
    role: "Hair Stylist",
    description:
      "Hi everyone! My name is Mykhailo, and I truly believe there's no such thing as a \"bad\" head shape or haircut — just one that hasn't been tailored to you yet.",
    instagram: "https://www.instagram.com/ptashko.barber",
    photo: "/assets/team/mykhailo.jpg",
    pricelist: [
      { service: "Men's haircut", price: "140 zł" },
      { service: "Men's haircut + beard trimming", price: "240 zł" },
      { service: "Beard trimming", price: "110 zł" },
      { service: "Clippers haircut or Buzz cut", price: "120 zł" },
      { service: "Clippers haircut + Beard trimming", price: "220 zł" },
      { service: "Shaving", price: "120 zł" },
      { service: "Beard coloring", price: "90 zł" },
      { service: "Head coloring", price: "100 zł" },
      { service: "Waxing", price: "30 zł" },
    ],
  },
  {
    id: "diana",
    name: "Diana",
    role: "Hair Stylist",
    description:
      "Hello! My name is Diana, and I truly believe that a great haircut isn't just about the style — it's about finding the perfect frame for your unique personality and confidence.",
    instagram: "https://www.instagram.com/i.will.cut.your.hair",
    photo: "/assets/team/diana.jpg",
    pricelist: [
      { service: "Men's haircut", price: "140 zł" },
      { service: "Men's haircut + beard trimming", price: "230 zł" },
      { service: "Beard trimming", price: "110 zł" },
      { service: "Clippers haircut or Buzz cut", price: "110 zł" },
      { service: "Clippers haircut + Beard trimming", price: "180 zł" },
      { service: "Shaving", price: "110 zł" },
      { service: "Beard coloring", price: "80 zł" },
      { service: "Head coloring", price: "100 zł" },
      { service: "Waxing", price: "20 zł" },
    ],
  },
  {
    id: "anton",
    name: "Anton",
    role: "Hair Stylist",
    description:
      "Hey! My name is Anton, and I'm here to prove that a great haircut should be just as fun as it is fresh — I'm all about ditching the stiff styles and finding the look that actually matches your vibe.",
    instagram: "https://www.instagram.com/hhomych",
    photo: "/assets/team/anton.jpg",
    pricelist: [
      { service: "Men's haircut", price: "130 zł" },
      { service: "Men's haircut + beard trimming", price: "230 zł" },
      { service: "Beard trimming", price: "100 zł" },
      { service: "Clippers haircut or Buzz cut", price: "110 zł" },
      { service: "Clippers haircut + Beard trimming", price: "200 zł" },
      { service: "Shaving", price: "110 zł" },
      { service: "Beard coloring", price: "90 zł" },
      { service: "Head coloring", price: "100 zł" },
      { service: "Waxing", price: "30 zł" },
      { service: "Hair perm", price: "300 – 400 zł" },
    ],
  },
  {
    id: "serhii",
    name: "Serhii",
    role: "Hair Stylist",
    description:
      "Hey there! My name is Serhii, and I truly believe that because no two people are the same, no two haircuts should be either — I'm here to craft a style that's uniquely yours.",
    instagram: "https://www.instagram.com/shyma_barber",
    photo: "/assets/team/serhii.jpg",
    pricelist: [
      { service: "Men's haircut", price: "130 zł" },
      { service: "Men's haircut + beard trimming", price: "200 zł" },
      { service: "Beard trimming", price: "100 zł" },
      { service: "Men's haircut + Beard trimming (Hot towel)", price: "220 zł" },
      { service: "Men's long haircut", price: "150 zł" },
      { service: "Beard coloring", price: "80 zł" },
      { service: "Head coloring", price: "100 zł" },
      { service: "Waxing", price: "20 zł" },
    ],
  },
  {
    id: "yegor",
    name: "Yegor",
    role: "Hair Stylist",
    description:
      "Hey! I'm Yegor, the newest member of the crew. I bring a fresh, modern perspective to the chair and love staying ahead of the latest trends, ensuring you walk out with a look that feels completely current.",
    instagram: "https://www.instagram.com/mens.space.waw",
    photo: "/assets/team/yegor.jpg",
    pricelist: [
      { service: "Men's haircut", price: "90 zł" },
      { service: "Clippers haircut or Buzz cut", price: "80 zł" },
    ],
  },
];

export const cases: Case[] = [
  {
    id: 1,
    clientName: "Alex",
    services: ["Men's Haircut", "Beard Trimming"],
    barberId: "mykhailo",
    photo: "/assets/cases/case1.jpg",
  },
  {
    id: 2,
    clientName: "Dmytro",
    services: ["Buzz Cut", "Beard Trimming"],
    barberId: "anton",
    photo: "/assets/cases/case2.jpg",
  },
  {
    id: 3,
    clientName: "Oleksii",
    services: ["Men's Haircut"],
    barberId: "serhii",
    photo: "/assets/cases/case3.jpg",
  },
  {
    id: 4,
    clientName: "Maksym",
    services: ["Men's Haircut", "Beard Trimming"],
    barberId: "diana",
    photo: "/assets/cases/case4.jpg",
  },
  {
    id: 5,
    clientName: "Ivan",
    services: ["Shaving", "Head Coloring"],
    barberId: "diana",
    photo: "/assets/cases/case5.jpg",
  },
  {
    id: 6,
    clientName: "Taras",
    services: ["Men's Haircut", "Waxing"],
    barberId: "mykhailo",
    photo: "/assets/cases/case6.jpg",
  },
  {
    id: 7,
    clientName: "Bohdan",
    services: ["Buzz Cut"],
    barberId: "yegor",
    photo: "/assets/cases/case7.jpg",
  },
  {
    id: 8,
    clientName: "Denys",
    services: ["Men's Haircut", "Beard Coloring"],
    barberId: "anton",
    photo: "/assets/cases/case8.jpg",
  },
];

export const whyUsReasons = [
  {
    icon: "Award",
    title: "Expert Hands",
    description:
      "Each of our stylists brings years of dedicated training and hands-on experience — your hair is always in the best hands.",
  },
  {
    icon: "UserCheck",
    title: "Individual Approach",
    description:
      "We listen first. Every visit begins with a consultation to understand your lifestyle, face shape, and vision.",
  },
  {
    icon: "Star",
    title: "Premium Products",
    description:
      "Only top-tier professional products — because the right tools are half the result.",
  },
  {
    icon: "Coffee",
    title: "A Real Men's Space",
    description:
      "Relax. No rush, no noise — just a welcoming atmosphere built around your comfort.",
  },
  {
    icon: "TrendingUp",
    title: "Always Current",
    description:
      "Our team follows global barbering trends so you always leave with a look that's fresh, not dated.",
  },
  {
    icon: "Target",
    title: "Precision Every Time",
    description:
      "Consistency is our standard. Whether it's your first visit or your tenth, you know what to expect.",
  },
];
