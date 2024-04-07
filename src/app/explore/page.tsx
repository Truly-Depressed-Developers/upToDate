import InfluencerCard from "@/components/InfluencerCard";
import { Input } from "@/components/ui/input";
import { influencers } from "@/data/people";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const Explore = () => {
  return (
    <div>
      <div className="border-b p-4 px-10">
        <span className="relative">
          <Input
            className="rounded-xl border-primary bg-[#D9D9D9]/10 pl-10 placeholder:text-primary"
            type="search"
            placeholder="Search..."
          />
          <IconSearch
            size={16}
            className="absolute left-4 top-7 text-primary/30"
          />
        </span>
      </div>
      <div className="max-h-[82.75vh] overflow-auto">
        {influencers.map((influencer) => (
          <InfluencerCard key={influencer.name} {...influencer} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
