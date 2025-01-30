import Link from 'next/link';
import { CSSProperties } from 'react';

export const runtime = 'edge';

export default function NotFound() {
  const container: CSSProperties = {
    display: "gird",
    alignContent:"center",
    textAlign: "center" as CSSProperties["textAlign"],
    height: "calc(100vh - 353px)",
    backgroundColor: "#f9f9f9",
    color: "#333",
  };

  const codeStyle: CSSProperties = {
    fontSize: "6rem",
    fontWeight: "bold",
    margin: 0,
  };

  const titleStyle: CSSProperties = {
    fontSize: "2rem",
    fontWeight: 500,
    margin: "10px 0",
  };

  const messageStyle: CSSProperties = {
    fontSize: "1rem",
    margin: "10px 0 20px",
    color: "#666",
  };


  return (
    <div style={container}>
      <h1 style={codeStyle}>404</h1>
      <h2 style={titleStyle}>페이지를 찾을 수 없습니다</h2>
      <p style={messageStyle}>
        요청하신 페이지가 존재하지 않거나, 삭제되었을 수 있습니다.
      </p>
      <Link href="/">
        메인으로
      </Link>
    </div>
  );
}
