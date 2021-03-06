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
exports.Module = void 0;
const typeorm_1 = require("typeorm");
const role_entity_1 = require("./role.entity");
let Module = class Module {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Module.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: "80", nullable: false }),
    __metadata("design:type", String)
], Module.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Module.prototype, "isActive", void 0);
__decorate([
    typeorm_1.ManyToMany(() => role_entity_1.Role, role => role.modules),
    __metadata("design:type", Array)
], Module.prototype, "roles", void 0);
Module = __decorate([
    typeorm_1.Entity()
], Module);
exports.Module = Module;
//# sourceMappingURL=module.entity.js.map