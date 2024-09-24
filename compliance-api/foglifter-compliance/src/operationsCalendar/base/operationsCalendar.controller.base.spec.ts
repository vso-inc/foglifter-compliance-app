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
import { OperationsCalendarController } from "../operationsCalendar.controller";
import { OperationsCalendarService } from "../operationsCalendar.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  changeCoordinator: "exampleChangeCoordinator",
  changeManager: "exampleChangeManager",
  changeRequest: "exampleChangeRequest",
  created: new Date(),
  developmentManager: "exampleDevelopmentManager",
  id: 42,
  lastPatched: new Date(),
  locked: new Date(),
  lockedBy: "exampleLockedBy",
  note: "exampleNote",
  projectManager: "exampleProjectManager",
  reasonCode: 42,
  scheduled: new Date(),
  scheduledBy: "exampleScheduledBy",
  serviceId: 42,
  technicalLead: "exampleTechnicalLead",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const CREATE_RESULT = {
  changeCoordinator: "exampleChangeCoordinator",
  changeManager: "exampleChangeManager",
  changeRequest: "exampleChangeRequest",
  created: new Date(),
  developmentManager: "exampleDevelopmentManager",
  id: 42,
  lastPatched: new Date(),
  locked: new Date(),
  lockedBy: "exampleLockedBy",
  note: "exampleNote",
  projectManager: "exampleProjectManager",
  reasonCode: 42,
  scheduled: new Date(),
  scheduledBy: "exampleScheduledBy",
  serviceId: 42,
  technicalLead: "exampleTechnicalLead",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const FIND_MANY_RESULT = [
  {
    changeCoordinator: "exampleChangeCoordinator",
    changeManager: "exampleChangeManager",
    changeRequest: "exampleChangeRequest",
    created: new Date(),
    developmentManager: "exampleDevelopmentManager",
    id: 42,
    lastPatched: new Date(),
    locked: new Date(),
    lockedBy: "exampleLockedBy",
    note: "exampleNote",
    projectManager: "exampleProjectManager",
    reasonCode: 42,
    scheduled: new Date(),
    scheduledBy: "exampleScheduledBy",
    serviceId: 42,
    technicalLead: "exampleTechnicalLead",
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
  },
];
const FIND_ONE_RESULT = {
  changeCoordinator: "exampleChangeCoordinator",
  changeManager: "exampleChangeManager",
  changeRequest: "exampleChangeRequest",
  created: new Date(),
  developmentManager: "exampleDevelopmentManager",
  id: 42,
  lastPatched: new Date(),
  locked: new Date(),
  lockedBy: "exampleLockedBy",
  note: "exampleNote",
  projectManager: "exampleProjectManager",
  reasonCode: 42,
  scheduled: new Date(),
  scheduledBy: "exampleScheduledBy",
  serviceId: 42,
  technicalLead: "exampleTechnicalLead",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};

const service = {
  createOperationsCalendar() {
    return CREATE_RESULT;
  },
  operationsCalendars: () => FIND_MANY_RESULT,
  operationsCalendar: ({ where }: { where: { id: string } }) => {
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

describe("OperationsCalendar", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OperationsCalendarService,
          useValue: service,
        },
      ],
      controllers: [OperationsCalendarController],
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

  test("POST /operationsCalendars", async () => {
    await request(app.getHttpServer())
      .post("/operationsCalendars")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        lastPatched: CREATE_RESULT.lastPatched.toISOString(),
        locked: CREATE_RESULT.locked.toISOString(),
        scheduled: CREATE_RESULT.scheduled.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /operationsCalendars", async () => {
    await request(app.getHttpServer())
      .get("/operationsCalendars")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          lastPatched: FIND_MANY_RESULT[0].lastPatched.toISOString(),
          locked: FIND_MANY_RESULT[0].locked.toISOString(),
          scheduled: FIND_MANY_RESULT[0].scheduled.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /operationsCalendars/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/operationsCalendars"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /operationsCalendars/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/operationsCalendars"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        lastPatched: FIND_ONE_RESULT.lastPatched.toISOString(),
        locked: FIND_ONE_RESULT.locked.toISOString(),
        scheduled: FIND_ONE_RESULT.scheduled.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /operationsCalendars existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/operationsCalendars")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        lastPatched: CREATE_RESULT.lastPatched.toISOString(),
        locked: CREATE_RESULT.locked.toISOString(),
        scheduled: CREATE_RESULT.scheduled.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/operationsCalendars")
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
