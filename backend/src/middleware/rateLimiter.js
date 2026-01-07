import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // ✅ Disable rate limit in development
    if (process.env.NODE_ENV === "development") {
      return next();
    }

    // 🔓 Skip auth routes
    if (req.path.startsWith("/auth")) {
      return next();
    }

    const identifier =
      req.user?.id ||
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      "anonymous";

    const { success } = await ratelimit.limit(identifier);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests. Please try again later.",
      });
    }

    next();
  } catch (error) {
    console.error("Rate Limit Error:", error);
    next(); // fail open
  }
};

export default rateLimiter;
