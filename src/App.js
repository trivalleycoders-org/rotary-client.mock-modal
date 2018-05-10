import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Members from './Members'
import AddMemberDialog from './AddMemberDialog'
import EditMemberDialog from './EditMemberDialog'
import { green } from './logger'

import * as actions from './store/actions'
import * as selectors from './store/selectors'
import Button from 'material-ui/Button'


class App extends Component {
  state = {
    AddMemberDialog: false,
    EditMemberDialog: false,
  }

  handleOpenClick = (e, memberId, formName) => {
    // green('props', this.props)
    // green('actionCreators', actions)
    // green('handleOpenClick: id', memberId);
    this.props.setOpenMemberId(memberId)
    this.setState({
      [formName]: true
    })
  }

  handleClose = (formName) => {
    this.props.unsetOpenMemberId()
    this.setState({
      [formName]: false
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
            variant='raised'
            color='primary'
            onClick={() => this.handleOpenClick(null, null, 'AddMemberDialog')}
          >
          Add Member
        </Button>
        <Members handleOpenClick={this.handleOpenClick} />
        <EditMemberDialog
          open={this.state.EditMemberDialog}
          handleClose={this.handleClose}
        />
        <AddMemberDialog
          open={this.state.AddMemberDialog}
          handleClose={this.handleClose}
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // addMemberDialogOpen: selectors.isFormOpen(state, 'AddMemberDialog')
  }
}

export default connect(mapStateToProps, actions)(App)
