"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
let UsersService = class UsersService {
    users;
    constructor() {
        this.users = {};
    }
    findOne(name) {
        for (const id in this.users) {
            if (this.users[id].name === name) {
                return this.users[id];
            }
        }
        return undefined;
    }
    createOne({ name, password }) {
        const id = (0, node_crypto_1.randomUUID)();
        const newUser = { id, name, password };
        this.users[id] = newUser;
        return newUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBQzVDLDZDQUF5QztBQUlsQyxJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFZO0lBQ04sS0FBSyxDQUF1QjtJQUU3QztRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixLQUFLLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUNqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBUTtRQUNoQyxNQUFNLEVBQUUsR0FBRyxJQUFBLHdCQUFVLEdBQUUsQ0FBQztRQUN4QixNQUFNLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFFdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7UUFFekIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUE7QUF4Qlksb0NBQVk7dUJBQVosWUFBWTtJQUR4QixJQUFBLG1CQUFVLEdBQUU7R0FDQSxZQUFZLENBd0J4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnbm9kZTpjcnlwdG8nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHVzZXJzOiBSZWNvcmQ8c3RyaW5nLCBVc2VyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVzZXJzID0ge307XG4gIH1cblxuICBmaW5kT25lKG5hbWU6IHN0cmluZyk6IFVzZXIgfCB1bmRlZmluZWQge1xuICAgIGZvciAoY29uc3QgaWQgaW4gdGhpcy51c2Vycykge1xuICAgICAgaWYgKHRoaXMudXNlcnNbaWRdLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcnNbaWRdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY3JlYXRlT25lKHsgbmFtZSwgcGFzc3dvcmQgfTogVXNlcik6IFVzZXIge1xuICAgIGNvbnN0IGlkID0gcmFuZG9tVVVJRCgpO1xuICAgIGNvbnN0IG5ld1VzZXIgPSB7IGlkLCBuYW1lLCBwYXNzd29yZCB9O1xuXG4gICAgdGhpcy51c2Vyc1tpZF0gPSBuZXdVc2VyO1xuXG4gICAgcmV0dXJuIG5ld1VzZXI7XG4gIH1cbn1cbiJdfQ==