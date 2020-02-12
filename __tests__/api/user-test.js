import _ from 'lodash'

import {API} from '../../src/common/services'
import apmConst from '../../src/common/constants'

const loginData = (userId, userPw) => ({
  userId,
  userPw,
})

const userFn = (id, pass) =>
  describe(`사용자 API 테스트 - ID: ${id}`, () => {
    // it('회원 로그인 실패(없는 아이디)', async () => {
    //   const data = await API.loginUserInfo(loginData('xxxx', '1111'))
    //   if (data.result) {
    //     console.log('회원 로그인 실패(없는 아이디)', data)
    //   }
    //   expect(data.result).toBe(false)
    // })
    it('회원 로그인 실패(없는 아이디)', async () => {
      const response = await API.loginUserInfo(loginData('xxxx', '1111'))
      if (apmConst.TESTLOGGING || response.result) {
        console.log('회원 로그인 실패(없는 아이디)', response)
      }
      expect(response.result).toBe(false)
    })

    it('회원 로그인 성공', async () => {
      const response = await API.loginUserInfo(loginData(id, pass))
      if (apmConst.TESTLOGGING || response.result === false) {
        console.log('회원 로그인 성공', response)
      }
      expect(response.result).toBe(true)
    })
  })

userFn('enliple', '11111111')
