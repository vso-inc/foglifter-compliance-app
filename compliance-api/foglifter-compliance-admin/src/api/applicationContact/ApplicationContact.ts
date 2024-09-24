import { Application } from "../application/Application";
import { Contact } from "../contact/Contact";

export type ApplicationContact = {
  application?: Application;
  applicationId: string;
  contact?: Contact;
  created: Date;
  id: number;
  roleEnds: Date | null;
  roleStarts: Date | null;
  roleType: string;
  updated: Date;
  updatedBy: string;
};
