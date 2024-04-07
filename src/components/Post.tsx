"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Post as PostType } from "@/lib/types";
import { influencers } from "@/data/people";
import { IconBrandInstagram } from "@tabler/icons-react";

export default function Post(props: PostType) {
  const avatar = influencers.find(
    (influencer) => influencer.shortName === props.author,
  ).image;

  return (
    <Card className="mt-[20px] flex h-fit w-[93%] flex-col justify-center align-middle">
      <CardHeader className="flex flex-row items-center justify-start ">
        <span className="w-[50px]">
          <Avatar>
            <AvatarImage src={`/avatars/${avatar}`} alt="@shadcn" />
            <AvatarFallback>IMG</AvatarFallback>
          </Avatar>
        </span>
        <span className="mx-1 w-full">
          <CardTitle className="flex w-full items-start justify-between">
            {props.title}
            <IconBrandInstagram size={20} />
          </CardTitle>
          <CardDescription>{props.subtitle}</CardDescription>
        </span>
      </CardHeader>
      <CardContent className="w-[100%]">
        <div
          className="Container"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </CardContent>
      <CardFooter>
        {props.date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </CardFooter>
    </Card>
  );
}
