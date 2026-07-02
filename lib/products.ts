import { Camera, Cpu, Plug, Wind, type LucideIcon } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: LucideIcon;
  colors?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "aura-hub",
    name: "AURA Hub",
    description: "Trung tâm điều khiển nhà thông minh",
    price: 4990000,
    icon: Cpu,
    colors: ["Trắng Ngọc Trai", "Xám Than", "Xanh Rêu"],
  },
  {
    id: "aura-air-sensor",
    name: "AURA Air Sensor",
    description: "Cảm biến chất lượng không khí mở rộng",
    price: 990000,
    icon: Wind,
  },
  {
    id: "aura-motion-cam",
    name: "AURA Motion Cam",
    description: "Camera an ninh phát hiện chuyển động",
    price: 1790000,
    icon: Camera,
  },
  {
    id: "aura-smart-plug",
    name: "AURA Smart Plug",
    description: "Ổ cắm thông minh, tiết kiệm điện năng",
    price: 490000,
    icon: Plug,
  },
];

export function getProduct(id: string) {
  return PRODUCTS.find((product) => product.id === id);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}
