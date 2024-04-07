"use client";
import DateFilter from "@/components/DateFilter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

import Post from "@/components/Post";
import posts from "../data/posts.json";
import { PostJson } from "@/lib/types";
export default function Home() {
  return (
    <main className="">
      <div className="border-b pb-1">
        <h1 className="pt-4 text-center text-4xl font-bold">LOGO</h1>
        <div className="flex space-x-8 overflow-x-auto no-scrollbar p-4 pb-2">
          {[...Array(8)].map((_, i) => (
            <button key={i} className="flex flex-col items-center space-y-2">
              <Avatar className="scale-125">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>IMG</AvatarFallback>
              </Avatar>
              <p>Name{i}</p>
            </button>
          ))}
        </div>
        <DateFilter />
      </div>
      <div className="overflow-scroll max-h-[662px] no-scrollbar flex flex-center justify-start flex-col items-center">
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
      </div>
    </main>
  );
}
