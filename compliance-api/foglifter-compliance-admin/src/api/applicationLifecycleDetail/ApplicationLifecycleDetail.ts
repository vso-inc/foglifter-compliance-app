import { Application } from "../application/Application";

export type ApplicationLifecycleDetail = {
  actualDecommission: Date | null;
  actualRetirement: Date | null;
  application?: Application | null;
  decommissionProcess: string | null;
  decommissionState: string | null;
  id: number;
  isDrEnabled: boolean | null;
  plannedDecommission: Date | null;
  plannedRetirement: Date | null;
};
