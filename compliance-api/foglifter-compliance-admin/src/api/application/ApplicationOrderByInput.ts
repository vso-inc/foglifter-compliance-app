import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  accessesInternet?: SortOrder;
  applicationId?: SortOrder;
  businessName?: SortOrder;
  category?: SortOrder;
  confidentialityRating?: SortOrder;
  created?: SortOrder;
  description?: SortOrder;
  hasPersonalConfidentialInfo?: SortOrder;
  hasProtectedHealthInfo?: SortOrder;
  id?: SortOrder;
  isLifeSustaining?: SortOrder;
  isSubjectToPciCompliance?: SortOrder;
  isSubjectToSoxCompliance?: SortOrder;
  name?: SortOrder;
  overrideServerValidation?: SortOrder;
  shortName?: SortOrder;
  status?: SortOrder;
  subCategory?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
  version?: SortOrder;
  websiteUrl?: SortOrder;
};
