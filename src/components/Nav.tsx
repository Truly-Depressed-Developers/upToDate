"use client";

import React from "react";
import { IconCompass, IconHome2, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const [active, setActive] = React.useState(pathname);

  return (
    <div className="flex justify-around border-t py-4">
      <button onClick={() => {
        setActive("/");
        setTimeout(() => {
          window.location.reload()
        }, 300);
      }}>
        <Link href="/">
          <IconHome2
            size={36}
            className={
              active === "/" ? "scale-110 text-primary transition-all" : ""
            }
          />
        </Link>
      </button>
      <button onClick={() => setActive("/explore")}>
        <Link href="/explore">
          <IconCompass
            size={36}
            className={
              active === "/explore"
                ? "scale-110 text-primary transition-all"
                : ""
            }
          />
        </Link>
      </button>
      <button onClick={() => setActive("/profile")}>
        <Link href="/profile">
          <IconUser
            size={36}
            className={
              active === "/profile"
                ? "scale-110 text-primary transition-all"
                : ""
            }
          />
        </Link>
      </button>
    </div>
  );
};

export default Nav;
