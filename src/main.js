"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const helmet_1 = __importDefault(require("helmet"));
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('APP_PORT') || 4000;
    app.enableCors({
        origin: (req, callback) => callback(null, true),
    });
    app.use((0, helmet_1.default)());
    await app.listen(port, () => {
        console.log('App is running on %s port', port);
    });
}
bootstrap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1Q0FBMkM7QUFFM0Msb0RBQTRCO0FBRTVCLDZDQUF5QztBQUN6QywyQ0FBK0M7QUFFL0MsS0FBSyxVQUFVLFNBQVM7SUFDdEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxrQkFBVyxDQUFDLE1BQU0sQ0FBQyxzQkFBUyxDQUFDLENBQUM7SUFFaEQsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBYSxDQUFDLENBQUM7SUFFN0MsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUM7SUFFbkQsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUNiLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0tBQ2hELENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxnQkFBTSxHQUFFLENBQUMsQ0FBQztJQUVsQixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNELFNBQVMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUpO1xuXG4gIGNvbnN0IGNvbmZpZ1NlcnZpY2UgPSBhcHAuZ2V0KENvbmZpZ1NlcnZpY2UpO1xuXG4gIGNvbnN0IHBvcnQgPSBjb25maWdTZXJ2aWNlLmdldCgnQVBQX1BPUlQnKSB8fCA0MDAwO1xuXG4gIGFwcC5lbmFibGVDb3JzKHtcbiAgICBvcmlnaW46IChyZXEsIGNhbGxiYWNrKSA9PiBjYWxsYmFjayhudWxsLCB0cnVlKSxcbiAgfSk7XG4gIGFwcC51c2UoaGVsbWV0KCkpO1xuXG4gIGF3YWl0IGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdBcHAgaXMgcnVubmluZyBvbiAlcyBwb3J0JywgcG9ydCk7XG4gIH0pO1xufVxuYm9vdHN0cmFwKCk7XG4iXX0=