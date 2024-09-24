import { Subnet as TSubnet } from "../api/subnet/Subnet";

export const SUBNET_TITLE_FIELD = "note";

export const SubnetTitle = (record: TSubnet): string => {
  return record.note?.toString() || String(record.id);
};
