export type Contribution = {
  member_id: string;
  amount: number;
};


export type ContributionDashboard = {
  created_at: string;
  modified_at: string;
  contribution_id: number;
  member_id: string;
  amount: number;
  total_contributions: number;
};