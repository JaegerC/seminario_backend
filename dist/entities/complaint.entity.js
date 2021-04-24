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
exports.Complaint = void 0;
const typeorm_1 = require("typeorm");
const branch_entity_1 = require("./branch.entity");
let Complaint = class Complaint extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Complaint.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "longtext", nullable: false }),
    __metadata("design:type", String)
], Complaint.prototype, "detail", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Complaint.prototype, "request", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: "80", nullable: false }),
    __metadata("design:type", String)
], Complaint.prototype, "doc_invoice", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Complaint.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Complaint.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => branch_entity_1.Branch, branch => branch.complaints),
    typeorm_1.JoinTable(),
    __metadata("design:type", branch_entity_1.Branch)
], Complaint.prototype, "branch", void 0);
Complaint = __decorate([
    typeorm_1.Entity()
], Complaint);
exports.Complaint = Complaint;
//# sourceMappingURL=complaint.entity.js.map