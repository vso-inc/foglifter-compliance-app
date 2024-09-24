import { Asset } from "../asset/Asset";
import { Environment } from "../environment/Environment";

export type EndpointManagementSolution = {
  asset?: Array<Asset>;
  description: string;
  environment?: Environment | null;
  id: number;
  name: string;
};
