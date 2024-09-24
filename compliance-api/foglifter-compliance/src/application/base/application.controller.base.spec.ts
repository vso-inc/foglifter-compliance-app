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
import { ApplicationController } from "../application.controller";
import { ApplicationService } from "../application.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accessesInternet: "true",
  applicationId: "exampleApplicationId",
  businessName: "exampleBusinessName",
  category: "exampleCategory",
  confidentialityRating: "exampleConfidentialityRating",
  created: new Date(),
  description: "exampleDescription",
  hasPersonalConfidentialInfo: "true",
  hasProtectedHealthInfo: "true",
  id: 42,
  isLifeSustaining: "true",
  isSubjectToPciCompliance: "true",
  isSubjectToSoxCompliance: "true",
  name: "exampleName",
  overrideServerValidation: "exampleOverrideServerValidation",
  shortName: "exampleShortName",
  status: "exampleStatus",
  subCategory: "exampleSubCategory",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
  version: "exampleVersion",
  websiteUrl: "exampleWebsiteUrl",
};
const CREATE_RESULT = {
  accessesInternet: "true",
  applicationId: "exampleApplicationId",
  businessName: "exampleBusinessName",
  category: "exampleCategory",
  confidentialityRating: "exampleConfidentialityRating",
  created: new Date(),
  description: "exampleDescription",
  hasPersonalConfidentialInfo: "true",
  hasProtectedHealthInfo: "true",
  id: 42,
  isLifeSustaining: "true",
  isSubjectToPciCompliance: "true",
  isSubjectToSoxCompliance: "true",
  name: "exampleName",
  overrideServerValidation: "exampleOverrideServerValidation",
  shortName: "exampleShortName",
  status: "exampleStatus",
  subCategory: "exampleSubCategory",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
  version: "exampleVersion",
  websiteUrl: "exampleWebsiteUrl",
};
const FIND_MANY_RESULT = [
  {
    accessesInternet: "true",
    applicationId: "exampleApplicationId",
    businessName: "exampleBusinessName",
    category: "exampleCategory",
    confidentialityRating: "exampleConfidentialityRating",
    created: new Date(),
    description: "exampleDescription",
    hasPersonalConfidentialInfo: "true",
    hasProtectedHealthInfo: "true",
    id: 42,
    isLifeSustaining: "true",
    isSubjectToPciCompliance: "true",
    isSubjectToSoxCompliance: "true",
    name: "exampleName",
    overrideServerValidation: "exampleOverrideServerValidation",
    shortName: "exampleShortName",
    status: "exampleStatus",
    subCategory: "exampleSubCategory",
    updated: new Date(),
    updatedBy: "exampleUpdatedBy",
    version: "exampleVersion",
    websiteUrl: "exampleWebsiteUrl",
  },
];
const FIND_ONE_RESULT = {
  accessesInternet: "true",
  applicationId: "exampleApplicationId",
  businessName: "exampleBusinessName",
  category: "exampleCategory",
  confidentialityRating: "exampleConfidentialityRating",
  created: new Date(),
  description: "exampleDescription",
  hasPersonalConfidentialInfo: "true",
  hasProtectedHealthInfo: "true",
  id: 42,
  isLifeSustaining: "true",
  isSubjectToPciCompliance: "true",
  isSubjectToSoxCompliance: "true",
  name: "exampleName",
  overrideServerValidation: "exampleOverrideServerValidation",
  shortName: "exampleShortName",
  status: "exampleStatus",
  subCategory: "exampleSubCategory",
  updated: new Date(),
  updatedBy: "exampleUpdatedBy",
  version: "exampleVersion",
  websiteUrl: "exampleWebsiteUrl",
};

const service = {
  createApplication() {
    return CREATE_RESULT;
  },
  applications: () => FIND_MANY_RESULT,
  application: ({ where }: { where: { id: string } }) => {
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

describe("Application", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationService,
          useValue: service,
        },
      ],
      controllers: [ApplicationController],
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

  test("POST /applications", async () => {
    await request(app.getHttpServer())
      .post("/applications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /applications", async () => {
    await request(app.getHttpServer())
      .get("/applications")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /applications/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applications"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applications/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applications"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /applications existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/applications")
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
