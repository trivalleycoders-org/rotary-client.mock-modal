import { orange } from '../logger'

export const setOpenMemberId = (id) => {
  // orange('setOpenMemberId', id)
  return ({
    type: 'setOpenMemberId',
    payload: { id }
  })
}

export const unsetOpenMemberId = () => {
  return {
    type: 'unsetOpenMemberId',
  }
}

export const addMember = (member) => {
  return ({
    type: 'addMember',
    payload: { member }}
  )
}

export const setMemberEditing = (member) => {
  orange('setMemberEditing: member', member)
  return ({
    type: 'setMemberEditing',
    payload: {
      member,
    }
  })
}

export const unsetMemberEditing = () => {
  orange('unsetMemberEditing')
  return ({
    type: 'unsetMemberEditing',
  })
}

export const updateMemberEditing = (field, value) => {
  // orange('updateMemberEditing', `${field}: ${value}`)
  return ({
    type: 'updateMemberEditing',
    payload: {
      field,
      value,
    }
  })
}

// export const setFormOpen = (name, open) => {
//   orange('setFormOpen: name:open', `${name}:${open}`)
//   // orange('actionSetFormOpen: actionAppSetFormOpen', actionAppSetFormOpen)
//   return ({
//     type: 'actionAppSetFormOpen',
//     payload: {
//       name,
//       open,
//     },
//   })
//
// }
