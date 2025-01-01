// components/notifications/NotificationList.tsx
import Link from 'next/link';
import { Notification } from '@/types/notification';
// import './styles/notificationList.module.css';

interface NotificationListProps {
  notifications: Notification[];
}

export default function NotificationList({ notifications }: NotificationListProps) {
  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <Link 
          href={`/notifications/${notification.id}`} 
          key={notification.id}
          className="notification-item"
        >
          <div className="notification-header">
            <div className="notification-title-area">
              {notification.is_pinned && (
                <span className="notification-badge">공지</span>
              )}
              <h2 className="notification-title">{notification.title}</h2>
            </div>
            {notification.category && (
              <span className="notification-category">{notification.category}</span>
            )}
          </div>
          
          <div className="notification-meta">
            <div className="notification-info">
              <span className="notification-views">
                조회수 {notification.view_count.toLocaleString()}
              </span>
              <time className="notification-date">
                {new Date(notification.created_at).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
        </Link>
      ))}

      {notifications.length === 0 && (
        <div className="notification-empty">
          등록된 공지사항이 없습니다.
        </div>
      )}
    </div>
  );
}