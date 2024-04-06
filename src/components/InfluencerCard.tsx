import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import Link from "next/link";
import { IconCheckbox, IconExternalLink } from "@tabler/icons-react";
import { InfluencerWithoutImage } from "@/lib/types";

const InfluencerCard = (props: InfluencerWithoutImage) => {
  const { name, description, socials } = props;
  const { instagram, facebook, tiktok, x } = socials;

  return (
    <div>
      <Card className="mx-10 mt-6 flex items-center justify-between">
        <CardHeader className="pr-0">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Follow Options</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Follow Options</h4>
                  <p className="text-sm text-muted-foreground">
                    Follow desired accounts to see their posts.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid h-10 grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Instagram</Label>
                    {instagram.isFollowing ? (
                      <>
                        <Button disabled>Followed</Button>
                      </>
                    ) : (
                      <>
                        <Link href={"/"} className="flex pl-3">
                          Follow
                          <IconExternalLink className="ml-2 mt-1" size={16} />
                        </Link>
                      </>
                    )}
                  </div>
                  <div className="grid h-10 grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">X</Label>
                    {x.isFollowing ? (
                      <Button disabled>Followed</Button>
                    ) : (
                      <>
                        <Link target="_blank" href={"/"} className="flex pl-3">
                          Follow
                          <IconExternalLink className="ml-2 mt-1" size={16} />
                        </Link>
                      </>
                    )}
                  </div>
                  <div className="grid h-10 grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">TikTok</Label>
                    {tiktok.isFollowing ? (
                      <Button disabled>
                        Followed
                        <IconCheckbox className="ml-2 mt-1" size={16} />
                      </Button>
                    ) : (
                      <>
                        <Link href={"/"} className="flex pl-3">
                          Follow
                          <IconExternalLink className="ml-2 mt-1" size={16} />
                        </Link>
                      </>
                    )}
                  </div>
                  <div className="grid h-10 grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Facebook</Label>
                    {facebook.isFollowing ? (
                      <Button disabled>Followed</Button>
                    ) : (
                      <Link href={"/"} className="flex pl-3">
                        Follow
                        <IconExternalLink className="ml-2 mt-1" size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfluencerCard;
