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
import { ApplicationContactController } from "../applicationContact.controller";
import { ApplicationContactService } from "../applicationContact.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: "exampleApplicationId",
  created: new Date(),
  id: 42,
  roleEnds: new Date(),
  roleStarts: new Date(),
  roleType: "exampleRoleType",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const CREATE_RESULT = {
  applicationId: "exampleApplicationId",
  created: new Date(),
  id: 42,
  roleEnds: new Date(),
  roleStarts: new Date(),
  roleType: "exampleRoleType",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const FIND_MANY_RESULT = [
  {
    applicationId: "exampleApplicationId",
    created: new Date(),
    id: 42,
    roleEnds: new Date(),
    roleStarts: new Date(),
    roleType: "exampleRoleType",
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
  },
];
const FIND_ONE_RESULT = {
  applicationId: "exampleApplicationId",
  created: new Date(),
  id: 42,
  roleEnds: new Date(),
  roleStarts: new Date(),
  roleType: "exampleRoleType",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};

const service = {
  createApplicationContact() {
    return CREATE_RESULT;
  },
  applicationContacts: () => FIND_MANY_RESULT,
  applicationContact: ({ where }: { where: { id: string } }) => {
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

describe("ApplicationContact", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationContactService,
          useValue: service,
        },
      ],
      controllers: [ApplicationContactController],
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

  test("POST /applicationContacts", async () => {
    await request(app.getHttpServer())
      .post("/applicationContacts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        roleEnds: CREATE_RESULT.roleEnds.toISOString(),
        roleStarts: CREATE_RESULT.roleStarts.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /applicationContacts", async () => {
    await request(app.getHttpServer())
      .get("/applicationContacts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          roleEnds: FIND_MANY_RESULT[0].roleEnds.toISOString(),
          roleStarts: FIND_MANY_RESULT[0].roleStarts.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /applicationContacts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationContacts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationContacts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationContacts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        roleEnds: FIND_ONE_RESULT.roleEnds.toISOString(),
        roleStarts: FIND_ONE_RESULT.roleStarts.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /applicationContacts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationContacts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        roleEnds: CREATE_RESULT.roleEnds.toISOString(),
        roleStarts: CREATE_RESULT.roleStarts.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/applicationContacts")
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
