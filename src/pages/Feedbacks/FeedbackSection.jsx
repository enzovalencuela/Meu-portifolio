import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useLanguage } from "@/components/ui/LanguageContext";
import FeedbackForm from "./FeedbackForm";
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
    <section id="feedbacks" className="section feedback-section" aria-labelledby="feedbacks-title">
      <h2 id="feedbacks-title">{copy.feedback.title}</h2>
      <p className="feedback-intro">{copy.feedback.description}</p>

      {loading ? <p className="feedback-info">{copy.feedback.loading}</p> : null}
      {error ? <p className="feedback-info feedback-error">{error}</p> : null}

      {!loading && !error ? (
        <div className="feedback-swiper-wrap">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={slidesPerView}
            className="feedback-swiper"
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <article className="feedback-card">
                  <p className="feedback-message">{feedback.message}</p>
                  <div className="feedback-meta">
                    <strong>{feedback.name}</strong>
                    <div className="feedback-meta-row">
                      {feedback.project ? (
                        <span>
                          {copy.feedback.projectLabel}: {feedback.project}
                        </span>
                      ) : (
                        <span>{copy.feedback.approvedLabel}</span>
                      )}
                      <time dateTime={feedback.createdAt}>
                        {copy.feedback.sentAtLabel} {formatDate(feedback.createdAt, language)}
                      </time>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <div className="feedback-card feedback-form-card">
                <FeedbackForm />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : null}
    </section>
  );
}

export default FeedbackSection;
