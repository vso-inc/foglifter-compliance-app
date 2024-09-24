import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { ApplicationContactList } from "./applicationContact/ApplicationContactList";
import { ApplicationContactCreate } from "./applicationContact/ApplicationContactCreate";
import { ApplicationContactEdit } from "./applicationContact/ApplicationContactEdit";
import { ApplicationContactShow } from "./applicationContact/ApplicationContactShow";
import { ApplicationDeploymentList } from "./applicationDeployment/ApplicationDeploymentList";
import { ApplicationDeploymentCreate } from "./applicationDeployment/ApplicationDeploymentCreate";
import { ApplicationDeploymentEdit } from "./applicationDeployment/ApplicationDeploymentEdit";
import { ApplicationDeploymentShow } from "./applicationDeployment/ApplicationDeploymentShow";
import { ApplicationLifecycleDetailList } from "./applicationLifecycleDetail/ApplicationLifecycleDetailList";
import { ApplicationLifecycleDetailCreate } from "./applicationLifecycleDetail/ApplicationLifecycleDetailCreate";
import { ApplicationLifecycleDetailEdit } from "./applicationLifecycleDetail/ApplicationLifecycleDetailEdit";
import { ApplicationLifecycleDetailShow } from "./applicationLifecycleDetail/ApplicationLifecycleDetailShow";
import { ApplicationOrganizationList } from "./applicationOrganization/ApplicationOrganizationList";
import { ApplicationOrganizationCreate } from "./applicationOrganization/ApplicationOrganizationCreate";
import { ApplicationOrganizationEdit } from "./applicationOrganization/ApplicationOrganizationEdit";
import { ApplicationOrganizationShow } from "./applicationOrganization/ApplicationOrganizationShow";
import { ApplicationSupportDetailList } from "./applicationSupportDetail/ApplicationSupportDetailList";
import { ApplicationSupportDetailCreate } from "./applicationSupportDetail/ApplicationSupportDetailCreate";
import { ApplicationSupportDetailEdit } from "./applicationSupportDetail/ApplicationSupportDetailEdit";
import { ApplicationSupportDetailShow } from "./applicationSupportDetail/ApplicationSupportDetailShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { AssetConfigurationDetailList } from "./assetConfigurationDetail/AssetConfigurationDetailList";
import { AssetConfigurationDetailCreate } from "./assetConfigurationDetail/AssetConfigurationDetailCreate";
import { AssetConfigurationDetailEdit } from "./assetConfigurationDetail/AssetConfigurationDetailEdit";
import { AssetConfigurationDetailShow } from "./assetConfigurationDetail/AssetConfigurationDetailShow";
import { AssetLocationDetailList } from "./assetLocationDetail/AssetLocationDetailList";
import { AssetLocationDetailCreate } from "./assetLocationDetail/AssetLocationDetailCreate";
import { AssetLocationDetailEdit } from "./assetLocationDetail/AssetLocationDetailEdit";
import { AssetLocationDetailShow } from "./assetLocationDetail/AssetLocationDetailShow";
import { AssetNetworkDetailList } from "./assetNetworkDetail/AssetNetworkDetailList";
import { AssetNetworkDetailCreate } from "./assetNetworkDetail/AssetNetworkDetailCreate";
import { AssetNetworkDetailEdit } from "./assetNetworkDetail/AssetNetworkDetailEdit";
import { AssetNetworkDetailShow } from "./assetNetworkDetail/AssetNetworkDetailShow";
import { AssetSupportDetailList } from "./assetSupportDetail/AssetSupportDetailList";
import { AssetSupportDetailCreate } from "./assetSupportDetail/AssetSupportDetailCreate";
import { AssetSupportDetailEdit } from "./assetSupportDetail/AssetSupportDetailEdit";
import { AssetSupportDetailShow } from "./assetSupportDetail/AssetSupportDetailShow";
import { AssetSupportVendorList } from "./assetSupportVendor/AssetSupportVendorList";
import { AssetSupportVendorCreate } from "./assetSupportVendor/AssetSupportVendorCreate";
import { AssetSupportVendorEdit } from "./assetSupportVendor/AssetSupportVendorEdit";
import { AssetSupportVendorShow } from "./assetSupportVendor/AssetSupportVendorShow";
import { AttestationList } from "./attestation/AttestationList";
import { AttestationCreate } from "./attestation/AttestationCreate";
import { AttestationEdit } from "./attestation/AttestationEdit";
import { AttestationShow } from "./attestation/AttestationShow";
import { AttestationHostList } from "./attestationHost/AttestationHostList";
import { AttestationHostCreate } from "./attestationHost/AttestationHostCreate";
import { AttestationHostEdit } from "./attestationHost/AttestationHostEdit";
import { AttestationHostShow } from "./attestationHost/AttestationHostShow";
import { AttestationHostFixletList } from "./attestationHostFixlet/AttestationHostFixletList";
import { AttestationHostFixletCreate } from "./attestationHostFixlet/AttestationHostFixletCreate";
import { AttestationHostFixletEdit } from "./attestationHostFixlet/AttestationHostFixletEdit";
import { AttestationHostFixletShow } from "./attestationHostFixlet/AttestationHostFixletShow";
import { AttestationTypeList } from "./attestationType/AttestationTypeList";
import { AttestationTypeCreate } from "./attestationType/AttestationTypeCreate";
import { AttestationTypeEdit } from "./attestationType/AttestationTypeEdit";
import { AttestationTypeShow } from "./attestationType/AttestationTypeShow";
import { BigfixContentResultList } from "./bigfixContentResult/BigfixContentResultList";
import { BigfixContentResultCreate } from "./bigfixContentResult/BigfixContentResultCreate";
import { BigfixContentResultEdit } from "./bigfixContentResult/BigfixContentResultEdit";
import { BigfixContentResultShow } from "./bigfixContentResult/BigfixContentResultShow";
import { BigfixRequestList } from "./bigfixRequest/BigfixRequestList";
import { BigfixRequestCreate } from "./bigfixRequest/BigfixRequestCreate";
import { BigfixRequestEdit } from "./bigfixRequest/BigfixRequestEdit";
import { BigfixRequestShow } from "./bigfixRequest/BigfixRequestShow";
import { BigfixRequestTypeList } from "./bigfixRequestType/BigfixRequestTypeList";
import { BigfixRequestTypeCreate } from "./bigfixRequestType/BigfixRequestTypeCreate";
import { BigfixRequestTypeEdit } from "./bigfixRequestType/BigfixRequestTypeEdit";
import { BigfixRequestTypeShow } from "./bigfixRequestType/BigfixRequestTypeShow";
import { ConfigModelList } from "./configModel/ConfigModelList";
import { ConfigModelCreate } from "./configModel/ConfigModelCreate";
import { ConfigModelEdit } from "./configModel/ConfigModelEdit";
import { ConfigModelShow } from "./configModel/ConfigModelShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { DatasourceDeviceList } from "./datasourceDevice/DatasourceDeviceList";
import { DatasourceDeviceCreate } from "./datasourceDevice/DatasourceDeviceCreate";
import { DatasourceDeviceEdit } from "./datasourceDevice/DatasourceDeviceEdit";
import { DatasourceDeviceShow } from "./datasourceDevice/DatasourceDeviceShow";
import { EndpointManagementSolutionList } from "./endpointManagementSolution/EndpointManagementSolutionList";
import { EndpointManagementSolutionCreate } from "./endpointManagementSolution/EndpointManagementSolutionCreate";
import { EndpointManagementSolutionEdit } from "./endpointManagementSolution/EndpointManagementSolutionEdit";
import { EndpointManagementSolutionShow } from "./endpointManagementSolution/EndpointManagementSolutionShow";
import { EnvironmentList } from "./environment/EnvironmentList";
import { EnvironmentCreate } from "./environment/EnvironmentCreate";
import { EnvironmentEdit } from "./environment/EnvironmentEdit";
import { EnvironmentShow } from "./environment/EnvironmentShow";
import { ExceptionList } from "./exception/ExceptionList";
import { ExceptionCreate } from "./exception/ExceptionCreate";
import { ExceptionEdit } from "./exception/ExceptionEdit";
import { ExceptionShow } from "./exception/ExceptionShow";
import { IpAddressList } from "./ipAddress/IpAddressList";
import { IpAddressCreate } from "./ipAddress/IpAddressCreate";
import { IpAddressEdit } from "./ipAddress/IpAddressEdit";
import { IpAddressShow } from "./ipAddress/IpAddressShow";
import { KeyFieldMetricList } from "./keyFieldMetric/KeyFieldMetricList";
import { KeyFieldMetricCreate } from "./keyFieldMetric/KeyFieldMetricCreate";
import { KeyFieldMetricEdit } from "./keyFieldMetric/KeyFieldMetricEdit";
import { KeyFieldMetricShow } from "./keyFieldMetric/KeyFieldMetricShow";
import { MaintenanceWindowList } from "./maintenanceWindow/MaintenanceWindowList";
import { MaintenanceWindowCreate } from "./maintenanceWindow/MaintenanceWindowCreate";
import { MaintenanceWindowEdit } from "./maintenanceWindow/MaintenanceWindowEdit";
import { MaintenanceWindowShow } from "./maintenanceWindow/MaintenanceWindowShow";
import { OperationsCalendarList } from "./operationsCalendar/OperationsCalendarList";
import { OperationsCalendarCreate } from "./operationsCalendar/OperationsCalendarCreate";
import { OperationsCalendarEdit } from "./operationsCalendar/OperationsCalendarEdit";
import { OperationsCalendarShow } from "./operationsCalendar/OperationsCalendarShow";
import { OperationsCalendarStatusList } from "./operationsCalendarStatus/OperationsCalendarStatusList";
import { OperationsCalendarStatusCreate } from "./operationsCalendarStatus/OperationsCalendarStatusCreate";
import { OperationsCalendarStatusEdit } from "./operationsCalendarStatus/OperationsCalendarStatusEdit";
import { OperationsCalendarStatusShow } from "./operationsCalendarStatus/OperationsCalendarStatusShow";
import { PatchChannelList } from "./patchChannel/PatchChannelList";
import { PatchChannelCreate } from "./patchChannel/PatchChannelCreate";
import { PatchChannelEdit } from "./patchChannel/PatchChannelEdit";
import { PatchChannelShow } from "./patchChannel/PatchChannelShow";
import { PatchChannelFixletList } from "./patchChannelFixlet/PatchChannelFixletList";
import { PatchChannelFixletCreate } from "./patchChannelFixlet/PatchChannelFixletCreate";
import { PatchChannelFixletEdit } from "./patchChannelFixlet/PatchChannelFixletEdit";
import { PatchChannelFixletShow } from "./patchChannelFixlet/PatchChannelFixletShow";
import { RebootWindowList } from "./rebootWindow/RebootWindowList";
import { RebootWindowCreate } from "./rebootWindow/RebootWindowCreate";
import { RebootWindowEdit } from "./rebootWindow/RebootWindowEdit";
import { RebootWindowShow } from "./rebootWindow/RebootWindowShow";
import { SubMgmtBigfixRequestPatchChannelIncludeListList } from "./subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeListList";
import { SubMgmtBigfixRequestPatchChannelIncludeListCreate } from "./subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeListCreate";
import { SubMgmtBigfixRequestPatchChannelIncludeListEdit } from "./subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeListEdit";
import { SubMgmtBigfixRequestPatchChannelIncludeListShow } from "./subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeListShow";
import { SubMgmtChangeLogList } from "./subMgmtChangeLog/SubMgmtChangeLogList";
import { SubMgmtChangeLogCreate } from "./subMgmtChangeLog/SubMgmtChangeLogCreate";
import { SubMgmtChangeLogEdit } from "./subMgmtChangeLog/SubMgmtChangeLogEdit";
import { SubMgmtChangeLogShow } from "./subMgmtChangeLog/SubMgmtChangeLogShow";
import { SubMgmtChangeLogStatusList } from "./subMgmtChangeLogStatus/SubMgmtChangeLogStatusList";
import { SubMgmtChangeLogStatusCreate } from "./subMgmtChangeLogStatus/SubMgmtChangeLogStatusCreate";
import { SubMgmtChangeLogStatusEdit } from "./subMgmtChangeLogStatus/SubMgmtChangeLogStatusEdit";
import { SubMgmtChangeLogStatusShow } from "./subMgmtChangeLogStatus/SubMgmtChangeLogStatusShow";
import { SubnetList } from "./subnet/SubnetList";
import { SubnetCreate } from "./subnet/SubnetCreate";
import { SubnetEdit } from "./subnet/SubnetEdit";
import { SubnetShow } from "./subnet/SubnetShow";
import { TssChangeLogList } from "./tssChangeLog/TssChangeLogList";
import { TssChangeLogCreate } from "./tssChangeLog/TssChangeLogCreate";
import { TssChangeLogEdit } from "./tssChangeLog/TssChangeLogEdit";
import { TssChangeLogShow } from "./tssChangeLog/TssChangeLogShow";
import { TssChangeLogStatusList } from "./tssChangeLogStatus/TssChangeLogStatusList";
import { TssChangeLogStatusCreate } from "./tssChangeLogStatus/TssChangeLogStatusCreate";
import { TssChangeLogStatusEdit } from "./tssChangeLogStatus/TssChangeLogStatusEdit";
import { TssChangeLogStatusShow } from "./tssChangeLogStatus/TssChangeLogStatusShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Foglifter Compliance"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="ApplicationContact"
          list={ApplicationContactList}
          edit={ApplicationContactEdit}
          create={ApplicationContactCreate}
          show={ApplicationContactShow}
        />
        <Resource
          name="ApplicationDeployment"
          list={ApplicationDeploymentList}
          edit={ApplicationDeploymentEdit}
          create={ApplicationDeploymentCreate}
          show={ApplicationDeploymentShow}
        />
        <Resource
          name="ApplicationLifecycleDetail"
          list={ApplicationLifecycleDetailList}
          edit={ApplicationLifecycleDetailEdit}
          create={ApplicationLifecycleDetailCreate}
          show={ApplicationLifecycleDetailShow}
        />
        <Resource
          name="ApplicationOrganization"
          list={ApplicationOrganizationList}
          edit={ApplicationOrganizationEdit}
          create={ApplicationOrganizationCreate}
          show={ApplicationOrganizationShow}
        />
        <Resource
          name="ApplicationSupportDetail"
          list={ApplicationSupportDetailList}
          edit={ApplicationSupportDetailEdit}
          create={ApplicationSupportDetailCreate}
          show={ApplicationSupportDetailShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="AssetConfigurationDetail"
          list={AssetConfigurationDetailList}
          edit={AssetConfigurationDetailEdit}
          create={AssetConfigurationDetailCreate}
          show={AssetConfigurationDetailShow}
        />
        <Resource
          name="AssetLocationDetail"
          list={AssetLocationDetailList}
          edit={AssetLocationDetailEdit}
          create={AssetLocationDetailCreate}
          show={AssetLocationDetailShow}
        />
        <Resource
          name="AssetNetworkDetail"
          list={AssetNetworkDetailList}
          edit={AssetNetworkDetailEdit}
          create={AssetNetworkDetailCreate}
          show={AssetNetworkDetailShow}
        />
        <Resource
          name="AssetSupportDetail"
          list={AssetSupportDetailList}
          edit={AssetSupportDetailEdit}
          create={AssetSupportDetailCreate}
          show={AssetSupportDetailShow}
        />
        <Resource
          name="AssetSupportVendor"
          list={AssetSupportVendorList}
          edit={AssetSupportVendorEdit}
          create={AssetSupportVendorCreate}
          show={AssetSupportVendorShow}
        />
        <Resource
          name="Attestation"
          list={AttestationList}
          edit={AttestationEdit}
          create={AttestationCreate}
          show={AttestationShow}
        />
        <Resource
          name="AttestationHost"
          list={AttestationHostList}
          edit={AttestationHostEdit}
          create={AttestationHostCreate}
          show={AttestationHostShow}
        />
        <Resource
          name="AttestationHostFixlet"
          list={AttestationHostFixletList}
          edit={AttestationHostFixletEdit}
          create={AttestationHostFixletCreate}
          show={AttestationHostFixletShow}
        />
        <Resource
          name="AttestationType"
          list={AttestationTypeList}
          edit={AttestationTypeEdit}
          create={AttestationTypeCreate}
          show={AttestationTypeShow}
        />
        <Resource
          name="BigfixContentResult"
          list={BigfixContentResultList}
          edit={BigfixContentResultEdit}
          create={BigfixContentResultCreate}
          show={BigfixContentResultShow}
        />
        <Resource
          name="BigfixRequest"
          list={BigfixRequestList}
          edit={BigfixRequestEdit}
          create={BigfixRequestCreate}
          show={BigfixRequestShow}
        />
        <Resource
          name="BigfixRequestType"
          list={BigfixRequestTypeList}
          edit={BigfixRequestTypeEdit}
          create={BigfixRequestTypeCreate}
          show={BigfixRequestTypeShow}
        />
        <Resource
          name="ConfigModel"
          list={ConfigModelList}
          edit={ConfigModelEdit}
          create={ConfigModelCreate}
          show={ConfigModelShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="DatasourceDevice"
          list={DatasourceDeviceList}
          edit={DatasourceDeviceEdit}
          create={DatasourceDeviceCreate}
          show={DatasourceDeviceShow}
        />
        <Resource
          name="EndpointManagementSolution"
          list={EndpointManagementSolutionList}
          edit={EndpointManagementSolutionEdit}
          create={EndpointManagementSolutionCreate}
          show={EndpointManagementSolutionShow}
        />
        <Resource
          name="Environment"
          list={EnvironmentList}
          edit={EnvironmentEdit}
          create={EnvironmentCreate}
          show={EnvironmentShow}
        />
        <Resource
          name="Exception"
          list={ExceptionList}
          edit={ExceptionEdit}
          create={ExceptionCreate}
          show={ExceptionShow}
        />
        <Resource
          name="IpAddress"
          list={IpAddressList}
          edit={IpAddressEdit}
          create={IpAddressCreate}
          show={IpAddressShow}
        />
        <Resource
          name="KeyFieldMetric"
          list={KeyFieldMetricList}
          edit={KeyFieldMetricEdit}
          create={KeyFieldMetricCreate}
          show={KeyFieldMetricShow}
        />
        <Resource
          name="MaintenanceWindow"
          list={MaintenanceWindowList}
          edit={MaintenanceWindowEdit}
          create={MaintenanceWindowCreate}
          show={MaintenanceWindowShow}
        />
        <Resource
          name="OperationsCalendar"
          list={OperationsCalendarList}
          edit={OperationsCalendarEdit}
          create={OperationsCalendarCreate}
          show={OperationsCalendarShow}
        />
        <Resource
          name="OperationsCalendarStatus"
          list={OperationsCalendarStatusList}
          edit={OperationsCalendarStatusEdit}
          create={OperationsCalendarStatusCreate}
          show={OperationsCalendarStatusShow}
        />
        <Resource
          name="PatchChannel"
          list={PatchChannelList}
          edit={PatchChannelEdit}
          create={PatchChannelCreate}
          show={PatchChannelShow}
        />
        <Resource
          name="PatchChannelFixlet"
          list={PatchChannelFixletList}
          edit={PatchChannelFixletEdit}
          create={PatchChannelFixletCreate}
          show={PatchChannelFixletShow}
        />
        <Resource
          name="RebootWindow"
          list={RebootWindowList}
          edit={RebootWindowEdit}
          create={RebootWindowCreate}
          show={RebootWindowShow}
        />
        <Resource
          name="SubMgmtBigfixRequestPatchChannelIncludeList"
          list={SubMgmtBigfixRequestPatchChannelIncludeListList}
          edit={SubMgmtBigfixRequestPatchChannelIncludeListEdit}
          create={SubMgmtBigfixRequestPatchChannelIncludeListCreate}
          show={SubMgmtBigfixRequestPatchChannelIncludeListShow}
        />
        <Resource
          name="SubMgmtChangeLog"
          list={SubMgmtChangeLogList}
          edit={SubMgmtChangeLogEdit}
          create={SubMgmtChangeLogCreate}
          show={SubMgmtChangeLogShow}
        />
        <Resource
          name="SubMgmtChangeLogStatus"
          list={SubMgmtChangeLogStatusList}
          edit={SubMgmtChangeLogStatusEdit}
          create={SubMgmtChangeLogStatusCreate}
          show={SubMgmtChangeLogStatusShow}
        />
        <Resource
          name="Subnet"
          list={SubnetList}
          edit={SubnetEdit}
          create={SubnetCreate}
          show={SubnetShow}
        />
        <Resource
          name="TssChangeLog"
          list={TssChangeLogList}
          edit={TssChangeLogEdit}
          create={TssChangeLogCreate}
          show={TssChangeLogShow}
        />
        <Resource
          name="TssChangeLogStatus"
          list={TssChangeLogStatusList}
          edit={TssChangeLogStatusEdit}
          create={TssChangeLogStatusCreate}
          show={TssChangeLogStatusShow}
        />
      </Admin>
    </div>
  );
};

export default App;
