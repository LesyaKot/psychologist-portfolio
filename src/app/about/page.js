import Image from "next/image";
import css from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={css.container}>
      <div className={css.quoteBlock}>
        <blockquote className={css.quote}>
          «Стійкість — це не про ігнорування болю, а про вміння безпечно пройти
          крізь нього.»
        </blockquote>
      </div>

      <div className={css.contentGrid}>
        <div className={css.imageWrapper}>
          <Image
            src="/ava.png"
            alt="Психотерапевт Тетяна Колесникова"
            fill
            priority
            className={css.photo}
          />
        </div>

        <div className={css.textBlock}>
          <p className={css.paragraph}>
            Привіт, я Тетяна. Маючи декілька років клінічного досвіду, я
            присвятила свою практику допомозі людям справлятися з найважчими
            випробуваннями. Я вірю, що терапія має бути місцем безпеки та
            затишку, а не просто холодним аналізом.
          </p>

          <p className={css.paragraph}>
            Мій шлях розпочався з роботи підлітками, де я глибоко усвідомила
            силу дбайливої присутності. Я спеціалізуюся на роботі з тривожністю,
            відновленні після травм та динаміці стосунків, допомагаючи
            переосмислити сценарії, які формують вашу реальність.
          </p>

          <p className={css.paragraph}>
            Мій підхід — заземлений та глибоко людяний. Ми не просто
            говоритимемо про проблеми, а дослідимо закономірності, що стоять за
            ними, і знайдемо практичні стратегії для створення реальних,
            тривалих змін у вашому повсякденному житті.
          </p>
        </div>
      </div>
    </main>
  );
}
