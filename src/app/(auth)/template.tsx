"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/styles.css";
import { useState } from "react";

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [input, setInput] = useState("");

  let navLinks = [
    { name: "login", href: "/login" },
    { name: "register", href: "/register" }
  ];

  const pathName = usePathname();

  return (
    <div style={{ border: "1px solid" }} >
      Template
      <div>
        <input style={{ border: "1px solid" }} value={input} onChange={e => setInput(e.target.value)} />
      </div>
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
    </div>
  )
}
