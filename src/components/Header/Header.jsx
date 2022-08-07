import React from 'react'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '../../constants/index'
import { PageLayoutHeader } from '../../layouts/index'
import {
  H1,
  ContainerHeader,
  ContainerNav,
  Link,
} from './components'

const Header = () => {
  return (
    <PageLayoutHeader>
      <ContainerHeader>
        <div>
          <H1>Calculator App</H1>
        </div>
        <ContainerNav>
          <Link to={HOME_PAGE_ROUTE}>Home</Link>
          <Link to={SETTINGS_PAGE_ROUTE}>Settings</Link>
        </ContainerNav>
      </ContainerHeader>
    </PageLayoutHeader>
  )
}

export default Header
