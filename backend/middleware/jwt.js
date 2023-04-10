import createError from "../utils/createError.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) return next(createError(401, "You Are Not Authenticated!"));

  jwt.verify(token, process.env.JWT_TOKEN, async (err, payload) => {
    if (err) return next(403, "Your Token Not Valid!");

    req.userId = payload.id;
    req.isSeller = payload.isSeller;

    next();
  });
};
