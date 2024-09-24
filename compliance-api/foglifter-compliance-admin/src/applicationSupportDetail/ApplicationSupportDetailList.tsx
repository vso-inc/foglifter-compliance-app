import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const ApplicationSupportDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ApplicationSupportDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="Business Required Recovery Point Objective"
          source="businessRequiredRecoveryPointObjective"
        />
        <TextField
          label="Business Required Recovery Time Objective"
          source="businessRequiredRecoveryTimeObjective"
        />
        <TextField label="ID" source="id" />
        <TextField
          label="Infrastructure Support"
          source="infrastructureSupport"
        />
        <TextField label="Owning Organization" source="owningOrganization" />
        <TextField
          label="Owning Sub Organization"
          source="owningSubOrganization"
        />
        <TextField
          label="Recovery Point Capability"
          source="recoveryPointCapability"
        />
        <TextField
          label="Recovery Time Capability"
          source="recoveryTimeCapability"
        />
        <TextField label="Resiliency Tier" source="resiliencyTier" />
        <TextField label="Support" source="support" />
        <TextField label="Support Organization" source="supportOrganization" />
        <TextField label="Support Tier" source="supportTier" />{" "}
      </Datagrid>
    </List>
  );
};
