"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqSection({ faqData  , title}) {
  const [activeFaq, setActiveFaq] = useState(faqData[0]?.id ?? null);

  const handleToggle = (faqId) => {
    setActiveFaq((currentFaq) =>
      currentFaq === faqId ? null : faqId
    );
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="head">
          <span className="eyebrow">Common Questions</span>
          <h2>{title}</h2>
        </div>

        <div className="acc">
          {faqData.map((faq) => {
            const isOpen = activeFaq === faq.id;
            const answerId = `faq-answer-${faq.id}`;
            const buttonId = `faq-button-${faq.id}`;

            return (
              <div
                className={`acc-item ${isOpen ? "open" : ""}`}
                key={faq.id}
              >
                <button
                  type="button"
                  className="acc-q"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => handleToggle(faq.id)}
                >
                  <span>{faq.question}</span>

                  <span className="sign" aria-hidden="true">
                    <Plus size={20} strokeWidth={2.2} />
                  </span>
                </button>

                <div
                  className="acc-a"
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <div className="acc-a-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}