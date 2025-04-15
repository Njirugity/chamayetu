export type Contribution = {
  member_id: string;
  amount: number;
};


export type ContributionDashboard = {
  createdAt: string;
  modifiedAt: string;
  memberId: string;
  amount: number;
  totalContributions: number;
  fullName: string;
};