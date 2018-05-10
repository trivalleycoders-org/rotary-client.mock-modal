import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import * as selectors from './store/selectors'
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import { green } from './logger'

const Members = ({ members, handleOpenClick }) => {
  // green('members', members)
  const rows = members.map((m, index) => {
    return (
      <TableRow key={m.id} onClick={event => handleOpenClick(event, m.id, 'EditMemberDialog')}>
        <TableCell>{m.firstName}</TableCell>
        <TableCell>{m.phone}</TableCell>
        <TableCell>{m.email}</TableCell>
      </TableRow>
    )
  })
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </Paper>
  )
}


const mapStateToProps = (state) => {
  return {
    members: selectors.getAllMembers(state)
  }
}
// export default Members
export default connect(mapStateToProps, actions)(Members)
