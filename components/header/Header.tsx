// components/Header.jsx
import styles from "./Header.module.css"

export default function Header() {
  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="/">Tea Diary</a>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="/notifications">게시판</a></li>
          </ul>
        </nav>
      </header>
  )
}