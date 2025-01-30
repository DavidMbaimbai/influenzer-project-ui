export interface Influencer {
  id: string;
  createdAt: string;
  updatedAt: string;
  tittle: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
  category: string;
  trustScore: number;
  trending: boolean;
  followersCount: number;
  verifiedClaimsCount: number;
  about:string
}
