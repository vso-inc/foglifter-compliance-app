import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { AttestationTitle } from "../attestation/AttestationTitle";
import { AttestationHostFixletTitle } from "../attestationHostFixlet/AttestationHostFixletTitle";

export const AttestationHostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="attestation.id"
          reference="Attestation"
          label="Attestation"
        >
          <SelectInput optionText={AttestationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="attestationHostFixlet"
          reference="AttestationHostFixlet"
        >
          <SelectArrayInput
            optionText={AttestationHostFixletTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput
          label="Is Supported By Third Party"
          source="isSupportedByThirdParty"
        />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
