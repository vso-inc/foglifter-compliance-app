export type BigfixContentResultUpdateInput = {
  applicable?: boolean;
  contentId?: bigint;
  datasourceDeviceId?: bigint;
  datasourceSiteId?: bigint;
  firstRelevant?: Date | null;
  lastNonRelevant?: Date | null;
  lastRelevant?: Date | null;
  relevant?: boolean;
  resolved?: boolean;
  reverted?: boolean;
  typeField?: number;
};
