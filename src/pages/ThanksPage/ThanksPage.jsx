import React from "react";
import { Link } from "react-router-dom";

function ThanksPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>ThanksPage</h1>
      <p>Thank you for your message!</p>
      <p>Entrarei em contato em breve!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ThanksPage;
