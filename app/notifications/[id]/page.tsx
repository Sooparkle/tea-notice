import { getAdjacentNotifications, getNotificationById } from "@/lib/query/notification";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/app/notifications/[id]/NotificationDetail.module.css";

export const runtime = 'edge';

export default async function NotificationPage({
  params,
}:{
  params : Promise <{id : string}>
}) {

  const {id} = await params;
  const notification = await getNotificationById(id);
  const { prev, next } = await getAdjacentNotifications(id);

  if(!notification){
    notFound();
  }

  return(
    <main
      className={styles.detailContainer}
    >

      <div
        className={styles.detailHeader}
      >
        {notification.is_pinned && (
          <span className={styles.notificationBadge}>공지</span>
        )}
        <div
        className={styles.headerTop}
        >
          {notification.title}
        </div>
      </div>

      {/* content area */}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{__html: notification.content}}
      >

      </div>

      <div
        className={styles.actions}
      >
        <div className={styles.navigation}>
          
          <Link 
            href="/notifications" 
            className={styles.listButton}>
            목록으로
          </Link>
          
          
        </div>

        <div
          className={styles.direction}
        >
          {prev && (
            <Link href={`/notifications/${prev.id}`} className={styles.navButton}>
              <div className={styles.navLabel}>이전 글</div>
              <div className={styles.navTitle}>{prev.title}</div>
            </Link>
          )}

          {next && (
            <Link href={`/notifications/${next.id}`} className={styles.navButton}>
              <div className={styles.navLabel}>다음 글</div>
              <div className={styles.navTitle}>{next.title}</div>
            </Link>
          )}

        </div>
      </div>

    </main>
  )
}