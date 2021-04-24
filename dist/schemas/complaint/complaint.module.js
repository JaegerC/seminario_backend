"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintModule = void 0;
const common_1 = require("@nestjs/common");
const complaint_service_1 = require("./complaint.service");
const complaint_resolver_1 = require("./complaint.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const complaint_entity_1 = require("../../entities/complaint.entity");
const branch_entity_1 = require("../../entities/branch.entity");
const commerce_entity_1 = require("../../entities/commerce.entity");
const department_entity_1 = require("../../entities/department.entity");
const region_entity_1 = require("../../entities/region.entity");
const municipality_entity_1 = require("../../entities/municipality.entity");
let ComplaintModule = class ComplaintModule {
};
ComplaintModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                complaint_entity_1.Complaint,
                branch_entity_1.Branch,
                commerce_entity_1.Commerce,
                municipality_entity_1.Municipality,
                department_entity_1.Department,
                region_entity_1.Region
            ])
        ],
        providers: [complaint_service_1.ComplaintService, complaint_resolver_1.ComplaintResolver]
    })
], ComplaintModule);
exports.ComplaintModule = ComplaintModule;
//# sourceMappingURL=complaint.module.js.map