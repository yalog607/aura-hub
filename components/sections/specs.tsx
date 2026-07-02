import { Cpu, Gauge, Plug, Radio, Ruler, Wifi } from "lucide-react";

type Spec = {
  icon: typeof Cpu;
  label: string;
  value: string;
};

const SPECS: Spec[] = [
  {
    icon: Cpu,
    label: "Chip xử lý",
    value: "AURA SoC lõi tứ 2.0GHz, AI Engine tích hợp xử lý cảm biến thời gian thực",
  },
  {
    icon: Wifi,
    label: "Kết nối",
    value: "Wi-Fi 6, Bluetooth 5.3, Zigbee 3.0, Thread/Matter",
  },
  {
    icon: Gauge,
    label: "Cảm biến",
    value: "PM2.5/PM10, CO2, VOC, nhiệt độ, độ ẩm, chuyển động",
  },
  {
    icon: Plug,
    label: "Nguồn điện",
    value: "Adapter 12V/2A · Pin dự phòng Li-ion 5.000mAh (tới 30 ngày)",
  },
  {
    icon: Ruler,
    label: "Kích thước & khối lượng",
    value: "Ø 120 × 45 mm · 320g",
  },
  {
    icon: Radio,
    label: "Tương thích hệ sinh thái",
    value: "Apple HomeKit, Google Home, Amazon Alexa, Matter",
  },
];

export function Specs() {
  return (
    <section id="specs" className="border-b border-border/60 bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Thông số kỹ thuật
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sức mạnh phần cứng cho một ngôi nhà thông minh thực thụ
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AURA Hub tích hợp bộ cảm biến môi trường độ chính xác cao cùng
              chip xử lý AI ngay tại thiết bị, đảm bảo phản hồi tức thời mà
              không phụ thuộc hoàn toàn vào đám mây.
            </p>

            <div className="mt-8 rounded-3xl border border-border/60 bg-card p-6">
              <p className="text-sm text-muted-foreground">Chỉ số không khí hiện tại</p>
              <p className="mt-1 text-4xl font-semibold text-primary">32</p>
              <p className="text-xs text-muted-foreground">Tốt · Cập nhật mỗi 5 giây</p>
            </div>
          </div>

          <dl className="divide-y divide-border/60 rounded-3xl border border-border/60 bg-card">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <spec.icon className="size-4" />
                  </span>
                  <dt className="text-sm font-medium">{spec.label}</dt>
                </div>
                <dd className="text-sm text-muted-foreground sm:flex-1">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
