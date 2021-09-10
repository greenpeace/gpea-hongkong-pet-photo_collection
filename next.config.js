module.exports = {
  env: {
    // USER_AUTH_KEY: process.env.USER_AUTH_KEY,
    USER_URL: {},
    G_SHEET: `https://gsheet-toolkit.small-service.gpeastasia.org/v1/db`,
    CLOUDINARY_API: `https://api.cloudinary.com/v1_1/idt/image/upload`,
    CLOUDINARY_PRESET: `quocv8wr`,
    NAV: [
      // {LABEL: '本會簡介', VALUE: '', HREF: '', REF: '' },
      // {LABEL: '我們的工作', VALUE: '', HREF: '', REF: '' },
      // {LABEL: '一起行動', VALUE: '', HREF: '', REF: '' },
      { LABEL: '主頁', VALUE: '/', HREF: '/', REF: '/' },
      { LABEL: '比賽評審', VALUE: 'judges', HREF: '/judges', REF: 'judges' },
      { LABEL: '比賽詳情', VALUE: 'rules', HREF: '/rules', REF: 'rules' },
      {
        LABEL: 'Photowalk',
        VALUE: 'photowalk',
        HREF: '/photowalk',
        REF: 'photowalk',
      },
    ],
    CATEGORY: [
      {
        LABEL: '大嶼風景',
        VALUE: 'LantauLandscape',
        HREF: 'LantauLandscape',
        REF: 'LantauLandscape',
      },
      {
        LABEL: '大嶼生態',
        VALUE: 'LantauEcology',
        HREF: 'LantauEcology',
        REF: 'LantauEcology',
      },
    ],
  },
  basePath:
    process.env.NODE_ENV === 'production' ? '/app/photo-collection' : '',
  // exportPathMap: function () {
  //   return {
  //     '/': { page: '/' },
  //   };
  // },
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return `${process.env.BUILD_ID}_${new Date().getTime()}`
    } else {
      return `next_${new Date().getTime()}`
    }
  },
}
