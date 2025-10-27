"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const order_module_1 = require("../order/order.module");
const cart_controller_1 = require("./cart.controller");
const services_1 = require("./services");
const typeorm_1 = require("@nestjs/typeorm");
const cart_entity_1 = require("./models/cart.entity");
const cart_item_entity_1 = require("./models/cart-item.entity");
let CartModule = class CartModule {
};
exports.CartModule = CartModule;
exports.CartModule = CartModule = __decorate([
    (0, common_1.Module)({
        imports: [order_module_1.OrderModule, typeorm_1.TypeOrmModule.forFeature([cart_entity_1.Cart, cart_item_entity_1.CartItem])],
        providers: [services_1.CartService],
        controllers: [cart_controller_1.CartController],
    })
], CartModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFFeEMsd0RBQW9EO0FBRXBELHVEQUFtRDtBQUNuRCx5Q0FBeUM7QUFDekMsNkNBQWdEO0FBQ2hELHNEQUE0QztBQUM1QyxnRUFBcUQ7QUFPOUMsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtDQUFHLENBQUE7QUFBYixnQ0FBVTtxQkFBVixVQUFVO0lBTHRCLElBQUEsZUFBTSxFQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsMEJBQVcsRUFBRSx1QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGtCQUFJLEVBQUUsMkJBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEUsU0FBUyxFQUFFLENBQUMsc0JBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO0tBQzlCLENBQUM7R0FDVyxVQUFVLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IE9yZGVyTW9kdWxlIH0gZnJvbSAnLi4vb3JkZXIvb3JkZXIubW9kdWxlJztcblxuaW1wb3J0IHsgQ2FydENvbnRyb2xsZXIgfSBmcm9tICcuL2NhcnQuY29udHJvbGxlcic7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi9tb2RlbHMvY2FydC5lbnRpdHknO1xuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuL21vZGVscy9jYXJ0LWl0ZW0uZW50aXR5JztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtPcmRlck1vZHVsZSwgVHlwZU9ybU1vZHVsZS5mb3JGZWF0dXJlKFtDYXJ0LCBDYXJ0SXRlbV0pXSxcbiAgcHJvdmlkZXJzOiBbQ2FydFNlcnZpY2VdLFxuICBjb250cm9sbGVyczogW0NhcnRDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydE1vZHVsZSB7fVxuIl19