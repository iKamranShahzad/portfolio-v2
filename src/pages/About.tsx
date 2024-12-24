import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0A0A] text-white p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-gray-200 text-5xl font-bold mb-6">
            Get to Know Me
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            Hello, I&apos;m Kamran Shahzad, and I&apos;m more than just a web
            developer. My passion for building efficient, scalable, and
            user-friendly web apps drives everything I do. Crafting solutions
            that not only meet needs but also exceed expectations is what I
            strive for, ensuring every project is a step toward bringing your
            vision to life.
          </p>

          <div className="mb-16">
            <h2 className="text-gray-200 text-2xl font-semibold mb-8">Stack</h2>
            <p className="text-gray-400 mb-8">
              My technical toolkit includes proficiency in HTML, CSS,
              JavaScript, and frameworks like React and Next.js. I&apos;m also
              well-versed in building responsive, scalable architectures,
              ensuring that the websites I create perform seamlessly across all
              devices.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-gray-200 text-2xl font-semibold mb-8">
              Experience
            </h2>
            <div className="space-y-8">
              <motion.div
                className="bg-[#111] p-6 rounded-lg"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start">
                  <div className="bg-[#222] p-3 rounded-lg mr-4">
                    <Briefcase className="w-6 h-6 text-[#4ADE80]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Freelancer</h3>
                    <p className="text-gray-400">
                      Upwork Global Inc., 2024 - present
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#111] p-6 rounded-lg"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start">
                  <div className="bg-[#222] p-3 rounded-lg mr-4">
                    <Briefcase className="w-6 h-6 text-[#4ADE80]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Junior Web Developer
                    </h3>
                    <p className="text-gray-400">Solfreaks, 2021 - 2022</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#111] p-6 rounded-lg"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start">
                  <div className="bg-[#222] p-3 rounded-lg mr-4">
                    <Briefcase className="w-6 h-6 text-[#4ADE80]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Freelance Web Developer
                    </h3>
                    <p className="text-gray-400">Fiverr Inc., 2020 - present</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-gray-200 text-2xl font-semibold mb-8">
              Education
            </h2>
            <div className="space-y-8">
              <motion.div
                className="bg-[#111] p-6 rounded-lg"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start">
                  <div className="bg-[#222] p-3 rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6 text-[#4ADE80]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Bachelor's Degree in Computer Science
                    </h3>
                    <p className="text-gray-400">University of Gujrat, 2024</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#111] p-6 rounded-lg"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start">
                  <div className="bg-[#222] p-3 rounded-lg mr-4">
                    <Award className="w-6 h-6 text-[#4ADE80]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Certification in User Experience (UX) Design
                    </h3>
                    <p className="text-gray-400">Digiskills, 2023</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
