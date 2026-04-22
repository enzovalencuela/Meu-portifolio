/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "./Contacts.css";
import { useLanguage } from "@/components/ui/LanguageContext";

function Contacts() {
  const { copy } = useLanguage();

  return (
    <section className="section contacts" id="contact">
      <motion.h2
        id="contact-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {copy.contact.title}
      </motion.h2>

      <div className="forms">
        <motion.div
          className="form-container"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <form
            className="form"
            action="https://formsubmit.co/39faa3fcb02952ebcd0a31aa7224676a"
            method="POST"
          >
            <input type="hidden" name="_subject" value={copy.contact.subject} />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://enzovalencuela.com/"
            />
            <div className="form-group">
              <label htmlFor="email">{copy.contact.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder={copy.contact.emailPlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="textarea">{copy.contact.message}</label>
              <textarea
                name="message"
                id="textarea"
                rows="10"
                placeholder={copy.contact.messagePlaceholder}
                required
              />
            </div>

            <button className="form-submit-btn" type="submit">
              {copy.contact.submit}
            </button>
          </form>
        </motion.div>

        <motion.div
          className="container"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="card-contact">
            <div className="front">
              <div className="card-top">
                <p className="card-top-para">{copy.contact.profile}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                ></path>
              </svg>
              <p className="heading"> Enzo Valençuela </p>
              <p className="follow">{copy.contact.follow}</p>

              <div className="mobile-contact-actions">
                <p className="mobile-contact-title">{copy.contact.networks}</p>
                <div className="icons mobile-icons">
                  <motion.a
                    href="https://github.com/enzovalencuela"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={copy.contact.githubAria}
                    whileHover={{ scale: 1.2 }}
                  >
                    <i className="fab fa-github"></i>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/qr/HKVHSXGNBYRSF1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={copy.contact.whatsappAria}
                    whileHover={{ scale: 1.2 }}
                  >
                    <i className="fab fa-whatsapp"></i>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/enzo-silva10/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={copy.contact.linkedinAria}
                    whileHover={{ scale: 1.2 }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="back">
              <p className="heading">{copy.contact.networks}</p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor"
                className="bi bi-person-add"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"></path>
              </svg>
              <div className="icons">
                <motion.a
                  href="https://github.com/enzovalencuela"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={copy.contact.githubAria}
                  whileHover={{ scale: 1.2 }}
                >
                  <i className="fab fa-github"></i>
                </motion.a>

                <motion.a
                  href="https://wa.me/qr/HKVHSXGNBYRSF1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={copy.contact.whatsappAria}
                  whileHover={{ scale: 1.2 }}
                >
                  <i className="fab fa-whatsapp"></i>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/enzo-silva10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={copy.contact.linkedinAria}
                  whileHover={{ scale: 1.2 }}
                >
                  <i className="fab fa-linkedin"></i>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contacts;
