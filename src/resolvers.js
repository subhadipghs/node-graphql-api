module.exports = {
  Query: {
    health: (parent, args, ctx, ...rest) => {
      return {
        message: "server is running",
        uptime: process.uptime(),
        success: true
      }
    }
  }
}