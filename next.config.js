module.exports = {
  env: {
    // USER_AUTH_KEY: process.env.USER_AUTH_KEY,
    USER_URL: {},
  },
  exportPathMap: function () {
    return {
        '/': { page: '/' }
    }
  },
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return `${process.env.BUILD_ID}_${new Date().getTime()}`;
    } else {
      return `next_${new Date().getTime()}`;
    }
  },
}
