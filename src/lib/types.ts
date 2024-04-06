export type Influencer = {
  image: string;
  name: string;
  description: string;
  socials: {
    instagram: { link: string; isFollowing: boolean };
    facebook: { link: string; isFollowing: boolean };
    tiktok: { link: string; isFollowing: boolean };
    x: { link: string; isFollowing: boolean };
  };
};

export type InfluencerWithoutImage = Omit<Influencer, "image">;
