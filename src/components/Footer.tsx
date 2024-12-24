import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-20 border-t border-[#222] pt-8"
    >
      <Link to="/contact">
        <motion.div
          className="text-center cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect!
          </h2>
          <p className="text-gray-400">© 2018-present | Kamran Shahzad</p>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Footer;
