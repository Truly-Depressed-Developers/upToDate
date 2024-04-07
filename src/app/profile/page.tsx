"use client";

import React from "react";
import {
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandThreads,
  IconBrandTiktok,
  IconBrandX,
} from "@tabler/icons-react";
import { userInfo } from "@/data/user";
import { chartData } from "@/data/chartdata";

const Profile = () => {
  return (
    <div>
      <div className="border-b p-4">
        <h1 className="text-center text-4xl font-bold">LOGO</h1>
      </div>
      <div className="flex flex-col space-y-4 p-6">
        <Card className="flex h-[80px] flex-row items-center justify-around">
          <div className="ml-4 mr-2 flex-none">
            <Avatar>
              <AvatarImage src={userInfo.image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex h-[70%] grow flex-col items-start justify-around">
            <CardTitle className="">@{userInfo.handle}</CardTitle>
            <CardDescription>{userInfo.name}</CardDescription>
          </div>
          <div className="ml-2 mr-5 flex-none">
            <Button className="flex items-center">
              <LogOut strokeWidth={1.5} size={20} className="mr-2" />
              Log out
            </Button>
          </div>
        </Card>
        <Card className="p-4 pb-0">
          <CardContent className="flex flex-col space-y-2">
            <span className="flex items-center space-x-2">
              <IconBrandFacebook size={20} />
              <h1 className="grow">Facebook</h1>
              {userInfo.connectedAccounts.facebook ? (
                <Button variant="outline" disabled>
                  Connected
                </Button>
              ) : (
                <Button className="w-[107px]">Connect</Button>
              )}
            </span>
            <span className="flex items-center space-x-2">
              <IconBrandInstagram size={20} />
              <h1 className="grow">Instagram</h1>
              {userInfo.connectedAccounts.instagram ? (
                <Button variant="outline" disabled>
                  Connected
                </Button>
              ) : (
                <Button className="w-[107px]">Connect</Button>
              )}
            </span>
            <span className="flex items-center space-x-2">
              <IconBrandThreads size={20} />
              <h1 className="grow">Threads</h1>
              {userInfo.connectedAccounts.threads ? (
                <Button variant="outline" disabled>
                  Connected
                </Button>
              ) : (
                <Button className="w-[107px]">Connect</Button>
              )}
            </span>
            <span className="flex items-center space-x-2">
              <IconBrandX size={20} />
              <h1 className="grow">X</h1>
              {userInfo.connectedAccounts.x ? (
                <Button variant="outline" disabled>
                  Connected
                </Button>
              ) : (
                <Button className="w-[107px]">Connect</Button>
              )}
            </span>
            <span className="flex items-center space-x-2">
              <IconBrandTiktok size={20} />
              <h1 className="grow">TikTok</h1>
              {userInfo.connectedAccounts.tiktok ? (
                <Button variant="outline" disabled>
                  Connected
                </Button>
              ) : (
                <Button className="w-[107px]">Connect</Button>
              )}
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{
                  top: 30,
                  right: 5,
                  left: 5,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="day" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(20, 14.3%, 4.1%)", // Change this to your desired color
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  strokeWidth={2}
                  dataKey="This week"
                  activeDot={{
                    r: 6,
                    style: { fill: "hsl(37, 98%, 53%)", opacity: 0.25 },
                  }}
                  stroke="hsl(37, 98%, 53%)"
                />
                <Line
                  type="monotone"
                  strokeWidth={2}
                  dataKey="Last week"
                  activeDot={{
                    r: 6,
                    style: { fill: "hsl(12, 6.5%, 15.1%)", opacity: 0.25 },
                  }}
                  stroke="hsl(60, 4.8%, 95.9%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
