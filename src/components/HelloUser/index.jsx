import { Hello, FirstName, Message } from './style.js'
import PropTypes from 'prop-types'
import { Fragment } from 'react'

/**
 * HelloUser component
 * @component
 * @param {string} {userFirstName} The first name of the user.
 */
function HelloUser({ userFirstName }) {
  return (
    <Fragment>
      <Hello>
        Bonjour <FirstName>{userFirstName}</FirstName>
      </Hello>
      <Message>
        Félicitations ! Vous avez explosé vos objectifs hier !&nbsp;👏
      </Message>
    </Fragment>
  )
}

HelloUser.propTypes = {
  userFirstName: PropTypes.string.isRequired,
}

export default HelloUser
