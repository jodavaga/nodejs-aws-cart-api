"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
const models_1 = require("../models");
let CartService = class CartService {
    userCarts = {};
    findByUserId(userId) {
        return this.userCarts[userId];
    }
    createByUserId(user_id) {
        const timestamp = Date.now();
        const userCart = {
            id: (0, node_crypto_1.randomUUID)(),
            user_id,
            created_at: timestamp,
            updated_at: timestamp,
            status: models_1.CartStatuses.OPEN,
            items: [],
        };
        this.userCarts[user_id] = userCart;
        return userCart;
    }
    findOrCreateByUserId(userId) {
        const userCart = this.findByUserId(userId);
        if (userCart) {
            return userCart;
        }
        return this.createByUserId(userId);
    }
    updateByUserId(userId, payload) {
        const userCart = this.findOrCreateByUserId(userId);
        const index = userCart.items.findIndex(({ product }) => product.id === payload.product.id);
        if (index === -1) {
            userCart.items.push(payload);
        }
        else if (payload.count === 0) {
            userCart.items.splice(index, 1);
        }
        else {
            userCart.items[index] = payload;
        }
        return userCart;
    }
    removeByUserId(userId) {
        delete this.userCarts[userId];
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)()
], CartService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQUM1Qyw2Q0FBeUM7QUFDekMsc0NBQStDO0FBSXhDLElBQU0sV0FBVyxHQUFqQixNQUFNLFdBQVc7SUFDZCxTQUFTLEdBQXlCLEVBQUUsQ0FBQztJQUU3QyxZQUFZLENBQUMsTUFBYztRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFlO1FBQzVCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUU3QixNQUFNLFFBQVEsR0FBRztZQUNmLEVBQUUsRUFBRSxJQUFBLHdCQUFVLEdBQUU7WUFDaEIsT0FBTztZQUNQLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLE1BQU0sRUFBRSxxQkFBWSxDQUFDLElBQUk7WUFDekIsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFbkMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELG9CQUFvQixDQUFDLE1BQWM7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ2IsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQWMsRUFBRSxPQUF1QjtRQUNwRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ3BDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDbkQsQ0FBQztRQUVGLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsQ0FBQzthQUFNLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQzthQUFNLENBQUM7WUFDTixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxDQUFDO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFjO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTtBQXZEWSxrQ0FBVztzQkFBWCxXQUFXO0lBRHZCLElBQUEsbUJBQVUsR0FBRTtHQUNBLFdBQVcsQ0F1RHZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdub2RlOmNyeXB0byc7XG5pbXBvcnQgeyBDYXJ0LCBDYXJ0U3RhdHVzZXMgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgUHV0Q2FydFBheWxvYWQgfSBmcm9tICcuLi8uLi9vcmRlci90eXBlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB1c2VyQ2FydHM6IFJlY29yZDxzdHJpbmcsIENhcnQ+ID0ge307XG5cbiAgZmluZEJ5VXNlcklkKHVzZXJJZDogc3RyaW5nKTogQ2FydCB7XG4gICAgcmV0dXJuIHRoaXMudXNlckNhcnRzW3VzZXJJZF07XG4gIH1cblxuICBjcmVhdGVCeVVzZXJJZCh1c2VyX2lkOiBzdHJpbmcpOiBDYXJ0IHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgY29uc3QgdXNlckNhcnQgPSB7XG4gICAgICBpZDogcmFuZG9tVVVJRCgpLFxuICAgICAgdXNlcl9pZCxcbiAgICAgIGNyZWF0ZWRfYXQ6IHRpbWVzdGFtcCxcbiAgICAgIHVwZGF0ZWRfYXQ6IHRpbWVzdGFtcCxcbiAgICAgIHN0YXR1czogQ2FydFN0YXR1c2VzLk9QRU4sXG4gICAgICBpdGVtczogW10sXG4gICAgfTtcblxuICAgIHRoaXMudXNlckNhcnRzW3VzZXJfaWRdID0gdXNlckNhcnQ7XG5cbiAgICByZXR1cm4gdXNlckNhcnQ7XG4gIH1cblxuICBmaW5kT3JDcmVhdGVCeVVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IENhcnQge1xuICAgIGNvbnN0IHVzZXJDYXJ0ID0gdGhpcy5maW5kQnlVc2VySWQodXNlcklkKTtcblxuICAgIGlmICh1c2VyQ2FydCkge1xuICAgICAgcmV0dXJuIHVzZXJDYXJ0O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUJ5VXNlcklkKHVzZXJJZCk7XG4gIH1cblxuICB1cGRhdGVCeVVzZXJJZCh1c2VySWQ6IHN0cmluZywgcGF5bG9hZDogUHV0Q2FydFBheWxvYWQpOiBDYXJ0IHtcbiAgICBjb25zdCB1c2VyQ2FydCA9IHRoaXMuZmluZE9yQ3JlYXRlQnlVc2VySWQodXNlcklkKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdXNlckNhcnQuaXRlbXMuZmluZEluZGV4KFxuICAgICAgKHsgcHJvZHVjdCB9KSA9PiBwcm9kdWN0LmlkID09PSBwYXlsb2FkLnByb2R1Y3QuaWQsXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHVzZXJDYXJ0Lml0ZW1zLnB1c2gocGF5bG9hZCk7XG4gICAgfSBlbHNlIGlmIChwYXlsb2FkLmNvdW50ID09PSAwKSB7XG4gICAgICB1c2VyQ2FydC5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1c2VyQ2FydC5pdGVtc1tpbmRleF0gPSBwYXlsb2FkO1xuICAgIH1cblxuICAgIHJldHVybiB1c2VyQ2FydDtcbiAgfVxuXG4gIHJlbW92ZUJ5VXNlcklkKHVzZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMudXNlckNhcnRzW3VzZXJJZF07XG4gIH1cbn1cbiJdfQ==