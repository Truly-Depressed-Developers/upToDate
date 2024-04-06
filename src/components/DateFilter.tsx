import React from "react";
import { Badge } from "./ui/badge";

const DateFilter = () => {
  return (
    <div className="no-scrollbar flex space-x-4 overflow-auto px-4 pb-2 pt-1">
      <Badge>All</Badge>
      <Badge>Today</Badge>
      <Badge>Week</Badge>
      <Badge>Instagram</Badge>
      <Badge>Twitter</Badge>
      <Badge>Threads</Badge>
      <Badge>Media</Badge>
    </div>
  );
};

export default DateFilter;
