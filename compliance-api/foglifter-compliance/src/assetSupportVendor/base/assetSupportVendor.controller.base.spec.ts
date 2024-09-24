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
import { AssetSupportVendorController } from "../assetSupportVendor.controller";
import { AssetSupportVendorService } from "../assetSupportVendor.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  created: new Date(),
  id: 42,
  supportVendorContactEmail: "exampleSupportVendorContactEmail",
  supportVendorContactFax: "exampleSupportVendorContactFax",
  supportVendorContactName: "exampleSupportVendorContactName",
  supportVendorContactNotes: "exampleSupportVendorContactNotes",
  supportVendorContactPhone: "exampleSupportVendorContactPhone",
  supportVendorName: "exampleSupportVendorName",
  updated: new Date(),
};
const CREATE_RESULT = {
  created: new Date(),
  id: 42,
  supportVendorContactEmail: "exampleSupportVendorContactEmail",
  supportVendorContactFax: "exampleSupportVendorContactFax",
  supportVendorContactName: "exampleSupportVendorContactName",
  supportVendorContactNotes: "exampleSupportVendorContactNotes",
  supportVendorContactPhone: "exampleSupportVendorContactPhone",
  supportVendorName: "exampleSupportVendorName",
  updated: new Date(),
};
const FIND_MANY_RESULT = [
  {
    created: new Date(),
    id: 42,
    supportVendorContactEmail: "exampleSupportVendorContactEmail",
    supportVendorContactFax: "exampleSupportVendorContactFax",
    supportVendorContactName: "exampleSupportVendorContactName",
    supportVendorContactNotes: "exampleSupportVendorContactNotes",
    supportVendorContactPhone: "exampleSupportVendorContactPhone",
    supportVendorName: "exampleSupportVendorName",
    updated: new Date(),
  },
];
const FIND_ONE_RESULT = {
  created: new Date(),
  id: 42,
  supportVendorContactEmail: "exampleSupportVendorContactEmail",
  supportVendorContactFax: "exampleSupportVendorContactFax",
  supportVendorContactName: "exampleSupportVendorContactName",
  supportVendorContactNotes: "exampleSupportVendorContactNotes",
  supportVendorContactPhone: "exampleSupportVendorContactPhone",
  supportVendorName: "exampleSupportVendorName",
  updated: new Date(),
};

const service = {
  createAssetSupportVendor() {
    return CREATE_RESULT;
  },
  assetSupportVendors: () => FIND_MANY_RESULT,
  assetSupportVendor: ({ where }: { where: { id: string } }) => {
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

describe("AssetSupportVendor", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetSupportVendorService,
          useValue: service,
        },
      ],
      controllers: [AssetSupportVendorController],
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

  test("POST /assetSupportVendors", async () => {
    await request(app.getHttpServer())
      .post("/assetSupportVendors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /assetSupportVendors", async () => {
    await request(app.getHttpServer())
      .get("/assetSupportVendors")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /assetSupportVendors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetSupportVendors"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetSupportVendors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetSupportVendors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /assetSupportVendors existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetSupportVendors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/assetSupportVendors")
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
