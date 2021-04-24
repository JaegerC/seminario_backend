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
exports.Branch = void 0;
const typeorm_1 = require("typeorm");
const commerce_entity_1 = require("./commerce.entity");
const municipality_entity_1 = require("./municipality.entity");
const complaint_entity_1 = require("./complaint.entity");
let Branch = class Branch extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Branch.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: "180", nullable: false }),
    __metadata("design:type", String)
], Branch.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: "240", nullable: false }),
    __metadata("design:type", String)
], Branch.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], Branch.prototype, "number", void 0);
__decorate([
    typeorm_1.Column({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Branch.prototype, "is_actve", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Branch.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Branch.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => commerce_entity_1.Commerce, commerce => commerce.branches),
    __metadata("design:type", commerce_entity_1.Commerce)
], Branch.prototype, "commerce", void 0);
__decorate([
    typeorm_1.ManyToOne(() => municipality_entity_1.Municipality, municipality => municipality.branches),
    __metadata("design:type", municipality_entity_1.Municipality)
], Branch.prototype, "municipality", void 0);
__decorate([
    typeorm_1.OneToMany(() => complaint_entity_1.Complaint, complaint => complaint.branch),
    __metadata("design:type", Array)
], Branch.prototype, "complaints", void 0);
Branch = __decorate([
    typeorm_1.Entity()
], Branch);
exports.Branch = Branch;
//# sourceMappingURL=branch.entity.js.map