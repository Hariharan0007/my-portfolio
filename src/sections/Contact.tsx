import { motion } from "framer-motion";
import { ContactScene } from "../motions/Contact";
import { colors } from "../utils/Constants";
import { textStyles } from "../utils/Typography";
import {
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverGlow,
} from "../utils/Animations";
import { CyberpunkButton } from "../components/AnimatedSection";
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
      <motion.div className="space-y-8" {...staggerContainer}>
        <motion.p
          style={textStyles.bodyLarge}
          {...staggerItem}
          className="text-center"
        >
          Feel free to reach out to me for any opportunities, collaborations, or
          just to say hello!
        </motion.p>

        <motion.div className="grid md:grid-cols-2 gap-8" {...staggerItem}>
          <motion.div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: "rgba(26, 35, 50, 0.3)",
              border: `1px solid ${colors.cyberpunk_grid}`,
            }}
            {...hoverScale}
            {...hoverGlow}
          >
            <h3 style={textStyles.h4} className="mb-4">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div>
                <h4 style={textStyles.accent} className="mb-2">
                  Email
                </h4>
                <p style={textStyles.body} className="text-sm">
                  hariharan.dev@example.com
                </p>
              </div>
              <div>
                <h4 style={textStyles.accent} className="mb-2">
                  Phone
                </h4>
                <p style={textStyles.body} className="text-sm">
                  +91 98765 43210
                </p>
              </div>
              <div>
                <h4 style={textStyles.accent} className="mb-2">
                  Location
                </h4>
                <p style={textStyles.body} className="text-sm">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: "rgba(26, 35, 50, 0.3)",
              border: `1px solid ${colors.cyberpunk_grid}`,
            }}
            {...hoverScale}
            {...hoverGlow}
          >
            <h3 style={textStyles.h4} className="mb-4">
              Connect With Me
            </h3>
            <div className="space-y-4">
              <div>
                <h4 style={textStyles.accent} className="mb-2">
                  LinkedIn
                </h4>
                <p style={textStyles.body} className="text-sm">
                  linkedin.com/in/hariharan-dev
                </p>
              </div>
              <div>
                <h4 style={textStyles.accent} className="mb-2">
                  GitHub
                </h4>
                <p style={textStyles.body} className="text-sm">
                  github.com/hariharan-dev
                </p>
              </div>
              <div>
                <h4 style={textStyles.accent} className="mb-2">
                  Twitter
                </h4>
                <p style={textStyles.body} className="text-sm">
                  @hariharan_dev
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          {...staggerItem}
        >
          <CyberpunkButton
            variant="primary"
            onClick={() =>
              window.open("mailto:hariharan.dev@example.com", "_blank")
            }
          >
            Send Email
          </CyberpunkButton>
          <CyberpunkButton
            variant="secondary"
            onClick={() =>
              window.open("https://linkedin.com/in/hariharan-dev", "_blank")
            }
          >
            LinkedIn
          </CyberpunkButton>
          <CyberpunkButton
            variant="accent"
            onClick={() =>
              window.open("https://github.com/hariharan-dev", "_blank")
            }
          >
            GitHub
          </CyberpunkButton>
        </motion.div>

        <motion.div className="text-center" {...staggerItem}>
          <p style={textStyles.body} className="text-sm opacity-80">
            Available for freelance projects and full-time opportunities
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ContactSection;
