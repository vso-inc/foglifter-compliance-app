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
import { PatchChannelFixletController } from "../patchChannelFixlet.controller";
import { PatchChannelFixletService } from "../patchChannelFixlet.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  commonPlatformEnumerationTag: "exampleCommonPlatformEnumerationTag",
  created: new Date(),
  fixletCategory: "exampleFixletCategory",
  fixletName: "exampleFixletName",
  fixletSourceReleased: new Date(),
  fixletTag: "exampleFixletTag",
  id: 42,
  relevantCount: "exampleRelevantCount",
  site: "exampleSite",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const CREATE_RESULT = {
  commonPlatformEnumerationTag: "exampleCommonPlatformEnumerationTag",
  created: new Date(),
  fixletCategory: "exampleFixletCategory",
  fixletName: "exampleFixletName",
  fixletSourceReleased: new Date(),
  fixletTag: "exampleFixletTag",
  id: 42,
  relevantCount: "exampleRelevantCount",
  site: "exampleSite",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};
const FIND_MANY_RESULT = [
  {
    commonPlatformEnumerationTag: "exampleCommonPlatformEnumerationTag",
    created: new Date(),
    fixletCategory: "exampleFixletCategory",
    fixletName: "exampleFixletName",
    fixletSourceReleased: new Date(),
    fixletTag: "exampleFixletTag",
    id: 42,
    relevantCount: "exampleRelevantCount",
    site: "exampleSite",
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
  },
];
const FIND_ONE_RESULT = {
  commonPlatformEnumerationTag: "exampleCommonPlatformEnumerationTag",
  created: new Date(),
  fixletCategory: "exampleFixletCategory",
  fixletName: "exampleFixletName",
  fixletSourceReleased: new Date(),
  fixletTag: "exampleFixletTag",
  id: 42,
  relevantCount: "exampleRelevantCount",
  site: "exampleSite",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
};

const service = {
  createPatchChannelFixlet() {
    return CREATE_RESULT;
  },
  patchChannelFixlets: () => FIND_MANY_RESULT,
  patchChannelFixlet: ({ where }: { where: { id: string } }) => {
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

describe("PatchChannelFixlet", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PatchChannelFixletService,
          useValue: service,
        },
      ],
      controllers: [PatchChannelFixletController],
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

  test("POST /patchChannelFixlets", async () => {
    await request(app.getHttpServer())
      .post("/patchChannelFixlets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        fixletSourceReleased: CREATE_RESULT.fixletSourceReleased.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /patchChannelFixlets", async () => {
    await request(app.getHttpServer())
      .get("/patchChannelFixlets")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          fixletSourceReleased:
            FIND_MANY_RESULT[0].fixletSourceReleased.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /patchChannelFixlets/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/patchChannelFixlets"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /patchChannelFixlets/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/patchChannelFixlets"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        fixletSourceReleased:
          FIND_ONE_RESULT.fixletSourceReleased.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /patchChannelFixlets existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/patchChannelFixlets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        fixletSourceReleased: CREATE_RESULT.fixletSourceReleased.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/patchChannelFixlets")
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
