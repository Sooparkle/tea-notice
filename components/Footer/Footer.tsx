// components/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Tea Diary</h3>
            <p>차와 함께하는 일상의 기록</p>
          </div>
          
          {/* <div className={styles.section}>
            <h4>Links</h4>
            <ul>
              <li><Link href="/about">소개</Link></li>
              <li><Link href="/contact">문의하기</Link></li>
              <li><Link href="/privacy">개인정보처리방침</Link></li>
            </ul>
          </div> */}

          <div className={styles.section}>
            <h4>Contact</h4>
            <ul>
              <li>teateachada.official@gmail.com</li>
              {/* <li>Instagram: @tea_diary</li> */}
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2024 Tea Diary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}