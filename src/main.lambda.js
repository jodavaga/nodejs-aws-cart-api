"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
exports.getDbCredentials = getDbCredentials;
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const client_secrets_manager_1 = require("@aws-sdk/client-secrets-manager");
const app_module_1 = require("./app.module");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const cart_entity_1 = require("./cart/models/cart.entity");
const cart_item_entity_1 = require("./cart/models/cart-item.entity");
let server;
async function bootstrapServer() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return (0, serverless_express_1.default)({ app: expressApp });
}
async function getDbCredentials() {
    const client = new client_secrets_manager_1.SecretsManagerClient({});
    const command = new client_secrets_manager_1.GetSecretValueCommand({
        SecretId: process.env.DB_SECRET_ARN,
    });
    const response = await client.send(command);
    const creds = JSON.parse(response.SecretString);
    const config = {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 5432),
        username: creds.username,
        password: creds.password,
        database: process.env.DB_NAME || 'cartdb',
        entities: [cart_entity_1.Cart, cart_item_entity_1.CartItem],
        synchronize: true,
        ssl: false,
    };
    console.log('DB CONFIG', {
        host: config.host,
        port: config.port,
        username: config.username,
        database: config.database,
        ssl: config.ssl,
        pass: config.password,
    });
    return config;
}
const handler = async (event, context, callback) => {
    server = server ?? (await bootstrapServer());
    return server(event, context, callback);
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5sYW1iZGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmxhbWJkYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUF1QkEsNENBK0JDO0FBdERELDRCQUEwQjtBQUMxQix1Q0FBMkM7QUFDM0MsNEVBR3lDO0FBQ3pDLDZDQUF5QztBQUV6QyxvRkFBMkQ7QUFDM0QsMkRBQWlEO0FBQ2pELHFFQUEwRDtBQUUxRCxJQUFJLE1BQWUsQ0FBQztBQUVwQixLQUFLLFVBQVUsZUFBZTtJQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLGtCQUFXLENBQUMsTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQztJQUNoRCxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakIsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFakIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RELE9BQU8sSUFBQSw0QkFBaUIsRUFBQyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFFTSxLQUFLLFVBQVUsZ0JBQWdCO0lBQ3BDLE1BQU0sTUFBTSxHQUFHLElBQUksNkNBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUMsTUFBTSxPQUFPLEdBQUcsSUFBSSw4Q0FBcUIsQ0FBQztRQUN4QyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFjO0tBQ3JDLENBQUMsQ0FBQztJQUNILE1BQU0sUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFhLENBQUMsQ0FBQztJQUVqRCxNQUFNLE1BQU0sR0FBRztRQUNiLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQVE7UUFDMUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDekMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1FBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtRQUN4QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksUUFBUTtRQUN6QyxRQUFRLEVBQUUsQ0FBQyxrQkFBSSxFQUFFLDJCQUFRLENBQUM7UUFDMUIsV0FBVyxFQUFFLElBQUk7UUFDakIsR0FBRyxFQUFFLEtBQUs7S0FDWCxDQUFDO0lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7UUFDdkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBQ2pCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7UUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1FBQ3pCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztRQUNmLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtLQUN0QixDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRU0sTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUMxQixLQUFVLEVBQ1YsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsRUFBRTtJQUNGLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDN0MsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUM7QUFQVyxRQUFBLE9BQU8sV0FPbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHtcbiAgU2VjcmV0c01hbmFnZXJDbGllbnQsXG4gIEdldFNlY3JldFZhbHVlQ29tbWFuZCxcbn0gZnJvbSAnQGF3cy1zZGsvY2xpZW50LXNlY3JldHMtbWFuYWdlcic7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuaW1wb3J0IHsgSGFuZGxlciwgQ29udGV4dCwgQ2FsbGJhY2sgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCBzZXJ2ZXJsZXNzRXhwcmVzcyBmcm9tICdAdmVuZGlhL3NlcnZlcmxlc3MtZXhwcmVzcyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi9jYXJ0L21vZGVscy9jYXJ0LmVudGl0eSc7XG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJy4vY2FydC9tb2RlbHMvY2FydC1pdGVtLmVudGl0eSc7XG5cbmxldCBzZXJ2ZXI6IEhhbmRsZXI7XG5cbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcFNlcnZlcigpIHtcbiAgY29uc3QgYXBwID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlKEFwcE1vZHVsZSk7XG4gIGFwcC5lbmFibGVDb3JzKCk7XG4gIGF3YWl0IGFwcC5pbml0KCk7XG5cbiAgY29uc3QgZXhwcmVzc0FwcCA9IGFwcC5nZXRIdHRwQWRhcHRlcigpLmdldEluc3RhbmNlKCk7XG4gIHJldHVybiBzZXJ2ZXJsZXNzRXhwcmVzcyh7IGFwcDogZXhwcmVzc0FwcCB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERiQ3JlZGVudGlhbHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBTZWNyZXRzTWFuYWdlckNsaWVudCh7fSk7XG4gIGNvbnN0IGNvbW1hbmQgPSBuZXcgR2V0U2VjcmV0VmFsdWVDb21tYW5kKHtcbiAgICBTZWNyZXRJZDogcHJvY2Vzcy5lbnYuREJfU0VDUkVUX0FSTiEsXG4gIH0pO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5zZW5kKGNvbW1hbmQpO1xuXG4gIGNvbnN0IGNyZWRzID0gSlNPTi5wYXJzZShyZXNwb25zZS5TZWNyZXRTdHJpbmchKTtcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgdHlwZTogJ3Bvc3RncmVzJyxcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NUISxcbiAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuREJfUE9SVCB8fCA1NDMyKSxcbiAgICB1c2VybmFtZTogY3JlZHMudXNlcm5hbWUsXG4gICAgcGFzc3dvcmQ6IGNyZWRzLnBhc3N3b3JkLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FIHx8ICdjYXJ0ZGInLFxuICAgIGVudGl0aWVzOiBbQ2FydCwgQ2FydEl0ZW1dLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgIHNzbDogZmFsc2UsXG4gIH07XG5cbiAgY29uc29sZS5sb2coJ0RCIENPTkZJRycsIHtcbiAgICBob3N0OiBjb25maWcuaG9zdCxcbiAgICBwb3J0OiBjb25maWcucG9ydCxcbiAgICB1c2VybmFtZTogY29uZmlnLnVzZXJuYW1lLFxuICAgIGRhdGFiYXNlOiBjb25maWcuZGF0YWJhc2UsXG4gICAgc3NsOiBjb25maWcuc3NsLFxuICAgIHBhc3M6IGNvbmZpZy5wYXNzd29yZCxcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoXG4gIGV2ZW50OiBhbnksXG4gIGNvbnRleHQ6IENvbnRleHQsXG4gIGNhbGxiYWNrOiBDYWxsYmFjayxcbikgPT4ge1xuICBzZXJ2ZXIgPSBzZXJ2ZXIgPz8gKGF3YWl0IGJvb3RzdHJhcFNlcnZlcigpKTtcbiAgcmV0dXJuIHNlcnZlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spO1xufTtcbiJdfQ==