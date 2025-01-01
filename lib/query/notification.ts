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