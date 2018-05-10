import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import * as selectors from './store/selectors'
import Dialog, { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { green } from './logger'

let addMembersIndex = 0
const addMembers = [
  {
    id: '103',
    firstName: 'Ken',
    phone: '333-333-3333',
    email: 'ken@ken.com',
  },
  {
    id: '104',
    firstName: 'Cat',
    phone: '444-444-4444',
    email: 'cat@cat.com',
  }
]

const getNewMember = () => {
  const newMember = addMembers[addMembersIndex]
  addMembersIndex++
  return newMember

}

const AddMemberDialog = ({
  setFormOpen,
  openMemberId,
  updateMemberEditing,
  addMember,
  handleClose,
  setOpenMemberId,
  unsetOpenMemberId,
   ...rest
  }) => {
  // green('props', props)
  // green('AddMember: rest', rest)

  return (

    <Dialog {...rest}>
      <DialogTitle id='dt-add-member'>Dialog Title</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Hello, this is the dialog content.
        </DialogContentText>
        <TextField
          type='text'
          label='ID'
          // onChange={handleEditMemberInputChange('firstName', member)}
        />
        <TextField
          type='text'
          label='First Name'
          // onChange={handleEditMemberInputChange('firstName', member)}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose('AddMemberDialog')}>Close</Button>
        <Button onClick={() => addMember(getNewMember())}>Add Member</Button>
      </DialogActions>
    </Dialog>
  )
}


const mapStateToProps = (state) => {
  return {
    openMemberId: selectors.getOpenMemberId(state)
  }
}

export default connect(mapStateToProps, actions)(AddMemberDialog)
