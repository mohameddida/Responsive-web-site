"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const expense_schema_1 = require("../Schema/expense.schema");
const jwt_strategy_1 = require("../auth/jwt.strategy");
const users_module_1 = require("../users/users.module");
const expenses_controller_1 = require("./expenses.controller");
const expenses_service_1 = require("./expenses.service");
let ExpensesModule = class ExpensesModule {
};
exports.ExpensesModule = ExpensesModule;
exports.ExpensesModule = ExpensesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET_KEY'),
                    signOptions: {
                        expiresIn: configService.get('JWT_EXPIRE_KEY'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Expense', schema: expense_schema_1.ExpenseSchema }]),
        ],
        providers: [expenses_service_1.ExpensesService, jwt_strategy_1.JwtStrategy],
        controllers: [expenses_controller_1.ExpensesController],
    })
], ExpensesModule);
//# sourceMappingURL=expenses.module.js.map