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
exports.CommerceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const commerce_entity_1 = require("../../entities/commerce.entity");
const typeorm_2 = require("typeorm");
let CommerceService = class CommerceService {
    constructor(commerceRepository, connection) {
        this.commerceRepository = commerceRepository;
        this.connection = connection;
    }
    async getCommerces() {
        return await this.commerceRepository.find({ where: { is_active: true } });
        ;
    }
    async getCommerceDataById(commerceId) {
        try {
            if (!commerceId || isNaN(commerceId)) {
                throw new common_1.NotAcceptableException("Debe de seleccionar un comercio");
            }
            return await this.connection.getRepository(commerce_entity_1.Commerce)
                .createQueryBuilder("commerce")
                .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
                .leftJoinAndSelect("commerce.branches", "branches")
                .leftJoinAndSelect("branches.complaints", "complaints")
                .leftJoinAndSelect("branches.municipality", "municipality")
                .leftJoinAndSelect("municipality.department", "department")
                .leftJoinAndSelect("department.region", "region")
                .where("commerce.id = :commerceId", { commerceId })
                .getOne();
        }
        catch (e) {
            return e;
        }
    }
    async getCommerceByFilter(commerce_name, regionId, departmentId, municipalityId) {
        try {
            if ((!commerce_name || commerce_name.trim() === "")
                && (!regionId || regionId === 0 || isNaN(regionId))
                && (!departmentId || departmentId === 0 || isNaN(departmentId))
                && (!municipalityId || municipalityId === 0 || isNaN(municipalityId))) {
                throw new common_1.NotAcceptableException("Debe de proporcionar por lo menos un parametro de busqueda");
            }
            console.log({
                commerce_name,
                regionId,
                departmentId,
                municipalityId
            });
            let commerce = null;
            if (municipalityId && municipalityId !== 0) {
                console.log("entrando a la consulta");
                commerce = await this.connection.getRepository(commerce_entity_1.Commerce)
                    .createQueryBuilder("commerce")
                    .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
                    .leftJoinAndSelect("commerce.branches", "branches")
                    .leftJoinAndSelect("branches.complaints", "complaints")
                    .leftJoinAndSelect("branches.municipality", "municipality")
                    .leftJoinAndSelect("municipality.department", "department")
                    .leftJoinAndSelect("department.region", "region")
                    .where("branches.municipalityId = :municipalityId", { municipalityId })
                    .getMany();
                console.log(commerce[0].branches[0].municipality);
            }
            else if (departmentId && departmentId !== 0 && municipalityId === 0) {
                commerce = await this.connection.getRepository(commerce_entity_1.Commerce)
                    .createQueryBuilder("commerce")
                    .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
                    .leftJoinAndSelect("commerce.branches", "branches")
                    .leftJoinAndSelect("branches.complaints", "complaints")
                    .leftJoinAndSelect("branches.municipality", "municipality")
                    .leftJoinAndSelect("municipality.department", "department")
                    .leftJoinAndSelect("department.region", "region")
                    .where("department.id = :departmentId", { departmentId })
                    .getMany();
            }
            else if (regionId && regionId !== 0 && departmentId === 0 && municipalityId === 0) {
                commerce = await this.connection.getRepository(commerce_entity_1.Commerce)
                    .createQueryBuilder("commerce")
                    .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
                    .leftJoinAndSelect("commerce.branches", "branches")
                    .leftJoinAndSelect("branches.complaints", "complaints")
                    .leftJoinAndSelect("branches.municipality", "municipality")
                    .leftJoinAndSelect("municipality.department", "department")
                    .leftJoinAndSelect("department.region", "region")
                    .where("region.id = :regionId", { regionId })
                    .getMany();
            }
            return {
                success: true,
                data: commerce,
                error: null
            };
        }
        catch (err) {
            return {
                success: false,
                data: null,
                error: err.message
            };
        }
    }
};
CommerceService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(commerce_entity_1.Commerce)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], CommerceService);
exports.CommerceService = CommerceService;
//# sourceMappingURL=commerce.service.js.map