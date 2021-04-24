"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModule = void 0;
const common_1 = require("@nestjs/common");
const department_service_1 = require("./department.service");
const department_entity_1 = require("../../entities/department.entity");
const region_entity_1 = require("../../entities/region.entity");
const municipality_entity_1 = require("../../entities/municipality.entity");
const typeorm_1 = require("@nestjs/typeorm");
const department_resolver_1 = require("./department.resolver");
let DepartmentModule = class DepartmentModule {
};
DepartmentModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                department_entity_1.Department,
                region_entity_1.Region,
                municipality_entity_1.Municipality
            ])
        ],
        providers: [department_service_1.DepartmentService, department_resolver_1.DepartmentResolver],
        controllers: []
    })
], DepartmentModule);
exports.DepartmentModule = DepartmentModule;
//# sourceMappingURL=department.module.js.map