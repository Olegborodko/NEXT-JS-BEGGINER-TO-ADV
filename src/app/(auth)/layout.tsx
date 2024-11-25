"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/styles.css";

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let navLinks = [
    { name: "login", href: "/login" },
    { name: "register", href: "/register" }
  ];

  const pathName = usePathname();

  return (
    <>
      <div>
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.href);

          return (
            <div key={link.name}>
              <Link
                href={link.href}
                className={isActive ? "font-bolt ml-5" : "text-blue-500"}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        {children}
      </div>
    </>
  )
}
