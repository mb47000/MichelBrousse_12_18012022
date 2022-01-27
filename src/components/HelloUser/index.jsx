import { Hello, FirstName, Message } from './style.js'

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

export default HelloUser
