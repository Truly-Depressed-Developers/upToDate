"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { PostJson } from "@/lib/types"

export default function Post(props: PostJson) {
    return (
        <Card className="h-fit w-[93%] flex flex-col justify-center align-middle mt-[20px]">
            <CardHeader className="flex justify-start items-center flex-row ">
                <span className="w-[50px]">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </span>
                <span className="ml-30">
                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>{props.subtitle}</CardDescription>
                </span>
            </CardHeader>
            <CardContent className="w-[100%]">
                <div className="Container" dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </CardContent>
            <CardFooter>{props.date}</CardFooter>
        </Card>
    );
}