import _ from 'lodash'

const EMAIL_FORMAT = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/i
const PASSWORD_RULE = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,16}$/i
const MOBILE_FORMAT = /^01([0|1|6|7|8|9]+)-?([0-9]{3,4})-?([0-9]{4})$/i

export default {
  numberWithCommas(x) {
    if (!x || isNaN(x)) return x
    let parts = x
      .toString()
      .replace(/,/g, '')
      .split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  },
  removeCommas(x) {
    if (!x || isNaN(x)) return x
    return String(x).replace(/,/g, '')
  },
  parseFloatWtihCommas(x) {
    if (!x || isNaN(x)) return 0
    return parseFloat(String(x).replace(/,/g, ''))
  },
  getCeil(x, pos = 0) {
    if (!x || isNaN(x)) return 0
    return Math.ceil(parseFloat(x) * Math.pow(10, pos)) / Math.pow(10, pos)
  },
  getFloor(x, pos = 0) {
    if (!x || isNaN(x)) return 0
    return Math.floor(parseFloat(x) * Math.pow(10, pos)) / Math.pow(10, pos)
  },
  getRounds(x, pos = 0) {
    if (!x || isNaN(x)) return 0
    return Math.round(parseFloat(x) * Math.pow(10, pos)) / Math.pow(10, pos)
  },
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
  getRandomString(length) {
    return Math.random()
      .toString(36)
      .substr(2, length)
  },
  passwordFormat(val) {
    return val.toString().replace(/./g, '*')
  },
  moneyFilter(val, bDecimal) {
    if (val === undefined || val === null || val === '' || _.isNaN(val)) return '0'
    val = String(val)
    // 소수일 경우
    if (bDecimal) {
      // 시작값이 소수점이라면 맨앞에 0 추가
      if (val.indexOf('.') === 0) {
        val = '0' + val
      }
      const pattern = /^[1-9]{1}[0-9]*$/g
      if (!pattern.test(val)) {
        val = String(val).replace(/[^0-9.]/g, '')
      }
      // 시작값이 연속된 0이라면 한개만 유지하고 나머지 제거
      if (/^[0][0]/.test(val)) {
        val = String(val).substr(1, val.length)
      }
      // 소수일 때
      if (val.indexOf('.') > 0) {
        const dotNum = val.indexOf('.')
        val = val.replace(/[^0-9]/g, '')
        val = val.split('')
        val.splice(dotNum, 0, '.')
        val = val.join('')
      } else {
        // 정수일 때 0으로 시작한다면 0 제거 (값 0은 제외)
        if (/^[0]+/.test(val) && val.length != 1) {
          val = val.replace(/^[0]+/, '')
        }
      }
    } else {
      const pattern = /^[1-9]{1}[0-9]*$/g
      if (!pattern.test(val)) {
        val = String(val).replace(/[^0-9]/g, '')
      }
      // 정수일 때 0으로 시작한다면 0 제거 (값 0은 제외)
      if (/^[0]+/.test(val) && val.length != 1) {
        val = val.replace(/^[0]+/, '')
      }
    }
    return val
  },
  numberFilter(val, bZeroLength) {
    if (val === undefined || val === null || val === '' || _.isNaN(val)) {
      return bZeroLength ? '' : '0'
    }
    val = String(val)
    const pattern = /^[1-9]{1}[0-9]*$/g
    if (!pattern.test(val)) {
      val = String(val).replace(/[^0-9]/g, '')
    }
    return val
  },
  phoneFilter(val) {
    if (val === undefined || val === null) {
      return ''
    }
    val = String(val)
    const pattern = /^[0-9-]$/g
    if (!pattern.test(val)) {
      val = String(val)
        .replace(/--/g, '-')
        .replace(/[^0-9-]/g, '')
    }
    return val
  },
  englishNameFilter(val) {
    if (val === undefined || val === null || val === '') return val
    val = String(val)
    const pattern = /^[A-Za-z ]*$/g
    if (!pattern.test(val)) {
      val = String(val).replace(/[^A-Za-z ]/g, '')
    }
    if (/[ ]{2,}/.test(val)) {
      val = val.replace(/[ ]{2,}/, ' ')
    }
    return val
  },
  dateFormat(val, format) {
    let ddd = val
    if (String(val).indexOf('-') >= 0) {
      ddd = ddd.replace(/-/gi, '/')
    }
    let date = new Date(ddd)

    let years = date.getFullYear()
    let Month = date.getMonth() + 1
    if (Month < 10) {
      Month = '0' + Month
    }
    let days = date.getDate()
    if (days < 10) {
      days = '0' + days
    }
    let hour = date.getHours()
    if (hour < 10) {
      hour = '0' + hour
    }
    let min = date.getMinutes()
    if (min < 10) {
      min = '0' + min
    }
    if (format === undefined) {
      return years + '-' + Month + '-' + days
    } else {
      return years + '-' + Month + '-' + days + ' ' + hour + ':' + min
    }
  },
  isEmail(email) {
    if (!_.isString(email)) {
      return false
    }
    return !!email.match(EMAIL_FORMAT)
  },
  isPassword(password) {
    if (!_.isString(password)) {
      return false
    }
    return !!password.match(PASSWORD_RULE)
  },
  isMobile(mobile) {
    if (!_.isString(mobile)) {
      return false
    }
    return !!mobile.match(MOBILE_FORMAT)
  },
  getEmailId(email) {
    if (email && email.indexOf('@') >= 0) {
      return email.substring(0, email.indexOf('@'))
    }
    return email
  },
  timeCount(second) {
    const strTimeLeft = `${Math.floor(second / 60).toString()}:${second % 60 < 10 ? '0' : ''}${second % 60}`
    return strTimeLeft
  },
}
