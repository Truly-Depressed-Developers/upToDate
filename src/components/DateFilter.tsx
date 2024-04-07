"use client";

import React from "react";
import { Badge } from "./ui/badge";

type BadgeTypes =
  | "All"
  | "Today"
  | "Week"
  | "Month"
  | "3 Months"
  | "Images"
  | "Videos";

const DateFilter = () => {
  const [chosen, setChosen] = React.useState<BadgeTypes>("All");
  return (
    <div className="no-scrollbar flex space-x-4 overflow-auto px-4 pb-2 pt-1">
      <button onClick={() => setChosen("All")}>
        <Badge className={chosen === "All" ? "" : "bg-foreground"}>All</Badge>
      </button>
      <button onClick={() => setChosen("Today")}>
        <Badge className={chosen === "Today" ? "" : "bg-foreground"}>
          Today
        </Badge>
      </button>
      <button onClick={() => setChosen("Week")}>
        <Badge className={chosen === "Week" ? "" : "bg-foreground"}>Week</Badge>
      </button>
      <button onClick={() => setChosen("Month")}>
        <Badge className={chosen === "Month" ? "" : "bg-foreground"}>
          Month
        </Badge>
      </button>
      <button onClick={() => setChosen("3 Months")}>
        <Badge className={chosen === "3 Months" ? "" : "bg-foreground"}>
          3 Months
        </Badge>
      </button>
      <button onClick={() => setChosen("Images")}>
        <Badge className={chosen === "Images" ? "" : "bg-foreground"}>
          Images
        </Badge>
      </button>
      <button onClick={() => setChosen("Videos")}>
        <Badge className={chosen === "Videos" ? "" : "bg-foreground"}>
          Videos
        </Badge>
      </button>
    </div>
  );
};

export default DateFilter;
