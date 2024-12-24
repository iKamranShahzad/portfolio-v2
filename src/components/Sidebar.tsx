import {
  Home,
  User,
  Briefcase,
  Layers,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "About", path: "/about" },
  { icon: Briefcase, label: "Projects", path: "/projects" },
  { icon: Layers, label: "Stack", path: "/stack" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Github, label: "Github", href: "https://github.com/iKamranShahzad" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ikamranshahzad/",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@Iemdrake",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileImage =
    "https://ikamranshahzad.vercel.app/alternate-picture.webp";

  const sidebarContent = (
    <>
      <div className="flex flex-col items-center mb-8">
        <img
          src={profileImage}
          alt="Profile"
          className="mt-6 w-100% h-48 rounded-xl mb-4 object-cover filter grayscale"
        />
        <div className="bg-[#0A0A0A] border border-[#4ADE80] w-auto h-auto text-center text-[#4ADE80] font-medium text-sm py-1 px-4 rounded-full inline-flex items-center">
          <span className="w-2 h-2 bg-[#4ADE80] rounded-full mr-2"></span>
          Available for Work
        </div>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div
                className={`flex items-center px-4 py-3 mb-2 rounded-lg ${
                  isActive ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
                }`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  className={`w-5 h-5 mr-3 ${
                    isActive ? "text-[#4ADE80]" : "text-gray-400"
                  }`}
                />
                <span className={isActive ? "text-white" : "text-gray-400"}>
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="flex justify-center space-x-4 mt-auto pt-6">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ y: -2 }}>
                <Icon className="w-5 h-5" />
              </motion.div>
            </a>
          );
        })}
      </div>
    </>
  );

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-[#1A1A1A] rounded-lg md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      <div className="fixed left-0 top-0 h-full w-[280px] bg-[#0A0A0A] border-r border-[#1A1A1A] p-6 hidden md:flex flex-col">
        {sidebarContent}
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#0A0A0A] z-40 p-6 md:hidden"
          >
            {sidebarContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
