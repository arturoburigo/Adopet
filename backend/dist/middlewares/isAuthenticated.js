"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.sendStatus(401).end();
    }
    const [, token] = authToken.split(" ");
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        console.error("JWT secret is not defined.");
        return response.sendStatus(500).end();
    }
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, jwtSecret);
        request.user_id = sub;
        console.log(sub);
        return next();
    }
    catch (error) {
        return response.sendStatus(401).end();
    }
}
