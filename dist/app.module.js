"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const region_module_1 = require("./schemas/region/region.module");
const department_module_1 = require("./schemas/department/department.module");
const municipality_module_1 = require("./schemas/municipality/municipality.module");
const user_module_1 = require("./schemas/user/user.module");
const role_module_1 = require("./schemas/role/role.module");
const module_module_1 = require("./schemas/module/module.module");
const commerce_module_1 = require("./schemas/commerce/commerce.module");
const branch_module_1 = require("./schemas/branch/branch.module");
const complaint_module_1 = require("./schemas/complaint/complaint.module");
const typeOrmConfig_1 = __importDefault(require("./config/typeOrmConfig"));
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                playground: true,
                debug: true,
            }),
            typeorm_1.TypeOrmModule.forRoot(typeOrmConfig_1.default),
            region_module_1.RegionModule,
            department_module_1.DepartmentModule,
            municipality_module_1.MunicipalityModule,
            user_module_1.UserModule,
            role_module_1.RoleModule,
            module_module_1.ModuleModule,
            commerce_module_1.CommerceModule,
            branch_module_1.BranchModule,
            complaint_module_1.ComplaintModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map