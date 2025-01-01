//app/actions/notifications.ts
import { createClient } from "@/lib/supabase/server";
import { NotificationFilter } from "@/types/notification";
import { revalidatePath } from "next/cache"


export default function searchNotifications(formData : FormData) {
  const search = formData.get('search') as string
  revalidatePath('/notifications');
  return {search}
}

export async function getFilterNotifications(filter : NotificationFilter) {
  const supabse = await createClient();

  let query = supabse
  .from('notifications')
  .select('*', {count : 'exact'})
  .eq('status', 'published')
  .order('is_pinned', {ascending: false})
  .order('created_at', {ascending: false})

  if(filter.search) {
    query = query.ilike('title', `%${filter.search}%`)
  }

  if(filter.endDate) {
    query = query.gte('created_at', filter.endDate);
  }

  if(filter.startDate) {
    query = query.gte('created_at', filter.startDate);
  }

  const { data, error, count} = await query.range(
    (filter.page -1) * filter.limit,
    filter.page * filter.limit -1
  )

  if(error) throw error

  return{
    notifications :data,
    total : count ?? 0
  }
}