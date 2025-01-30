// app/notifications/loading.tsx
'use client'
export default function NotificationError() {
  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <h2>에러 발생</h2>
      <p>에러가 발생했습니다...</p>
    </div>
  )
}