const initialState = {
  minute: '0',
  sms: '0',
  internet: '0',
  social: {
    vk: false,
    instagram: false,
    tiktok: false,
    facebook: false
  }
}

export const rateReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_MINUTE':
      return {...state, minute: action.payload}
    case 'SET_SMS':
      return {...state, sms: action.payload}
    case 'SET_INTERNET':
      return {...state, internet: action.payload}
    case 'SET_VK':
      return {...state, social: {...state.social, vk: action.payload}}
    case 'SET_TIKTOK':
      return {...state, social: {...state.social, tiktok: action.payload}}
    case 'SET_INSTAGRAM':
      return {...state, social: {...state.social, instagram: action.payload}}
    case 'SET_FACEBOOK':
      return {...state, social: {...state.social, facebook: action.payload}}
    case 'DEACTIVE_SOCIAL':
      return {...state, social: action.payload}
    default:
      return state
  }
}
