// components/Header.jsx
import Link from "next/link"
import styles from "./Header.module.css"
import { headers } from "next/headers";

interface HeaderProps {
  currentPath? : string
}

export default async function Header({ currentPath =" "} : HeaderProps) {
  const headerList = await headers();
  const pathname = headerList.get("x-invoke-path") || "";

  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">Tea Diary</Link>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link 
                href="/notifications"
                className={pathname === '/notifications' ? styles.active : ""}
              >게시판</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}