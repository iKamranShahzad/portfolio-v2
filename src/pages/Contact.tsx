import { useState, useRef } from "react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SiFiverr, SiUpwork } from "react-icons/si";
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialSteam,
  SlSocialYoutube,
} from "react-icons/sl";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_frm5l9r",
          "template_kh0949j",
          form.current,
          "yFgNbIUjZHt-SyXp8"
        )
        .then(
          () => {
            toast.success("Message sent successfully!", {
              style: {
                background: "#4ADE80",
                color: "#0A0A0A",
              },
              iconTheme: {
                primary: "#0A0A0A",
                secondary: "#4ADE80",
              },
            });
            setLoading(false);
            form.current?.reset();
          },
          () => {
            toast.error("Failed to send message. Please try again.", {
              style: {
                background: "#FF0000",
                color: "#FFFFFF",
              },
              iconTheme: {
                primary: "#FFFFFF",
                secondary: "#FF0000",
              },
            });
            setLoading(false);
          }
        );
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0A0A] text-white p-4 md:p-8 lg:p-12">
        <Toaster />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-gray-200 text-3xl md:text-5xl font-bold mb-6">
            Let's Connect!
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Message Me Card */}
            <div className="bg-[#111] rounded-lg p-4 md:p-8">
              <h2 className="text-gray-200 text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Message Me
              </h2>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full bg-[#222] rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full bg-[#222] rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-[#222] rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Write a message..."
                    rows={4}
                    className="w-full bg-[#222] rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#4ADE80] text-black font-semibold py-2 md:py-3 rounded-lg hover:bg-[#3aa368] transition-colors"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>

            {/* Contact & Social Media Card */}
            <div className="bg-[#111] rounded-lg p-4 md:p-8">
              <div className="h-full flex flex-col">
                {/* Contact Section */}
                <div className="mb-8">
                  <h2 className="text-gray-200 text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                    Contact
                  </h2>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center text-gray-400 whitespace-nowrap"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-3 flex-shrink-0" />
                      <span className="overflow-hidden">
                        mailkamranshahzad@gmail.com
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex items-center text-gray-400"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-3 flex-shrink-0" />
                      +92 318 7363224
                    </motion.div>
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="flex-1">
                  <h2 className="text-gray-200 text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                    Social Media
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: SlSocialGithub,
                        label: "Github",
                        href: "https://github.com/iKamranShahzad",
                      },
                      {
                        icon: SlSocialLinkedin,
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/in/ikamranshahzad/",
                      },
                      {
                        icon: SlSocialYoutube,
                        label: "YouTube",
                        href: "https://www.youtube.com/@Iemdrake",
                      },
                      {
                        icon: SlSocialSteam,
                        label: "Steam",
                        href: "https://steamcommunity.com/id/iemdrake",
                      },
                      {
                        icon: SiUpwork,
                        label: "Upwork",
                        href: "https://www.upwork.com/freelancers/~019aba17c4e9f5b3ea",
                      },
                      {
                        icon: SiFiverr,
                        label: "Fiverr",
                        href: "https://www.fiverr.com/peacefuldrake/buying?source=avatar_menu_profile",
                      },
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-white"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-3 flex-shrink-0" />
                          {social.label}
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Contact;
