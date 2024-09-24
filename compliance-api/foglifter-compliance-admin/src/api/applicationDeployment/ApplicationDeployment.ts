import { Application } from "../application/Application";
import { Asset } from "../asset/Asset";

export type ApplicationDeployment = {
  application?: Application | null;
  asset?: Asset | null;
  created: Date;
  deploymentId: string | null;
  deploymentName: string | null;
  deploymentNote: string | null;
  deploymentStatus: string | null;
  deploymentType: string | null;
  id: number;
  updated: Date;
  updatedBy: string;
};
