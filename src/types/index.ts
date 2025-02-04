// 공통 타입 정의
export interface MembershipInfo {
  level: string;
  points: number;
  benefits: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  period: string;
  imageUrl: string;
}

export interface Coupon {
  id: string;
  name: string;
  discount: number;
  expiryDate: string;
  isUsed: boolean;
}

export interface QuickService {
  id: string;
  name: string;
  icon: string;
}

export interface PaymentHistory {
  id: string;
  type: "online" | "offline";
  merchant: string;
  amount: number;
  date: string;
  status: "completed" | "pending" | "failed";
}

export interface Asset {
  id: string;
  type: "account" | "card" | "investment" | "insurance";
  name: string;
  balance?: number;
  institution: string;
  lastUpdated: string;
}

export interface MenuItem {
  id: string;
  name: string;
  icon: string;
  category: "financial" | "lifestyle" | "settings";
}
