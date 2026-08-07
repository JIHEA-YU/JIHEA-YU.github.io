import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Jihea Yu", description: "Research profile of Jihea Yu." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><header className="site-header"><a className="wordmark" href="/">Jihea Yu</a><nav aria-label="Primary navigation"><a href="/">Home</a><a href="/experience">Experience</a><a href="/publications">Publications</a></nav></header>{children}<footer><span>© 2026 Jihea Yu</span><span>Seoul, Republic of Korea</span></footer></body></html>;
}
