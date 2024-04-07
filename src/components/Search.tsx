"use client";

import React, { useCallback } from "react";
import { Input } from "./ui/input";
import { IconSearch, IconX } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const [search, setSearch] = React.useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, search: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, search);

      return params.toString();
    },
    [searchParams],
  );

  const handleSearch = () => {
    router.push(pathname + "?" + createQueryString("search", search));
  };

  return (
    <span className="relative">
      <Input
        className="rounded-xl border-primary bg-[#D9D9D9]/10 pl-10 placeholder:text-primary"
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <IconSearch
        size={16}
        className={`absolute left-4 top-7 text-primary ${search ? "opacity-0" : "opacity-30"}`}
      />
      <button type="submit" onClick={handleSearch}>
        <IconSearch
          size={16}
          className={`absolute -right-[330px] top-7 text-primary ${search ? "opacity-80" : "opacity-0"}`}
        />
      </button>
      <button onClick={() => setSearch("")}>
        <IconX
          size={16}
          className={`absolute -right-[305px] top-7 text-primary ${search ? "opacity-80" : "opacity-0"}`}
        />
      </button>
    </span>
  );
};

export default Search;
