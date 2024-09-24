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
import { ApplicationSupportDetailController } from "../applicationSupportDetail.controller";
import { ApplicationSupportDetailService } from "../applicationSupportDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  businessRequiredRecoveryPointObjective:
    "exampleBusinessRequiredRecoveryPointObjective",
  businessRequiredRecoveryTimeObjective:
    "exampleBusinessRequiredRecoveryTimeObjective",
  id: 42,
  infrastructureSupport: "exampleInfrastructureSupport",
  owningOrganization: "exampleOwningOrganization",
  owningSubOrganization: "exampleOwningSubOrganization",
  recoveryPointCapability: "exampleRecoveryPointCapability",
  recoveryTimeCapability: "exampleRecoveryTimeCapability",
  resiliencyTier: "exampleResiliencyTier",
  support: "exampleSupport",
  supportOrganization: "exampleSupportOrganization",
  supportTier: "exampleSupportTier",
};
const CREATE_RESULT = {
  businessRequiredRecoveryPointObjective:
    "exampleBusinessRequiredRecoveryPointObjective",
  businessRequiredRecoveryTimeObjective:
    "exampleBusinessRequiredRecoveryTimeObjective",
  id: 42,
  infrastructureSupport: "exampleInfrastructureSupport",
  owningOrganization: "exampleOwningOrganization",
  owningSubOrganization: "exampleOwningSubOrganization",
  recoveryPointCapability: "exampleRecoveryPointCapability",
  recoveryTimeCapability: "exampleRecoveryTimeCapability",
  resiliencyTier: "exampleResiliencyTier",
  support: "exampleSupport",
  supportOrganization: "exampleSupportOrganization",
  supportTier: "exampleSupportTier",
};
const FIND_MANY_RESULT = [
  {
    businessRequiredRecoveryPointObjective:
      "exampleBusinessRequiredRecoveryPointObjective",
    businessRequiredRecoveryTimeObjective:
      "exampleBusinessRequiredRecoveryTimeObjective",
    id: 42,
    infrastructureSupport: "exampleInfrastructureSupport",
    owningOrganization: "exampleOwningOrganization",
    owningSubOrganization: "exampleOwningSubOrganization",
    recoveryPointCapability: "exampleRecoveryPointCapability",
    recoveryTimeCapability: "exampleRecoveryTimeCapability",
    resiliencyTier: "exampleResiliencyTier",
    support: "exampleSupport",
    supportOrganization: "exampleSupportOrganization",
    supportTier: "exampleSupportTier",
  },
];
const FIND_ONE_RESULT = {
  businessRequiredRecoveryPointObjective:
    "exampleBusinessRequiredRecoveryPointObjective",
  businessRequiredRecoveryTimeObjective:
    "exampleBusinessRequiredRecoveryTimeObjective",
  id: 42,
  infrastructureSupport: "exampleInfrastructureSupport",
  owningOrganization: "exampleOwningOrganization",
  owningSubOrganization: "exampleOwningSubOrganization",
  recoveryPointCapability: "exampleRecoveryPointCapability",
  recoveryTimeCapability: "exampleRecoveryTimeCapability",
  resiliencyTier: "exampleResiliencyTier",
  support: "exampleSupport",
  supportOrganization: "exampleSupportOrganization",
  supportTier: "exampleSupportTier",
};

const service = {
  createApplicationSupportDetail() {
    return CREATE_RESULT;
  },
  applicationSupportDetails: () => FIND_MANY_RESULT,
  applicationSupportDetail: ({ where }: { where: { id: string } }) => {
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

describe("ApplicationSupportDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationSupportDetailService,
          useValue: service,
        },
      ],
      controllers: [ApplicationSupportDetailController],
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

  test("POST /applicationSupportDetails", async () => {
    await request(app.getHttpServer())
      .post("/applicationSupportDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /applicationSupportDetails", async () => {
    await request(app.getHttpServer())
      .get("/applicationSupportDetails")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /applicationSupportDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationSupportDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationSupportDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationSupportDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /applicationSupportDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationSupportDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/applicationSupportDetails")
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
