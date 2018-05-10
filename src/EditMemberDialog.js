import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import * as selectors from './store/selectors'
import Dialog, { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { green } from './logger'
import { isEmpty } from 'ramda'

class EditMemberDialog extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    // green('componentDidUpdate: member', this.props.member)
    green('componentDidUpdate: prevProps', prevProps)
    green('componentDidUpdate: prevState', prevState)
    // green('componentDidUpdate: snapshot', snapshot)
    // if (isEmpty(prevProps.member)) {

    if (!prevProps.open) {
      this.props.setMemberEditing(this.props.member)
    }
  }
  handleUpdate = (e) => {
    const field = e.target.name
    const value = e.target.value
    // green('handleUpdate', `${field}: ${value}`)
    this.props.updateMemberEditing(field, value)
  }

  render() {
    // const {addMember, handleClose, member, memberEditing, openMemberId, setFormOpen, setMemberEditing, setOpenMemberId, unsetOpenMemberId, updateMemberEditing, open, ...rest } = this.props
    const {handleClose, member, memberEditing, openMemberId, setMemberEditing,  updateMemberEditing, open } = this.props

    // green('openMemberId', openMemberId)
    // green('EditMember: rest', rest)
    //green('member', member)

    return (

      <Dialog open={open}>
        <DialogTitle id='dt-edit-member'>Edit Member</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ID: {openMemberId}
          </DialogContentText>
          <TextField
            // defaultValue={editingMember.firstName}
            label='First Name'
            name='firstName'
            onChange={(e) => this.handleUpdate(e)}
            type='text'
            value={memberEditing.firstName}
          />
          <TextField
            label='Phone'
            name='phone'
            onChange={(e) => this.handleUpdate(e)}
            type='text'
            value={memberEditing.phone}
          />
          <TextField
            label='Email'
            name='email'
            onChange={(e) => this.handleUpdate(e)}
            type='text'
            value={memberEditing.email}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('EditMemberDialog')}>Close</Button>
        </DialogActions>
      </Dialog>
    )
  }
}


const mapStateToProps = (state) => {
  const id = selectors.getOpenMemberId(state)
  return {
    member: selectors.getOneMember(state, id),
    openMemberId: id,
    memberEditing: selectors.getMemberEditing(state)
  }
}

export default connect(mapStateToProps, actions)(EditMemberDialog)
