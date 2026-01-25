// Dummy user data for dashboard
export const dummyUser = {
  id: "user-001",
  name: "রহিম উদ্দিন",
  email: "rahim@example.com",
  phone: "+880 1712-345678",
  avatar: "/placeholder.svg",
  joinedDate: "2024-06-15",
};

export interface Address {
  id: string;
  label: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  area: string;
  isDefault: boolean;
}

export const dummyAddresses: Address[] = [
  {
    id: "addr-001",
    label: "বাসা",
    name: "রহিম উদ্দিন",
    phone: "+880 1712-345678",
    address: "বাড়ি নং ১২, রোড নং ৫, ব্লক সি",
    city: "ঢাকা",
    area: "বনানী",
    isDefault: true,
  },
  {
    id: "addr-002",
    label: "অফিস",
    name: "রহিম উদ্দিন",
    phone: "+880 1712-345678",
    address: "৭ম তলা, টাওয়ার ২, গুলশান সেন্টার",
    city: "ঢাকা",
    area: "গুলশান-১",
    isDefault: false,
  },
];

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: {
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  total: number;
  deliveryAddress: string;
}

export const dummyOrders: Order[] = [
  {
    id: "ord-001",
    orderNumber: "ORD-2024-001",
    date: "2024-12-15",
    status: "delivered",
    items: [
      { name: "প্রিমিয়াম চকলেট বক্স", quantity: 1, price: 1500, image: "/placeholder.svg" },
      { name: "ফ্লাওয়ার বুকে - রোজ", quantity: 1, price: 800, image: "/placeholder.svg" },
    ],
    total: 2300,
    deliveryAddress: "বাড়ি নং ১২, রোড নং ৫, বনানী, ঢাকা",
  },
  {
    id: "ord-002",
    orderNumber: "ORD-2024-002",
    date: "2024-12-20",
    status: "shipped",
    items: [
      { name: "বার্থডে কেক - স্পেশাল", quantity: 1, price: 2500, image: "/placeholder.svg" },
    ],
    total: 2500,
    deliveryAddress: "৭ম তলা, টাওয়ার ২, গুলশান-১, ঢাকা",
  },
  {
    id: "ord-003",
    orderNumber: "ORD-2024-003",
    date: "2025-01-10",
    status: "processing",
    items: [
      { name: "গিফট হ্যাম্পার - প্রিমিয়াম", quantity: 1, price: 3500, image: "/placeholder.svg" },
      { name: "টেডি বিয়ার - বড়", quantity: 1, price: 1200, image: "/placeholder.svg" },
    ],
    total: 4700,
    deliveryAddress: "বাড়ি নং ১২, রোড নং ৫, বনানী, ঢাকা",
  },
  {
    id: "ord-004",
    orderNumber: "ORD-2024-004",
    date: "2025-01-18",
    status: "pending",
    items: [
      { name: "পার্সোনালাইজড মগ", quantity: 2, price: 600, image: "/placeholder.svg" },
    ],
    total: 1200,
    deliveryAddress: "বাড়ি নং ১২, রোড নং ৫, বনানী, ঢাকা",
  },
];
