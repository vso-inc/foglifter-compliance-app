import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { ASSET_TITLE_FIELD } from "./AssetTitle";
import { ASSETSUPPORTVENDOR_TITLE_FIELD } from "../assetSupportVendor/AssetSupportVendorTitle";
import { ATTESTATION_TITLE_FIELD } from "../attestation/AttestationTitle";
import { BIGFIXREQUESTTYPE_TITLE_FIELD } from "../bigfixRequestType/BigfixRequestTypeTitle";
import { ASSETNETWORKDETAIL_TITLE_FIELD } from "../assetNetworkDetail/AssetNetworkDetailTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { OPERATIONSCALENDARSTATUS_TITLE_FIELD } from "../operationsCalendarStatus/OperationsCalendarStatusTitle";
import { BIGFIXREQUEST_TITLE_FIELD } from "../bigfixRequest/BigfixRequestTitle";
import { SUBMGMTCHANGELOGSTATUS_TITLE_FIELD } from "../subMgmtChangeLogStatus/SubMgmtChangeLogStatusTitle";
import { TSSCHANGELOGSTATUS_TITLE_FIELD } from "../tssChangeLogStatus/TssChangeLogStatusTitle";
import { ENDPOINTMANAGEMENTSOLUTION_TITLE_FIELD } from "../endpointManagementSolution/EndpointManagementSolutionTitle";

