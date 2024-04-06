"use client";

import { NavElement } from "@/lib/types";
import { IconCompass, IconHome2, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const [active, setActive] = React.useState<NavElement>("home");

  return (
    <div className="flex justify-around border p-2">
      <button onClick={() => setActive("home")}>
        <Link href="/">
          <IconHome2
            size={36}
            className={active === "home" ? "text-primary" : ""}
          />
        </Link>
      </button>
      <button onClick={() => setActive("explore")}>
        <Link href="/">
          <IconCompass
            size={36}
            className={active === "explore" ? "text-primary" : ""}
          />
        </Link>
      </button>
      <button onClick={() => setActive("profile")}>
        <Link href="/">
          <IconUser
            size={36}
            className={active === "profile" ? "text-primary" : ""}
          />
        </Link>
      </button>
    </div>
  );
};

export default Nav;
