import React, { useState } from "react";
import { useLanguage } from "@/components/ui/LanguageContext";

const INITIAL_STATE = {
  name: "",
  project: "",
  message: "",
};

function FeedbackForm({ onSubmitted, variant = "feedback" }) {
  const { copy } = useLanguage();
  const [form, setForm] = useState(INITIAL_STATE);
  const [sending, setSending] = useState(false);
  const [errorCodes, setErrorCodes] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const isContactVariant = variant === "contact";
  const classes = isContactVariant
    ? {
        form: "form",
        title: "feedback-inline-title",
        subtitle: "feedback-inline-subtitle",
        label: "feedback-inline-label",
        input: "feedback-inline-input",
        textarea: "feedback-inline-textarea",
        errors: "feedback-inline-errors",
        success: "feedback-inline-success",
        button: "form-submit-btn",
      }
    : {
        form: "feedback-form",
        title: "feedback-form-title",
        subtitle: "feedback-form-subtitle",
        label: "feedback-form-label",
        input: "feedback-form-input",
        textarea: "feedback-form-textarea",
        errors: "feedback-form-errors",
        success: "feedback-form-success",
        button: "feedback-form-button",
      };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setErrorCodes([]);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        const codes = result?.errors?.length ? result.errors : [result?.error || "GENERIC"];
        setErrorCodes(codes);
        return;
      }

      setForm(INITIAL_STATE);
      setIsSuccess(true);
      onSubmitted?.(result.feedback);
    } catch {
      setErrorCodes(["NETWORK"]);
    } finally {
      setSending(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <h3 className={classes.title}>{copy.feedback.form.title}</h3>
      <p className={classes.subtitle}>{copy.feedback.form.subtitle}</p>

      <div className={isContactVariant ? "form-group" : ""}>
      <label className={classes.label} htmlFor="feedback-name">
        {copy.feedback.form.name}
      </label>
      <input
        id="feedback-name"
        name="name"
        className={classes.input}
        value={form.name}
        onChange={handleChange}
        minLength={2}
        maxLength={80}
        required
        placeholder={copy.feedback.form.namePlaceholder}
        autoComplete="name"
      />
      </div>

      <div className={isContactVariant ? "form-group" : ""}>
      <label className={classes.label} htmlFor="feedback-project">
        {copy.feedback.form.project}
      </label>
      <input
        id="feedback-project"
        name="project"
        className={classes.input}
        value={form.project}
        onChange={handleChange}
        maxLength={120}
        placeholder={copy.feedback.form.projectPlaceholder}
        autoComplete="organization-title"
      />
      </div>

      <div className={isContactVariant ? "form-group" : ""}>
      <label className={classes.label} htmlFor="feedback-message">
        {copy.feedback.form.message}
      </label>
      <textarea
        id="feedback-message"
        name="message"
        className={classes.textarea}
        value={form.message}
        onChange={handleChange}
        minLength={10}
        maxLength={800}
        required
        placeholder={copy.feedback.form.messagePlaceholder}
      />
      </div>

      {errorCodes.length > 0 ? (
        <ul className={classes.errors} role="alert">
          {errorCodes.map((code) => (
            <li key={code}>{copy.feedback.errors[code] || copy.feedback.errors.GENERIC}</li>
          ))}
        </ul>
      ) : null}

      {isSuccess ? (
        <p className={classes.success} role="status">
          {copy.feedback.success}
        </p>
      ) : null}

      <button className={classes.button} type="submit" disabled={sending}>
        {sending ? copy.feedback.form.sending : copy.feedback.form.submit}
      </button>
    </form>
  );
}

export default FeedbackForm;
