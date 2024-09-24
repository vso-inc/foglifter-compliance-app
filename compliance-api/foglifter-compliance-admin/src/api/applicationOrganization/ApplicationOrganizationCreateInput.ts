import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type ApplicationOrganizationCreateInput = {
  application: ApplicationWhereUniqueInput;
  level: number;
  name?: string | null;
  typeField: string;
  updatedBy: string;
};
