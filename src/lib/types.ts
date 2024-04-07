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

export type PostJson = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  date: string;
};
