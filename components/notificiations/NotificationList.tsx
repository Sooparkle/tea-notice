// components/notifications/NotificationList.tsx
import Link from 'next/link';
import { Notification } from '@/types/notification';
import styles from '@/components/notificiations/styles/NotificationList.module.css'

interface NotificationListProps {
  notifications: Notification[];
}

export default function NotificationList({ notifications }: NotificationListProps) {
  return (
    <div className={styles.notificationContainer}>
      {notifications.map((notification) => (
        <Link 
          href={`/notifications/${notification.id}`} 
          key={notification.id}
          className={styles.notificationItem}
        >
          <div className={styles.notificationHeader}>
            <div className={styles.notificationTitleArea}>
              {notification.is_pinned && (
                <span className={styles.notificationBadge}>공지</span>
              )}
              <p className={styles.notificationTitle}>{notification.title}</p>
            </div>
            {notification.category && (
              <span className={styles.notificationCategory}>{notification.category}</span>
            )}
          </div>
          
          <div className={styles.notificationMeta}>

            <div className={styles.notificationInfo}>
              <span className={styles.notificationViews}>
                조회수 {notification.view_count.toLocaleString()}
              </span>
            
              <time className={styles.notificationDate}>
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