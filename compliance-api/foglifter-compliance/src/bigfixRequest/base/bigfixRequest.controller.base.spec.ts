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
import { BigfixRequestController } from "../bigfixRequest.controller";
import { BigfixRequestService } from "../bigfixRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actionScriptId: 42,
  bigfixEnvironment: 42,
  computerId: 42,
  computerStatus: 42,
  created: new Date(),
  httpResponse: "exampleHttpResponse",
  httpResponseMessage: "exampleHttpResponseMessage",
  id: 42242424,
  request: "exampleRequest",
  requestComputerSettings: "exampleRequestComputerSettings",
  requestStatus: "exampleRequestStatus",
  response: "exampleResponse",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const CREATE_RESULT = {
  actionScriptId: 42,
  bigfixEnvironment: 42,
  computerId: 42,
  computerStatus: 42,
  created: new Date(),
  httpResponse: "exampleHttpResponse",
  httpResponseMessage: "exampleHttpResponseMessage",
  id: 42242424,
  request: "exampleRequest",
  requestComputerSettings: "exampleRequestComputerSettings",
  requestStatus: "exampleRequestStatus",
  response: "exampleResponse",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const FIND_MANY_RESULT = [
  {
    actionScriptId: 42,
    bigfixEnvironment: 42,
    computerId: 42,
    computerStatus: 42,
    created: new Date(),
    httpResponse: "exampleHttpResponse",
    httpResponseMessage: "exampleHttpResponseMessage",
    id: 42242424,
    request: "exampleRequest",
    requestComputerSettings: "exampleRequestComputerSettings",
    requestStatus: "exampleRequestStatus",
    response: "exampleResponse",
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
  },
];
const FIND_ONE_RESULT = {
  actionScriptId: 42,
  bigfixEnvironment: 42,
  computerId: 42,
  computerStatus: 42,
  created: new Date(),
  httpResponse: "exampleHttpResponse",
  httpResponseMessage: "exampleHttpResponseMessage",
  id: 42242424,
  request: "exampleRequest",
  requestComputerSettings: "exampleRequestComputerSettings",
  requestStatus: "exampleRequestStatus",
  response: "exampleResponse",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};

const service = {
  createBigfixRequest() {
    return CREATE_RESULT;
  },
  bigfixRequests: () => FIND_MANY_RESULT,
  bigfixRequest: ({ where }: { where: { id: string } }) => {
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

describe("BigfixRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BigfixRequestService,
          useValue: service,
        },
      ],
      controllers: [BigfixRequestController],
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

  test("POST /bigfixRequests", async () => {
    await request(app.getHttpServer())
      .post("/bigfixRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /bigfixRequests", async () => {
    await request(app.getHttpServer())
      .get("/bigfixRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /bigfixRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bigfixRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bigfixRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bigfixRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /bigfixRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bigfixRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/bigfixRequests")
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
