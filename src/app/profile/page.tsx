import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "../../components/ui/button";

const Profile = () => {
  return <div>
    <h1 className="pt-4 text-center text-4xl font-bold">LOGO</h1>
    <div className="w-[100%] h-[800px] bg-white p-6">
      <Card className="flex flex-row justify-around items-center h-[80px]">
        <div className="flex-none ml-4 mr-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex grow flex-col items-start justify-around h-[70%]">
          <CardTitle className="">@username</CardTitle>
          <CardDescription>Name - Surname</CardDescription>
        </div>
        <div className="flex-none mr-5 ml-2">
          <Button variant="outline">Follow Options</Button>
        </div>
      </Card>
      <Card className="mt-3">fb</Card>
      <Card className="mt-3">graf</Card>

    </div>
  </div>;
};

export default Profile;
