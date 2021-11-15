/* file_name : next.config.js
 * desc : next.js 공통 설정파일.
         각 프로젝트 내의 env 파일이라고 보면 됨.
 */
const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants')
  
  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  
    const env = {
      RESTURL_SPEAKERS: (() => {
        if (isDev) return 'http://localhost:4000/speakers'
        if (isProd) {
          return 'https://www.siliconvalley-codecamp.com/rest/speakers/ps'
        }
        if (isStaging) return 'http://localhost:11639'
        return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      RESTURL_SESSIONS: (() => {
        if (isDev) return 'http://localhost:4000/sessions'
        if (isProd) return 'https://www.siliconvalley-codecamp.com/rest/sessions'
        if (isStaging) return 'http://localhost:11639'
        return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      testKey: 'config 파일 설정값 확인용도',
      GITHUB_ID: 'deerox999',
      GITHUB_SECRET: 'nextLevel',
      NEXTAUTH_URL: 'http://localhost:3000',
      MONGODB_URI: 'mongodb+srv://deerox999:deerox999@deerox1.tus0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    }
    // next.config.js object
    return {
      env,
    }
  }