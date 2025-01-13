// components/Header.jsx
import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">Tea Diary</Link>
          </div>
          <ul className={styles.navLinks}>
            <li><Link href="/notifications">게시판</Link></li>
          </ul>
        </nav>
      </header>
  )
}