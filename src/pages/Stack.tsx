import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiGithub,
} from "react-icons/si";

const tools = [
  {
    icon: SiNextdotjs,
    name: "Next.js",
    category: "Framework",
    description:
      "Next.js is a React framework that enables server-side rendering and static site generation for building fast and scalable web applications. It simplifies the development process and improves performance.",
    link: "https://nextjs.org/",
  },
  {
    icon: SiReact,
    name: "ReactJS",
    category: "Library",
    description:
      "ReactJS is a JavaScript library for building user interfaces, allowing developers to create reusable UI components. It is widely used for its efficiency and flexibility.",
    link: "https://reactjs.org/",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    category: "CSS Framework",
    description:
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing CSS. It helps in creating responsive and modern designs quickly.",
    link: "https://tailwindcss.com/",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    category: "Database",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it easy to work with and scale. It is known for its high performance and scalability.",
    link: "https://www.mongodb.com/",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    category: "Programming Language",
    description:
      "JavaScript is a versatile programming language that allows developers to create dynamic and interactive web applications. It is an essential language for web development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    category: "Programming Language",
    description:
      "TypeScript is a statically typed superset of JavaScript that adds type safety and enhances developer productivity. It helps in catching errors early and improving code quality.",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: SiGo,
    name: "GoLang",
    category: "Programming Language",
    description:
      "GoLang is a statically typed, compiled programming language designed for simplicity and performance, often used for backend development. It is known for its concurrency support and efficiency.",
    link: "https://golang.org/",
  },
  {
    icon: SiGithub,
    name: "GitHub",
    category: "Version Control",
    description:
      "GitHub is a platform for version control and collaboration, allowing developers to manage and share their code repositories. It is widely used for open-source and private projects.",
    link: "https://github.com/",
  },
];

const Stack = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0A0A] text-white p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">My Tech Toolbox</h1>
          <p className="text-gray-400 text-lg mb-12">
            The essential tools and technologies I use to bring ideas to life.
          </p>

          <div className="space-y-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.a
                  key={index}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#111] rounded-lg p-8"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start">
                    <div className="bg-[#222] p-4 rounded-lg mr-6">
                      <Icon className="w-8 h-8 text-[#4ADE80]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {tool.name}
                      </h3>
                      <div className="text-[#4ADE80] text-sm mb-4">
                        {tool.category}
                      </div>
                      <p className="text-gray-400 leading-relaxed hidden md:block">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Stack;
