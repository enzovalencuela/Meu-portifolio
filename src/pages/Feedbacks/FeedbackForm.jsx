import React, { useState } from "react";
import { useLanguage } from "@/components/ui/LanguageContext";

const INITIAL_STATE = {
  name: "",
  project: "",
  message: "",
};

function FeedbackForm({ onSubmitted }) {
  const { copy } = useLanguage();
  const [form, setForm] = useState(INITIAL_STATE);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setErrors([]);
    setSuccess("");

    try {
      const response = await fetch("/api/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        const translatedErrors = (result?.errors || []).map(
          (code) => copy.feedback.errors[code] || copy.feedback.errors.GENERIC,
        );
        setErrors(
          translatedErrors.length > 0
            ? translatedErrors
            : [copy.feedback.errors[result?.error] || copy.feedback.errors.GENERIC],
        );
        return;
      }

      setForm(INITIAL_STATE);
      setSuccess(copy.feedback.success);
      onSubmitted?.(result.feedback);
    } catch {
      setErrors([copy.feedback.errors.NETWORK]);
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit} noValidate>
      <h3 className="feedback-form-title">{copy.feedback.form.title}</h3>
      <p className="feedback-form-subtitle">{copy.feedback.form.subtitle}</p>

      <label className="feedback-form-label" htmlFor="feedback-name">
        {copy.feedback.form.name}
      </label>
      <input
        id="feedback-name"
        name="name"
        className="feedback-form-input"
        value={form.name}
        onChange={handleChange}
        minLength={2}
        maxLength={80}
        required
        placeholder={copy.feedback.form.namePlaceholder}
        autoComplete="name"
      />

      <label className="feedback-form-label" htmlFor="feedback-project">
        {copy.feedback.form.project}
      </label>
      <input
        id="feedback-project"
        name="project"
        className="feedback-form-input"
        value={form.project}
        onChange={handleChange}
        maxLength={120}
        placeholder={copy.feedback.form.projectPlaceholder}
        autoComplete="organization-title"
      />

      <label className="feedback-form-label" htmlFor="feedback-message">
        {copy.feedback.form.message}
      </label>
      <textarea
        id="feedback-message"
        name="message"
        className="feedback-form-textarea"
        value={form.message}
        onChange={handleChange}
        minLength={10}
        maxLength={800}
        required
        placeholder={copy.feedback.form.messagePlaceholder}
      />

      {errors.length > 0 ? (
        <ul className="feedback-form-errors" role="alert">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      ) : null}

      {success ? (
        <p className="feedback-form-success" role="status">
          {success}
        </p>
      ) : null}

      <button className="feedback-form-button" type="submit" disabled={sending}>
        {sending ? copy.feedback.form.sending : copy.feedback.form.submit}
      </button>
    </form>
  );
}

export default FeedbackForm;
