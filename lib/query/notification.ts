// lib/query/notifications.ts
import { createClient } from '@/lib/supabase/server'
import { type NotificationFilter, type Notification } from '@/types/notification'

export async function getNotifications({
  page = 1,
  limit = 10,
  keyword,
}: {
  page: number;
  limit: number;
  keyword :string
}) {
  try {
    const supabase = await createClient();
    const start = (page - 1) * limit;
    const end = start + limit - 1;

    let query = supabase
      .from('notifications')
      .select('*', { count: 'exact' })
      .eq('status', 'published')
      .order('is_pinned', { ascending: false })
      .order('created_at', { ascending: false })
      .range(start, end);

    if (keyword) {
      query = query.ilike('title', `%${keyword}%`);
    }

    const { data, count, error } = await query;
    
    if (error) throw error;

    return {
      notifications: data as Notification[],
      totalCount: count ?? 0,
      totalPages: Math.ceil((count ?? 0) / limit),
    };
  } catch (error) {
    console.error('Error in getNotifications:', error);
    throw error;
  }
}

export async function getNotificationById(id: string): Promise<Notification | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data as Notification;
  } catch (error) {
    console.error('Error in getNotificationById:', error);
    throw error;
  }
}



export async function getAdjacentNotifications(id: string) {
  try {
    const supabase = await createClient();
    
    // 현재 게시물의 created_at 가져오기
    const { data: currentNotification } = await supabase
      .from('notifications')
      .select('created_at')
      .eq('id', id)
      .single();

    if (!currentNotification) return { prev: null, next: null };

    // 이전 게시물 (더 최신 게시물)
    const { data: prevNotification } = await supabase
      .from('notifications')
      .select('id, title')
      .eq('status', 'published')
      .gt('created_at', currentNotification.created_at)
      .order('created_at', { ascending: true })
      .limit(1)
      .single();

    // 다음 게시물 (더 오래된 게시물)
    const { data: nextNotification } = await supabase
      .from('notifications')
      .select('id, title')
      .eq('status', 'published')
      .lt('created_at', currentNotification.created_at)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    return {
      prev: prevNotification || null,
      next: nextNotification || null
    };
  } catch (error) {
    console.error('Error in getAdjacentNotifications:', error);
    return { prev: null, next: null };
  }
}