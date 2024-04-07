"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import { type BadgeTypes } from "@/lib/types";

const DateFilter = () => {
  const [chosen, setChosen] = React.useState<BadgeTypes>("All");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleDateFilter = (date: BadgeTypes) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("date", date);

    router.push("?" + params.toString());
    setChosen(date);
  };

  return (
    <div className="no-scrollbar flex space-x-4 overflow-auto px-4 pb-2 pt-1">
      <button
        onClick={() => {
          handleDateFilter("All");
        }}
      >
        <Badge className={chosen === "All" ? "" : "bg-foreground"}>All</Badge>
      </button>
      <button
        onClick={() => {
          handleDateFilter("Today");
        }}
      >
        <Badge className={chosen === "Today" ? "" : "bg-foreground"}>
          Today
        </Badge>
      </button>
      <button
        onClick={() => {
          handleDateFilter("Week");
        }}
      >
        <Badge className={chosen === "Week" ? "" : "bg-foreground"}>Week</Badge>
      </button>
      <button
        onClick={() => {
          handleDateFilter("Month");
        }}
      >
        <Badge className={chosen === "Month" ? "" : "bg-foreground"}>
          Month
        </Badge>
      </button>
      <button
        onClick={() => {
          handleDateFilter("3mo");
        }}
      >
        <Badge className={chosen === "3mo" ? "" : "bg-foreground"}>
          3 Months
        </Badge>
      </button>
      <button
        onClick={() => {
          handleDateFilter("Year");
        }}
      >
        <Badge className={chosen === "Year" ? "" : "bg-foreground"}>
          Images
        </Badge>
      </button>
    </div>
  );
};

export default DateFilter;
