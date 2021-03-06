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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const department_entity_1 = require("../../entities/department.entity");
let DepartmentService = class DepartmentService {
    constructor(departmentRepo, connection) {
        this.departmentRepo = departmentRepo;
        this.connection = connection;
    }
    async getDepartments() {
        try {
            return await this.departmentRepo.find({ relations: ['region', 'municipalities'] });
        }
        catch (err) {
            return err;
        }
    }
    async getDepartmentById(id) {
        try {
            return await this.departmentRepo.findOne(id, { relations: ['region', 'municipalities'] });
        }
        catch (err) {
            return err;
        }
    }
};
DepartmentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], DepartmentService);
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map