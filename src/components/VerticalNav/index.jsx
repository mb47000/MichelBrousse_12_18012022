import { ReactComponent as YogaIcon } from '../../assets/svg/icon-yoga.svg'
import { ReactComponent as SwimmingIcon } from '../../assets/svg/icon-swim.svg'
import { ReactComponent as BikeIcon } from '../../assets/svg/icon-bike.svg'
import { ReactComponent as LiftIcon } from '../../assets/svg/icon-lift.svg'
import { StyledNav, StyledList, StyledButton } from './style'

export const ProfilNavigation = () => {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <StyledButton>
            <YogaIcon />
          </StyledButton>
        </li>
        <li>
          <StyledButton>
            <SwimmingIcon />
          </StyledButton>
        </li>
        <li>
          <StyledButton>
            <BikeIcon />
          </StyledButton>
        </li>
        <li>
          <StyledButton>
            <LiftIcon />
          </StyledButton>
        </li>
      </StyledList>
    </StyledNav>
  )
}
