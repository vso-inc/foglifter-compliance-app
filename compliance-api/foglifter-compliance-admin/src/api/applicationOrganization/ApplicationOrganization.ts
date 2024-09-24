import { Application } from "../application/Application";

export type ApplicationOrganization = {
  application?: Application;
  created: Date;
  id: number;
  level: number;
  name: string | null;
  typeField: string;
  updated: Date;
  updatedBy: string;
};
