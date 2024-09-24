import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Applications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="Accesses Internet" source="accessesInternet" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Business Name" source="businessName" />
        <TextField label="Category" source="category" />
        <TextField
          label="Confidentiality Rating"
          source="confidentialityRating"
        />
        <DateField source="created" label="Created" />
        <TextField label="Description" source="description" />
        <BooleanField
          label="Has Personal Confidential Info"
          source="hasPersonalConfidentialInfo"
        />
        <BooleanField
          label="Has Protected Health Info"
          source="hasProtectedHealthInfo"
        />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Life Sustaining" source="isLifeSustaining" />
        <BooleanField
          label="Is Subject To Pci Compliance"
          source="isSubjectToPciCompliance"
        />
        <BooleanField
          label="Is Subject To Sox Compliance"
          source="isSubjectToSoxCompliance"
        />
        <TextField label="Name" source="name" />
        <TextField
          label="Override Server Validation"
          source="overrideServerValidation"
        />
        <TextField label="Short Name" source="shortName" />
        <TextField label="Status" source="status" />
        <TextField label="Sub Category" source="subCategory" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
        <TextField label="Version" source="version" />
        <TextField label="Website Url" source="websiteUrl" />{" "}
      </Datagrid>
    </List>
  );
};
