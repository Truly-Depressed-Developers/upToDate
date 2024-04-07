export type Influencer = {
  image: string;
  name: string;
  shortName: string;
  description: string;
  socials: {
    instagram: { link: string; isFollowing: boolean };
    facebook: { link: string; isFollowing: boolean };
    tiktok: { link: string; isFollowing: boolean };
    x: { link: string; isFollowing: boolean };
  };
};

export type InfluencerWithoutImage = Omit<Influencer, "image">;

export type Post = {
  id: number;
  title: string;
  author: string;
  subtitle: string;
  content: string;
  date: Date;
};

export type BadgeTypes = "All" | "Today" | "Week" | "Month" | "3mo" | "Year";
