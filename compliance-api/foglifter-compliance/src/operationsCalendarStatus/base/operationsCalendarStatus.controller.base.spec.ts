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
import { OperationsCalendarStatusController } from "../operationsCalendarStatus.controller";
import { OperationsCalendarStatusService } from "../operationsCalendarStatus.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  status: "exampleStatus",
};
const CREATE_RESULT = {
  id: 42,
  status: "exampleStatus",
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    status: "exampleStatus",
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  status: "exampleStatus",
};

const service = {
  createOperationsCalendarStatus() {
    return CREATE_RESULT;
  },
  operationsCalendarStatuses: () => FIND_MANY_RESULT,
  operationsCalendarStatus: ({ where }: { where: { id: string } }) => {
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

describe("OperationsCalendarStatus", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OperationsCalendarStatusService,
          useValue: service,
        },
      ],
      controllers: [OperationsCalendarStatusController],
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

  test("POST /operationsCalendarStatuses", async () => {
    await request(app.getHttpServer())
      .post("/operationsCalendarStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /operationsCalendarStatuses", async () => {
    await request(app.getHttpServer())
      .get("/operationsCalendarStatuses")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /operationsCalendarStatuses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/operationsCalendarStatuses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /operationsCalendarStatuses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/operationsCalendarStatuses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /operationsCalendarStatuses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/operationsCalendarStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/operationsCalendarStatuses")
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
