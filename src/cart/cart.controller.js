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
    findUserCart(req) {
        const cart = this.cartService.findOrCreateByUserId((0, shared_1.getUserIdFromRequest)(req));
        return cart.items;
    }
    // @UseGuards(JwtAuthGuard)
    updateUserCart(req, body) {
        // TODO: validate body payload...
        const cart = this.cartService.updateByUserId((0, shared_1.getUserIdFromRequest)(req), body);
        return cart.items;
    }
    // @UseGuards(JwtAuthGuard)
    clearUserCart(req) {
        this.cartService.removeByUserId((0, shared_1.getUserIdFromRequest)(req));
    }
    // @UseGuards(JwtAuthGuard)
    checkout(req, body) {
        const userId = (0, shared_1.getUserIdFromRequest)(req);
        const cart = this.cartService.findByUserId(userId);
        if (!(cart && cart.items.length)) {
            throw new common_1.BadRequestException('Cart is empty');
        }
        const { id: cartId, items } = cart;
        const total = (0, models_rules_1.calculateCartTotal)(items);
        const order = this.orderService.create({
            userId,
            cartId,
            items: items.map(({ product, count }) => ({
                productId: product.id,
                count,
            })),
            address: body.address,
            total,
        });
        this.cartService.removeByUserId(userId);
        return {
            order,
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FydC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQVd3QjtBQUN4QixrQ0FBeUM7QUFFekMsc0NBQTZEO0FBQzdELGlEQUFvRDtBQU03QyxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFjO0lBRWY7SUFDQTtJQUZWLFlBQ1UsV0FBd0IsRUFDeEIsWUFBMEI7UUFEMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDakMsQ0FBQztJQUVKLDJCQUEyQjtJQUczQixZQUFZLENBQVEsR0FBZTtRQUNqQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUNoRCxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUMxQixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCwyQkFBMkI7SUFHM0IsY0FBYyxDQUNMLEdBQWUsRUFDZCxJQUFvQjtRQUU1QixpQ0FBaUM7UUFDakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQzFDLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLEVBQ3pCLElBQUksQ0FDTCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCwyQkFBMkI7SUFJM0IsYUFBYSxDQUFRLEdBQWU7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCwyQkFBMkI7SUFHM0IsUUFBUSxDQUFRLEdBQWUsRUFBVSxJQUFvQjtRQUMzRCxNQUFNLE1BQU0sR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDakMsTUFBTSxJQUFJLDRCQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRCxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBQSxpQ0FBa0IsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUNyQyxNQUFNO1lBQ04sTUFBTTtZQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3hDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDckIsS0FBSzthQUNOLENBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixLQUFLO1NBQ04sQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEMsT0FBTztZQUNMLEtBQUs7U0FDTixDQUFDO0lBQ0osQ0FBQztJQUlELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQztDQUNGLENBQUE7QUE1RVksd0NBQWM7QUFTekI7SUFGQyxJQUFBLGtCQUFTLEVBQUMscUJBQWMsQ0FBQztJQUN6QixJQUFBLFlBQUcsR0FBRTtJQUNRLFdBQUEsSUFBQSxZQUFHLEdBQUUsQ0FBQTtrREFNbEI7QUFLRDtJQUZDLElBQUEsa0JBQVMsRUFBQyxxQkFBYyxDQUFDO0lBQ3pCLElBQUEsWUFBRyxHQUFFO0lBRUgsV0FBQSxJQUFBLFlBQUcsR0FBRSxDQUFBO0lBQ0wsV0FBQSxJQUFBLGFBQUksR0FBRSxDQUFBO29EQVNSO0FBTUQ7SUFIQyxJQUFBLGtCQUFTLEVBQUMscUJBQWMsQ0FBQztJQUN6QixJQUFBLGVBQU0sR0FBRTtJQUNSLElBQUEsaUJBQVEsRUFBQyxtQkFBVSxDQUFDLEVBQUUsQ0FBQztJQUNULFdBQUEsSUFBQSxZQUFHLEdBQUUsQ0FBQTttREFFbkI7QUFLRDtJQUZDLElBQUEsa0JBQVMsRUFBQyxxQkFBYyxDQUFDO0lBQ3pCLElBQUEsWUFBRyxFQUFDLE9BQU8sQ0FBQztJQUNILFdBQUEsSUFBQSxZQUFHLEdBQUUsQ0FBQTtJQUFtQixXQUFBLElBQUEsYUFBSSxHQUFFLENBQUE7OENBeUJ2QztBQUlEO0lBRkMsSUFBQSxrQkFBUyxFQUFDLHFCQUFjLENBQUM7SUFDekIsSUFBQSxZQUFHLEVBQUMsT0FBTyxDQUFDOzhDQUdaO3lCQTNFVSxjQUFjO0lBRDFCLElBQUEsbUJBQVUsRUFBQyxrQkFBa0IsQ0FBQztHQUNsQixjQUFjLENBNEUxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRyb2xsZXIsXG4gIEdldCxcbiAgRGVsZXRlLFxuICBQdXQsXG4gIEJvZHksXG4gIFJlcSxcbiAgVXNlR3VhcmRzLFxuICBIdHRwU3RhdHVzLFxuICBIdHRwQ29kZSxcbiAgQmFkUmVxdWVzdEV4Y2VwdGlvbixcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQmFzaWNBdXRoR3VhcmQgfSBmcm9tICcuLi9hdXRoJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlclNlcnZpY2UgfSBmcm9tICcuLi9vcmRlcic7XG5pbXBvcnQgeyBBcHBSZXF1ZXN0LCBnZXRVc2VySWRGcm9tUmVxdWVzdCB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBjYWxjdWxhdGVDYXJ0VG90YWwgfSBmcm9tICcuL21vZGVscy1ydWxlcyc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBDcmVhdGVPcmRlckR0bywgUHV0Q2FydFBheWxvYWQgfSBmcm9tICcuLi9vcmRlci90eXBlJztcblxuQENvbnRyb2xsZXIoJ2FwaS9wcm9maWxlL2NhcnQnKVxuZXhwb3J0IGNsYXNzIENhcnRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZSxcbiAgKSB7fVxuXG4gIC8vIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBAVXNlR3VhcmRzKEJhc2ljQXV0aEd1YXJkKVxuICBAR2V0KClcbiAgZmluZFVzZXJDYXJ0KEBSZXEoKSByZXE6IEFwcFJlcXVlc3QpOiBDYXJ0SXRlbVtdIHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5jYXJ0U2VydmljZS5maW5kT3JDcmVhdGVCeVVzZXJJZChcbiAgICAgIGdldFVzZXJJZEZyb21SZXF1ZXN0KHJlcSksXG4gICAgKTtcblxuICAgIHJldHVybiBjYXJ0Lml0ZW1zO1xuICB9XG5cbiAgLy8gQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIEBVc2VHdWFyZHMoQmFzaWNBdXRoR3VhcmQpXG4gIEBQdXQoKVxuICB1cGRhdGVVc2VyQ2FydChcbiAgICBAUmVxKCkgcmVxOiBBcHBSZXF1ZXN0LFxuICAgIEBCb2R5KCkgYm9keTogUHV0Q2FydFBheWxvYWQsXG4gICk6IENhcnRJdGVtW10ge1xuICAgIC8vIFRPRE86IHZhbGlkYXRlIGJvZHkgcGF5bG9hZC4uLlxuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmNhcnRTZXJ2aWNlLnVwZGF0ZUJ5VXNlcklkKFxuICAgICAgZ2V0VXNlcklkRnJvbVJlcXVlc3QocmVxKSxcbiAgICAgIGJvZHksXG4gICAgKTtcblxuICAgIHJldHVybiBjYXJ0Lml0ZW1zO1xuICB9XG5cbiAgLy8gQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIEBVc2VHdWFyZHMoQmFzaWNBdXRoR3VhcmQpXG4gIEBEZWxldGUoKVxuICBASHR0cENvZGUoSHR0cFN0YXR1cy5PSylcbiAgY2xlYXJVc2VyQ2FydChAUmVxKCkgcmVxOiBBcHBSZXF1ZXN0KSB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVCeVVzZXJJZChnZXRVc2VySWRGcm9tUmVxdWVzdChyZXEpKTtcbiAgfVxuXG4gIC8vIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBAVXNlR3VhcmRzKEJhc2ljQXV0aEd1YXJkKVxuICBAUHV0KCdvcmRlcicpXG4gIGNoZWNrb3V0KEBSZXEoKSByZXE6IEFwcFJlcXVlc3QsIEBCb2R5KCkgYm9keTogQ3JlYXRlT3JkZXJEdG8pIHtcbiAgICBjb25zdCB1c2VySWQgPSBnZXRVc2VySWRGcm9tUmVxdWVzdChyZXEpO1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmZpbmRCeVVzZXJJZCh1c2VySWQpO1xuXG4gICAgaWYgKCEoY2FydCAmJiBjYXJ0Lml0ZW1zLmxlbmd0aCkpIHtcbiAgICAgIHRocm93IG5ldyBCYWRSZXF1ZXN0RXhjZXB0aW9uKCdDYXJ0IGlzIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBpZDogY2FydElkLCBpdGVtcyB9ID0gY2FydDtcbiAgICBjb25zdCB0b3RhbCA9IGNhbGN1bGF0ZUNhcnRUb3RhbChpdGVtcyk7XG4gICAgY29uc3Qgb3JkZXIgPSB0aGlzLm9yZGVyU2VydmljZS5jcmVhdGUoe1xuICAgICAgdXNlcklkLFxuICAgICAgY2FydElkLFxuICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoeyBwcm9kdWN0LCBjb3VudCB9KSA9PiAoe1xuICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgIGNvdW50LFxuICAgICAgfSkpLFxuICAgICAgYWRkcmVzczogYm9keS5hZGRyZXNzLFxuICAgICAgdG90YWwsXG4gICAgfSk7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVCeVVzZXJJZCh1c2VySWQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZGVyLFxuICAgIH07XG4gIH1cblxuICBAVXNlR3VhcmRzKEJhc2ljQXV0aEd1YXJkKVxuICBAR2V0KCdvcmRlcicpXG4gIGdldE9yZGVyKCk6IE9yZGVyW10ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyU2VydmljZS5nZXRBbGwoKTtcbiAgfVxufVxuIl19