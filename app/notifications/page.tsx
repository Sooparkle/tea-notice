import NotificationList from "@/components/notificiations/NotificationList";
import SearchForm from "@/components/notificiations/SearchForm";
import ServerPagination from "@/components/notificiations/ServerPagination";
import { getNotifications } from "@/lib/query/notification";
import { Suspense } from "react";
import Loading from "../loading";
import styles from "@/components/notificiations/styles/NotificationList.module.css"

export default async function Notification({
  searchParams,
}:{
  searchParams : Promise<{
    page? : string,
    search? : string
  }>;
}) {
  const awaitSearchParams = await searchParams;

  const page = Number(awaitSearchParams?.page) || 1 ;
  const keyword = awaitSearchParams?.search || "";

  const {notifications, totalCount, totalPages} = await getNotifications({
    page,
    limit : 10,
    keyword,
  });

  const baseUrl = keyword ?
  `/notification?search=${encodeURIComponent(keyword)}` :
  '/notifications';


return(
  <main
    className={styles.main}
  >

    <SearchForm />
    <div
      className={styles.notificationTotalNumber}
    >
      총 {totalCount} 건
    </div>
    <Suspense fallback={<Loading />}>
      <NotificationList notifications={notifications} />
      <ServerPagination 
        currentPage={page} 
        totalPages={totalPages}
        baseUrl={baseUrl}
      />
    </Suspense>
  </main>
)
}