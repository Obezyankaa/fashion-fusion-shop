"use client"
import Link from "next/link";
import './style.scss'
import { usePathname } from "next/navigation";

const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
    }) {
    const pathname = usePathname();
  return (
    <div>
      {navLink.map((el) => {
          const isActive = pathname.startsWith(el.href)
          return (
            <div key={el.name}>
                  <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={el.href}>{el.name}</Link>
            </div>
          );
      })}
          {children}
    </div>
  );
}
