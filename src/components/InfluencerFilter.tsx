"use client";

import { influencers } from "@/data/people";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter, useSearchParams } from "next/navigation";

const InfluencerFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("influencer") || "";

  const handleInfluencer = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.has("influencer") && params.get("influencer") === name)
      params.delete("influencer");
    else params.set("influencer", name);

    router.push("?" + params.toString());
  };

  return (
    <div className="no-scrollbar ml-2 flex space-x-8 overflow-x-auto p-4 pb-2">
      {influencers.map((influencer, i) => (
        <button
          key={i}
          className={`flex flex-col items-center space-y-2 ${influencer.shortName === name ? "" : name.length === 0 ? "" : "opacity-50"}`}
          onClick={() => handleInfluencer(influencer.shortName)}
        >
          <Avatar className="scale-125">
            <AvatarImage src={`/avatars/${influencer.image}`} />
            <AvatarFallback>IMG</AvatarFallback>
          </Avatar>
          <p>{influencer.shortName}</p>
        </button>
      ))}
    </div>
  );
};

export default InfluencerFilter;
