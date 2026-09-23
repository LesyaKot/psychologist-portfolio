import Link from "next/link";
import Image from "next/image";
import css from "./services.module.css";

export default function ServicesPage() {
  return (
    <main className={css.container}>
      <div className={css.contentGrid}>
        <div className={css.imageWrapper}>
          <Image
            src="/services-photo.png"
            alt="Індивідуальна терапія з Тетяною Колесніковою"
            fill
            priority
            sizes="320px"
            className={css.photo}
          />
        </div>

        <div className={css.textBlock}>
          <section className={css.sectionBlock}>
            <h2 className={css.sectionTitle}>З чим можна звернутися</h2>
            <p className={css.paragraph}>
              Не обов'язково мати «велику проблему». Іноді достатньо відчуття:
              «Мені зараз важко, і я не знаю, що з цим робити». Я працюю із
              запитами:
            </p>
            <ul className={css.list}>
              <li className={css.listItem}>
                <strong>Тривога та стрес:</strong> Постійне напруження, страхи,
                переживання, складнощі із заспокоєнням.
              </li>
              <li className={css.listItem}>
                <strong>Емоційне виснаження та вигорання:</strong> Втома,
                відсутність ресурсу, відчуття «нічого не хочу», коли навіть
                звичні речі перестають приносити задоволення.
              </li>
              <li className={css.listItem}>
                <strong>Самооцінка та впевненість:</strong> Сумніви в собі,
                порівняння з іншими, страх помилитися, залежність від чужої
                оцінки.
              </li>
              <li className={css.listItem}>
                <strong>Особисті межі:</strong> Складно сказати «ні», постійно
                доводиться підлаштовуватися, виникає почуття провини за власні
                потреби.
              </li>
              <li className={css.listItem}>
                <strong>Стосунки:</strong> Конфлікти, непорозуміння, розриви,
                повторювані сценарії, складнощі у близькості.
              </li>
              <li className={css.listItem}>
                <strong>Життєві кризи та зміни:</strong> Періоди, коли старе
                життя вже не влаштовує, а нового розуміння, куди рухатися, ще
                немає.
              </li>
              <li className={css.listItem}>
                <strong>Пошук себе:</strong> «Чого я хочу?», «Хто я зараз?»,
                «Куди рухатися далі?»
              </li>
            </ul>
            <p className={css.paragraph}>
              І ще один дуже важливий запит: «Мені просто потрібно, щоб хтось
              був поруч». Щоб вислухав. Не оцінював. Не давав непроханих порад.
              Іноді саме з цього починається важлива розмова із собою.
            </p>
          </section>

          <section className={css.sectionBlock}>
            <h2 className={css.sectionTitle}>Як проходить робота</h2>
            <p className={css.paragraph}>
              <strong>Без готових рецептів і оцінювання.</strong> На
              консультації не потрібно приходити з ідеально сформульованим
              запитом. Можна сказати: «Я не знаю, з чого почати». Цього
              достатньо.
            </p>
            <p className={css.paragraph}>
              Ми разом досліджуємо те, що відбувається у вашому житті: думки,
              почуття, поведінку, стосунки, потреби та повторювані сценарії. Я
              не вирішую за вас, як вам жити. Моя роль — допомогти вам краще
              почути себе та знайти власні рішення. Я використовую
              індивідуальний підхід, оскільки одна й та сама ситуация для різних
              людей може мати зовсім різне значення.
            </p>
          </section>

          <section className={css.sectionBlock}>
            <h2 className={css.sectionTitle}>Мої професійні принципи</h2>
            <p className={css.paragraph}>
              <strong>Конфіденційність.</strong> Особистий простір клієнта має
              залишатися безпечним. Інформація, отримана під час психологічної
              роботи, є конфіденційною відповідно до професійних та законодавчих
              норм.
            </p>
            <p className={css.paragraph}>
              <strong>Повага.</strong> У психолога немає завдання оцінювати вас
              як «правильного» чи «неправильного». Ваші почуття мають право бути
              почутими.
            </p>
            <p className={css.paragraph}>
              <strong>Доброчесність.</strong> Я не обіцяю чарівних результатів і
              не використовую психологію для нав'язування власних поглядів. Якщо
              бачу, що людині потрібна допомога іншого спеціаліста, чесно про це
              скажу.
            </p>
            <p className={css.paragraph}>
              <strong>Професійність.</strong> Я постійно навчаюся, розвиваю
              професійні компетентності, проходжу супервізію та особисту
              терапію.
            </p>
          </section>

          <section className={css.sectionBlock}>
            <h2 className={css.sectionTitle}>Трохи особистого</h2>
            <p className={css.paragraph}>
              За професією психолог. А насамперед — людина. Я знаю, що життя не
              завжди йде за планом. Знаю, що можна змінювати професію, починати
              новий етап уже в дорослому віці, сумніватися, боятися і все одно
              рухатися далі.
            </p>
            <p className={css.paragraph}>
              Мені близькі люди, які в якийсь момент запитують себе: «А чого
              хочу саме я?». Мені подобається психологія, у якій є місце не
              тільки для серйозних розмов, а й для гумору, живих емоцій та
              звичайного людського спілкування. Бо іноді ми можемо говорити про
              дуже складні речі — і навіть посміятися. І це нормально.
            </p>
          </section>

          <section className={css.sectionBlock}>
            <h2 className={css.sectionTitle}>Про мою професійну позицію</h2>
            <ul className={css.list}>
              <li className={css.listItem}>
                <strong>2019 — сьогодні:</strong> Професійний шлях у психології.
              </li>
              <li className={css.listItem}>
                <strong>Психологічна освіта:</strong> Магістр психології.
              </li>
              <li className={css.listItem}>
                <strong>Клінічна психологія:</strong> Поглиблення професійної
                підготовки.
              </li>
              <li className={css.listItem}>
                <strong>Психотерапевтичні підходи:</strong> Постійне навчання та
                професійний розвиток.
              </li>
              <li className={css.listItem}>
                <strong>Супервізія:</strong> Регулярна професійна підтримка та
                аналіз практики.
              </li>
              <li className={css.listItem}>
                <strong>Особиста терапія:</strong> Власна регулярна робота над
                собою.
              </li>
              <li className={css.listItem}>
                <strong>Членство у спільноті:</strong> Національна психологічна
                асоціація.
              </li>
            </ul>
          </section>

          <section className={css.sectionBlock}>
            <p className={css.paragraph}>
              Вам не обов'язково чекати, поки стане зовсім погано. Можна
              звернутися тоді, коли просто хочеться:
            </p>
            <ul className={css.list}>
              <li className={css.listItem}>розібратися в собі;</li>
              <li className={css.listItem}>зрозуміти свої почуття;</li>
              <li className={css.listItem}>перестати постійно триматися;</li>
              <li className={css.listItem}>навчитися говорити «ні»;</li>
              <li className={css.listItem}>побачити вихід із ситуації;</li>
              <li className={css.listItem}>
                або просто мати поруч людину, з якою безпечно говорити.
              </li>
            </ul>
            <p className={css.paragraph}>Почати можна з однієї розмови.</p>
          </section>

          <div className={css.btnWrapper}>
            <Link href="/contact" className={css.linkBtn}>
              Записатись на сесію →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
