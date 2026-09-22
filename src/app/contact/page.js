"use client";

import { useState } from "react";
import css from "./contacts.module.css";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "" });

  async function clientAction(formData) {
    setErrors({ name: "", phone: "" });

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const message = formData.get("message") || "";

    const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s']/;
    const phoneRegex = /^\+380\d{9}$/;

    let hasError = false;
    let newErrors = { name: "", phone: "" };

    if (!name || !nameRegex.test(name)) {
      newErrors.name = "Ім'я повинно містити лише літери!";
      hasError = true;
    }

    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone =
        "Номер має починатися з +380 та містити 9 цифр коду й номера (наприклад: +380931234567)!";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log("=== ДАНІ ВІДПРАВЛЕНО НА СЕРВЕР ===");
    console.log(`Ім'я: ${name}`);
    console.log(`Телефон: ${phone}`);
    console.log(`Запит: ${message}`);

    setIsLoading(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <main className={css.container}>
        <div className={css.successMessage}>
          <div className={css.successCheck}>✓</div>
          <h1 className={css.successTitle}>Заявку успішно надіслано!</h1>
          <p className={css.successText}>
            Дякуємо. Повідомлення вже прямує на електронну пошту психолога. Вона
            зв'яжеться з вами найближчим часом.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className={css.resetBtn}
          >
            Надіслати ще одну заявку
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={css.container}>
      <div className={css.headerBlock}>
        <h1 className={css.mainTitle}>Запис на консультацію</h1>
        <p className={css.mainSubtitle}>
          Залиште свої контакти, і я зв'яжуся з вами для узгодження дати та часу
          сесії.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          clientAction(new FormData(e.target));
        }}
        className={css.form}
      >
        <div className={css.inputGroup}>
          <label htmlFor="name" className={css.label}>
            Ваше ім'я
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Олена"
            className={`${css.input} ${errors.name ? css.inputError : ""}`}
          />
          {errors.name && <p className={css.errorText}>{errors.name}</p>}
        </div>

        <div className={css.inputGroup}>
          <label htmlFor="phone" className={css.label}>
            Номер телефону
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            placeholder="+380..."
            className={`${css.input} ${errors.phone ? css.inputError : ""}`}
          />
          {errors.phone && <p className={css.errorText}>{errors.phone}</p>}
        </div>

        <div className={css.inputGroup}>
          <label htmlFor="message" className={css.label}>
            Ваш запит (необов'язково)
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            placeholder="Короткий опис..."
            className={css.textarea}
          ></textarea>
        </div>

        <button type="submit" disabled={isLoading} className={css.btn}>
          {isLoading ? "Відправка..." : "Надіслати заявку"}
        </button>
      </form>
    </main>
  );
}
