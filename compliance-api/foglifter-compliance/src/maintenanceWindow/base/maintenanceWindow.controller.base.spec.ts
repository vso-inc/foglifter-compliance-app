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
import { MaintenanceWindowController } from "../maintenanceWindow.controller";
import { MaintenanceWindowService } from "../maintenanceWindow.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  created: new Date(),
  id: 42242424,
  maintWindowAvailableDayOfWeek: "exampleMaintWindowAvailableDayOfWeek",
  maintWindowAvailableMonths: "exampleMaintWindowAvailableMonths",
  maintWindowAvailableWeeksOfMonth: "exampleMaintWindowAvailableWeeksOfMonth",
  maintWindowCloseTime: "exampleMaintWindowCloseTime",
  maintWindowLastInside: new Date(),
  maintWindowLevelOfSupport: "exampleMaintWindowLevelOfSupport",
  maintWindowOpenTime: "exampleMaintWindowOpenTime",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const CREATE_RESULT = {
  created: new Date(),
  id: 42242424,
  maintWindowAvailableDayOfWeek: "exampleMaintWindowAvailableDayOfWeek",
  maintWindowAvailableMonths: "exampleMaintWindowAvailableMonths",
  maintWindowAvailableWeeksOfMonth: "exampleMaintWindowAvailableWeeksOfMonth",
  maintWindowCloseTime: "exampleMaintWindowCloseTime",
  maintWindowLastInside: new Date(),
  maintWindowLevelOfSupport: "exampleMaintWindowLevelOfSupport",
  maintWindowOpenTime: "exampleMaintWindowOpenTime",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const FIND_MANY_RESULT = [
  {
    created: new Date(),
    id: 42242424,
    maintWindowAvailableDayOfWeek: "exampleMaintWindowAvailableDayOfWeek",
    maintWindowAvailableMonths: "exampleMaintWindowAvailableMonths",
    maintWindowAvailableWeeksOfMonth: "exampleMaintWindowAvailableWeeksOfMonth",
    maintWindowCloseTime: "exampleMaintWindowCloseTime",
    maintWindowLastInside: new Date(),
    maintWindowLevelOfSupport: "exampleMaintWindowLevelOfSupport",
    maintWindowOpenTime: "exampleMaintWindowOpenTime",
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
  },
];
const FIND_ONE_RESULT = {
  created: new Date(),
  id: 42242424,
  maintWindowAvailableDayOfWeek: "exampleMaintWindowAvailableDayOfWeek",
  maintWindowAvailableMonths: "exampleMaintWindowAvailableMonths",
  maintWindowAvailableWeeksOfMonth: "exampleMaintWindowAvailableWeeksOfMonth",
  maintWindowCloseTime: "exampleMaintWindowCloseTime",
  maintWindowLastInside: new Date(),
  maintWindowLevelOfSupport: "exampleMaintWindowLevelOfSupport",
  maintWindowOpenTime: "exampleMaintWindowOpenTime",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};

const service = {
  createMaintenanceWindow() {
    return CREATE_RESULT;
  },
  maintenanceWindows: () => FIND_MANY_RESULT,
  maintenanceWindow: ({ where }: { where: { id: string } }) => {
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

describe("MaintenanceWindow", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MaintenanceWindowService,
          useValue: service,
        },
      ],
      controllers: [MaintenanceWindowController],
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

  test("POST /maintenanceWindows", async () => {
    await request(app.getHttpServer())
      .post("/maintenanceWindows")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        maintWindowLastInside:
          CREATE_RESULT.maintWindowLastInside.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /maintenanceWindows", async () => {
    await request(app.getHttpServer())
      .get("/maintenanceWindows")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          maintWindowLastInside:
            FIND_MANY_RESULT[0].maintWindowLastInside.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /maintenanceWindows/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/maintenanceWindows"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /maintenanceWindows/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/maintenanceWindows"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        maintWindowLastInside:
          FIND_ONE_RESULT.maintWindowLastInside.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /maintenanceWindows existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/maintenanceWindows")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        maintWindowLastInside:
          CREATE_RESULT.maintWindowLastInside.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/maintenanceWindows")
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
