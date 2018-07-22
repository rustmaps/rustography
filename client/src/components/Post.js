import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink } from 'reactstrap';

const PostContainer = styled.div`
-webkit-box-shadow: 0px 0px 79px -16px rgba(0,0,0,0.51);
-moz-box-shadow: 0px 0px 79px -16px rgba(0,0,0,0.51);
box-shadow: 0px 0px 79px -16px rgba(0,0,0,0.51);
`
const Picture = styled.img`
  width: 100%;

`
const Title = styled.h6`
  padding-top: 10px
`


class Post extends React.Component {

  formatNumber(num){
    return num > 999 ? (num/1000).toFixed(0) + 'K' : num
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody body outline color="warning">
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
          <img width="100%" src={this.props.img} alt="Card image cap" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    )
    /*return (
      <PostContainer className={'post-container'}>
        <Picture src={this.props.img} />
        <Container>
          <Row>
            <Col xs="12">
              <Title>{this.props.title}</Title>
            </Col>
          </Row>

          <Row>
            <Col xs="8">
              <p>{this.props.creator}</p>
            </Col>
            <Col xs="4">
              <p>{this.formatNumber(this.props.likes)}<i className={"fas fa-thumbs-up"}></i></p>
            </Col>

          </Row>
        </Container>
      </PostContainer>
    )*/
  }

}

export default Post
