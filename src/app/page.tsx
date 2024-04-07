"use client";

import React from "react";
import Post from "@/components/Post";
import posts from "../data/posts.json";
import { PostJson } from "@/lib/types";

export default function Home() {
  return (
    <main className="min-h-[90vh] min-w-[100%] flex flex-col justify-start items-center overflow-scroll no-scrollbar">
      {posts.map((el: PostJson, i: number) => {
        return <Post
          key={i}
          id={el.id}
          title={el.title}
          subtitle={el.subtitle}
          content={el.content}
          image={el.image}
          date={el.date}
        />
      })}
    </main>
  );
}
