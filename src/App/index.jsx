import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import { ContainerApp } from './components'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '../constants/index'

import Loader from '../components/Loader/index'

const HomePage = lazy(() => import('../pages/Home/index'))

const Settings = lazy(() =>
  import('../pages/Settings/index'),
)

export default () => (
  <ContainerApp>
    <Header />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          exact
          path={HOME_PAGE_ROUTE}
          element={<HomePage />}
        />
        <Route
          exact
          path={SETTINGS_PAGE_ROUTE}
          element={<Settings />}
        />
      </Routes>
    </Suspense>
  </ContainerApp>
)
