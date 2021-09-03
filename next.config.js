module.exports = {
  env: {
    // USER_AUTH_KEY: process.env.USER_AUTH_KEY,
    USER_URL: {},
    NAV: [
      {LABEL: '本會簡介', VALUE: '', HREF: '', REF: '' },
      {LABEL: '我們的工作', VALUE: '', HREF: '', REF: '' },
      {LABEL: '一起行動', VALUE: '', HREF: '', HREF: '', REF: '' }
    ],
    CATEGORY: [
      {LABEL: '生物多樣性', VALUE: 'biodiversity', HREF: 'biodiversity', REF: 'biodiversity' },
      {LABEL: '風景', VALUE: 'landscape', HREF: 'landscape', REF: 'landscape' },
      {LABEL: '生態', VALUE: 'ecology', HREF: 'ecology', HREF: 'ecology', REF: 'ecology' },
      {LABEL: '城市', VALUE: 'city', HREF: 'city', REF: 'city' },
      {LABEL: '動物', VALUE: 'wildlife', HREF: 'wildlife', REF: 'wildlife' },
      {LABEL: '植物', VALUE: 'plants', HREF: 'plants', REF: 'plants' },
      {LABEL: '手機組', VALUE: 'mobile', HREF: 'mobile', REF: 'mobile' },
    ],
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
