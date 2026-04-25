import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaCalendarAlt, FaEllipsisH, FaPaperclip } from "react-icons/fa";
import { useLanguage } from "@/components/ui/LanguageContext";
import "./FeedbackSection.css";

function formatDate(dateValue, language) {
  try {
    const localeMap = {
      pt: "pt-BR",
      en: "en-US",
      es: "es-ES",
      de: "de-DE",
      it: "it-IT",
    };

    return new Intl.DateTimeFormat(localeMap[language] || "pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(dateValue));
  } catch {
    return "";
  }
}

function FeedbackSection() {
  const { copy, language } = useLanguage();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadFeedbacks() {
      try {
        const response = await fetch("/api/feedbacks");
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result?.error || "Erro ao carregar feedbacks.");
        }

        if (active) {
          setFeedbacks(result.feedbacks || []);
        }
      } catch {
        if (active) {
          setError(copy.feedback.loadError);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadFeedbacks();
    return () => {
      active = false;
    };
  }, [copy.feedback.loadError]);

  const slidesPerView = useMemo(
    () => ({
      0: { slidesPerView: 1, spaceBetween: 12 },
      768: { slidesPerView: 1.2, spaceBetween: 16 },
      1024: { slidesPerView: 1.8, spaceBetween: 20 },
    }),
    [],
  );

  return (
    <section
      id="feedbacks"
      className="section feedback-section"
      aria-labelledby="feedbacks-title"
    >
      <h2 id="feedbacks-title">{copy.feedback.title}</h2>
      <p className="feedback-intro">{copy.feedback.description}</p>

      {loading ? (
        <p className="feedback-info">{copy.feedback.loading}</p>
      ) : null}
      {error ? <p className="feedback-info feedback-error">{error}</p> : null}

      {!loading && !error ? (
        <div className="feedback-swiper-wrap">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={slidesPerView}
            autoHeight
            className="feedback-swiper"
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <article className="feedback-card task-card">
                  <div className="feedback-tags">
                    <span className="feedback-tag">{feedback.name}</span>
                  </div>

                  <p className="feedback-message">{feedback.message}</p>

                  <div className="feedback-stats">
                    <time
                      className="feedback-stat-item"
                      dateTime={feedback.createdAt}
                    >
                      <FaCalendarAlt />
                      <span>
                        {copy.feedback.sentAtLabel}{" "}
                        {formatDate(feedback.createdAt, language)}
                      </span>
                    </time>

                    <div className="feedback-stat-item">
                      <FaPaperclip />
                      {feedback.project && (
                        <span>
                          `${copy.feedback.projectLabel}: ${feedback.project}`
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </section>
  );
}

export default FeedbackSection;
