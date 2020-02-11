import _ from 'lodash'

import {API} from '../src/redux/services'
import apmConst from '../src/common/constants'

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

    it('회원 로그인 성공', async () => {
      const data = await API.loginUserInfo(loginData(id, pass))
      console.log('###Data:', data)
      // if (apmConst.TESTLOGGING || data.result === false) {
      //   console.log('###로그인-Data:', loginData(id))
      //   console.log('회원 로그인 성공', data)
      //   console.log('회원 로그인 성공', data.value)
      // }
      expect(data.result).toBe(true)
    })
  })

userFn('enliple', 11111111)
