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
import { AssetConfigurationDetailController } from "../assetConfigurationDetail.controller";
import { AssetConfigurationDetailService } from "../assetConfigurationDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  assetTag: "exampleAssetTag",
  bios: new Date(),
  brand: "exampleBrand",
  cpuCount: 42,
  cpuSpeed: "exampleCpuSpeed",
  cpuType: "exampleCpuType",
  cpuVersion: "exampleCpuVersion",
  created: new Date(),
  id: 42242424,
  inService: new Date(),
  lastHardwareScan: new Date(),
  model: "exampleModel",
  nature: "exampleNature",
  operatingSystem: "exampleOperatingSystem",
  role: "exampleRole",
  scanExemptReason: "exampleScanExemptReason",
  serial: "exampleSerial",
  status: "exampleStatus",
  typeField: "exampleTypeField",
  updated: new Date(),
};
const CREATE_RESULT = {
  assetTag: "exampleAssetTag",
  bios: new Date(),
  brand: "exampleBrand",
  cpuCount: 42,
  cpuSpeed: "exampleCpuSpeed",
  cpuType: "exampleCpuType",
  cpuVersion: "exampleCpuVersion",
  created: new Date(),
  id: 42242424,
  inService: new Date(),
  lastHardwareScan: new Date(),
  model: "exampleModel",
  nature: "exampleNature",
  operatingSystem: "exampleOperatingSystem",
  role: "exampleRole",
  scanExemptReason: "exampleScanExemptReason",
  serial: "exampleSerial",
  status: "exampleStatus",
  typeField: "exampleTypeField",
  updated: new Date(),
};
const FIND_MANY_RESULT = [
  {
    assetTag: "exampleAssetTag",
    bios: new Date(),
    brand: "exampleBrand",
    cpuCount: 42,
    cpuSpeed: "exampleCpuSpeed",
    cpuType: "exampleCpuType",
    cpuVersion: "exampleCpuVersion",
    created: new Date(),
    id: 42242424,
    inService: new Date(),
    lastHardwareScan: new Date(),
    model: "exampleModel",
    nature: "exampleNature",
    operatingSystem: "exampleOperatingSystem",
    role: "exampleRole",
    scanExemptReason: "exampleScanExemptReason",
    serial: "exampleSerial",
    status: "exampleStatus",
    typeField: "exampleTypeField",
    updated: new Date(),
  },
];
const FIND_ONE_RESULT = {
  assetTag: "exampleAssetTag",
  bios: new Date(),
  brand: "exampleBrand",
  cpuCount: 42,
  cpuSpeed: "exampleCpuSpeed",
  cpuType: "exampleCpuType",
  cpuVersion: "exampleCpuVersion",
  created: new Date(),
  id: 42242424,
  inService: new Date(),
  lastHardwareScan: new Date(),
  model: "exampleModel",
  nature: "exampleNature",
  operatingSystem: "exampleOperatingSystem",
  role: "exampleRole",
  scanExemptReason: "exampleScanExemptReason",
  serial: "exampleSerial",
  status: "exampleStatus",
  typeField: "exampleTypeField",
  updated: new Date(),
};

const service = {
  createAssetConfigurationDetail() {
    return CREATE_RESULT;
  },
  assetConfigurationDetails: () => FIND_MANY_RESULT,
  assetConfigurationDetail: ({ where }: { where: { id: string } }) => {
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

describe("AssetConfigurationDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AssetConfigurationDetailService,
          useValue: service,
        },
      ],
      controllers: [AssetConfigurationDetailController],
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

  test("POST /assetConfigurationDetails", async () => {
    await request(app.getHttpServer())
      .post("/assetConfigurationDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        bios: CREATE_RESULT.bios.toISOString(),
        created: CREATE_RESULT.created.toISOString(),
        inService: CREATE_RESULT.inService.toISOString(),
        lastHardwareScan: CREATE_RESULT.lastHardwareScan.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      });
  });

  test("GET /assetConfigurationDetails", async () => {
    await request(app.getHttpServer())
      .get("/assetConfigurationDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          bios: FIND_MANY_RESULT[0].bios.toISOString(),
          created: FIND_MANY_RESULT[0].created.toISOString(),
          inService: FIND_MANY_RESULT[0].inService.toISOString(),
          lastHardwareScan: FIND_MANY_RESULT[0].lastHardwareScan.toISOString(),
          updated: FIND_MANY_RESULT[0].updated.toISOString(),
        },
      ]);
  });

  test("GET /assetConfigurationDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetConfigurationDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /assetConfigurationDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/assetConfigurationDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        bios: FIND_ONE_RESULT.bios.toISOString(),
        created: FIND_ONE_RESULT.created.toISOString(),
        inService: FIND_ONE_RESULT.inService.toISOString(),
        lastHardwareScan: FIND_ONE_RESULT.lastHardwareScan.toISOString(),
        updated: FIND_ONE_RESULT.updated.toISOString(),
      });
  });

  test("POST /assetConfigurationDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/assetConfigurationDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        bios: CREATE_RESULT.bios.toISOString(),
        created: CREATE_RESULT.created.toISOString(),
        inService: CREATE_RESULT.inService.toISOString(),
        lastHardwareScan: CREATE_RESULT.lastHardwareScan.toISOString(),
        updated: CREATE_RESULT.updated.toISOString(),
      })
      .then(function () {
        agent
          .post("/assetConfigurationDetails")
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
