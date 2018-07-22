import React from 'react'
import PropTypes from 'prop-types'
import { Post } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from 'actions/user'
import { Container, Row, Col, Jumbotron, Button, Alert, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components'


class User extends React.Component {
  constructor(props) {
    super(props);
    this.props.get_user()
    }

  render() {
    return (
      <div>
        <p>shit</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
