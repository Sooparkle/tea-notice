import Link from "next/link";
import '@/app/styles/not-found.module.css'

export default function NotFound() {
  return(
    <div className="not-found-container">
    <h1 className="not-found-code">404</h1>
    <h2 className="not-found-title">페이지를 찾을 수 없습니다</h2>
    <p className="not-found-message">
      요청하신 페이지가 존재하지 않거나, 삭제되었을 수 있습니다.
    </p>
    <Link href="/" className="not-found-link">
      메인으로 돌아가기
    </Link>
  </div>
);
}