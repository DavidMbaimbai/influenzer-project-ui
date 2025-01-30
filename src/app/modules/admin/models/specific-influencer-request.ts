export interface SpecificInfluencerRequest {
  influencerName: string;
  claimsToAnalyzeCount: number;
  productsToFindPerInfluencerCount: number;
  researchNotes: string;
  revenueAnalyzed: boolean;
  verifiedScientificJournal: boolean;
  timeRange: string;
  sciJournalSet: any[];
}
