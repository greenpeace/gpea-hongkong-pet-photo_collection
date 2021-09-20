module.exports = {
  env: {
    // USER_AUTH_KEY: process.env.USER_AUTH_KEY,
    USER_URL: {},
    G_SHEET: `https://gsheet-toolkit.small-service.gpeastasia.org/v1/db`,
    CLOUDINARY_API: `https://api.cloudinary.com/v1_1/gpea/image/upload`,
    CLOUDINARY_PRESET: `wugp5bjn`,
    NAV: [
      { LABEL: '主頁', VALUE: '/', HREF: '/', REF: '/' },
      {
        LABEL: '序言',
        VALUE: 'introduction',
        HREF: '/introduction',
        REF: 'introduction',
      },
      { LABEL: '比賽評審', VALUE: 'judges', HREF: '/judges', REF: 'judges' },
      { LABEL: '比賽詳情', VALUE: 'rules', HREF: '/rules', REF: 'rules' },
      {
        LABEL: '與大師同攝',
        VALUE: 'photowalk',
        HREF: '/photowalk',
        REF: 'photowalk',
      },
    ],
    CATEGORY: [
      {
        LABEL: '全部',
        VALUE: 'All',
        HREF: '/tag/all',
        SLUG: 'all',
        REF: 'All',
      },
      {
        LABEL: '大嶼風景',
        VALUE: '大嶼風景',
        HREF: '/tag/lantauLandscape',
        SLUG: 'lantauLandscape',
        REF: 'LantauLandscape',
      },
      {
        LABEL: '大嶼生態',
        VALUE: '大嶼生態',
        HREF: '/tag/lantauEcology',
        SLUG: 'lantauEcology',
        REF: 'LantauEcology',
      },
    ],
    UPLOAD_CATEGORY: [
      {
        LABEL: '大嶼風景',
        VALUE: '大嶼風景',
        HREF: 'lantauLandscape',
        SLUG: 'lantauLandscape',
        REF: 'LantauLandscape',
      },
      {
        LABEL: '大嶼生態',
        VALUE: '大嶼生態',
        HREF: 'lantauEcology',
        SLUG: 'lantauEcology',
        REF: 'LantauEcology',
      },
    ],
  },
  basePath:
    process.env.NODE_ENV === 'production' ? '/app/photo-collection' : '',
  trailingSlash: true,
  exportPathMap: async () => ({
    '/': { page: '/' },
    '/introduction': { page: '/introductino' },
    '/judges': { page: '/judges' },
    '/photowalk': { page: '/photowalk' },
    '/rules': { page: '/rules' },
    '/upload': { page: '/upload' },
  }),
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return `${process.env.BUILD_ID}_${new Date().getTime()}`
    } else {
      return `next_${new Date().getTime()}`
    }
  },
}
