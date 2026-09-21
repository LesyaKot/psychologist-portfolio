"use client";

import { useState } from "react";
import css from "./Footer.module.css";

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "" });

  async function clientAction(formData) {
    setErrors({ name: "", phone: "" });

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const message = formData.get("message") || "";

    const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s']+$/;
    const phoneRegex = /^\+380\d{9}$/;

    let hasError = false;
    let newErrors = { name: "", phone: "" };

    if (!name || !nameRegex.test(name)) {
      newErrors.name = "Ім'я повинно містити лише літери!";
      hasError = true;
    }

    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = "Номер має починатися з +380 та містити 9 цифр!";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log("=== ЗАЯВКУ З ФУТЕРА ВІДПРАВЛЕНО ===");
    console.log(`Ім'я: ${name}, Телефон: ${phone}, Запит: ${message}`);

    setIsLoading(false);
    setIsSubmitted(true);
  }

  return (
    <footer className={css.footerOuter}>
      <div className={css.container}>
        <div className={css.leftSide}>
          <h2 className={css.title}>
            Почніть свій <span className={css.italicRow}>шлях.</span>
          </h2>
          <p className={css.subtitle}>
            Готові почати? Я тут, щоб вислухати. Зв'яжіться зі мною, щоб
            узгодити першу консультацію.
          </p>
          <div className={css.contactsBlock}>
            <a
              href="mailto:hello@tetyanakolesnykova.com"
              className={css.contactLink}
            >
              hello@tetyanakolesnykova.com
            </a>
            <a href="tel:+380*********" className={css.contactLink}>
              +380 *********
            </a>
          </div>
        </div>

        <div className={css.rightSide}>
          {isSubmitted ? (
            <div className={css.successMessage}>
              <div className={css.successCheck}>✓</div>
              <h3>Заявку успішно надіслано!</h3>
              <p>Тетяна зв'яжеться з вами найближчим часом.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className={css.resetBtn}
              >
                Надіслати ще одну заявку
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                clientAction(new FormData(e.target));
              }}
              className={css.form}
            >
              <div className={css.inputGroup}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ваше ім'я"
                  className={css.underlineInput}
                  suppressHydrationWarning={true}
                />
                {errors.name && <p className={css.errorText}>{errors.name}</p>}
              </div>

              <div className={css.inputGroup}>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="+380..."
                  className={css.underlineInput}
                  suppressHydrationWarning={true}
                />
                {errors.phone && (
                  <p className={css.errorText}>{errors.phone}</p>
                )}
              </div>

              <div className={css.inputGroup}>
                <input
                  type="text"
                  name="message"
                  placeholder="Мене цікавить... (короткий запит)"
                  className={css.underlineInput}
                  suppressHydrationWarning={true}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={css.submitBtn}
              >
                {isLoading ? "Відправка..." : "Надіслати запит →"}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={css.bottomBar}>
        <p>© 2026 ТЕТЯНА КОЛЕСНИКОВА. ПСИХОТЕРАПІЯ.</p>
      </div>
    </footer>
  );
}
