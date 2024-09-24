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
import { AssetNetworkDetailController } from "../assetNetworkDetail.controller";
import { AssetNetworkDetailService } from "../assetNetworkDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  created: new Date(),
  dnsName: "exampleDnsName",
  domain: "exampleDomain",
  hostname: "exampleHostname",
  id: 42242424,
  macAddress: "exampleMacAddress",
  memberOfCluster: "exampleMemberOfCluster",
  previousHostname: "examplePreviousHostname",
  primaryMacAddress: "examplePrimaryMacAddress",
  updated: new Date(),
};
const CREATE_RESULT = {
  created: new Date(),
  dnsName: "exampleDnsName",
  domain: "exampleDomain",
  hostname: "exampleHostname",
  id: 42242424,
  macAddress: "exampleMacAddress",
  memberOfCluster: "exampleMemberOfCluster",
  previousHostname: "examplePreviousHostname",
  primaryMacAddress: "examplePrimaryMacAddress",
  updated: new Date(),
};
const FIND_MANY_RESULT = [
  {
    created: new Date(),
    dnsName: "exampleDnsName",
    domain: "exampleDomain",
    hostname: "exampleHostname",
    id: 42242424,
    macAddress: "exampleMacAddress",
    memberOfCluster: "exampleMemberOfCluster",
    previousHostname: "examplePreviousHostname",
    primaryMacAddress: "examplePrimaryMacAddress",
    updated: new Date(),
  },
];
const FIND_ONE_RESULT = {
  created: new Date(),
  dnsName: "exampleDnsName",
  domain: "exampleDomain",
  hostname: "exampleHostname",
  id: 42242424,
  macAddress: "exampleMacAddress",
  memberOfCluster: "exampleMemberOfCluster",
  previousHostname: "examplePreviousHostname",
  primaryMacAddress: "examplePrimaryMacAddress",
  updated: new Date(),
};

const service = {
  createAssetNetworkDetail() {
    return CREATE_RESULT;
  },
  assetNetworkDetails: () => FIND_MANY_RESULT,
  assetNetworkDetail: ({ where }: { where: { id: string } }) => {
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

describe("AssetNetworkDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetNetworkDetailService,
          useValue: service,
        },
      ],
      controllers: [AssetNetworkDetailController],
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

  test("POST /assetNetworkDetails", async () => {
    await request(app.getHttpServer())
      .post("/assetNetworkDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /assetNetworkDetails", async () => {
    await request(app.getHttpServer())
      .get("/assetNetworkDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created: FIND_MANY_RESULT[0].created.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /assetNetworkDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetNetworkDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetNetworkDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetNetworkDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created: FIND_ONE_RESULT.created.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /assetNetworkDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetNetworkDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created: CREATE_RESULT.created.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/assetNetworkDetails")
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
