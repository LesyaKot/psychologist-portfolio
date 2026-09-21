import css from "./Approach.module.css";

export default function Approach() {
  return (
    <div className={css.section}>
      <div className={css.headerBlock}>
        <h2 className={css.mainTitle}>
          Мій <span className={css.italicWord}>підхід</span>
        </h2>
        <div className={css.mainSubtitle}>
          Терапія не буває універсальною. Я вибудовую кожну сесію навколо того,
          що є найважливішим саме для вас. Моя мета — створити теплий,
          безоцінний простір, де ви почуватиметеся в безпеці, щоб досліджувати
          себе, рефлексувати та рости.
        </div>
      </div>

      <div className={css.grid}>
        <div className={css.card}>
          <h3 className={css.cardTitle}>Емпатія</h3>
          <div className={css.cardText}>
            Щирий зв'язок та атмосфера цілковитого прийняття на кожній сесії, що
            створюють основу для справжнього зцілення.
          </div>
        </div>

        <div className={css.cardMiddle}>
          <h3 className={css.cardTitle}>Практичні інструменти</h3>
          <div className={css.cardText}>
            Стратегії, які допоможуть вам справлятися з повсякденними викликами,
            сприятимуть довготривалому розвитку та стійкості.
          </div>
        </div>

        <div className={css.card}>
          <h3 className={css.cardTitle}>Безпечний простір</h3>
          <div className={css.cardText}>
            Конфіденційна, спокійна атмосфера, де ви можете говорити вільно,
            скинути тягар і почуватися в цілковитій безпеці.
          </div>
        </div>
      </div>
    </div>
  );
}
