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
import { ApplicationLifecycleDetailController } from "../applicationLifecycleDetail.controller";
import { ApplicationLifecycleDetailService } from "../applicationLifecycleDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualDecommission: new Date(),
  actualRetirement: new Date(),
  decommissionProcess: "exampleDecommissionProcess",
  decommissionState: "exampleDecommissionState",
  id: 42,
  isDrEnabled: "true",
  plannedDecommission: new Date(),
  plannedRetirement: new Date(),
};
const CREATE_RESULT = {
  actualDecommission: new Date(),
  actualRetirement: new Date(),
  decommissionProcess: "exampleDecommissionProcess",
  decommissionState: "exampleDecommissionState",
  id: 42,
  isDrEnabled: "true",
  plannedDecommission: new Date(),
  plannedRetirement: new Date(),
};
const FIND_MANY_RESULT = [
  {
    actualDecommission: new Date(),
    actualRetirement: new Date(),
    decommissionProcess: "exampleDecommissionProcess",
    decommissionState: "exampleDecommissionState",
    id: 42,
    isDrEnabled: "true",
    plannedDecommission: new Date(),
    plannedRetirement: new Date(),
  },
];
const FIND_ONE_RESULT = {
  actualDecommission: new Date(),
  actualRetirement: new Date(),
  decommissionProcess: "exampleDecommissionProcess",
  decommissionState: "exampleDecommissionState",
  id: 42,
  isDrEnabled: "true",
  plannedDecommission: new Date(),
  plannedRetirement: new Date(),
};

const service = {
  createApplicationLifecycleDetail() {
    return CREATE_RESULT;
  },
  applicationLifecycleDetails: () => FIND_MANY_RESULT,
  applicationLifecycleDetail: ({ where }: { where: { id: string } }) => {
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

describe("ApplicationLifecycleDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationLifecycleDetailService,
          useValue: service,
        },
      ],
      controllers: [ApplicationLifecycleDetailController],
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

  test("POST /applicationLifecycleDetails", async () => {
    await request(app.getHttpServer())
      .post("/applicationLifecycleDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualDecommission: CREATE_RESULT.actualDecommission.toISOString(),
        actualRetirement: CREATE_RESULT.actualRetirement.toISOString(),
        plannedDecommission: CREATE_RESULT.plannedDecommission.toISOString(),
        plannedRetirement: CREATE_RESULT.plannedRetirement.toISOString(),
      });
  });

  test("GET /applicationLifecycleDetails", async () => {
    await request(app.getHttpServer())
      .get("/applicationLifecycleDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          actualDecommission:
            FIND_MANY_RESULT[0].actualDecommission.toISOString(),
          actualRetirement: FIND_MANY_RESULT[0].actualRetirement.toISOString(),
          plannedDecommission:
            FIND_MANY_RESULT[0].plannedDecommission.toISOString(),
          plannedRetirement:
            FIND_MANY_RESULT[0].plannedRetirement.toISOString(),
        },
      ]);
  });

  test("GET /applicationLifecycleDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationLifecycleDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationLifecycleDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationLifecycleDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        actualDecommission: FIND_ONE_RESULT.actualDecommission.toISOString(),
        actualRetirement: FIND_ONE_RESULT.actualRetirement.toISOString(),
        plannedDecommission: FIND_ONE_RESULT.plannedDecommission.toISOString(),
        plannedRetirement: FIND_ONE_RESULT.plannedRetirement.toISOString(),
      });
  });

  test("POST /applicationLifecycleDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationLifecycleDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualDecommission: CREATE_RESULT.actualDecommission.toISOString(),
        actualRetirement: CREATE_RESULT.actualRetirement.toISOString(),
        plannedDecommission: CREATE_RESULT.plannedDecommission.toISOString(),
        plannedRetirement: CREATE_RESULT.plannedRetirement.toISOString(),
      })
      .then(function () {
        agent
          .post("/applicationLifecycleDetails")
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
