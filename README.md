# AURA Hub

Sản phẩm: **AURA Hub** — trung tâm điều khiển nhà thông minh tập trung vào sức khỏe & môi trường sống: theo dõi chất lượng không khí, tự động hoá thói quen sinh hoạt, an ninh chủ động và tiết kiệm năng lượng.

- 🔗 **Live demo**: https://aurahub.yalina.io.vn
- 📦 **Repo**: https://github.com/yalog607/aura-hub

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Base UI)
- [Framer Motion](https://motion.dev) (`LazyMotion`/`m` — scroll animation, parallax)
- [Zustand](https://zustand.docs.pmnd.rs) + `persist` (localStorage) — giỏ hàng, wishlist, sản phẩm đã xem
- [next-themes](https://github.com/pacocoursey/next-themes) — Dark Mode
- [react-hook-form](https://react-hook-form.com) + [Zod](https://zod.dev) — validate form

## Cấu trúc trang

Hero · Features (bento grid) · Tech Specs · Story (scrollytelling + parallax) · Shop (mini e-commerce) · Recently Viewed · Testimonials · Newsletter (form đăng ký nhận tin)

## Yêu cầu bắt buộc đã đáp ứng

- Hero Section, Features, Tech Specs, Form đăng ký nhận tin
- Responsive mượt Desktop/Mobile
- SEO: Title, Description, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`
- Performance: PageSpeed Insights (Mobile) ≥ 85/100
- Git/GitHub: commit rõ ràng theo từng phần, deploy Vercel

## Chạy dự án local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

### Biến môi trường

Tạo file `.env.local` (xem mẫu ở [`.env.example`](.env.example)):

```bash
# Discord webhook nhận dữ liệu đăng ký nhận tin
SUBSCRIBE_WEBHOOK_URL=

# Discord webhook nhận sự kiện hành vi người dùng (click, scroll)
TRACK_WEBHOOK_URL=
```

Tạo webhook tại: Discord → Server Settings → Integrations → Webhooks → New Webhook → Copy Webhook URL. Có thể dùng chung 1 URL cho cả 2 biến hoặc tách 2 kênh riêng.

## Scripts

```bash
npm run dev      # chạy dev server
npm run build    # build production
npm run start    # chạy bản production đã build
npm run lint     # kiểm tra lint
```

## Deploy

Deploy trên [Vercel](https://vercel.com):

1. Import repo GitHub vào Vercel.
2. Thêm biến môi trường `SUBSCRIBE_WEBHOOK_URL`, `TRACK_WEBHOOK_URL` (và tuỳ chọn `NEXT_PUBLIC_SITE_URL` trỏ tới domain thật để metadata/SEO chính xác).
3. Deploy — Vercel tự build bằng `npm run build`.
