// components/notifications/NotificationList.tsx
import Link from 'next/link';
import { Notification } from '@/types/notification';
import styles from '@/components/notificiations/styles/NotificationList.module.css'

interface NotificationListProps {
  notifications: Notification[];
  totalCount : number
}

export default function NotificationList({ notifications, totalCount }: NotificationListProps) {

  return (
    <>
    <div
      className={styles.totalCount}
    >
      총 : {totalCount}
    </div>
    <div className={styles.notificationContainer}>
      <div
        className={styles.notificationListHeader}
      >
        <p>제목</p>
        <p>일자</p>
      </div>
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
              {notification.category && !notification.is_pinned && (
              <span className={styles.notificationCategory}>{notification.category}
              </span>
            )}
              <p className={styles.notificationTitle}>{notification.title}</p>
            </div>
            
            </div>
          
          <div className={styles.notificationMeta}>

            <div className={styles.notificationInfo}>
              {/* <span className={styles.notificationViews}>
                조회수 {notification.view_count.toLocaleString()}
              </span> */}
            
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

    </>
  );
}