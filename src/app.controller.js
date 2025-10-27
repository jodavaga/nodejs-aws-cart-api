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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const auth_1 = require("./auth");
let AppController = class AppController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    healthCheck() {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'OK',
        };
    }
    // TODO ADD validation
    register(body) {
        return this.authService.register(body);
    }
    async login(req) {
        if (!req.user)
            throw new common_1.UnauthorizedException('User not found');
        const token = this.authService.login(req.user, 'basic');
        return token;
    }
    async getProfile(req) {
        return {
            user: req.user,
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(['', 'ping'])
], AppController.prototype, "healthCheck", null);
__decorate([
    (0, common_1.Post)('api/auth/register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED)
    // TODO ADD validation
    ,
    __param(0, (0, common_1.Body)())
], AppController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(auth_1.LocalAuthGuard),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('api/auth/login'),
    __param(0, (0, common_1.Request)())
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(auth_1.BasicAuthGuard),
    (0, common_1.Get)('api/profile'),
    __param(0, (0, common_1.Request)())
], AppController.prototype, "getProfile", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FVd0I7QUFDeEIsaUNBS2dCO0FBS1QsSUFBTSxhQUFhLEdBQW5CLE1BQU0sYUFBYTtJQUNKO0lBQXBCLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUdoRCxXQUFXO1FBQ1QsT0FBTztZQUNMLFVBQVUsRUFBRSxtQkFBVSxDQUFDLEVBQUU7WUFDekIsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUtELEFBREEsc0JBQXNCO0lBQ3RCLFFBQVEsQ0FBUyxJQUFVO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUtLLEFBQU4sS0FBSyxDQUFDLEtBQUssQ0FBWSxHQUFlO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTtZQUFFLE1BQU0sSUFBSSw4QkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFeEQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBSUssQUFBTixLQUFLLENBQUMsVUFBVSxDQUFZLEdBQWU7UUFDekMsT0FBTztZQUNMLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtTQUNmLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQW5DWSxzQ0FBYTtBQUl4QjtJQURDLElBQUEsWUFBRyxFQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dEQU1qQjtBQUtEO0lBSEMsSUFBQSxhQUFJLEVBQUMsbUJBQW1CLENBQUM7SUFDekIsSUFBQSxpQkFBUSxFQUFDLG1CQUFVLENBQUMsT0FBTyxDQUFDO0lBQzdCLHNCQUFzQjs7SUFDWixXQUFBLElBQUEsYUFBSSxHQUFFLENBQUE7NkNBRWY7QUFLSztJQUhMLElBQUEsa0JBQVMsRUFBQyxxQkFBYyxDQUFDO0lBQ3pCLElBQUEsaUJBQVEsRUFBQyxHQUFHLENBQUM7SUFDYixJQUFBLGFBQUksRUFBQyxnQkFBZ0IsQ0FBQztJQUNWLFdBQUEsSUFBQSxnQkFBTyxHQUFFLENBQUE7MENBS3JCO0FBSUs7SUFGTCxJQUFBLGtCQUFTLEVBQUMscUJBQWMsQ0FBQztJQUN6QixJQUFBLFlBQUcsRUFBQyxhQUFhLENBQUM7SUFDRCxXQUFBLElBQUEsZ0JBQU8sR0FBRSxDQUFBOytDQUkxQjt3QkFsQ1UsYUFBYTtJQUR6QixJQUFBLG1CQUFVLEdBQUU7R0FDQSxhQUFhLENBbUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRyb2xsZXIsXG4gIEdldCxcbiAgUmVxdWVzdCxcbiAgUG9zdCxcbiAgVXNlR3VhcmRzLFxuICBIdHRwU3RhdHVzLFxuICBCb2R5LFxuICBIdHRwQ29kZSxcbiAgVW5hdXRob3JpemVkRXhjZXB0aW9uLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQge1xuICBMb2NhbEF1dGhHdWFyZCxcbiAgQXV0aFNlcnZpY2UsXG4gIC8vIEp3dEF1dGhHdWFyZCxcbiAgQmFzaWNBdXRoR3VhcmQsXG59IGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2Vycyc7XG5pbXBvcnQgeyBBcHBSZXF1ZXN0IH0gZnJvbSAnLi9zaGFyZWQnO1xuXG5AQ29udHJvbGxlcigpXG5leHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIEBHZXQoWycnLCAncGluZyddKVxuICBoZWFsdGhDaGVjaygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzQ29kZTogSHR0cFN0YXR1cy5PSyxcbiAgICAgIG1lc3NhZ2U6ICdPSycsXG4gICAgfTtcbiAgfVxuXG4gIEBQb3N0KCdhcGkvYXV0aC9yZWdpc3RlcicpXG4gIEBIdHRwQ29kZShIdHRwU3RhdHVzLkNSRUFURUQpXG4gIC8vIFRPRE8gQUREIHZhbGlkYXRpb25cbiAgcmVnaXN0ZXIoQEJvZHkoKSBib2R5OiBVc2VyKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIoYm9keSk7XG4gIH1cblxuICBAVXNlR3VhcmRzKExvY2FsQXV0aEd1YXJkKVxuICBASHR0cENvZGUoMjAwKVxuICBAUG9zdCgnYXBpL2F1dGgvbG9naW4nKVxuICBhc3luYyBsb2dpbihAUmVxdWVzdCgpIHJlcTogQXBwUmVxdWVzdCkge1xuICAgIGlmICghcmVxLnVzZXIpIHRocm93IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oJ1VzZXIgbm90IGZvdW5kJyk7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHJlcS51c2VyLCAnYmFzaWMnKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIEBVc2VHdWFyZHMoQmFzaWNBdXRoR3VhcmQpXG4gIEBHZXQoJ2FwaS9wcm9maWxlJylcbiAgYXN5bmMgZ2V0UHJvZmlsZShAUmVxdWVzdCgpIHJlcTogQXBwUmVxdWVzdCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiByZXEudXNlcixcbiAgICB9O1xuICB9XG59XG4iXX0=