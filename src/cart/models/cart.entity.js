"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
const cart_item_entity_1 = require("./cart-item.entity");
let Cart = class Cart {
    id;
    userId;
    status;
    items;
};
exports.Cart = Cart;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Cart.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' })
], Cart.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: _1.CartStatuses,
        default: _1.CartStatuses.OPEN,
    })
], Cart.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_item_entity_1.CartItem, (item) => item.cart)
], Cart.prototype, "items", void 0);
exports.Cart = Cart = __decorate([
    (0, typeorm_1.Entity)({ name: 'carts' })
], Cart);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQ0FBNEU7QUFDNUUsd0JBQWlDO0FBQ2pDLHlEQUE4QztBQUd2QyxJQUFNLElBQUksR0FBVixNQUFNLElBQUk7SUFFZixFQUFFLENBQVM7SUFHWCxNQUFNLENBQVM7SUFPZixNQUFNLENBQWU7SUFHckIsS0FBSyxDQUFhO0NBQ25CLENBQUE7QUFoQlksb0JBQUk7QUFFZjtJQURDLElBQUEsZ0NBQXNCLEdBQUU7Z0NBQ2Q7QUFHWDtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztvQ0FDVjtBQU9mO0lBTEMsSUFBQSxnQkFBTSxFQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsZUFBWTtRQUNsQixPQUFPLEVBQUUsZUFBWSxDQUFDLElBQUk7S0FDM0IsQ0FBQztvQ0FDbUI7QUFHckI7SUFEQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsMkJBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzttQ0FDN0I7ZUFmUCxJQUFJO0lBRGhCLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztHQUNiLElBQUksQ0FnQmhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIE9uZVRvTWFueSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgQ2FydFN0YXR1c2VzIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJy4vY2FydC1pdGVtLmVudGl0eSc7XG5cbkBFbnRpdHkoeyBuYW1lOiAnY2FydHMnIH0pXG5leHBvcnQgY2xhc3MgQ2FydCB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogJ3RleHQnIH0pXG4gIHVzZXJJZDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIHR5cGU6ICdlbnVtJyxcbiAgICBlbnVtOiBDYXJ0U3RhdHVzZXMsXG4gICAgZGVmYXVsdDogQ2FydFN0YXR1c2VzLk9QRU4sXG4gIH0pXG4gIHN0YXR1czogQ2FydFN0YXR1c2VzO1xuXG4gIEBPbmVUb01hbnkoKCkgPT4gQ2FydEl0ZW0sIChpdGVtKSA9PiBpdGVtLmNhcnQpXG4gIGl0ZW1zOiBDYXJ0SXRlbVtdO1xufVxuIl19