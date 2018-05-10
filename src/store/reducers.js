import { combineReducers } from 'redux'
import { merge, without, append } from 'ramda'
import { blue } from '../logger'

const initialMembers = [
  {
    id: '100',
    firstName: 'Joe',
    phone: '000-000-0000',
    email: 'joe@joe.com',
  },
  {
    id: '101',
    firstName: 'Ann',
    phone: '111-111-1111',
    email: 'ann@ann.com',
  }
]

export const members = ( state = initialMembers, { type, payload }) => {
  switch (type) {
    case 'addMember':
      // return append({ id: payload.id, firstName: payload.firstName }, state)
      return append(payload.member, state)
    default:
      return state
  }
}

export const openMemberId = ( state = '', { type, payload }) => {
  switch (type) {
    case 'setOpenMemberId':
      // return merge(state, { openMemberId: payload.id })
      return payload.id
    case 'unsetOpenMemberId':
      return ''
    default:
      return state
  }
}

// export const formsOpen = (state = {}, { type, payload }) => {
//   switch (type) {
//     case 'actionAppSetFormOpen':
//       return merge(state, { [payload.name]: payload.open })
//     default:
//       return state
//   }
// }

export const memberEditing = (state = {}, { type, payload }) => {
  // blue('memberEditing: state', state)
  blue('memberEditing: payload', payload)
  switch (type) {
    case 'setMemberEditing':
      return payload.member
    case 'unsetMemberEditing':
      return {}
    case 'updateMemberEditing':
      return merge(state, { [payload.field]: payload.value })
    default:
      return state
  }
}



const rootReducer = combineReducers({
  members,
  openMemberId,
  // formsOpen,
  memberEditing,
})

export default rootReducer
