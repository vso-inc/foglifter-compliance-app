import { IpAddress as TIpAddress } from "../api/ipAddress/IpAddress";

export const IPADDRESS_TITLE_FIELD = "dnsName";

export const IpAddressTitle = (record: TIpAddress): string => {
  return record.dnsName?.toString() || String(record.id);
};
