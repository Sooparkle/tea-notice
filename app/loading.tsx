// app/notifications/loading.tsx
import './styles/loading.module.css';

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <p>로딩 중...</p>
    </div>
  )
}