import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AttestationController } from "../attestation.controller";
import { AttestationService } from "../attestation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  alternateContactEmail: "exampleAlternateContactEmail",
  alternateContactNuid: "exampleAlternateContactNuid",
  caseId: "exampleCaseId",
  connectedToAThirdPartySystem: "true",
  created: new Date(),
  guid: "exampleGuid",
  hasSensitiveData: "true",
  id: 42,
  impactedRegion: "exampleImpactedRegion",
  isEmergencyRequest: "true",
  isPermanentRequest: "true",
  justification: "exampleJustification",
  longTermSolution: "exampleLongTermSolution",
  mitigatingCompensatingControls: "exampleMitigatingCompensatingControls",
  owningOrganization: "exampleOwningOrganization",
  primaryContactEmail: "examplePrimaryContactEmail",
  primaryContactNuid: "examplePrimaryContactNuid",
  remediationPlan: "exampleRemediationPlan",
  remediationPlanTargetedCompletion: new Date(),
  response: "exampleResponse",
  riskManagementOption: "exampleRiskManagementOption",
  sentToThirdParty: new Date(),
  status: "exampleStatus",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const CREATE_RESULT = {
  alternateContactEmail: "exampleAlternateContactEmail",
  alternateContactNuid: "exampleAlternateContactNuid",
  caseId: "exampleCaseId",
  connectedToAThirdPartySystem: "true",
  created: new Date(),
  guid: "exampleGuid",
  hasSensitiveData: "true",
  id: 42,
  impactedRegion: "exampleImpactedRegion",
  isEmergencyRequest: "true",
  isPermanentRequest: "true",
  justification: "exampleJustification",
  longTermSolution: "exampleLongTermSolution",
  mitigatingCompensatingControls: "exampleMitigatingCompensatingControls",
  owningOrganization: "exampleOwningOrganization",
  primaryContactEmail: "examplePrimaryContactEmail",
  primaryContactNuid: "examplePrimaryContactNuid",
  remediationPlan: "exampleRemediationPlan",
  remediationPlanTargetedCompletion: new Date(),
  response: "exampleResponse",
  riskManagementOption: "exampleRiskManagementOption",
  sentToThirdParty: new Date(),
  status: "exampleStatus",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const FIND_MANY_RESULT = [
  {
    alternateContactEmail: "exampleAlternateContactEmail",
    alternateContactNuid: "exampleAlternateContactNuid",
    caseId: "exampleCaseId",
    connectedToAThirdPartySystem: "true",
    created: new Date(),
    guid: "exampleGuid",
    hasSensitiveData: "true",
    id: 42,
    impactedRegion: "exampleImpactedRegion",
    isEmergencyRequest: "true",
    isPermanentRequest: "true",
    justification: "exampleJustification",
    longTermSolution: "exampleLongTermSolution",
    mitigatingCompensatingControls: "exampleMitigatingCompensatingControls",
    owningOrganization: "exampleOwningOrganization",
    primaryContactEmail: "examplePrimaryContactEmail",
    primaryContactNuid: "examplePrimaryContactNuid",
    remediationPlan: "exampleRemediationPlan",
    remediationPlanTargetedCompletion: new Date(),
    response: "exampleResponse",
    riskManagementOption: "exampleRiskManagementOption",
    sentToThirdParty: new Date(),
    status: "exampleStatus",
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
  },
];
const FIND_ONE_RESULT = {
  alternateContactEmail: "exampleAlternateContactEmail",
  alternateContactNuid: "exampleAlternateContactNuid",
  caseId: "exampleCaseId",
  connectedToAThirdPartySystem: "true",
  created: new Date(),
  guid: "exampleGuid",
  hasSensitiveData: "true",
  id: 42,
  impactedRegion: "exampleImpactedRegion",
  isEmergencyRequest: "true",
  isPermanentRequest: "true",
  justification: "exampleJustification",
  longTermSolution: "exampleLongTermSolution",
  mitigatingCompensatingControls: "exampleMitigatingCompensatingControls",
  owningOrganization: "exampleOwningOrganization",
  primaryContactEmail: "examplePrimaryContactEmail",
  primaryContactNuid: "examplePrimaryContactNuid",
  remediationPlan: "exampleRemediationPlan",
  remediationPlanTargetedCompletion: new Date(),
  response: "exampleResponse",
  riskManagementOption: "exampleRiskManagementOption",
  sentToThirdParty: new Date(),
  status: "exampleStatus",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};

const service = {
  createAttestation() {
    return CREATE_RESULT;
  },
  attestations: () => FIND_MANY_RESULT,
  attestation: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Attestation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AttestationService,
          useValue: service,
        },
      ],
      controllers: [AttestationController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /attestations", async () => {
    await request(app.getHttpServer())
      .post("/attestations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        remediationPlanTargetedCompletion:
          CREATE_RESULT.remediationPlanTargetedCompletion.toISOString(),
        sentToThirdParty: CREATE_RESULT.sentToThirdParty.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /attestations", async () => {
    await request(app.getHttpServer())
      .get("/attestations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          remediationPlanTargetedCompletion:
            FIND_MANY_RESULT[0].remediationPlanTargetedCompletion.toISOString(),
          sentToThirdParty: FIND_MANY_RESULT[0].sentToThirdParty.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /attestations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/attestations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /attestations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/attestations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        remediationPlanTargetedCompletion:
          FIND_ONE_RESULT.remediationPlanTargetedCompletion.toISOString(),
        sentToThirdParty: FIND_ONE_RESULT.sentToThirdParty.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /attestations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/attestations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        remediationPlanTargetedCompletion:
          CREATE_RESULT.remediationPlanTargetedCompletion.toISOString(),
        sentToThirdParty: CREATE_RESULT.sentToThirdParty.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/attestations")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
