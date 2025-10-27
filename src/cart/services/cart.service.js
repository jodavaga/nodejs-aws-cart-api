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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cart_entity_1 = require("../models/cart.entity");
const cart_item_entity_1 = require("../models/cart-item.entity");
const models_1 = require("../models");
let CartService = class CartService {
    cartRepo;
    itemRepo;
    constructor(cartRepo, itemRepo) {
        this.cartRepo = cartRepo;
        this.itemRepo = itemRepo;
    }
    async findByUserId(userId) {
        return this.cartRepo.findOne({
            where: { userId: userId, status: models_1.CartStatuses.OPEN },
            relations: ['items'],
        });
    }
    async createByUserId(userId) {
        const cart = this.cartRepo.create({
            userId,
            status: models_1.CartStatuses.OPEN,
            items: [],
        });
        return this.cartRepo.save(cart);
    }
    async findOrCreateByUserId(userId) {
        const existing = await this.findByUserId(userId);
        return existing ?? this.createByUserId(userId);
    }
    async updateByUserId(userId, payload) {
        const cart = await this.findOrCreateByUserId(userId);
        let item = await this.itemRepo.findOne({
            where: {
                cart: { id: cart.id },
                productId: payload.product.id,
            },
        });
        if (!item && payload.count > 0) {
            item = this.itemRepo.create({
                cart,
                productId: payload.product.id,
                count: payload.count,
            });
            await this.itemRepo.save(item);
        }
        else if (item && payload.count === 0) {
            await this.itemRepo.remove(item);
        }
        else if (item) {
            item.count = payload.count;
            await this.itemRepo.save(item);
        }
        await this.cartRepo.save(cart);
        return this.findOrCreateByUserId(userId);
    }
    async removeByUserId(userId) {
        const cart = await this.findByUserId(userId);
        if (cart)
            await this.cartRepo.remove(cart);
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __param(1, (0, typeorm_1.InjectRepository)(cart_item_entity_1.CartItem))
], CartService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQUM1Qyw2Q0FBbUQ7QUFFbkQsdURBQTZDO0FBQzdDLGlFQUFzRDtBQUN0RCxzQ0FBeUM7QUFJbEMsSUFBTSxXQUFXLEdBQWpCLE1BQU0sV0FBVztJQUdaO0lBRUE7SUFKVixZQUVVLFFBQTBCLEVBRTFCLFFBQThCO1FBRjlCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBRTFCLGFBQVEsR0FBUixRQUFRLENBQXNCO0lBQ3JDLENBQUM7SUFFSixLQUFLLENBQUMsWUFBWSxDQUFDLE1BQWM7UUFDL0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUMzQixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxxQkFBWSxDQUFDLElBQUksRUFBRTtZQUNwRCxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDckIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBYztRQUNqQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxNQUFNO1lBQ04sTUFBTSxFQUFFLHFCQUFZLENBQUMsSUFBSTtZQUN6QixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFjO1FBQ3ZDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxPQUFPLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQWMsRUFBRSxPQUF1QjtRQUMxRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3JDLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDckIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTthQUM5QjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMvQixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUk7Z0JBQ0osU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDN0IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2FBQ3JCLENBQUMsQ0FBQztZQUNILE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdkMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDO2FBQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDM0IsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFjO1FBQ2pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUk7WUFBRSxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRixDQUFBO0FBL0RZLGtDQUFXO3NCQUFYLFdBQVc7SUFEdkIsSUFBQSxtQkFBVSxHQUFFO0lBR1IsV0FBQSxJQUFBLDBCQUFnQixFQUFDLGtCQUFJLENBQUMsQ0FBQTtJQUV0QixXQUFBLElBQUEsMEJBQWdCLEVBQUMsMkJBQVEsQ0FBQyxDQUFBO0dBSmxCLFdBQVcsQ0ErRHZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uL21vZGVscy9jYXJ0LmVudGl0eSc7XG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJy4uL21vZGVscy9jYXJ0LWl0ZW0uZW50aXR5JztcbmltcG9ydCB7IENhcnRTdGF0dXNlcyB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBQdXRDYXJ0UGF5bG9hZCB9IGZyb20gJy4uLy4uL29yZGVyL3R5cGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0UmVwb3NpdG9yeShDYXJ0KVxuICAgIHByaXZhdGUgY2FydFJlcG86IFJlcG9zaXRvcnk8Q2FydD4sXG4gICAgQEluamVjdFJlcG9zaXRvcnkoQ2FydEl0ZW0pXG4gICAgcHJpdmF0ZSBpdGVtUmVwbzogUmVwb3NpdG9yeTxDYXJ0SXRlbT4sXG4gICkge31cblxuICBhc3luYyBmaW5kQnlVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPENhcnQgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFJlcG8uZmluZE9uZSh7XG4gICAgICB3aGVyZTogeyB1c2VySWQ6IHVzZXJJZCwgc3RhdHVzOiBDYXJ0U3RhdHVzZXMuT1BFTiB9LFxuICAgICAgcmVsYXRpb25zOiBbJ2l0ZW1zJ10sXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVCeVVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8Q2FydD4ge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmNhcnRSZXBvLmNyZWF0ZSh7XG4gICAgICB1c2VySWQsXG4gICAgICBzdGF0dXM6IENhcnRTdGF0dXNlcy5PUEVOLFxuICAgICAgaXRlbXM6IFtdLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuY2FydFJlcG8uc2F2ZShjYXJ0KTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRPckNyZWF0ZUJ5VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxDYXJ0PiB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0aGlzLmZpbmRCeVVzZXJJZCh1c2VySWQpO1xuICAgIHJldHVybiBleGlzdGluZyA/PyB0aGlzLmNyZWF0ZUJ5VXNlcklkKHVzZXJJZCk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVCeVVzZXJJZCh1c2VySWQ6IHN0cmluZywgcGF5bG9hZDogUHV0Q2FydFBheWxvYWQpOiBQcm9taXNlPENhcnQ+IHtcbiAgICBjb25zdCBjYXJ0ID0gYXdhaXQgdGhpcy5maW5kT3JDcmVhdGVCeVVzZXJJZCh1c2VySWQpO1xuXG4gICAgbGV0IGl0ZW0gPSBhd2FpdCB0aGlzLml0ZW1SZXBvLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY2FydDogeyBpZDogY2FydC5pZCB9LFxuICAgICAgICBwcm9kdWN0SWQ6IHBheWxvYWQucHJvZHVjdC5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWl0ZW0gJiYgcGF5bG9hZC5jb3VudCA+IDApIHtcbiAgICAgIGl0ZW0gPSB0aGlzLml0ZW1SZXBvLmNyZWF0ZSh7XG4gICAgICAgIGNhcnQsXG4gICAgICAgIHByb2R1Y3RJZDogcGF5bG9hZC5wcm9kdWN0LmlkLFxuICAgICAgICBjb3VudDogcGF5bG9hZC5jb3VudCxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5pdGVtUmVwby5zYXZlKGl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoaXRlbSAmJiBwYXlsb2FkLmNvdW50ID09PSAwKSB7XG4gICAgICBhd2FpdCB0aGlzLml0ZW1SZXBvLnJlbW92ZShpdGVtKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0pIHtcbiAgICAgIGl0ZW0uY291bnQgPSBwYXlsb2FkLmNvdW50O1xuICAgICAgYXdhaXQgdGhpcy5pdGVtUmVwby5zYXZlKGl0ZW0pO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuY2FydFJlcG8uc2F2ZShjYXJ0KTtcblxuICAgIHJldHVybiB0aGlzLmZpbmRPckNyZWF0ZUJ5VXNlcklkKHVzZXJJZCk7XG4gIH1cblxuICBhc3luYyByZW1vdmVCeVVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNhcnQgPSBhd2FpdCB0aGlzLmZpbmRCeVVzZXJJZCh1c2VySWQpO1xuICAgIGlmIChjYXJ0KSBhd2FpdCB0aGlzLmNhcnRSZXBvLnJlbW92ZShjYXJ0KTtcbiAgfVxufVxuIl19