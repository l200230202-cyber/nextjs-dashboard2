// app/lib/definitions.ts

// Revenue tetap ada
export interface Revenue {
  month: string;
  revenue: number;
}

// Customer untuk tabel dan card
export interface CustomerField {
  id: string;
  name: string;
}

export interface CustomersTableType {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
}

// Invoice
export interface InvoiceForm {
  id: string;
  customer_id: string;
  amount: number;
  status: string;
}

export interface InvoicesTable {
  id: string;
  amount: number;
  date: string;
  status: string;
  name: string;
  email: string;
  image_url: string;
}

// LatestInvoice dengan tambahan total_spent
export interface LatestInvoice {
  id: string;
  customer_id: string;
  amount: string; // sudah diformat currency
  status: string;
  name: string;
  email: string;
  image_url: string;
  total_spent?: string; // optional supaya mapping tidak error
}


// Tipe data mentah dari DB
export interface LatestInvoiceRaw {
  id: string;
  customer_id: string;
  amount: number;
  status: string;
  name: string;
  email: string;
  image_url: string;
}
export interface LatestInvoiceRaw {
  id: string;
  customer_id: string;
  amount: number;
  status: string;
  name: string;
  email: string;
  image_url: string;
  total_spent?: number | string; // tambahkan optional
}
