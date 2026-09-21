import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={css.container}>
        <div className={css.logo}>
          <Link href="/" className={css.name}>
            ТК
          </Link>
          <Link href="/" className={css.logoname}>
            Тетяна Колесникова
          </Link>
        </div>

        <div className={css.navigation}>
          <nav className={css.navwrap}>
            <Link href="/" className={css.navlink}>
              Головна
            </Link>
            <Link href="/about" className={css.navlink}>
              Про мене
            </Link>
            <Link href="/services" className={css.navlink}>
              Послуги
            </Link>
          </nav>
        </div>

        <div className={css.btnwrap}>
          <Link href="/contact" className={css.btn}>
            Записатись
          </Link>
        </div>
      </div>
    </header>
  );
}
