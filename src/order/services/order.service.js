"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
const type_1 = require("../type");
let OrderService = class OrderService {
    orders = {};
    getAll() {
        return Object.values(this.orders);
    }
    findById(orderId) {
        return this.orders[orderId];
    }
    create(data) {
        const id = (0, node_crypto_1.randomUUID)();
        const order = {
            id,
            ...data,
            statusHistory: [
                {
                    comment: '',
                    status: type_1.OrderStatus.Open,
                    timestamp: Date.now(),
                },
            ],
        };
        this.orders[id] = order;
        return order;
    }
    // TODO add  type
    update(orderId, data) {
        const order = this.findById(orderId);
        if (!order) {
            throw new Error('Order does not exist.');
        }
        this.orders[orderId] = {
            ...data,
            id: orderId,
        };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBQzVDLDZDQUF5QztBQUV6QyxrQ0FBMEQ7QUFHbkQsSUFBTSxZQUFZLEdBQWxCLE1BQU0sWUFBWTtJQUNmLE1BQU0sR0FBMEIsRUFBRSxDQUFDO0lBRTNDLE1BQU07UUFDSixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxRQUFRLENBQUMsT0FBZTtRQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUF3QjtRQUM3QixNQUFNLEVBQUUsR0FBRyxJQUFBLHdCQUFVLEdBQVksQ0FBQztRQUNsQyxNQUFNLEtBQUssR0FBVTtZQUNuQixFQUFFO1lBQ0YsR0FBRyxJQUFJO1lBQ1AsYUFBYSxFQUFFO2dCQUNiO29CQUNFLE9BQU8sRUFBRSxFQUFFO29CQUNYLE1BQU0sRUFBRSxrQkFBVyxDQUFDLElBQUk7b0JBQ3hCLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2lCQUN0QjthQUNGO1NBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRXhCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlCQUFpQjtJQUNqQixNQUFNLENBQUMsT0FBZSxFQUFFLElBQVc7UUFDakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7WUFDckIsR0FBRyxJQUFJO1lBQ1AsRUFBRSxFQUFFLE9BQU87U0FDWixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUEzQ1ksb0NBQVk7dUJBQVosWUFBWTtJQUR4QixJQUFBLG1CQUFVLEdBQUU7R0FDQSxZQUFZLENBMkN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnbm9kZTpjcnlwdG8nO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgQ3JlYXRlT3JkZXJQYXlsb2FkLCBPcmRlclN0YXR1cyB9IGZyb20gJy4uL3R5cGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvcmRlcnM6IFJlY29yZDxzdHJpbmcsIE9yZGVyPiA9IHt9O1xuXG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLm9yZGVycyk7XG4gIH1cblxuICBmaW5kQnlJZChvcmRlcklkOiBzdHJpbmcpOiBPcmRlciB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJzW29yZGVySWRdO1xuICB9XG5cbiAgY3JlYXRlKGRhdGE6IENyZWF0ZU9yZGVyUGF5bG9hZCkge1xuICAgIGNvbnN0IGlkID0gcmFuZG9tVVVJRCgpIGFzIHN0cmluZztcbiAgICBjb25zdCBvcmRlcjogT3JkZXIgPSB7XG4gICAgICBpZCxcbiAgICAgIC4uLmRhdGEsXG4gICAgICBzdGF0dXNIaXN0b3J5OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb21tZW50OiAnJyxcbiAgICAgICAgICBzdGF0dXM6IE9yZGVyU3RhdHVzLk9wZW4sXG4gICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgdGhpcy5vcmRlcnNbaWRdID0gb3JkZXI7XG5cbiAgICByZXR1cm4gb3JkZXI7XG4gIH1cblxuICAvLyBUT0RPIGFkZCAgdHlwZVxuICB1cGRhdGUob3JkZXJJZDogc3RyaW5nLCBkYXRhOiBPcmRlcikge1xuICAgIGNvbnN0IG9yZGVyID0gdGhpcy5maW5kQnlJZChvcmRlcklkKTtcblxuICAgIGlmICghb3JkZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT3JkZXIgZG9lcyBub3QgZXhpc3QuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5vcmRlcnNbb3JkZXJJZF0gPSB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgaWQ6IG9yZGVySWQsXG4gICAgfTtcbiAgfVxufVxuIl19