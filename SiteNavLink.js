import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseLink from '../../../shared/links/BaseLink'

const SiteNavLink = styled(BaseLink)`
  padding: 1.25rem;
  color: white;
  margin: 0;
  display: block;
  text-decoration: none;

  :hover {
    background: #555;
  }
`

SiteNavLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default SiteNavLink
