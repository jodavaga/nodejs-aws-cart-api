"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const auth_1 = require("../auth");
const shared_1 = require("../shared");
const models_rules_1 = require("./models-rules");
let CartController = class CartController {
    cartService;
    orderService;
    constructor(cartService, orderService) {
        this.cartService = cartService;
        this.orderService = orderService;
    }
    // @UseGuards(JwtAuthGuard)
    async findUserCart(req) {
        const cart = await this.cartService.findOrCreateByUserId((0, shared_1.getUserIdFromRequest)(req));
        return cart.items;
    }
    // @UseGuards(JwtAuthGuard)
    async updateUserCart(req, body) {
        // TODO: validate body payload...
        const cart = await this.cartService.updateByUserId((0, shared_1.getUserIdFromRequest)(req), body);
        return cart.items;
    }
    // @UseGuards(JwtAuthGuard)
    clearUserCart(req) {
        this.cartService.removeByUserId((0, shared_1.getUserIdFromRequest)(req));
    }
    // @UseGuards(JwtAuthGuard)
    async checkout(req, body) {
        const userId = (0, shared_1.getUserIdFromRequest)(req);
        const cart = await this.cartService.findByUserId(userId);
        if (!(cart && cart.items?.length)) {
            throw new common_1.BadRequestException('Cart is empty');
        }
        const { id: cartId, items } = cart;
        const total = (0, models_rules_1.calculateCartTotal)(items);
        const order = await this.orderService.create({
            userId,
            cartId: cartId.toString(),
            items: items.map(({ productId, count }) => ({
                productId,
                count,
            })),
            address: body.address,
            total,
        });
        await this.cartService.removeByUserId(userId);
        return { order };
    }
    getOrder() {
        return this.orderService.getAll();
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.UseGuards)(auth_1.BasicAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)())
], CartController.prototype, "findUserCart", null);
__decorate([
    (0, common_1.UseGuards)(auth_1.BasicAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)())
], CartController.prototype, "updateUserCart", null);
__decorate([
    (0, common_1.UseGuards)(auth_1.BasicAuthGuard),
    (0, common_1.Delete)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)())
], CartController.prototype, "clearUserCart", null);
__decorate([
    (0, common_1.UseGuards)(auth_1.BasicAuthGuard),
    (0, common_1.Put)('order'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)())
], CartController.prototype, "checkout", null);
__decorate([
    (0, common_1.UseGuards)(auth_1.BasicAuthGuard),
    (0, common_1.Get)('order')
], CartController.prototype, "getOrder", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('api/profile/cart')
], CartController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FydC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQVd3QjtBQUN4QixrQ0FBeUM7QUFFekMsc0NBQTZEO0FBQzdELGlEQUFvRDtBQU03QyxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFjO0lBRWY7SUFDQTtJQUZWLFlBQ1UsV0FBd0IsRUFDeEIsWUFBMEI7UUFEMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDakMsQ0FBQztJQUVKLDJCQUEyQjtJQUdyQixBQUFOLEtBQUssQ0FBQyxZQUFZLENBQVEsR0FBZTtRQUN2QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQ3RELElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQzFCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELDJCQUEyQjtJQUdyQixBQUFOLEtBQUssQ0FBQyxjQUFjLENBQ1gsR0FBZSxFQUNkLElBQW9CO1FBRTVCLGlDQUFpQztRQUNqQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUNoRCxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxFQUN6QixJQUFJLENBQ0wsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsMkJBQTJCO0lBSTNCLGFBQWEsQ0FBUSxHQUFlO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsMkJBQTJCO0lBR3JCLEFBQU4sS0FBSyxDQUFDLFFBQVEsQ0FBUSxHQUFlLEVBQVUsSUFBb0I7UUFDakUsTUFBTSxNQUFNLEdBQUcsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDbEMsTUFBTSxJQUFJLDRCQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRCxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBQSxpQ0FBa0IsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQzNDLE1BQU07WUFDTixNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN6QixLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQyxTQUFTO2dCQUNULEtBQUs7YUFDTixDQUFDLENBQUM7WUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsS0FBSztTQUNOLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFJRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLENBQUM7Q0FDRixDQUFBO0FBM0VZLHdDQUFjO0FBU25CO0lBRkwsSUFBQSxrQkFBUyxFQUFDLHFCQUFjLENBQUM7SUFDekIsSUFBQSxZQUFHLEdBQUU7SUFDYyxXQUFBLElBQUEsWUFBRyxHQUFFLENBQUE7a0RBTXhCO0FBS0s7SUFGTCxJQUFBLGtCQUFTLEVBQUMscUJBQWMsQ0FBQztJQUN6QixJQUFBLFlBQUcsR0FBRTtJQUVILFdBQUEsSUFBQSxZQUFHLEdBQUUsQ0FBQTtJQUNMLFdBQUEsSUFBQSxhQUFJLEdBQUUsQ0FBQTtvREFTUjtBQU1EO0lBSEMsSUFBQSxrQkFBUyxFQUFDLHFCQUFjLENBQUM7SUFDekIsSUFBQSxlQUFNLEdBQUU7SUFDUixJQUFBLGlCQUFRLEVBQUMsbUJBQVUsQ0FBQyxFQUFFLENBQUM7SUFDVCxXQUFBLElBQUEsWUFBRyxHQUFFLENBQUE7bURBRW5CO0FBS0s7SUFGTCxJQUFBLGtCQUFTLEVBQUMscUJBQWMsQ0FBQztJQUN6QixJQUFBLFlBQUcsRUFBQyxPQUFPLENBQUM7SUFDRyxXQUFBLElBQUEsWUFBRyxHQUFFLENBQUE7SUFBbUIsV0FBQSxJQUFBLGFBQUksR0FBRSxDQUFBOzhDQXdCN0M7QUFJRDtJQUZDLElBQUEsa0JBQVMsRUFBQyxxQkFBYyxDQUFDO0lBQ3pCLElBQUEsWUFBRyxFQUFDLE9BQU8sQ0FBQzs4Q0FHWjt5QkExRVUsY0FBYztJQUQxQixJQUFBLG1CQUFVLEVBQUMsa0JBQWtCLENBQUM7R0FDbEIsY0FBYyxDQTJFMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb250cm9sbGVyLFxuICBHZXQsXG4gIERlbGV0ZSxcbiAgUHV0LFxuICBCb2R5LFxuICBSZXEsXG4gIFVzZUd1YXJkcyxcbiAgSHR0cFN0YXR1cyxcbiAgSHR0cENvZGUsXG4gIEJhZFJlcXVlc3RFeGNlcHRpb24sXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEJhc2ljQXV0aEd1YXJkIH0gZnJvbSAnLi4vYXV0aCc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXInO1xuaW1wb3J0IHsgQXBwUmVxdWVzdCwgZ2V0VXNlcklkRnJvbVJlcXVlc3QgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgY2FsY3VsYXRlQ2FydFRvdGFsIH0gZnJvbSAnLi9tb2RlbHMtcnVsZXMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IENyZWF0ZU9yZGVyRHRvLCBQdXRDYXJ0UGF5bG9hZCB9IGZyb20gJy4uL29yZGVyL3R5cGUnO1xuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuL21vZGVscy9jYXJ0LWl0ZW0uZW50aXR5JztcblxuQENvbnRyb2xsZXIoJ2FwaS9wcm9maWxlL2NhcnQnKVxuZXhwb3J0IGNsYXNzIENhcnRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZSxcbiAgKSB7fVxuXG4gIC8vIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBAVXNlR3VhcmRzKEJhc2ljQXV0aEd1YXJkKVxuICBAR2V0KClcbiAgYXN5bmMgZmluZFVzZXJDYXJ0KEBSZXEoKSByZXE6IEFwcFJlcXVlc3QpOiBQcm9taXNlPENhcnRJdGVtW10+IHtcbiAgICBjb25zdCBjYXJ0ID0gYXdhaXQgdGhpcy5jYXJ0U2VydmljZS5maW5kT3JDcmVhdGVCeVVzZXJJZChcbiAgICAgIGdldFVzZXJJZEZyb21SZXF1ZXN0KHJlcSksXG4gICAgKTtcblxuICAgIHJldHVybiBjYXJ0Lml0ZW1zO1xuICB9XG5cbiAgLy8gQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIEBVc2VHdWFyZHMoQmFzaWNBdXRoR3VhcmQpXG4gIEBQdXQoKVxuICBhc3luYyB1cGRhdGVVc2VyQ2FydChcbiAgICBAUmVxKCkgcmVxOiBBcHBSZXF1ZXN0LFxuICAgIEBCb2R5KCkgYm9keTogUHV0Q2FydFBheWxvYWQsXG4gICk6IFByb21pc2U8Q2FydEl0ZW1bXT4ge1xuICAgIC8vIFRPRE86IHZhbGlkYXRlIGJvZHkgcGF5bG9hZC4uLlxuICAgIGNvbnN0IGNhcnQgPSBhd2FpdCB0aGlzLmNhcnRTZXJ2aWNlLnVwZGF0ZUJ5VXNlcklkKFxuICAgICAgZ2V0VXNlcklkRnJvbVJlcXVlc3QocmVxKSxcbiAgICAgIGJvZHksXG4gICAgKTtcblxuICAgIHJldHVybiBjYXJ0Lml0ZW1zO1xuICB9XG5cbiAgLy8gQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIEBVc2VHdWFyZHMoQmFzaWNBdXRoR3VhcmQpXG4gIEBEZWxldGUoKVxuICBASHR0cENvZGUoSHR0cFN0YXR1cy5PSylcbiAgY2xlYXJVc2VyQ2FydChAUmVxKCkgcmVxOiBBcHBSZXF1ZXN0KSB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVCeVVzZXJJZChnZXRVc2VySWRGcm9tUmVxdWVzdChyZXEpKTtcbiAgfVxuXG4gIC8vIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBAVXNlR3VhcmRzKEJhc2ljQXV0aEd1YXJkKVxuICBAUHV0KCdvcmRlcicpXG4gIGFzeW5jIGNoZWNrb3V0KEBSZXEoKSByZXE6IEFwcFJlcXVlc3QsIEBCb2R5KCkgYm9keTogQ3JlYXRlT3JkZXJEdG8pIHtcbiAgICBjb25zdCB1c2VySWQgPSBnZXRVc2VySWRGcm9tUmVxdWVzdChyZXEpO1xuICAgIGNvbnN0IGNhcnQgPSBhd2FpdCB0aGlzLmNhcnRTZXJ2aWNlLmZpbmRCeVVzZXJJZCh1c2VySWQpO1xuXG4gICAgaWYgKCEoY2FydCAmJiBjYXJ0Lml0ZW1zPy5sZW5ndGgpKSB7XG4gICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEV4Y2VwdGlvbignQ2FydCBpcyBlbXB0eScpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgaWQ6IGNhcnRJZCwgaXRlbXMgfSA9IGNhcnQ7XG4gICAgY29uc3QgdG90YWwgPSBjYWxjdWxhdGVDYXJ0VG90YWwoaXRlbXMpO1xuICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgdGhpcy5vcmRlclNlcnZpY2UuY3JlYXRlKHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNhcnRJZDogY2FydElkLnRvU3RyaW5nKCksXG4gICAgICBpdGVtczogaXRlbXMubWFwKCh7IHByb2R1Y3RJZCwgY291bnQgfSkgPT4gKHtcbiAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICBjb3VudCxcbiAgICAgIH0pKSxcbiAgICAgIGFkZHJlc3M6IGJvZHkuYWRkcmVzcyxcbiAgICAgIHRvdGFsLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVCeVVzZXJJZCh1c2VySWQpO1xuXG4gICAgcmV0dXJuIHsgb3JkZXIgfTtcbiAgfVxuXG4gIEBVc2VHdWFyZHMoQmFzaWNBdXRoR3VhcmQpXG4gIEBHZXQoJ29yZGVyJylcbiAgZ2V0T3JkZXIoKTogT3JkZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJTZXJ2aWNlLmdldEFsbCgpO1xuICB9XG59XG4iXX0=