export const AssetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Alt Id" source="altId" />
        <TextField label="App Server Id" source="appServerId" />
        <TextField label="Application Host Id" source="applicationHostId" />
        <TextField label="Assigned" source="assigned" />
        <DateField source="created" label="Created" />
        <TextField label="Description" source="description" />
        <ReferenceField
          label="Endpoint Management Solution"
          source="endpointmanagementsolution.id"
          reference="EndpointManagementSolution"
        >
          <TextField source={ENDPOINTMANAGEMENTSOLUTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Enterprise Id" source="enterpriseId" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Locked" source="isLocked" />
        <BooleanField label="Is Shared" source="isShared" />
        <TextField label="Note" source="note" />
        <TextField label="System Backup Id" source="systemBackupId" />
        <TextField label="System Citrix Id" source="systemCitrixId" />
        <TextField label="Tag" source="tag" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
        <ReferenceManyField
          reference="ApplicationDeployment"
          target="asset_id"
          label="ApplicationDeployments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="Deployment Id" source="deploymentId" />
            <TextField label="Deployment Name" source="deploymentName" />
            <TextField label="Deployment Note" source="deploymentNote" />
            <TextField label="Deployment Status" source="deploymentStatus" />
            <TextField label="Deployment Type" source="deploymentType" />
            <TextField label="ID" source="id" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AssetConfigurationDetail"
          target="asset_id"
          label="AssetConfigurationDetails"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Asset Tag" source="assetTag" />
            <TextField label="Bios" source="bios" />
            <TextField label="Brand" source="brand" />
            <TextField label="Cpu Count" source="cpuCount" />
            <TextField label="Cpu Speed" source="cpuSpeed" />
            <TextField label="Cpu Type" source="cpuType" />
            <TextField label="Cpu Version" source="cpuVersion" />
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <TextField label="In Service" source="inService" />
            <TextField label="Last Hardware Scan" source="lastHardwareScan" />
            <TextField label="Model" source="model" />
            <TextField label="Nature" source="nature" />
            <TextField label="Operating System" source="operatingSystem" />
            <TextField label="Role" source="role" />
            <TextField label="Scan Exempt Reason" source="scanExemptReason" />
            <TextField label="Serial" source="serial" />
            <TextField label="Status" source="status" />
            <TextField label="Type Field" source="typeField" />
            <DateField source="updated" label="Updated" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AssetLocationDetail"
          target="asset_id"
          label="AssetLocationDetails"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <BooleanField label="In Data Center" source="inDataCenter" />
            <TextField label="Location Building" source="locationBuilding" />
            <TextField label="Location Code" source="locationCode" />
            <TextField label="Location Floor" source="locationFloor" />
            <TextField label="Location Full" source="locationFull" />
            <TextField label="Location Grid" source="locationGrid" />
            <TextField label="Location Physical" source="locationPhysical" />
            <TextField label="Region" source="region" />
            <TextField label="Service Area" source="serviceArea" />
            <DateField source="updated" label="Updated" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AssetNetworkDetail"
          target="asset_id"
          label="AssetNetworkDetails"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="Dns Name" source="dnsName" />
            <TextField label="Domain" source="domain" />
            <TextField label="Hostname" source="hostname" />
            <TextField label="ID" source="id" />
            <TextField label="Mac Address" source="macAddress" />
            <TextField label="Member Of Cluster" source="memberOfCluster" />
            <TextField label="Previous Hostname" source="previousHostname" />
            <TextField label="Primary Mac Address" source="primaryMacAddress" />
            <DateField source="updated" label="Updated" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AssetSupportDetail"
          target="asset_id"
          label="AssetSupportDetails"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Activity Based Costing"
              source="activityBasedCosting"
            />
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Asset Support Vendor"
              source="assetsupportvendor.id"
              reference="AssetSupportVendor"
            >
              <TextField source={ASSETSUPPORTVENDOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <TextField label="Resource Unit Id" source="resourceUnitId" />
            <TextField
              label="Support Contract End Date"
              source="supportContractEndDate"
            />
            <TextField label="Support Contract Id" source="supportContractId" />
            <TextField
              label="Support Contract Renewal Cost"
              source="supportContractRenewalCost"
            />
            <TextField
              label="Support Contract Renewal Date"
              source="supportContractRenewalDate"
            />
            <TextField
              label="Support Contract Renewal Notes"
              source="supportContractRenewalNotes"
            />
            <TextField
              label="Support Contract Renewal Term"
              source="supportContractRenewalTerm"
            />
            <TextField
              label="Support Contract Start Date"
              source="supportContractStartDate"
            />
            <DateField source="updated" label="Updated" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AttestationHost"
          target="asset_id"
          label="AttestationHosts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Attestation"
              source="attestation.id"
              reference="Attestation"
            >
              <TextField source={ATTESTATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <BooleanField
              label="Is Supported By Third Party"
              source="isSupportedByThirdParty"
            />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BigfixRequest"
          target="asset_id"
          label="BigfixRequests"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Action Script Id" source="actionScriptId" />
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Bigfix Environment" source="bigfixEnvironment" />
            <ReferenceField
              label="Bigfix Request Type"
              source="bigfixrequesttype.id"
              reference="BigfixRequestType"
            >
              <TextField source={BIGFIXREQUESTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Computer Id" source="computerId" />
            <TextField label="Computer Status" source="computerStatus" />
            <DateField source="created" label="Created" />
            <TextField label="Http Response" source="httpResponse" />
            <TextField
              label="Http Response Message"
              source="httpResponseMessage"
            />
            <TextField label="ID" source="id" />
            <TextField label="Request" source="request" />
            <TextField
              label="Request Computer Settings"
              source="requestComputerSettings"
            />
            <TextField label="Request Status" source="requestStatus" />
            <TextField label="Response" source="response" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DatasourceDevice"
          target="asset_id"
          label="DatasourceDevices"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="Datasource Id" source="datasourceId" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Is Locked" source="isLocked" />
            <TextField label="Last Report Sent" source="lastReportSent" />
            <TextField label="Last Report Time" source="lastReportTime" />
            <TextField label="Name" source="name" />
            <TextField label="Report Number" source="reportNumber" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Exception"
          target="asset_id"
          label="Exceptions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="Exception End" source="exceptionEnd" />
            <TextField label="Exception Reason" source="exceptionReason" />
            <TextField label="Exception Start" source="exceptionStart" />
            <TextField label="Exception Type" source="exceptionType" />
            <TextField label="ID" source="id" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="IpAddress"
          target="asset_id"
          label="IpAddresses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Asset Network Details"
              source="assetnetworkdetail.id"
              reference="AssetNetworkDetail"
            >
              <TextField source={ASSETNETWORKDETAIL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="Dns Name" source="dnsName" />
            <TextField label="ID" source="id" />
            <TextField label="Ip" source="ip" />
            <BooleanField label="Is Primary" source="isPrimary" />
            <TextField label="Subnet Purpose" source="subnetPurpose" />
            <TextField label="Type Field" source="typeField" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MaintenanceWindow"
          target="asset_id"
          label="MaintenanceWindows"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <TextField
              label="Maint Window Available Day Of Week"
              source="maintWindowAvailableDayOfWeek"
            />
            <TextField
              label="Maint Window Available Months"
              source="maintWindowAvailableMonths"
            />
            <TextField
              label="Maint Window Available Weeks Of Month"
              source="maintWindowAvailableWeeksOfMonth"
            />
            <TextField
              label="Maint Window Close Time"
              source="maintWindowCloseTime"
            />
            <TextField
              label="Maint Window Last Inside"
              source="maintWindowLastInside"
            />
            <TextField
              label="Maint Window Level Of Support"
              source="maintWindowLevelOfSupport"
            />
            <TextField
              label="Maint Window Open Time"
              source="maintWindowOpenTime"
            />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OperationsCalendar"
          target="asset_id"
          label="OperationsCalendars"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Change Coordinator" source="changeCoordinator" />
            <TextField label="Change Manager" source="changeManager" />
            <TextField label="Change Request" source="changeRequest" />
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField
              label="Development Manager"
              source="developmentManager"
            />
            <TextField label="ID" source="id" />
            <TextField label="Last Patched" source="lastPatched" />
            <TextField label="Locked" source="locked" />
            <TextField label="Locked By" source="lockedBy" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="Operations Calendar Status"
              source="operationscalendarstatus.id"
              reference="OperationsCalendarStatus"
            >
              <TextField source={OPERATIONSCALENDARSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Project Manager" source="projectManager" />
            <TextField label="Reason Code" source="reasonCode" />
            <TextField label="Scheduled" source="scheduled" />
            <TextField label="Scheduled By" source="scheduledBy" />
            <TextField label="Service Id" source="serviceId" />
            <TextField label="Technical Lead" source="technicalLead" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RebootWindow"
          target="asset_id"
          label="RebootWindows"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <TextField
              label="Reboot Window Available Day Of Week"
              source="rebootWindowAvailableDayOfWeek"
            />
            <TextField
              label="Reboot Window Available Months"
              source="rebootWindowAvailableMonths"
            />
            <TextField
              label="Reboot Window Available Weeks Of Month"
              source="rebootWindowAvailableWeeksOfMonth"
            />
            <TextField
              label="Reboot Window Close Time"
              source="rebootWindowCloseTime"
            />
            <TextField
              label="Reboot Window Open Time"
              source="rebootWindowOpenTime"
            />
            <DateField source="updated" label="Updated" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SubMgmtChangeLog"
          target="asset_id"
          label="SubMgmtChangeLogs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Action" source="action" />
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Bigfix Request"
              source="bigfixrequest.id"
              reference="BigfixRequest"
            >
              <TextField source={BIGFIXREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="Hostname" source="hostname" />
            <TextField label="ID" source="id" />
            <TextField
              label="Patch Channel Include List"
              source="patchChannelIncludeList"
            />
            <ReferenceField
              label="Sub Mgmt Change Log Status"
              source="submgmtchangelogstatus.id"
              reference="SubMgmtChangeLogStatus"
            >
              <TextField source={SUBMGMTCHANGELOGSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TssChangeLog"
          target="asset_id"
          label="TssChangeLogs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Action" source="action" />
            <TextField label="Apply On" source="applyOn" />
            <BooleanField
              label="Apply On Next Scheduled Maint Window"
              source="applyOnNextScheduledMaintWindow"
            />
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Bigfix Request"
              source="bigfixrequest.id"
              reference="BigfixRequest"
            >
              <TextField source={BIGFIXREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <TextField
              label="Remediation Window Hours"
              source="remediationWindowHours"
            />
            <ReferenceField
              label="Tss Change Log Status"
              source="tsschangelogstatus.id"
              reference="TssChangeLogStatus"
            >
              <TextField source={TSSCHANGELOGSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tss Include List" source="tssIncludeList" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
