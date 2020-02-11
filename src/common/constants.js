const PRODUCTION = false // 배포 버전 여부(개발은 false)
const QASTAGE = false // QA 버전 여부(개발은 false)

const DEV_APIURI = 'http://192.168.1.90:2000'

export default {
  PRODUCTION,
  QASTAGE,
  getApiUri: () => DEV_APIURI,
  TESTLOGGING: true,
}
