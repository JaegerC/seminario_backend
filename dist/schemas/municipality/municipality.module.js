"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MunicipalityModule = void 0;
const common_1 = require("@nestjs/common");
const municipality_service_1 = require("./municipality.service");
const municipality_resolver_1 = require("./municipality.resolver");
const region_entity_1 = require("../../entities/region.entity");
const department_entity_1 = require("../../entities/department.entity");
const municipality_entity_1 = require("../../entities/municipality.entity");
const typeorm_1 = require("@nestjs/typeorm");
const branch_entity_1 = require("../../entities/branch.entity");
const commerce_entity_1 = require("../../entities/commerce.entity");
const complaint_entity_1 = require("../../entities/complaint.entity");
let MunicipalityModule = class MunicipalityModule {
};
MunicipalityModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                region_entity_1.Region,
                department_entity_1.Department,
                municipality_entity_1.Municipality,
                branch_entity_1.Branch,
                commerce_entity_1.Commerce,
                complaint_entity_1.Complaint
            ])
        ],
        providers: [municipality_service_1.MunicipalityService, municipality_resolver_1.MunicipalityResolver],
        controllers: []
    })
], MunicipalityModule);
exports.MunicipalityModule = MunicipalityModule;
//# sourceMappingURL=municipality.module.js.map