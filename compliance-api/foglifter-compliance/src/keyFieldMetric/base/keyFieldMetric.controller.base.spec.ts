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
import { KeyFieldMetricController } from "../keyFieldMetric.controller";
import { KeyFieldMetricService } from "../keyFieldMetric.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  columnName: "exampleColumnName",
  columnValue: "exampleColumnValue",
  created: new Date(),
  errorIfPercentChangeExceeds: 42.42,
  id: 42,
  lastPassedValidation: new Date(),
  note: "exampleNote",
  statisticOperation: "exampleStatisticOperation",
  tableName: "exampleTableName",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
  valueCount: 42,
  warnIfPercentChangeExceeds: 42.42,
};
const CREATE_RESULT = {
  columnName: "exampleColumnName",
  columnValue: "exampleColumnValue",
  created: new Date(),
  errorIfPercentChangeExceeds: 42.42,
  id: 42,
  lastPassedValidation: new Date(),
  note: "exampleNote",
  statisticOperation: "exampleStatisticOperation",
  tableName: "exampleTableName",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
  valueCount: 42,
  warnIfPercentChangeExceeds: 42.42,
};
const FIND_MANY_RESULT = [
  {
    columnName: "exampleColumnName",
    columnValue: "exampleColumnValue",
    created: new Date(),
    errorIfPercentChangeExceeds: 42.42,
    id: 42,
    lastPassedValidation: new Date(),
    note: "exampleNote",
    statisticOperation: "exampleStatisticOperation",
    tableName: "exampleTableName",
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
    valueCount: 42,
    warnIfPercentChangeExceeds: 42.42,
  },
];
const FIND_ONE_RESULT = {
  columnName: "exampleColumnName",
  columnValue: "exampleColumnValue",
  created: new Date(),
  errorIfPercentChangeExceeds: 42.42,
  id: 42,
  lastPassedValidation: new Date(),
  note: "exampleNote",
  statisticOperation: "exampleStatisticOperation",
  tableName: "exampleTableName",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
  valueCount: 42,
  warnIfPercentChangeExceeds: 42.42,
};

const service = {
  createKeyFieldMetric() {
    return CREATE_RESULT;
  },
  keyFieldMetrics: () => FIND_MANY_RESULT,
  keyFieldMetric: ({ where }: { where: { id: string } }) => {
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

describe("KeyFieldMetric", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: KeyFieldMetricService,
          useValue: service,
        },
      ],
      controllers: [KeyFieldMetricController],
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

  test("POST /keyFieldMetrics", async () => {
    await request(app.getHttpServer())
      .post("/keyFieldMetrics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        lastPassedValidation: CREATE_RESULT.lastPassedValidation.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /keyFieldMetrics", async () => {
    await request(app.getHttpServer())
      .get("/keyFieldMetrics")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          lastPassedValidation:
            FIND_MANY_RESULT[0].lastPassedValidation.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /keyFieldMetrics/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/keyFieldMetrics"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /keyFieldMetrics/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/keyFieldMetrics"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        lastPassedValidation:
          FIND_ONE_RESULT.lastPassedValidation.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /keyFieldMetrics existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/keyFieldMetrics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        lastPassedValidation: CREATE_RESULT.lastPassedValidation.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/keyFieldMetrics")
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
