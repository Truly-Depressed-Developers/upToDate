"use client";

import InfluencerCard from "@/components/InfluencerCard";
import Search from "@/components/Search";
import { influencers } from "@/data/people";
import { useSearchParams } from "next/navigation";
import React from "react";

const Explore = () => {
  const search = useSearchParams().get("search");

  const filteredInfluencers = influencers.filter(
    (influencer) =>
      influencer.name.toLowerCase().includes(search?.toLowerCase() ?? "") ||
      influencer.hashtags.some((tag) =>
        tag.toLowerCase().includes(search?.toLowerCase() ?? ""),
      ),
  );

  return (
    <div>
      <div className="border-b p-4 px-10">
        <Search />
      </div>
      <div className="max-h-[80vh] overflow-auto pb-4">
        {filteredInfluencers.map((influencer) => (
          <InfluencerCard key={influencer.name} {...influencer} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
