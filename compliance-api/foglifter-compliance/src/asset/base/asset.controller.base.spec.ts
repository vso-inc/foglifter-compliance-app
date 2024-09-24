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
import { AssetController } from "../asset.controller";
import { AssetService } from "../asset.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  altId: 42242424,
  appServerId: 42,
  applicationHostId: 42242424,
  assigned: "exampleAssigned",
  created: new Date(),
  description: "exampleDescription",
  enterpriseId: "exampleEnterpriseId",
  id: 42242424,
  isLocked: "true",
  isShared: "true",
  note: "exampleNote",
  systemBackupId: 42,
  systemCitrixId: 42,
  tag: "exampleTag",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const CREATE_RESULT = {
  altId: 42242424,
  appServerId: 42,
  applicationHostId: 42242424,
  assigned: "exampleAssigned",
  created: new Date(),
  description: "exampleDescription",
  enterpriseId: "exampleEnterpriseId",
  id: 42242424,
  isLocked: "true",
  isShared: "true",
  note: "exampleNote",
  systemBackupId: 42,
  systemCitrixId: 42,
  tag: "exampleTag",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const FIND_MANY_RESULT = [
  {
    altId: 42242424,
    appServerId: 42,
    applicationHostId: 42242424,
    assigned: "exampleAssigned",
    created: new Date(),
    description: "exampleDescription",
    enterpriseId: "exampleEnterpriseId",
    id: 42242424,
    isLocked: "true",
    isShared: "true",
    note: "exampleNote",
    systemBackupId: 42,
    systemCitrixId: 42,
    tag: "exampleTag",
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
  },
];
const FIND_ONE_RESULT = {
  altId: 42242424,
  appServerId: 42,
  applicationHostId: 42242424,
  assigned: "exampleAssigned",
  created: new Date(),
  description: "exampleDescription",
  enterpriseId: "exampleEnterpriseId",
  id: 42242424,
  isLocked: "true",
  isShared: "true",
  note: "exampleNote",
  systemBackupId: 42,
  systemCitrixId: 42,
  tag: "exampleTag",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};

const service = {
  createAsset() {
    return CREATE_RESULT;
  },
  assets: () => FIND_MANY_RESULT,
  asset: ({ where }: { where: { id: string } }) => {
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

describe("Asset", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetService,
          useValue: service,
        },
      ],
      controllers: [AssetController],
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

  test("POST /assets", async () => {
    await request(app.getHttpServer())
      .post("/assets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /assets", async () => {
    await request(app.getHttpServer())
      .get("/assets")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /assets/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assets"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assets/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assets"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /assets existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/assets")
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
