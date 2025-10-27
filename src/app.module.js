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
const typeorm_1 = require("@nestjs/typeorm");
const main_lambda_1 = require("./main.lambda");
const cart_entity_1 = require("./cart/models/cart.entity");
const cart_item_entity_1 = require("./cart/models/cart-item.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            cart_module_1.CartModule,
            order_module_1.OrderModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => {
                    const creds = await (0, main_lambda_1.getDbCredentials)();
                    return {
                        type: 'postgres',
                        host: creds.host,
                        port: creds.port,
                        username: creds.username,
                        password: creds.password,
                        database: creds.database,
                        entities: [cart_entity_1.Cart, cart_item_entity_1.CartItem],
                        synchronize: true,
                        ssl: {
                            require: true,
                            rejectUnauthorized: false,
                        },
                    };
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBRXhDLHFEQUFpRDtBQUVqRCxvREFBZ0Q7QUFDaEQsb0RBQWdEO0FBQ2hELHVEQUFtRDtBQUNuRCwyQ0FBOEM7QUFDOUMsNkNBQWdEO0FBQ2hELCtDQUFpRDtBQUNqRCwyREFBaUQ7QUFDakQscUVBQTBEO0FBK0JuRCxJQUFNLFNBQVMsR0FBZixNQUFNLFNBQVM7Q0FBRyxDQUFBO0FBQVosOEJBQVM7b0JBQVQsU0FBUztJQTdCckIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUU7WUFDUCx3QkFBVTtZQUNWLHdCQUFVO1lBQ1YsMEJBQVc7WUFDWCxxQkFBWSxDQUFDLE9BQU8sRUFBRTtZQUN0Qix1QkFBYSxDQUFDLFlBQVksQ0FBQztnQkFDekIsVUFBVSxFQUFFLEtBQUssSUFBSSxFQUFFO29CQUNyQixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsOEJBQWdCLEdBQUUsQ0FBQztvQkFDdkMsT0FBTzt3QkFDTCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO3dCQUNoQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7d0JBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTt3QkFDeEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO3dCQUN4QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7d0JBQ3hCLFFBQVEsRUFBRSxDQUFDLGtCQUFJLEVBQUUsMkJBQVEsQ0FBQzt3QkFDMUIsV0FBVyxFQUFFLElBQUk7d0JBQ2pCLEdBQUcsRUFBRTs0QkFDSCxPQUFPLEVBQUUsSUFBSTs0QkFDYixrQkFBa0IsRUFBRSxLQUFLO3lCQUMxQjtxQkFDRixDQUFDO2dCQUNKLENBQUM7YUFDRixDQUFDO1NBQ0g7UUFDRCxXQUFXLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLFNBQVMsQ0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vYXBwLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBDYXJ0TW9kdWxlIH0gZnJvbSAnLi9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuL2F1dGgvYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJNb2R1bGUgfSBmcm9tICcuL29yZGVyL29yZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IGdldERiQ3JlZGVudGlhbHMgfSBmcm9tICcuL21haW4ubGFtYmRhJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuL2NhcnQvbW9kZWxzL2NhcnQuZW50aXR5JztcbmltcG9ydCB7IENhcnRJdGVtIH0gZnJvbSAnLi9jYXJ0L21vZGVscy9jYXJ0LWl0ZW0uZW50aXR5JztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBdXRoTW9kdWxlLFxuICAgIENhcnRNb2R1bGUsXG4gICAgT3JkZXJNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUeXBlT3JtTW9kdWxlLmZvclJvb3RBc3luYyh7XG4gICAgICB1c2VGYWN0b3J5OiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWRzID0gYXdhaXQgZ2V0RGJDcmVkZW50aWFscygpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdwb3N0Z3JlcycsXG4gICAgICAgICAgaG9zdDogY3JlZHMuaG9zdCxcbiAgICAgICAgICBwb3J0OiBjcmVkcy5wb3J0LFxuICAgICAgICAgIHVzZXJuYW1lOiBjcmVkcy51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogY3JlZHMucGFzc3dvcmQsXG4gICAgICAgICAgZGF0YWJhc2U6IGNyZWRzLmRhdGFiYXNlLFxuICAgICAgICAgIGVudGl0aWVzOiBbQ2FydCwgQ2FydEl0ZW1dLFxuICAgICAgICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgICAgICAgIHNzbDoge1xuICAgICAgICAgICAgcmVxdWlyZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbQXBwQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19