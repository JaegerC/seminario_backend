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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const typeorm_1 = require("typeorm");
const region_entity_1 = require("./region.entity");
const municipality_entity_1 = require("./municipality.entity");
let Department = class Department extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Department.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: "180", nullable: false }),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(() => region_entity_1.Region, region => region.departments),
    __metadata("design:type", region_entity_1.Region)
], Department.prototype, "region", void 0);
__decorate([
    typeorm_1.OneToMany(() => municipality_entity_1.Municipality, municipality => municipality.department),
    __metadata("design:type", Array)
], Department.prototype, "municipalities", void 0);
Department = __decorate([
    typeorm_1.Entity()
], Department);
exports.Department = Department;
//# sourceMappingURL=department.entity.js.map