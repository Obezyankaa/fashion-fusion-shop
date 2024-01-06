import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'blog'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Blog</h1>
      {children}
    </div>
  );
}
