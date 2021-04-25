"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const complaint_entity_1 = require("../../entities/complaint.entity");
const commerce_entity_1 = require("../../entities/commerce.entity");
const typeorm_2 = require("typeorm");
const region_entity_1 = require("../../entities/region.entity");
const department_entity_1 = require("../../entities/department.entity");
const municipality_entity_1 = require("../../entities/municipality.entity");
let ComplaintService = class ComplaintService {
    constructor(complaintRespository, connection) {
        this.complaintRespository = complaintRespository;
        this.connection = connection;
    }
    async getComplaintByCommerce(commerceId) {
        try {
            const commerce = await this.connection.getRepository(commerce_entity_1.Commerce)
                .createQueryBuilder("commerce")
                .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
                .leftJoinAndSelect("commerce.branches", "branches")
                .leftJoinAndSelect("branches.complaints", "complaints")
                .leftJoinAndSelect("branches.municipality", "municipality")
                .leftJoinAndSelect("municipality.department", "department")
                .leftJoinAndSelect("department.region", "region")
                .where("commerce.id = :commerceId", { commerceId })
                .getOne();
            const count = await this.connection.getRepository(complaint_entity_1.Complaint)
                .createQueryBuilder("complaint")
                .leftJoinAndSelect("complaint.branch", "branch")
                .leftJoinAndSelect("branch.commerce", "commerce")
                .where("commerce.id = :commerceId", { commerceId })
                .getCount();
            return {
                success: true,
                error: null,
                data: commerce,
                count
            };
        }
        catch (e) {
            return {
                success: false,
                error: e.message,
                data: null,
                count: null
            };
        }
    }
    async getComplaintByRegion(regionId) {
        try {
            const region = await this.connection.getRepository(region_entity_1.Region)
                .createQueryBuilder("region")
                .leftJoinAndSelect("region.departments", "departments")
                .leftJoinAndSelect("departments.municipalities", "municipalities")
                .leftJoinAndSelect("municipalities.branches", "branches")
                .leftJoinAndSelect("branches.commerce", "commerce")
                .leftJoinAndSelect("branches.complaints", "complaints")
                .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
                .where("region.id = :regionId", { regionId })
                .getOne();
            const count = await this.connection.getRepository(complaint_entity_1.Complaint)
                .createQueryBuilder("complaint")
                .leftJoinAndSelect("complaint.branch", "branch")
                .leftJoinAndSelect("branch.municipality", "municipality")
                .leftJoinAndSelect("municipality.department", "department")
                .where("department.regionId = :regionId", { regionId })
                .getCount();
            return {
                success: true,
                error: null,
                data: region,
                count
            };
        }
        catch (err) {
            return {
                success: false,
                error: err.message,
                data: null,
                count: null
            };
        }
    }
    async getComplaintByDepartment(departmentId) {
        try {
            const department = await this.connection.getRepository(department_entity_1.Department)
                .createQueryBuilder("department")
                .leftJoinAndSelect("department.region", "region")
                .leftJoinAndSelect("department.municipalities", "municipalities")
                .leftJoinAndSelect("municipalities.branches", "branches")
                .leftJoinAndSelect("branches.commerce", "commerce")
                .leftJoinAndSelect("branches.complaints", "complaints")
                .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
                .where("department.id = :departmentId", { departmentId })
                .getOne();
            const count = await this.connection.getRepository(complaint_entity_1.Complaint)
                .createQueryBuilder("complaint")
                .leftJoinAndSelect("complaint.branch", "branch")
                .leftJoinAndSelect("branch.municipality", "municipality")
                .leftJoinAndSelect("municipality.department", "department")
                .where("department.id = :departmentId", { departmentId })
                .getCount();
            return {
                success: true,
                error: null,
                data: department,
                count
            };
        }
        catch (e) {
            return {
                success: false,
                error: e.message,
                data: null,
                count: null
            };
        }
    }
    async getComplaintByMunicipality(municipalityId) {
        try {
            const municipality = await this.connection.getRepository(municipality_entity_1.Municipality)
                .createQueryBuilder("municipality")
                .leftJoinAndSelect("municipality.department", "department")
                .leftJoinAndSelect("department.region", "region")
                .leftJoinAndSelect("municipality.branches", "branches")
                .leftJoinAndSelect("branches.complaints", "complaints")
                .leftJoinAndSelect("branches.commerce", "commerce")
                .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
                .where("municipality.id = :municipalityId", { municipalityId })
                .getOne();
            const count = await this.connection.getRepository(complaint_entity_1.Complaint)
                .createQueryBuilder("complaint")
                .leftJoinAndSelect("complaint.branch", "branch")
                .leftJoinAndSelect("branch.municipality", "municipality")
                .where("municipality.id = :municipalityId", { municipalityId })
                .getCount();
            return {
                success: true,
                error: null,
                data: municipality,
                count
            };
        }
        catch (e) {
            return {
                success: false,
                error: e.message,
                data: null,
                count: null
            };
        }
    }
};
ComplaintService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(complaint_entity_1.Complaint)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], ComplaintService);
exports.ComplaintService = ComplaintService;
//# sourceMappingURL=complaint.service.js.map