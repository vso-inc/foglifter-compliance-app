import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";

export type ApplicationContactCreateInput = {
  application: ApplicationWhereUniqueInput;
  applicationId: string;
  contact: ContactWhereUniqueInput;
  roleEnds?: Date | null;
  roleStarts?: Date | null;
  roleType: string;
  updatedBy: string;
};
