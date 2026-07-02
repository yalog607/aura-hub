# AURA Hub — HELICORP

Landing page dự thi Vòng 2 (TTS IT Phát Triển Website) cho HELICORP (Healthy Living Corporation). Sản phẩm giả định: **AURA Hub** — smart home hub tập trung vào sức khỏe & môi trường sống.

- Đề bài gốc: `docs/HELICORP - ĐỀ BÀI VÒNG 2 - TTS IT PHÁT TRIỂN WEBSITE.pdf` (không public, đã gitignore).
- Kế hoạch chi tiết: `C:\Users\dylan\.claude\plans\e-helicorp-helicorp-b-i-adaptive-wolf.md`.
- Repo GitHub: `git@github.com:yalog607/aura-hub.git`.
- **Deadline nộp bài: 18:00 ngày 04/07/2026.**

## Quy trình làm việc

- Làm từng phần nhỏ theo task list, mỗi phần commit riêng (hoặc nhánh `feature/*` merge vào `main` với các phần lớn).
- **Không tự động chạy `git commit`.** Sau khi hoàn thành một phần, chỉ đề xuất nội dung commit message; người dùng tự chạy `git commit`.
- Ưu tiên tái sử dụng component/pattern đã có trong dự án trước khi tạo mới.

## Tech stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- shadcn/ui (Button, Sheet, Sonner/Toast, Switch, Skeleton)
- Framer Motion (scroll animation, parallax)
- Zustand + `persist` (localStorage) cho cart/wishlist/recently-viewed
- next-themes (dark mode)
- react-hook-form + zod (validate form)

## Yêu cầu chấm điểm cần đảm bảo

- Bắt buộc: Hero Section, Features, Tech Specs, Form đăng ký nhận tin; responsive desktop/mobile; UI/UX hiện đại, sạch sẽ.
- Performance: Google PageSpeed Insights (Mobile) ≥ 85/100.
- SEO: đầy đủ Meta cơ bản (Title, Description, Open Graph).
- Triển khai: Git/GitHub sạch, commit rõ ràng, chia nhánh khoa học; deploy lên Vercel (free tier).

## Điểm cộng đã chọn triển khai

- Dark Mode + Scroll Animation + Micro-interactions.
- Form gửi dữ liệu qua Webhook thật (`/api/subscribe`, validate server-side bằng zod) + theo dõi hành vi click/scroll (`/api/track`) kèm Toast notification.
- Mini e-commerce: wishlist, giỏ hàng, sản phẩm đã xem gần đây (Zustand + localStorage).

## Sản phẩm nộp bài

- Link GitHub repo (Public).
- Link landing page đã deploy.
- Ảnh chụp điểm PageSpeed Insights.
- Minh chứng các phần điểm cộng đã làm.
