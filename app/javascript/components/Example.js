import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Layout = styled.div`
  background: grey;
  padding: 40px;
`

class Example extends React.Component {
  render() {
    return <Layout>Example: {this.props.value}</Layout>
  }
}

Example.propTypes = {
  value: PropTypes.string,
}

export default Example
