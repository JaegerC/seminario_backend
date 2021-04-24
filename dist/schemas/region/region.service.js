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
exports.RegionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const region_entity_1 = require("../../entities/region.entity");
let RegionService = class RegionService {
    constructor(regionRepo, connection) {
        this.regionRepo = regionRepo;
        this.connection = connection;
    }
    async getRegions() {
        try {
            return await this.regionRepo.find({ relations: ['departments'] });
        }
        catch (err) {
            return err;
        }
    }
    async getRegionById(id) {
        try {
            return await this.regionRepo.findOne(id, { relations: ['departments'] });
        }
        catch (err) {
            return err;
        }
    }
};
RegionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(region_entity_1.Region)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], RegionService);
exports.RegionService = RegionService;
//# sourceMappingURL=region.service.js.map