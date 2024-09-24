import { Asset } from "../asset/Asset";
import { Contact } from "../contact/Contact";
import { OperationsCalendarStatus } from "../operationsCalendarStatus/OperationsCalendarStatus";

export type OperationsCalendar = {
  asset?: Asset | null;
  changeCoordinator: string | null;
  changeManager: string | null;
  changeRequest: string | null;
  contact?: Contact | null;
  created: Date;
  developmentManager: string | null;
  id: number;
  lastPatched: Date | null;
  locked: Date | null;
  lockedBy: string | null;
  note: string | null;
  operationsCalendarStatus?: OperationsCalendarStatus | null;
  projectManager: string | null;
  reasonCode: number | null;
  scheduled: Date | null;
  scheduledBy: string | null;
  serviceId: number | null;
  technicalLead: string | null;
  updated: Date;
  updatedBy: string | null;
};
