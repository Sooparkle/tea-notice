// app/notifications/loading.tsx

import "@/app/notifications/notification.module.css"

export default function NotificiationLoading() {
  return (
    <div className="notification-loading-container">
      <div className="loading-spinner" />
      <p>로딩 중...</p>
    </div>
  )
}