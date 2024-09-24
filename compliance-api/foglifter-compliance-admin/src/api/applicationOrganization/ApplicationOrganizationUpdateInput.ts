import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type ApplicationOrganizationUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  level?: number;
  name?: string | null;
  typeField?: string;
  updatedBy?: string;
};
