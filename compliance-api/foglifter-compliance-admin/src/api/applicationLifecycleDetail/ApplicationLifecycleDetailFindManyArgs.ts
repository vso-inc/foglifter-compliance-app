import { ApplicationLifecycleDetailWhereInput } from "./ApplicationLifecycleDetailWhereInput";
import { ApplicationLifecycleDetailOrderByInput } from "./ApplicationLifecycleDetailOrderByInput";

export type ApplicationLifecycleDetailFindManyArgs = {
  where?: ApplicationLifecycleDetailWhereInput;
  orderBy?: Array<ApplicationLifecycleDetailOrderByInput>;
  skip?: number;
  take?: number;
};
