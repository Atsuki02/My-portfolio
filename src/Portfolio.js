const contacts = [
  {
    name: "github",
    url: "https://github.com/Atsuki02",
    tag: "FaGithub",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/atsuki-kitada-242573271/",
    tag: "FaLinkedinIn",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/atsuki_iii/",
    tag: "FaInstagram",
  },
];

const skills = [
  {
    language: "HTML",
    icon: "/images/html.png",
  },
  {
    language: "CSS",
    icon: "/images/css.png",
  },
  {
    language: "SASS",
    icon: "/images/sass.png",
  },
  {
    language: "Javascript",
    icon: "/images/javascript.png",
  },
  {
    language: "Typescript",
    icon: "/images/typescript.png",
  },
  {
    language: "React",
    icon: "/images/react.png",
  },
  {
    language: "Next.js",
    icon: "/images/next.png",
  },
  {
    language: "Node.js",
    icon: "/images/node.png",
  },
  {
    language: "Express.js",
    icon: "/images/express.png",
  },
  {
    language: "Nest.js",
    icon: "/images/nest.png",
  },
  {
    language: "Tailwindcss",
    icon: "/images/tailwind.png",
  },
  {
    language: "Bootstrap",
    icon: "/images/bootstrap.png",
  },
  {
    language: "Styled components",
    icon: "/images/styledComponents.png",
  },
  {
    language: "Framer Motion",
    icon: "/images/framerMotion.png",
  },
  {
    language: "PostgreSQL",
    icon: "/images/postgresql.png",
  },
  {
    language: "MySQL",
    icon: "/images/mysql.png",
  },
  {
    language: "Jest",
    icon: "/images/jest.png",
  },
  {
    language: "Prisma",
    icon: "/images/prisma.png",
  },
  {
    language: "Supabase",
    icon: "/images/supabase.png",
  },
  {
    language: "Git",
    icon: "/images/git.png",
  },
  {
    language: "Docker",
    icon: "/images/docker.png",
  },
  {
    language: "Storybook",
    icon: "/images/storybook.png",
  },
  {
    language: "Figma",
    icon: "/images/figma.png",
  },
];

