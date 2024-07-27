import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "1",
    title: "Services",
    url: "#services",
  },
  {
    id: "2",
    title: "work experience",
    url: "#experience",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    text: "Building responsive and dynamic websites using modern technologies like Django, React, and Next.js.",
    iconUrl: benefitIcon1,
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: 2,
    title: "DevOps & Automation",
    text: "Implementing CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes to streamline development workflows.",
    iconUrl: benefitIcon2,
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: benefitImage2,
    light: false,
  },
  {
    id: 3,
    title: "Cloud Services",
    text: "Deploying and managing applications on cloud platforms like AWS, Google Cloud, and Azure.",
    iconUrl: benefitIcon3,
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: 4,
    title: "Data Analysis & Visualization",
    text: "Performing data analysis and creating visualizations using Python libraries like Pandas, Matplotlib, and Seaborn.",
    iconUrl: benefitIcon4,
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: benefitImage2,
    light: false,
  },
  {
    id: 5,
    title: "Microservices Architecture",
    text: "Designing and implementing scalable microservices architecture for complex applications.",
    iconUrl: benefitIcon1,
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: 6,
    title: "API Development",
    text: "Creating robust and secure APIs using Django, Flask, and FastAPI.",
    iconUrl: benefitIcon2,
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: benefitImage2,
    light: false,
  },
  {
    id: 7,
    title: "Security Audits",
    text: "Implementing robust security measures and performing regular security audits to ensure data integrity and protection.",
    iconUrl: benefitIcon3,
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: 8,
    title: "Custom Software Solutions",
    text: "Developing tailored software solutions to meet unique business requirements.",
    iconUrl: benefitIcon4,
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: benefitImage2,
    light: false,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const stephenServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const stephenServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
