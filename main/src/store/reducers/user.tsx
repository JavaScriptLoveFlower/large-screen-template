import { AnyAction } from 'redux'

import Cookie from 'js-cookie'
import {
  SET_TOKEN,
  SET_USERINFO
} from '../activeTypes'
import {
  InterUser
} from '../model/IUser'

const initialState: InterUser = {
  userInfo: {},
  token: '2121'
}

export default (state: InterUser = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.token }
    case SET_USERINFO:
      // eslint-disable-next-line no-case-declarations
      const token = Cookie.get('USER_TOKEN') as string
      // eslint-disable-next-line no-case-declarations
      const obj = {
        userInfo: { ...state.userInfo, ...action.userInfo },
        token
      }
      return { ...state, ...obj }
    default:
      return state
  }
}