const portfolioItems = [
  {
    index: 1,
    title: "Fairy share",
    description:
      "This web application promotes fairness and ensures task completion by providing a calendar and expense management feature for shared housing.",
    img: "bg-[url('/images/portfolio1.png')]",
    technologies: [
      "Next.js",
      "Typescript",
      "React Query",
      "Storybook",
      "Nest.js",
      "Jest",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
      "NGINX",
    ],
    link: "https://fairyshare.xyz/",
    githubLink: "https://github.com/HAK2024/fairy-share",
    bgColor1: "bg-amber-200",
    borderColor1: "lg:border-amber-500",
    textColor1: "text-amber-500",
    buttonBgColor: "bg-amber-400",
    borderColor2: "border-amber-200",
    bgColor3: "bg-amber-600",
  },
  {
    index: 2,
    title: "GIS and AI Company's website",
    description:
      "Designed and developed the official website for a leading GIS and AI company, utilizing Next.js for the frontend to ensure a visually appealing and responsive design.",
    img: "bg-[url('/images/portfolio2.png')]",
    technologies: [
      "Next.js",
      "Typescript",
      "Styled Components",
      "WordPress",
      "Docker",
    ],
    link: "https://www.microgeo.biz/",
    githubLink: "https://github.com/microbase-miraie/Microbase-website",
    bgColor1: "bg-sky-200",
    borderColor1: "lg:border-sky-500",
    textColor1: "text-sky-500",
    buttonBgColor: "bg-sky-400",
    borderColor2: "border-sky-900",
    bgColor3: "bg-sky-600",
  },
  {
    index: 3,
    title: "Real-time chat app",
    description:
      "This web application offers real-time group chat and direct messaging, all wrapped in a sleek and user-friendly interface.",
    img: "bg-[url('/images/portfolio3.png')]",
    technologies: [
      "React",
      "Typescript",
      "Redux toolkit",
      "Shadcn/ui",
      "Express.js",
      "Socket io",
      "Prisma",
      "PostgreSQL",
      "Github actions",
    ],
    link: null,
    githubLink: "https://github.com/Atsuki02/chat-app",
    bgColor1: "bg-blue-200",
    borderColor1: "lg:border-blue-500",
    textColor1: "text-blue-500",
    buttonBgColor: "bg-blue-400",
    borderColor2: "border-slate-800",
    bgColor3: "bg-blue-600",
  },
  {
    index: 4,
    title: "Blog app",
    description:
      "This application allows users to share their own posts and discover a wide range of articles.",
    img: "bg-[url('/images/portfolio4.png')]",
    technologies: ["Next.js", "Typescript", "TailwindCSS", "Supabase"],
    link: null,
    githubLink: "https://github.com/Atsuki02/AtsuBlog",
    bgColor1: "bg-slate-200",
    borderColor1: "lg:border-slate-500",
    textColor1: "text-slate-500",
    buttonBgColor: "bg-slate-400",
    borderColor2: "border-slate-800",
    bgColor3: "bg-slate-600",
  },
  {
    index: 5,
    title: "Artist portfolio site",
    description:
      "Welcome to the portfolio website of a distinguished makeup artist, where you'll discover an exquisite collection of artistic and visually stunning photographs.",
    img: "bg-[url('/images/portfolio5.png')]",
    technologies: ["Astro", "Typescript", "MicroCMS", "Tailwind CSS"],
    link: "https://koseikitada.com/",
    githubLink: "https://github.com/Atsuki02/Kosei-s-portfolio",
    bgColor1: "bg-zinc-200",
    borderColor1: "lg:border-zinc-500",
    textColor1: "text-zinc-500",
    buttonBgColor: "bg-zinc-400",
    borderColor2: "border-zinc-600",
    bgColor3: "bg-zinc-600",
  },
  {
    index: 6,
    title: "Tetris",
    description:
      "Experience classic Tetris fun with my addictive app! Arrange falling blocks, clear lines, and aim for high scores in this timeless puzzle challenge.",
    img: "bg-[url('/images/portfolio6.png')]",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "https://teamdev-a-red.github.io/work-space-tetris/",
    githubLink: "https://github.com/teamdev-A-Red/work-space-tetris",
    bgColor1: "bg-sky-200",
    borderColor1: "lg:border-sky-500",
    textColor1: "text-sky-500",
    buttonBgColor: "bg-sky-400",
    borderColor2: "border-sky-800",
    bgColor3: "bg-sky-600",
  },
  {
    index: 7,
    title: "File Directory System",
    description:
      "Explore a user-friendly File Directory System, where commands empower you to navigate, create, and manage your virtual world effortlessly!",
    img: "bg-[url('/images/portfolio7.png')]",
    technologies: ["HTML", "CSS", "Typescript"],
    link: "https://filedirectorysys.netlify.app/",
    githubLink: "https://github.com/Atsuki02/File-Directory-System",
    bgColor1: "bg-emerald-200",
    borderColor1: "lg:border-emerald-500",
    textColor1: "text-emerald-500",
    buttonBgColor: "bg-emerald-400",
    borderColor2: "border-black",
    bgColor3: "bg-emerald-600",
  },
  {
    index: 8,
    title: "Clicker Empire Game",
    description:
      "This is a game where you can accumulate wealth by taking on various jobs, making investments, and investing in real estate, among other activities. The goal of the game is to amass wealth and establish a prosperous empire within the city.",
    img: "bg-[url('/images/portfolio8.png')]",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://clicker-empire-game.netlify.app/",
    githubLink: "https://github.com/Atsuki02/Clicker-Empire-Game",
    bgColor1: "bg-amber-200",
    borderColor1: "lg:border-amber-500",
    textColor1: "text-amber-500",
    buttonBgColor: "bg-amber-400",
    borderColor2: "border-amber-500",
    bgColor3: "bg-amber-600",
  },
  {
    index: 9,
    title: "BBQ restaurant website",
    description:
      "This website belongs to a BBQ restaurant, where we proudly present our services through enticing pictures that will tempt your taste buds and captivate your senses. ",
    img: "bg-[url('/images/portfolio9.png')]",
    technologies: ["HTML", "SASS", "Javascript"],
    link: "https://hokuden.verse.jp/",
    githubLink: "https://github.com/Atsuki02/Yakiniku-Hokuden-website",
    bgColor1: "bg-red-200",
    borderColor1: "lg:border-red-500",
    textColor1: "text-red-500",
    buttonBgColor: "bg-red-400",
    borderColor2: "border-black",
    bgColor3: "bg-red-600",
  },
];

export { contacts, skills, portfolioItems };
