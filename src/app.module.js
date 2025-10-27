"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const cart_module_1 = require("./cart/cart.module");
const auth_module_1 = require("./auth/auth.module");
const order_module_1 = require("./order/order.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, cart_module_1.CartModule, order_module_1.OrderModule, config_1.ConfigModule.forRoot()],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBRXhDLHFEQUFpRDtBQUVqRCxvREFBZ0Q7QUFDaEQsb0RBQWdEO0FBQ2hELHVEQUFtRDtBQUNuRCwyQ0FBOEM7QUFPdkMsSUFBTSxTQUFTLEdBQWYsTUFBTSxTQUFTO0NBQUcsQ0FBQTtBQUFaLDhCQUFTO29CQUFULFNBQVM7SUFMckIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyx3QkFBVSxFQUFFLHdCQUFVLEVBQUUsMEJBQVcsRUFBRSxxQkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RFLFdBQVcsRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDNUIsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0dBQ1csU0FBUyxDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9hcHAuY29udHJvbGxlcic7XG5cbmltcG9ydCB7IENhcnRNb2R1bGUgfSBmcm9tICcuL2NhcnQvY2FydC5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlck1vZHVsZSB9IGZyb20gJy4vb3JkZXIvb3JkZXIubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtBdXRoTW9kdWxlLCBDYXJ0TW9kdWxlLCBPcmRlck1vZHVsZSwgQ29uZmlnTW9kdWxlLmZvclJvb3QoKV0sXG4gIGNvbnRyb2xsZXJzOiBbQXBwQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19