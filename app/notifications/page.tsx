import NotificationList from "@/components/notificiations/NotificationList";
import SearchForm from "@/components/notificiations/SearchForm";
import ServerPagination from "@/components/notificiations/ServerPagination";
import { getNotifications } from "@/lib/query/notification";
import { Suspense } from "react";
import Loading from "../loading";


export default async function Notification({
  searchParams,
}:{
  searchParams : {
    page? : string,
    search? : string
  }
}) {
const page = Number(searchParams.page) || 1 ;

const {notifications, totalCount, totalPages} = await getNotifications({
  page,
  limit : 10,
  keyword : searchParams.search ?? ""
})

return(
  <main>
    <h1></h1>
    <SearchForm />
    <div>
      총 {totalCount} 건
    </div>
    <Suspense fallback={<Loading />}>
      <NotificationList notifications={notifications} />
      <ServerPagination 
        currentPage={page} 
        totalPages={totalPages}
        baseUrl={searchParams.search ?
          `/notification?search=${searchParams.search}` :
          '/notifications'
        }
      />
    </Suspense>
  </main>
)
}