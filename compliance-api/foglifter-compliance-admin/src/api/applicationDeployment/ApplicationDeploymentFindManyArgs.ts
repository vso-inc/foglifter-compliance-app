import { ApplicationDeploymentWhereInput } from "./ApplicationDeploymentWhereInput";
import { ApplicationDeploymentOrderByInput } from "./ApplicationDeploymentOrderByInput";

export type ApplicationDeploymentFindManyArgs = {
  where?: ApplicationDeploymentWhereInput;
  orderBy?: Array<ApplicationDeploymentOrderByInput>;
  skip?: number;
  take?: number;
};
