import Link from "next/link";
import { Camera, Globe, Leaf, Mail, PlaySquare } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Tính năng", href: "#features" },
  { label: "Thông số kỹ thuật", href: "#specs" },
  { label: "Cửa hàng", href: "#shop" },
  { label: "Đăng ký nhận tin", href: "#newsletter" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: Globe },
  { label: "Instagram", href: "#", icon: Camera },
  { label: "Youtube", href: "#", icon: PlaySquare },
  { label: "Email", href: "mailto:tuyendung@helicorp.vn", icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2">
            <Link href="#hero" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="size-4" />
              </span>
              <span className="text-lg">AURA Hub</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Trung tâm điều khiển nhà thông minh của HELICORP (Healthy Living
              Corporation) — theo dõi chất lượng không khí, tự động hoá thói
              quen sống lành mạnh và bảo vệ ngôi nhà của bạn.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Khám phá</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Liên hệ</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>Healthy Living Corporation</li>
              <li>
                <a
                  href="https://helicorp.vn"
                  className="transition-colors hover:text-foreground"
                >
                  helicorp.vn
                </a>
              </li>
              <li>
                <a
                  href="mailto:tuyendung@helicorp.vn"
                  className="transition-colors hover:text-foreground"
                >
                  tuyendung@helicorp.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} HELICORP — Healthy Living Corporation. All rights reserved.</p>
          <p>AURA Hub là sản phẩm minh hoạ cho bài thi tuyển dụng, không phải sản phẩm thương mại.</p>
        </div>
      </div>
    </footer>
  );
}
