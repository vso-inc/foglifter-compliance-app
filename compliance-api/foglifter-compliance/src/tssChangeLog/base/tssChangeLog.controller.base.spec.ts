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
import { TssChangeLogController } from "../tssChangeLog.controller";
import { TssChangeLogService } from "../tssChangeLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  action: "exampleAction",
  applyOn: new Date(),
  applyOnNextScheduledMaintWindow: "true",
  created: new Date(),
  id: 42,
  remediationWindowHours: 42,
  tssIncludeList: "exampleTssIncludeList",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const CREATE_RESULT = {
  action: "exampleAction",
  applyOn: new Date(),
  applyOnNextScheduledMaintWindow: "true",
  created: new Date(),
  id: 42,
  remediationWindowHours: 42,
  tssIncludeList: "exampleTssIncludeList",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const FIND_MANY_RESULT = [
  {
    action: "exampleAction",
    applyOn: new Date(),
    applyOnNextScheduledMaintWindow: "true",
    created: new Date(),
    id: 42,
    remediationWindowHours: 42,
    tssIncludeList: "exampleTssIncludeList",
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
  },
];
const FIND_ONE_RESULT = {
  action: "exampleAction",
  applyOn: new Date(),
  applyOnNextScheduledMaintWindow: "true",
  created: new Date(),
  id: 42,
  remediationWindowHours: 42,
  tssIncludeList: "exampleTssIncludeList",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};

const service = {
  createTssChangeLog() {
    return CREATE_RESULT;
  },
  tssChangeLogs: () => FIND_MANY_RESULT,
  tssChangeLog: ({ where }: { where: { id: string } }) => {
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

describe("TssChangeLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TssChangeLogService,
          useValue: service,
        },
      ],
      controllers: [TssChangeLogController],
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

  test("POST /tssChangeLogs", async () => {
    await request(app.getHttpServer())
      .post("/tssChangeLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        applyOn: CREATE_RESULT.applyOn.toISOString(),
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /tssChangeLogs", async () => {
    await request(app.getHttpServer())
      .get("/tssChangeLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          applyOn: FIND_MANY_RESULT[0].applyOn.toISOString(),
          created: FIND_MANY_RESULT[0].created.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /tssChangeLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tssChangeLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tssChangeLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tssChangeLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        applyOn: FIND_ONE_RESULT.applyOn.toISOString(),
        created: FIND_ONE_RESULT.created.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /tssChangeLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tssChangeLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        applyOn: CREATE_RESULT.applyOn.toISOString(),
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/tssChangeLogs")
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
