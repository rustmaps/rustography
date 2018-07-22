import React from 'react'
import { Home, Profile} from 'containers'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`

`

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Container>
    </Router>
  )
}

export default Routes
