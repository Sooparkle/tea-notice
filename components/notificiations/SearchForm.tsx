'use client'
import searchNotifications from "@/app/actions/notifications";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState, useTransition } from "react";
import styles from "@/components/notificiations/styles/NotificationList.module.css";

export default function SearchForm() {
  const router = useRouter();
  const pathname =  usePathname();
  const searchParams = useSearchParams();
  const [ isPending, startTransition ] = useTransition();
  const [ search, setSearch ] = useState(searchParams.get('search') ?? '');

  
  const createQueryString = useCallback(
    (name : string, value : string) => {
      const params = new URLSearchParams(searchParams.toString());
      if(value){
        params.set(name, value)
      } else{
        params.delete(name)
      }
      return params.toString();
    }, [searchParams]
  )

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition( () => {
      searchNotifications(formData);
      router.push(`${pathname}?${createQueryString('search', search)}`)
    })
  }

  const handleSearchChange = (valuse :string) =>{
    setSearch(valuse);
      startTransition(() => {
        const queryString = createQueryString('search', valuse);
        const url = queryString ? `${pathname}?${queryString}` : pathname
        router.push(url)
      })
  }

  return(
    <form
      className={styles.notificationSearchContainer}
      onSubmit={handleSubmit}
    >
      <div
      
      >
        <input 
        type="search"
        name="search"
        value={search}
        placeholder="찾고싶은 제목 입력"
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <button>
        {isPending ? '검색중...' :'검색'}
      </button>
      </div>

    </form>
  )
}