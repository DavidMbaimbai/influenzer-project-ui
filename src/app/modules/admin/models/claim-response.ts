import { Influencer } from "./influencer";

export interface ClaimResponse {
  content: string;
  category: string;
  verificationStatus: string;
  trustScore: number;
  influencer: Influencer;
}
