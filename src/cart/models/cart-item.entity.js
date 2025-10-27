"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const typeorm_1 = require("typeorm");
const cart_entity_1 = require("./cart.entity");
let CartItem = class CartItem {
    id;
    cart;
    productId;
    count;
};
exports.CartItem = CartItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], CartItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cart_entity_1.Cart, (cart) => cart.items, { onDelete: 'CASCADE' })
], CartItem.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' })
], CartItem.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 })
], CartItem.prototype, "count", void 0);
exports.CartItem = CartItem = __decorate([
    (0, typeorm_1.Entity)({ name: 'cart_items' })
], CartItem);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUNBQTRFO0FBQzVFLCtDQUFxQztBQUc5QixJQUFNLFFBQVEsR0FBZCxNQUFNLFFBQVE7SUFFbkIsRUFBRSxDQUFTO0lBR1gsSUFBSSxDQUFPO0lBR1gsU0FBUyxDQUFTO0lBR2xCLEtBQUssQ0FBUztDQUNmLENBQUE7QUFaWSw0QkFBUTtBQUVuQjtJQURDLElBQUEsZ0NBQXNCLEdBQUU7b0NBQ2Q7QUFHWDtJQURDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO3NDQUMxRDtBQUdYO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOzJDQUNQO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7dUNBQ3RCO21CQVhILFFBQVE7SUFEcEIsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDO0dBQ2xCLFFBQVEsQ0FZcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgTWFueVRvT25lLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi9jYXJ0LmVudGl0eSc7XG5cbkBFbnRpdHkoeyBuYW1lOiAnY2FydF9pdGVtcycgfSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbSB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBATWFueVRvT25lKCgpID0+IENhcnQsIChjYXJ0KSA9PiBjYXJ0Lml0ZW1zLCB7IG9uRGVsZXRlOiAnQ0FTQ0FERScgfSlcbiAgY2FydDogQ2FydDtcblxuICBAQ29sdW1uKHsgdHlwZTogJ3RleHQnIH0pXG4gIHByb2R1Y3RJZDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiAnaW50JywgZGVmYXVsdDogMSB9KVxuICBjb3VudDogbnVtYmVyO1xufVxuIl19