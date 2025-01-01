// src/types/notification.ts

// 공지사항 데이터 타입
export interface Notification {
  id: string;
  title: string;
  content: string;
  is_pinned: boolean;
  view_count: number;
  status: 'published' | 'draft' | 'deleted';
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
  category?: string;
  start_date?: string;
  end_date?: string;
}

// 공지사항 필터 타입
export interface NotificationFilter {
  search?: string;
  category?: string;
  startDate?: string;
  endDate?: string;
  isPinned?: boolean;
  status?: 'published' | 'draft' | 'deleted';
  page : number;
  limit : number;
}

// 공지사항 생성 시 필요한 데이터 타입
export interface CreateNotificationInput {
  title: string;
  content: string;
  is_pinned?: boolean;
  category?: string;
  start_date?: string;
  end_date?: string;
}

// 공지사항 수정 시 필요한 데이터 타입
export interface UpdateNotificationInput {
  title?: string;
  content?: string;
  is_pinned?: boolean;
  category?: string;
  start_date?: string;
  end_date?: string;
  status?: 'published' | 'draft' | 'deleted';
}

// 공지사항 조회 응답 타입
export interface NotificationResponse {
  notifications: Notification[];
  totalCount: number;
  totalPages: number;
}

// 공지사항 페이지네이션 파라미터 타입
export interface NotificationParams {
  page: number;
  limit: number;
  filter?: NotificationFilter;
}