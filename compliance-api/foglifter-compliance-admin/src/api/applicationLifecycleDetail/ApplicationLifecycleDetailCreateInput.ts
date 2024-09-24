import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type ApplicationLifecycleDetailCreateInput = {
  actualDecommission?: Date | null;
  actualRetirement?: Date | null;
  application?: ApplicationWhereUniqueInput | null;
  decommissionProcess?: string | null;
  decommissionState?: string | null;
  isDrEnabled?: boolean | null;
  plannedDecommission?: Date | null;
  plannedRetirement?: Date | null;
};
