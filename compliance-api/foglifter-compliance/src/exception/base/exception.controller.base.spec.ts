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
import { ExceptionController } from "../exception.controller";
import { ExceptionService } from "../exception.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  created: new Date(),
  exceptionEnd: new Date(),
  exceptionReason: "exampleExceptionReason",
  exceptionStart: new Date(),
  exceptionType: "exampleExceptionType",
  id: 42,
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const CREATE_RESULT = {
  created: new Date(),
  exceptionEnd: new Date(),
  exceptionReason: "exampleExceptionReason",
  exceptionStart: new Date(),
  exceptionType: "exampleExceptionType",
  id: 42,
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const FIND_MANY_RESULT = [
  {
    created: new Date(),
    exceptionEnd: new Date(),
    exceptionReason: "exampleExceptionReason",
    exceptionStart: new Date(),
    exceptionType: "exampleExceptionType",
    id: 42,
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
  },
];
const FIND_ONE_RESULT = {
  created: new Date(),
  exceptionEnd: new Date(),
  exceptionReason: "exampleExceptionReason",
  exceptionStart: new Date(),
  exceptionType: "exampleExceptionType",
  id: 42,
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};

const service = {
  createException() {
    return CREATE_RESULT;
  },
  exceptions: () => FIND_MANY_RESULT,
  exception: ({ where }: { where: { id: string } }) => {
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

describe("Exception", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ExceptionService,
          useValue: service,
        },
      ],
      controllers: [ExceptionController],
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

  test("POST /exceptions", async () => {
    await request(app.getHttpServer())
      .post("/exceptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        exceptionEnd: CREATE_RESULT.exceptionEnd.toISOString(),
        exceptionStart: CREATE_RESULT.exceptionStart.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /exceptions", async () => {
    await request(app.getHttpServer())
      .get("/exceptions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          exceptionEnd: FIND_MANY_RESULT[0].exceptionEnd.toISOString(),
          exceptionStart: FIND_MANY_RESULT[0].exceptionStart.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /exceptions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/exceptions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /exceptions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/exceptions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        exceptionEnd: FIND_ONE_RESULT.exceptionEnd.toISOString(),
        exceptionStart: FIND_ONE_RESULT.exceptionStart.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /exceptions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/exceptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        exceptionEnd: CREATE_RESULT.exceptionEnd.toISOString(),
        exceptionStart: CREATE_RESULT.exceptionStart.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/exceptions")
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
