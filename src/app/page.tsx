"use client";

import DateFilter from "@/components/DateFilter";
import React from "react";

import Post from "@/components/Post";
import InfluencerFilter from "@/components/InfluencerFilter";
import { posts } from "../data/posts";
import { type BadgeTypes, type Post as PostType } from "@/lib/types";
import { useSearchParams } from "next/navigation";

import { subDays, subWeeks, subMonths, subYears } from "date-fns";

function getStartDate(date: BadgeTypes): Date {
  const now = new Date();
  switch (date) {
    case "Today":
      return subDays(now, 1);
    case "Week":
      return subWeeks(now, 1);
    case "Month":
      return subMonths(now, 1);
    case "3mo":
      return subMonths(now, 3);
    case "Year":
      return subYears(now, 1);
    default:
      return new Date(0);
  }
}

export default function Home() {
  const searchParams = useSearchParams();
  const influencer = searchParams.get("influencer") || "";
  const date = searchParams.get("date") || "";

  const filteredPosts = posts
    .filter((post) => {
      const startDate = getStartDate(date as BadgeTypes);
      if (influencer.length > 0 && date.length > 0) {
        return post.author === influencer && new Date(post.date) >= startDate;
      } else if (influencer.length > 0) {
        return post.author === influencer;
      } else if (date.length > 0) {
        return new Date(post.date) >= startDate;
      } else {
        return true;
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main>
      <div className="border-b pb-1">
        <h1 className="pt-4 text-center text-4xl font-bold">LOGO</h1>
        <InfluencerFilter />
        <DateFilter />
      </div>
      <div className="no-scrollbar flex-center flex max-h-[662px] flex-col items-center justify-start overflow-scroll">
        {filteredPosts.map((el: PostType, i: number) => {
          return (
            <Post
              key={i}
              id={el.id}
              author={el.author}
              title={el.title}
              subtitle={el.subtitle}
              content={el.content}
              date={el.date}
            />
          );
        })}
      </div>
    </main>
  );
}
