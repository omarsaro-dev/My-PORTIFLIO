export const site = {
  name: "Omar Mohamed",
  firstName: "Omar",
  lastName: "Mohamed",
  role: "Frontend Developer & AI Automation Enthusiast",
  availability: "Available for new projects",
  location: "Cairo, Egypt",
  domain: "omarmohamed.dev",
  url: "https://omarmohamed.dev",

  email: "omarsaro2026@gmail.com",

  // CONFLICT: legacy <a href="tel:+201068081198"> (index.html & contact.html)
  // is displayed as "+20 106 808 1198". The WhatsApp number below is a
  // DIFFERENT number (+201273494048). Both kept exactly as found in the
  // legacy source. UNRESOLVED — awaiting user's final values. Do not merge,
  // do not expose an unconfirmed number as contactable in new UI without
  // explicit approval.
  phoneTel: "+201068081198",
  phoneDisplay: "+20 106 808 1198",
  whatsappUrl: "https://wa.me/201273494048",
  whatsappDisplay: "+20 127 349 4048",

  // /contact route is deferred from the legacy contact.html page. CTAs
  // that navigated to contact.html (START A PROJECT, exit heading, exit
  // primary) are rendered disabled/pending until an approved destination.
  contact: {
    label: "Contact",
    route: "/contact",
    status: "pending",
  },

  githubUrl: "https://github.com/omarsaro-dev",
  githubHandle: "omarsaro-dev",
  linkedinUrl: "https://www.linkedin.com/in/omar-saro-54381936a",
  linkedinHandle: "omar-saro-54381936a",

  title: "Omar Mohamed — Frontend Developer & AI Automation Enthusiast",
  description:
    "Omar Mohamed — Frontend developer and AI automation enthusiast building immersive digital experiences, interactive websites, landing pages, and intelligent automation systems.",
  ogDescription:
    "Immersive digital experiences where code meets design, motion meets interaction, and technology meets curiosity.",
  ogSiteName: "Omar Mohamed Portfolio",
} as const;