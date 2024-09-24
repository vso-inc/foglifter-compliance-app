import { ApplicationOrganizationWhereInput } from "./ApplicationOrganizationWhereInput";
import { ApplicationOrganizationOrderByInput } from "./ApplicationOrganizationOrderByInput";

export type ApplicationOrganizationFindManyArgs = {
  where?: ApplicationOrganizationWhereInput;
  orderBy?: Array<ApplicationOrganizationOrderByInput>;
  skip?: number;
  take?: number;
};
