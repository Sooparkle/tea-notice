import Link from "next/link";
import styles from "@/components/notificiations/styles/NotificationList.module.css"

export default function ServerPagination({
  currentPage,
  totalPages,
  baseUrl = '/notifications'
  } :{ 
    currentPage : number;
    totalPages : number;
    baseUrl? :string;
  }) {
    // 페이지 범위 계산 (현재 페이지 주변 5페이지씩)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
  .filter(num => {
    const diff = Math.abs(num - currentPage);
    return diff <= 2 || num === 1 || num === totalPages;
  });

    return (
      
      <nav 
        className={styles.notiticationPageContainer}
      >
        {
          currentPage > 1 &&(
            <Link 
              href={`${baseUrl}?page=${currentPage - 1}`}
            >
              이전
            </Link>
          )
        }

        {
          pageNumbers.map((pageNum, index) => {
            if(index > 0 && pageNumbers[index - 1] !== pageNum -1) {
              return(
                <span
                  key={`ellipsis-${pageNum}`}
                  className=""
                >
                  ...
                </span>
              )
            }

            return(
              <Link
                key={pageNum}
                href={`${baseUrl}?page=${pageNum}`}
              >
              {pageNum}
              </Link>
            )
          })
        }

        {
          currentPage < totalPages &&(
            <Link
              href={`${baseUrl}?page=${currentPage + 1}`}
            >
              다음
            </Link>
          )
        }
      </nav>
    )
}