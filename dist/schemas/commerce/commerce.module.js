"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommerceModule = void 0;
const common_1 = require("@nestjs/common");
const commerce_service_1 = require("./commerce.service");
const commerce_resolver_1 = require("./commerce.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const commerce_entity_1 = require("../../entities/commerce.entity");
const branch_entity_1 = require("../../entities/branch.entity");
const municipality_entity_1 = require("../../entities/municipality.entity");
const department_entity_1 = require("../../entities/department.entity");
const region_entity_1 = require("../../entities/region.entity");
const commerce_type_entity_1 = require("../../entities/commerce_type.entity");
let CommerceModule = class CommerceModule {
};
CommerceModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                commerce_entity_1.Commerce,
                branch_entity_1.Branch,
                municipality_entity_1.Municipality,
                department_entity_1.Department,
                region_entity_1.Region,
                commerce_type_entity_1.CommerceType
            ])
        ],
        providers: [commerce_service_1.CommerceService, commerce_resolver_1.CommerceResolver]
    })
], CommerceModule);
exports.CommerceModule = CommerceModule;
//# sourceMappingURL=commerce.module.js.map