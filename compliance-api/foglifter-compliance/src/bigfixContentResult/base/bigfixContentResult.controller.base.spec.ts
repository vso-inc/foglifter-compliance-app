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
import { BigfixContentResultController } from "../bigfixContentResult.controller";
import { BigfixContentResultService } from "../bigfixContentResult.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicable: "true",
  contentId: 42242424,
  created: new Date(),
  datasourceDeviceId: 42242424,
  datasourceSiteId: 42242424,
  firstRelevant: new Date(),
  id: 42242424,
  lastNonRelevant: new Date(),
  lastRelevant: new Date(),
  relevant: "true",
  resolved: "true",
  reverted: "true",
  typeField: 42,
  updated: new Date(),
};
const CREATE_RESULT = {
  applicable: "true",
  contentId: 42242424,
  created: new Date(),
  datasourceDeviceId: 42242424,
  datasourceSiteId: 42242424,
  firstRelevant: new Date(),
  id: 42242424,
  lastNonRelevant: new Date(),
  lastRelevant: new Date(),
  relevant: "true",
  resolved: "true",
  reverted: "true",
  typeField: 42,
  updated: new Date(),
};
const FIND_MANY_RESULT = [
  {
    applicable: "true",
    contentId: 42242424,
    created: new Date(),
    datasourceDeviceId: 42242424,
    datasourceSiteId: 42242424,
    firstRelevant: new Date(),
    id: 42242424,
    lastNonRelevant: new Date(),
    lastRelevant: new Date(),
    relevant: "true",
    resolved: "true",
    reverted: "true",
    typeField: 42,
    updated: new Date(),
  },
];
const FIND_ONE_RESULT = {
  applicable: "true",
  contentId: 42242424,
  created: new Date(),
  datasourceDeviceId: 42242424,
  datasourceSiteId: 42242424,
  firstRelevant: new Date(),
  id: 42242424,
  lastNonRelevant: new Date(),
  lastRelevant: new Date(),
  relevant: "true",
  resolved: "true",
  reverted: "true",
  typeField: 42,
  updated: new Date(),
};

const service = {
  createBigfixContentResult() {
    return CREATE_RESULT;
  },
  bigfixContentResults: () => FIND_MANY_RESULT,
  bigfixContentResult: ({ where }: { where: { id: string } }) => {
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

describe("BigfixContentResult", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BigfixContentResultService,
          useValue: service,
        },
      ],
      controllers: [BigfixContentResultController],
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

  test("POST /bigfixContentResults", async () => {
    await request(app.getHttpServer())
      .post("/bigfixContentResults")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        firstRelevant: CREATE_RESULT.firstRelevant.toISOString(),
        lastNonRelevant: CREATE_RESULT.lastNonRelevant.toISOString(),
        lastRelevant: CREATE_RESULT.lastRelevant.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /bigfixContentResults", async () => {
    await request(app.getHttpServer())
      .get("/bigfixContentResults")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          firstRelevant: FIND_MANY_RESULT[0].firstRelevant.toISOString(),
          lastNonRelevant: FIND_MANY_RESULT[0].lastNonRelevant.toISOString(),
          lastRelevant: FIND_MANY_RESULT[0].lastRelevant.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /bigfixContentResults/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bigfixContentResults"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bigfixContentResults/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bigfixContentResults"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        firstRelevant: FIND_ONE_RESULT.firstRelevant.toISOString(),
        lastNonRelevant: FIND_ONE_RESULT.lastNonRelevant.toISOString(),
        lastRelevant: FIND_ONE_RESULT.lastRelevant.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /bigfixContentResults existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bigfixContentResults")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        firstRelevant: CREATE_RESULT.firstRelevant.toISOString(),
        lastNonRelevant: CREATE_RESULT.lastNonRelevant.toISOString(),
        lastRelevant: CREATE_RESULT.lastRelevant.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/bigfixContentResults")
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
