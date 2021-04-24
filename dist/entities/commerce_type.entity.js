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
exports.CommerceType = void 0;
const typeorm_1 = require("typeorm");
const commerce_entity_1 = require("./commerce.entity");
let CommerceType = class CommerceType extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommerceType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: "180", nullable: false }),
    __metadata("design:type", String)
], CommerceType.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => commerce_entity_1.Commerce, commerce => commerce.commerce_type),
    __metadata("design:type", commerce_entity_1.Commerce)
], CommerceType.prototype, "commerce", void 0);
CommerceType = __decorate([
    typeorm_1.Entity()
], CommerceType);
exports.CommerceType = CommerceType;
//# sourceMappingURL=commerce_type.entity.js.map