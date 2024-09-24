export type BigfixContentResult = {
  applicable: boolean;
  contentId: bigint;
  created: Date;
  datasourceDeviceId: bigint;
  datasourceSiteId: bigint;
  firstRelevant: Date | null;
  id: bigint;
  lastNonRelevant: Date | null;
  lastRelevant: Date | null;
  relevant: boolean;
  resolved: boolean;
  reverted: boolean;
  typeField: number;
  updated: Date;
};
