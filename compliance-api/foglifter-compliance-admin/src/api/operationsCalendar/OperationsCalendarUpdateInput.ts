import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { OperationsCalendarStatusWhereUniqueInput } from "../operationsCalendarStatus/OperationsCalendarStatusWhereUniqueInput";

export type OperationsCalendarUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  changeCoordinator?: string | null;
  changeManager?: string | null;
  changeRequest?: string | null;
  contact?: ContactWhereUniqueInput | null;
  developmentManager?: string | null;
  lastPatched?: Date | null;
  locked?: Date | null;
  lockedBy?: string | null;
  note?: string | null;
  operationsCalendarStatus?: OperationsCalendarStatusWhereUniqueInput | null;
  projectManager?: string | null;
  reasonCode?: number | null;
  scheduled?: Date | null;
  scheduledBy?: string | null;
  serviceId?: number | null;
  technicalLead?: string | null;
  updatedBy?: string | null;
};
