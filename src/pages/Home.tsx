import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const recentProjects = [
  {
    title: "Blinksend - File Sharing",
    category: "Web App",
    description:
      "A file sharing web application that allows users to send files securely.",
    image: "/BS.webp",
    mobileImage: "mistle.webp",
    link: "https://blinksend.vercel.app/",
  },
  {
    title: "Kwiktweaks - A Multipurpose Webapp",
    category: "Web App",
    description: "Just a random multipurpose app that might come in-handy..",
    image: "KT.webp",
    mobileImage: "kwiktweaks.webp",
    link: "https://kwiktweaks.vercel.app/",
  },
];

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0A0A] text-white p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-gray-200 text-5xl font-semibold mb-6">
            Hello Everyone! I'm Kamran
            <span className="text-[#4ADE80] animate-blink cursor-text">|</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            I&apos;m a passionate developer who loves building things for the
            web. My journey into web development began during my studies in
            Computer Science, where I dove into creating websites and designing
            systems.
          </p>
          <div className="flex items-center text-gray-400">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4ADE80"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Lahore, Pakistan
          </div>

          <div className="mt-12">
            <h2 className="text-gray-200 text-2xl font-semibold mb-8">
              Recent Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </motion.div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Home;
