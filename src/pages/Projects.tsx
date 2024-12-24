import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Mistle: Online Diagrams Design Tool",
    category: "Web App",
    description:
      "A web application that allows users to create UML 3.0 diagrams and flowcharts.",
    image: "/M.webp",
    mobileImage: "mistle.webp",
    link: "https://mistle-1rft.vercel.app/",
  },
  {
    title: "Kwiktweaks - A Multipurpose Webapp",
    category: "Web App",
    description: "Just a random multipurpose app that might come in-handy..",
    image: "KT.webp",
    mobileImage: "kwiktweaks.webp",
    link: "https://kwiktweaks.vercel.app/",
  },
  {
    title: "Portfolio v1",
    category: "Personal Website",
    description:
      "My first portfolio website, showcasing my skills and projects.",
    image: "PF.webp",
    mobileImage: "portfolio.webp",
    link: "https://iKamranShahzad.vercel.app/",
  },
  {
    title: "BlinkSend - File Sharing Webapp",
    category: "Web App",
    description:
      "A file sharing web application that allows users to send files securely.",
    image: "BS.webp",
    mobileImage: "BlinkSend.webp",
    link: "https://blinksend.vercel.app/",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0A0A] text-white p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-gray-200 text-4xl md:text-5xl font-bold mb-6">
            My Remarkable Projects
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            A showcase of my best work in web design and development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Projects;
