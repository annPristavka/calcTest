import React from 'react'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '../../constants/index'
import { PageLayoutHeader } from '../../layouts/index'
import {
  H1,
  HeaderContainer,
  Nav,
  Link,
} from './components'

const Header = () => {
  return (
    <PageLayoutHeader>
      <HeaderContainer>
        <div>
          <H1>Calculator App</H1>
        </div>
        <Nav>
          <Link to={HOME_PAGE_ROUTE}>Home</Link>
          <Link to={SETTINGS_PAGE_ROUTE}>Settings</Link>
        </Nav>
      </HeaderContainer>
    </PageLayoutHeader>
  )
}

export default Header
