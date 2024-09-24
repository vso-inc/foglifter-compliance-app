import { BigfixRequest } from "../bigfixRequest/BigfixRequest";

export type BigfixRequestType = {
  bigfixRequest?: Array<BigfixRequest>;
  id: number;
  requestType: string;
};
