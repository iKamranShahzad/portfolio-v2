import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  mobileImage: string; // New prop for mobile image
  link: string;
}

const ProjectCard = ({
  title,
  category,
  description,
  image,
  mobileImage, // Add new prop
  link,
}: ProjectCardProps) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" to={link}>
      <div className="space-y-3">
        <motion.article
          className="bg-[#111111] rounded-xl overflow-hidden hover:ring-2 hover:ring-[#4ADE80]/50 transition-all duration-300"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <motion.img
            src={mobileImage}
            alt={title}
            className="xl:hidden w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src={image}
            alt={title}
            className="hidden xl:block w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.article>

        <div className="space-y-2">
          <span className="inline-block px-2.5 py-0.5 bg-[#4ADE80]/10 text-[#4ADE80] text-xs font-medium rounded-full">
            {category}
          </span>

          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-white line-clamp-1">
              {title}
            </h3>
            <p className="text-xs text-gray-400 line-clamp-2">{description}</p>
          </div>

          <motion.div
            className="flex items-center text-[#4ADE80] text-xs"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            <span className="font-medium">View Details</span>
            <motion.div
              className="ml-1.5"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
