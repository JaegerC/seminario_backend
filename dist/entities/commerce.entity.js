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
exports.Commerce = void 0;
const typeorm_1 = require("typeorm");
const branch_entity_1 = require("./branch.entity");
const commerce_type_entity_1 = require("./commerce_type.entity");
let Commerce = class Commerce extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Commerce.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: "120", nullable: false }),
    __metadata("design:type", String)
], Commerce.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: "80", nullable: true }),
    __metadata("design:type", String)
], Commerce.prototype, "trade_patent", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: "30", nullable: false }),
    __metadata("design:type", String)
], Commerce.prototype, "nit", void 0);
__decorate([
    typeorm_1.Column({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Commerce.prototype, "is_active", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Commerce.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Commerce.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => branch_entity_1.Branch, branch => branch.commerce),
    __metadata("design:type", Array)
], Commerce.prototype, "branches", void 0);
__decorate([
    typeorm_1.ManyToOne(() => commerce_type_entity_1.CommerceType, commerce_type => commerce_type.commerce),
    __metadata("design:type", commerce_type_entity_1.CommerceType)
], Commerce.prototype, "commerce_type", void 0);
Commerce = __decorate([
    typeorm_1.Entity()
], Commerce);
exports.Commerce = Commerce;
//# sourceMappingURL=commerce.entity.js.map