import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ApplicationDeploymentTitle } from "../applicationDeployment/ApplicationDeploymentTitle";
import { AssetConfigurationDetailTitle } from "../assetConfigurationDetail/AssetConfigurationDetailTitle";
import { AssetLocationDetailTitle } from "../assetLocationDetail/AssetLocationDetailTitle";
import { AssetNetworkDetailTitle } from "../assetNetworkDetail/AssetNetworkDetailTitle";
import { AssetSupportDetailTitle } from "../assetSupportDetail/AssetSupportDetailTitle";
import { AttestationHostTitle } from "../attestationHost/AttestationHostTitle";
import { BigfixRequestTitle } from "../bigfixRequest/BigfixRequestTitle";
import { DatasourceDeviceTitle } from "../datasourceDevice/DatasourceDeviceTitle";
import { EndpointManagementSolutionTitle } from "../endpointManagementSolution/EndpointManagementSolutionTitle";
import { ExceptionTitle } from "../exception/ExceptionTitle";
import { IpAddressTitle } from "../ipAddress/IpAddressTitle";
import { MaintenanceWindowTitle } from "../maintenanceWindow/MaintenanceWindowTitle";
import { OperationsCalendarTitle } from "../operationsCalendar/OperationsCalendarTitle";
import { RebootWindowTitle } from "../rebootWindow/RebootWindowTitle";
import { SubMgmtChangeLogTitle } from "../subMgmtChangeLog/SubMgmtChangeLogTitle";
import { TssChangeLogTitle } from "../tssChangeLog/TssChangeLogTitle";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Alt Id" source="altId" />
        <NumberInput step={1} label="App Server Id" source="appServerId" />
        <ReferenceArrayInput
          source="applicationDeployment"
          reference="ApplicationDeployment"
        >
          <SelectArrayInput
            optionText={ApplicationDeploymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Application Host Id"
          source="applicationHostId"
        />
        <ReferenceArrayInput
          source="assetConfigurationDetails"
          reference="AssetConfigurationDetail"
        >
          <SelectArrayInput
            optionText={AssetConfigurationDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="assetLocationDetails"
          reference="AssetLocationDetail"
        >
          <SelectArrayInput
            optionText={AssetLocationDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="assetNetworkDetails"
          reference="AssetNetworkDetail"
        >
          <SelectArrayInput
            optionText={AssetNetworkDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="assetSupportDetails"
          reference="AssetSupportDetail"
        >
          <SelectArrayInput
            optionText={AssetSupportDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Assigned" source="assigned" />
        <ReferenceArrayInput
          source="attestationHost"
          reference="AttestationHost"
        >
          <SelectArrayInput
            optionText={AttestationHostTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="bigfixRequest" reference="BigfixRequest">
          <SelectArrayInput
            optionText={BigfixRequestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="datasourceDevices"
          reference="DatasourceDevice"
        >
          <SelectArrayInput
            optionText={DatasourceDeviceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="endpointManagementSolution.id"
          reference="EndpointManagementSolution"
          label="Endpoint Management Solution"
        >
          <SelectInput optionText={EndpointManagementSolutionTitle} />
        </ReferenceInput>
        <TextInput label="Enterprise Id" source="enterpriseId" />
        <ReferenceArrayInput source="exception" reference="Exception">
          <SelectArrayInput
            optionText={ExceptionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="ipAddress" reference="IpAddress">
          <SelectArrayInput
            optionText={IpAddressTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="Is Locked" source="isLocked" />
        <BooleanInput label="Is Shared" source="isShared" />
        <ReferenceArrayInput
          source="maintenanceWindow"
          reference="MaintenanceWindow"
        >
          <SelectArrayInput
            optionText={MaintenanceWindowTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Note" source="note" />
        <ReferenceArrayInput
          source="operationsCalendar"
          reference="OperationsCalendar"
        >
          <SelectArrayInput
            optionText={OperationsCalendarTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="rebootWindow" reference="RebootWindow">
          <SelectArrayInput
            optionText={RebootWindowTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="subMgmtChangeLog"
          reference="SubMgmtChangeLog"
        >
          <SelectArrayInput
            optionText={SubMgmtChangeLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="System Backup Id"
          source="systemBackupId"
        />
        <NumberInput
          step={1}
          label="System Citrix Id"
          source="systemCitrixId"
        />
        <TextInput label="Tag" source="tag" />
        <ReferenceArrayInput source="tssChangeLog" reference="TssChangeLog">
          <SelectArrayInput
            optionText={TssChangeLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
