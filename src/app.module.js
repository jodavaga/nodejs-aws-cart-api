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
                        synchronize: true, // ✅ auto create DB tables
                    };
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([cart_entity_1.Cart, cart_item_entity_1.CartItem]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBRXhDLHFEQUFpRDtBQUVqRCxvREFBZ0Q7QUFDaEQsb0RBQWdEO0FBQ2hELHVEQUFtRDtBQUNuRCwyQ0FBOEM7QUFDOUMsNkNBQWdEO0FBQ2hELCtDQUFpRDtBQUNqRCwyREFBaUQ7QUFDakQscUVBQTBEO0FBNEJuRCxJQUFNLFNBQVMsR0FBZixNQUFNLFNBQVM7Q0FBRyxDQUFBO0FBQVosOEJBQVM7b0JBQVQsU0FBUztJQTFCckIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUU7WUFDUCx3QkFBVTtZQUNWLHdCQUFVO1lBQ1YsMEJBQVc7WUFDWCxxQkFBWSxDQUFDLE9BQU8sRUFBRTtZQUN0Qix1QkFBYSxDQUFDLFlBQVksQ0FBQztnQkFDekIsVUFBVSxFQUFFLEtBQUssSUFBSSxFQUFFO29CQUNyQixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsOEJBQWdCLEdBQUUsQ0FBQztvQkFDdkMsT0FBTzt3QkFDTCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO3dCQUNoQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7d0JBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTt3QkFDeEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO3dCQUN4QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7d0JBQ3hCLFFBQVEsRUFBRSxDQUFDLGtCQUFJLEVBQUUsMkJBQVEsQ0FBQzt3QkFDMUIsV0FBVyxFQUFFLElBQUksRUFBRSwwQkFBMEI7cUJBQzlDLENBQUM7Z0JBQ0osQ0FBQzthQUNGLENBQUM7WUFDRix1QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGtCQUFJLEVBQUUsMkJBQVEsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsV0FBVyxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUM1QixTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7R0FDVyxTQUFTLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL2FwcC5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgQ2FydE1vZHVsZSB9IGZyb20gJy4vY2FydC9jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi9hdXRoL2F1dGgubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyTW9kdWxlIH0gZnJvbSAnLi9vcmRlci9vcmRlci5tb2R1bGUnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBnZXREYkNyZWRlbnRpYWxzIH0gZnJvbSAnLi9tYWluLmxhbWJkYSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi9jYXJ0L21vZGVscy9jYXJ0LmVudGl0eSc7XG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJy4vY2FydC9tb2RlbHMvY2FydC1pdGVtLmVudGl0eSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQXV0aE1vZHVsZSxcbiAgICBDYXJ0TW9kdWxlLFxuICAgIE9yZGVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgVHlwZU9ybU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjcmVkcyA9IGF3YWl0IGdldERiQ3JlZGVudGlhbHMoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAncG9zdGdyZXMnLFxuICAgICAgICAgIGhvc3Q6IGNyZWRzLmhvc3QsXG4gICAgICAgICAgcG9ydDogY3JlZHMucG9ydCxcbiAgICAgICAgICB1c2VybmFtZTogY3JlZHMudXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQ6IGNyZWRzLnBhc3N3b3JkLFxuICAgICAgICAgIGRhdGFiYXNlOiBjcmVkcy5kYXRhYmFzZSxcbiAgICAgICAgICBlbnRpdGllczogW0NhcnQsIENhcnRJdGVtXSxcbiAgICAgICAgICBzeW5jaHJvbml6ZTogdHJ1ZSwgLy8g4pyFIGF1dG8gY3JlYXRlIERCIHRhYmxlc1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBUeXBlT3JtTW9kdWxlLmZvckZlYXR1cmUoW0NhcnQsIENhcnRJdGVtXSksXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbQXBwQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19