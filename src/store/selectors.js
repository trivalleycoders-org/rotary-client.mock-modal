import { yellow } from '../logger'

export const getOpenMemberId = (state) => {
  const r = state.openMemberId || null

  return r
}

export const getOneMember = (state, id) => {
  yellow('getOneMember: state', state)
  yellow('getOneMember: id', id)
  const r = state.members.filter(m => m.id === id) || null
  yellow('getOneMember: r', r)
  return r[0] || {}
}

export const getAllMembers = (state) => {
  // yellow('getAllMembers: state', state)
  const r = state.members || null
  // yellow('getAllMembers: r', r)
  return r
}

export const getMemberEditing = (state) => {
  return state.memberEditing || {}
}

// export const isFormOpen = (state, name) => {
//   const r = state.formsOpen.memberDialog || null
//   yellow(`form-selectors.isFormOpen: ${name}:`, r)
//   return r
// }
