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
import { DatasourceDeviceController } from "../datasourceDevice.controller";
import { DatasourceDeviceService } from "../datasourceDevice.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  created: new Date(),
  datasourceId: 42,
  id: 42242424,
  isDeleted: "true",
  isLocked: "true",
  lastReportSent: new Date(),
  lastReportTime: new Date(),
  name: "exampleName",
  reportNumber: 42242424,
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const CREATE_RESULT = {
  created: new Date(),
  datasourceId: 42,
  id: 42242424,
  isDeleted: "true",
  isLocked: "true",
  lastReportSent: new Date(),
  lastReportTime: new Date(),
  name: "exampleName",
  reportNumber: 42242424,
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const FIND_MANY_RESULT = [
  {
    created: new Date(),
    datasourceId: 42,
    id: 42242424,
    isDeleted: "true",
    isLocked: "true",
    lastReportSent: new Date(),
    lastReportTime: new Date(),
    name: "exampleName",
    reportNumber: 42242424,
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
  },
];
const FIND_ONE_RESULT = {
  created: new Date(),
  datasourceId: 42,
  id: 42242424,
  isDeleted: "true",
  isLocked: "true",
  lastReportSent: new Date(),
  lastReportTime: new Date(),
  name: "exampleName",
  reportNumber: 42242424,
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};

const service = {
  createDatasourceDevice() {
    return CREATE_RESULT;
  },
  datasourceDevices: () => FIND_MANY_RESULT,
  datasourceDevice: ({ where }: { where: { id: string } }) => {
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

describe("DatasourceDevice", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DatasourceDeviceService,
          useValue: service,
        },
      ],
      controllers: [DatasourceDeviceController],
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

  test("POST /datasourceDevices", async () => {
    await request(app.getHttpServer())
      .post("/datasourceDevices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        lastReportSent: CREATE_RESULT.lastReportSent.toISOString(),
        lastReportTime: CREATE_RESULT.lastReportTime.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /datasourceDevices", async () => {
    await request(app.getHttpServer())
      .get("/datasourceDevices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          lastReportSent: FIND_MANY_RESULT[0].lastReportSent.toISOString(),
          lastReportTime: FIND_MANY_RESULT[0].lastReportTime.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /datasourceDevices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/datasourceDevices"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /datasourceDevices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/datasourceDevices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        lastReportSent: FIND_ONE_RESULT.lastReportSent.toISOString(),
        lastReportTime: FIND_ONE_RESULT.lastReportTime.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /datasourceDevices existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/datasourceDevices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        lastReportSent: CREATE_RESULT.lastReportSent.toISOString(),
        lastReportTime: CREATE_RESULT.lastReportTime.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/datasourceDevices")
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
