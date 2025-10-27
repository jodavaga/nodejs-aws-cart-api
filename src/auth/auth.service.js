"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    register(payload) {
        const user = this.usersService.findOne(payload.name);
        if (user) {
            throw new common_1.BadRequestException('User with such name already exists');
        }
        const { id: userId } = this.usersService.createOne(payload);
        return { userId };
    }
    validateUser(name, password) {
        const user = this.usersService.findOne(name);
        if (user) {
            return user;
        }
        return this.usersService.createOne({ name, password });
    }
    login(user, type) {
        const LOGIN_MAP = {
            jwt: this.loginJWT,
            basic: this.loginBasic,
            default: this.loginJWT,
        };
        const login = LOGIN_MAP[type];
        return login ? login(user) : LOGIN_MAP.default(user);
    }
    loginJWT(user) {
        const payload = { username: user.name, sub: user.id };
        return {
            token_type: 'Bearer',
            access_token: this.jwtService.sign(payload),
        };
    }
    loginBasic(user) {
        // const payload = { username: user.name, sub: user.id };
        console.log(user);
        function encodeUserToken(user) {
            const { name, password } = user;
            const buf = Buffer.from([name, password].join(':'), 'utf8');
            return buf.toString('base64');
        }
        return {
            token_type: 'Basic',
            access_token: encodeUserToken(user),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUFpRTtBQVcxRCxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0lBRVo7SUFDQTtJQUZWLFlBQ1UsWUFBMEIsRUFDMUIsVUFBc0I7UUFEdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM3QixDQUFDO0lBRUosUUFBUSxDQUFDLE9BQWE7UUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELElBQUksSUFBSSxFQUFFLENBQUM7WUFDVCxNQUFNLElBQUksNEJBQW1CLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBRUQsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZLEVBQUUsUUFBZ0I7UUFDekMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0MsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNULE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQVUsRUFBRSxJQUFpQztRQUNqRCxNQUFNLFNBQVMsR0FBRztZQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN2QixDQUFDO1FBQ0YsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFVO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUV0RCxPQUFPO1lBQ0wsVUFBVSxFQUFFLFFBQVE7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLHlEQUF5RDtRQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxCLFNBQVMsZUFBZSxDQUFDLElBQVU7WUFDakMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDaEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFNUQsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxPQUFPO1lBQ0wsVUFBVSxFQUFFLE9BQU87WUFDbkIsWUFBWSxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUM7U0FDcEMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBL0RZLGtDQUFXO3NCQUFYLFdBQVc7SUFEdkIsSUFBQSxtQkFBVSxHQUFFO0dBQ0EsV0FBVyxDQStEdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWRSZXF1ZXN0RXhjZXB0aW9uLCBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSnd0U2VydmljZSB9IGZyb20gJ0BuZXN0anMvand0JztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4uL3VzZXJzL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXJzL21vZGVscyc7XG4vLyBpbXBvcnQgeyBjb250ZW50U2VjdXJpdHlQb2xpY3kgfSBmcm9tICdoZWxtZXQnO1xudHlwZSBUb2tlblJlc3BvbnNlID0ge1xuICB0b2tlbl90eXBlOiBzdHJpbmc7XG4gIGFjY2Vzc190b2tlbjogc3RyaW5nO1xufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSxcbiAgICBwcml2YXRlIGp3dFNlcnZpY2U6IEp3dFNlcnZpY2UsXG4gICkge31cblxuICByZWdpc3RlcihwYXlsb2FkOiBVc2VyKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMudXNlcnNTZXJ2aWNlLmZpbmRPbmUocGF5bG9hZC5uYW1lKTtcblxuICAgIGlmICh1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEV4Y2VwdGlvbignVXNlciB3aXRoIHN1Y2ggbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgaWQ6IHVzZXJJZCB9ID0gdGhpcy51c2Vyc1NlcnZpY2UuY3JlYXRlT25lKHBheWxvYWQpO1xuICAgIHJldHVybiB7IHVzZXJJZCB9O1xuICB9XG5cbiAgdmFsaWRhdGVVc2VyKG5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFVzZXIge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnVzZXJzU2VydmljZS5maW5kT25lKG5hbWUpO1xuXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVzZXJzU2VydmljZS5jcmVhdGVPbmUoeyBuYW1lLCBwYXNzd29yZCB9KTtcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIsIHR5cGU6ICdqd3QnIHwgJ2Jhc2ljJyB8ICdkZWZhdWx0Jyk6IFRva2VuUmVzcG9uc2Uge1xuICAgIGNvbnN0IExPR0lOX01BUCA9IHtcbiAgICAgIGp3dDogdGhpcy5sb2dpbkpXVCxcbiAgICAgIGJhc2ljOiB0aGlzLmxvZ2luQmFzaWMsXG4gICAgICBkZWZhdWx0OiB0aGlzLmxvZ2luSldULFxuICAgIH07XG4gICAgY29uc3QgbG9naW4gPSBMT0dJTl9NQVBbdHlwZV07XG5cbiAgICByZXR1cm4gbG9naW4gPyBsb2dpbih1c2VyKSA6IExPR0lOX01BUC5kZWZhdWx0KHVzZXIpO1xuICB9XG5cbiAgbG9naW5KV1QodXNlcjogVXNlcikge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7IHVzZXJuYW1lOiB1c2VyLm5hbWUsIHN1YjogdXNlci5pZCB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuX3R5cGU6ICdCZWFyZXInLFxuICAgICAgYWNjZXNzX3Rva2VuOiB0aGlzLmp3dFNlcnZpY2Uuc2lnbihwYXlsb2FkKSxcbiAgICB9O1xuICB9XG5cbiAgbG9naW5CYXNpYyh1c2VyOiBVc2VyKSB7XG4gICAgLy8gY29uc3QgcGF5bG9hZCA9IHsgdXNlcm5hbWU6IHVzZXIubmFtZSwgc3ViOiB1c2VyLmlkIH07XG4gICAgY29uc29sZS5sb2codXNlcik7XG5cbiAgICBmdW5jdGlvbiBlbmNvZGVVc2VyVG9rZW4odXNlcjogVXNlcikge1xuICAgICAgY29uc3QgeyBuYW1lLCBwYXNzd29yZCB9ID0gdXNlcjtcbiAgICAgIGNvbnN0IGJ1ZiA9IEJ1ZmZlci5mcm9tKFtuYW1lLCBwYXNzd29yZF0uam9pbignOicpLCAndXRmOCcpO1xuXG4gICAgICByZXR1cm4gYnVmLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW5fdHlwZTogJ0Jhc2ljJyxcbiAgICAgIGFjY2Vzc190b2tlbjogZW5jb2RlVXNlclRva2VuKHVzZXIpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==