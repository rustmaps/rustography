import React from 'react'
import PropTypes from 'prop-types'
import { Post } from '../components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PostActions from '../actions/posts'
import { Container, Row, Col, Jumbotron, Button, Alert, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components'

const HomeContainer = styled.div`
`
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.props.get_posts()
    this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

  componentDidMount(){
  }

  populatePosts() {
    console.log(this.props.posts);

    return this.props.posts.map((post) => {
      console.log(post);
      return (
        <Col xs="12" md="4" className={'hvr-grow'}>
          <Post
            title={post.title}
            img={post.img}
            creator={post.creator}
            likes={post.likes} />
        </Col>
      )
    })
  }

  render() {
    console.log(this);
    return (
      <HomeContainer className={'home'}>
      <div>
        <Jumbotron style={{textAlign: 'center'}}>
          <h1 className="display-3">Join our rolling community server</h1>
          <p className="lead">Featuring the top voted maps from the community, every week.</p>
          <hr className="my-2" />
          <p>Rustography US Rolling | Rustography US Main</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
        </div>



        <Container>
        <Row>
        <Col md="9">

        <div style={{paddingBottom: 20}}>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>Link</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>

          <h3>
            Top Voted Maps This Week
          </h3> <hr />
          <Row>
            { this.populatePosts() }
          </Row><hr />
          <h3>
            Top Voted Maps This Week
          </h3> <hr />
          <Row>
            { this.populatePosts() }
          </Row><hr />
          <h3>
            Top Voted Maps This Week
          </h3> <hr />
          <Row>
            { this.populatePosts() }
          </Row>
          </Col>

          <Col md="3">

          <ListGroup style={{marginTop:121}}>
            <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
          </ListGroup>


          </Col></Row>
        </Container>

      </HomeContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
