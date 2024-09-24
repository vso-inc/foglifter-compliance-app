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
import { AssetSupportDetailController } from "../assetSupportDetail.controller";
import { AssetSupportDetailService } from "../assetSupportDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activityBasedCosting: 42,
  created: new Date(),
  id: 42242424,
  resourceUnitId: 42242424,
  supportContractEndDate: new Date(),
  supportContractId: 42,
  supportContractRenewalCost: 42.424242424,
  supportContractRenewalDate: new Date(),
  supportContractRenewalNotes: "exampleSupportContractRenewalNotes",
  supportContractRenewalTerm: "exampleSupportContractRenewalTerm",
  supportContractStartDate: new Date(),
  updated: new Date(),
};
const CREATE_RESULT = {
  activityBasedCosting: 42,
  created: new Date(),
  id: 42242424,
  resourceUnitId: 42242424,
  supportContractEndDate: new Date(),
  supportContractId: 42,
  supportContractRenewalCost: 42.424242424,
  supportContractRenewalDate: new Date(),
  supportContractRenewalNotes: "exampleSupportContractRenewalNotes",
  supportContractRenewalTerm: "exampleSupportContractRenewalTerm",
  supportContractStartDate: new Date(),
  updated: new Date(),
};
const FIND_MANY_RESULT = [
  {
    activityBasedCosting: 42,
    created: new Date(),
    id: 42242424,
    resourceUnitId: 42242424,
    supportContractEndDate: new Date(),
    supportContractId: 42,
    supportContractRenewalCost: 42.424242424,
    supportContractRenewalDate: new Date(),
    supportContractRenewalNotes: "exampleSupportContractRenewalNotes",
    supportContractRenewalTerm: "exampleSupportContractRenewalTerm",
    supportContractStartDate: new Date(),
    updated: new Date(),
  },
];
const FIND_ONE_RESULT = {
  activityBasedCosting: 42,
  created: new Date(),
  id: 42242424,
  resourceUnitId: 42242424,
  supportContractEndDate: new Date(),
  supportContractId: 42,
  supportContractRenewalCost: 42.424242424,
  supportContractRenewalDate: new Date(),
  supportContractRenewalNotes: "exampleSupportContractRenewalNotes",
  supportContractRenewalTerm: "exampleSupportContractRenewalTerm",
  supportContractStartDate: new Date(),
  updated: new Date(),
};

const service = {
  createAssetSupportDetail() {
    return CREATE_RESULT;
  },
  assetSupportDetails: () => FIND_MANY_RESULT,
  assetSupportDetail: ({ where }: { where: { id: string } }) => {
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

describe("AssetSupportDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetSupportDetailService,
          useValue: service,
        },
      ],
      controllers: [AssetSupportDetailController],
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

  test("POST /assetSupportDetails", async () => {
    await request(app.getHttpServer())
      .post("/assetSupportDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        supportContractEndDate:
          CREATE_RESULT.supportContractEndDate.toISOString(),
        supportContractRenewalDate:
          CREATE_RESULT.supportContractRenewalDate.toISOString(),
        supportContractStartDate:
          CREATE_RESULT.supportContractStartDate.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /assetSupportDetails", async () => {
    await request(app.getHttpServer())
      .get("/assetSupportDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          supportContractEndDate:
            FIND_MANY_RESULT[0].supportContractEndDate.toISOString(),
          supportContractRenewalDate:
            FIND_MANY_RESULT[0].supportContractRenewalDate.toISOString(),
          supportContractStartDate:
            FIND_MANY_RESULT[0].supportContractStartDate.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /assetSupportDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetSupportDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetSupportDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetSupportDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        supportContractEndDate:
          FIND_ONE_RESULT.supportContractEndDate.toISOString(),
        supportContractRenewalDate:
          FIND_ONE_RESULT.supportContractRenewalDate.toISOString(),
        supportContractStartDate:
          FIND_ONE_RESULT.supportContractStartDate.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /assetSupportDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetSupportDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        supportContractEndDate:
          CREATE_RESULT.supportContractEndDate.toISOString(),
        supportContractRenewalDate:
          CREATE_RESULT.supportContractRenewalDate.toISOString(),
        supportContractStartDate:
          CREATE_RESULT.supportContractStartDate.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/assetSupportDetails")
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
