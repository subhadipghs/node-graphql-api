module.exports = {
  Query: {
    health: (parent, args, ctx) => {
      return {
        message: "Okay",
        uptime: process.uptime(),
        success: true
      }
    }
  },
  Mutation: {
    createHealth: (parent, args, ctx) => {
      // what to do that ?
      let arr;
      arr.push({
        ...args
      });
      console.log(arr);
    }
  }
}