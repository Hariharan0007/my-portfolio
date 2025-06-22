import { motion } from "framer-motion";
import { ContactScene } from "../motions/Contact";
import { colors } from "../utils/Constants";
import Section from "./Main";

const ContactSection = () => {
  return (
    <Section
      title="Contact"
      id="contact"
      scene={<ContactScene />}
      bgColor={`bg-gradient-to-b from-[${colors.background1}] to-[${colors.accent5}]/10`}
      decoration="right"
      disableScene
    >
      <div className="space-y-6">
        <p
          className="text-lg text-secondary"
          style={{ fontFamily: "monospace" }}
        >
          Feel free to reach out to me for any opportunities or just to say
          hello!
        </p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="mailto:your.email@example.com"
            className="px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow text-secondary"
            whileHover={{ scale: 1.05 }}
            style={{ fontFamily: "monospace" }}
          >
            Email Me
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow text-secondary"
            whileHover={{ scale: 1.05 }}
            style={{ fontFamily: "monospace" }}
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
