// app/notifications/loading.tsx
'use client'
export default function NotificationError() {
  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <p>로딩 중...</p>
    </div>
  )
}