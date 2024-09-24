import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "firstName";

export const ContactTitle = (record: TContact): string => {
  return record.firstName?.toString() || String(record.id);
};
