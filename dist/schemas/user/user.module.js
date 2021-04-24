"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_resolver_1 = require("./user.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const role_entity_1 = require("../../entities/role.entity");
const module_entity_1 = require("../../entities/module.entity");
const user_entity_1 = require("../../entities/user.entity");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                role_entity_1.Role,
                module_entity_1.Module,
                user_entity_1.User
            ])
        ],
        providers: [user_service_1.UserService, user_resolver_1.UserResolver]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map