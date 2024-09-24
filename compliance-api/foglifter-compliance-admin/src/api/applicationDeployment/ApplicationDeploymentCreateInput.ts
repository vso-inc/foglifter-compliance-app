import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type ApplicationDeploymentCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  asset?: AssetWhereUniqueInput | null;
  deploymentId?: string | null;
  deploymentName?: string | null;
  deploymentNote?: string | null;
  deploymentStatus?: string | null;
  deploymentType?: string | null;
  updatedBy: string;
};
