import React, { useState } from "react";

const INITIAL_STATE = {
  name: "",
  project: "",
  message: "",
};

function FeedbackForm({ onSubmitted }) {
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
        setErrors(result?.errors || [result?.error || "Erro ao enviar feedback."]);
        return;
      }

      setForm(INITIAL_STATE);
      setSuccess("Feedback enviado! Obrigado por contribuir.");
      onSubmitted?.(result.feedback);
    } catch {
      setErrors(["Erro de conexao. Tente novamente."]);
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h3 className="feedback-form-title">Deixe seu feedback</h3>
      <p className="feedback-form-subtitle">
        Seu feedback sera enviado para aprovacao antes de aparecer no site.
      </p>

      <label className="feedback-form-label" htmlFor="feedback-name">
        Nome
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
        placeholder="Seu nome"
      />

      <label className="feedback-form-label" htmlFor="feedback-project">
        Projeto (opcional)
      </label>
      <input
        id="feedback-project"
        name="project"
        className="feedback-form-input"
        value={form.project}
        onChange={handleChange}
        maxLength={120}
        placeholder="Ex: COP 15 UFMS"
      />

      <label className="feedback-form-label" htmlFor="feedback-message">
        Feedback
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
        placeholder="Conte como foi sua experiencia..."
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
        {sending ? "Enviando..." : "Enviar feedback"}
      </button>
    </form>
  );
}

export default FeedbackForm;
