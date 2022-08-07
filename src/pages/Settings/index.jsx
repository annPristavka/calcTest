import React from 'react'

import { PageLayout } from '../../layouts/index'

import Loader from '../../components/Loader/index'

import { Card, Heading } from './components'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Heading id="welcome">Hello!</Heading>
        <Loader />
      </Card>
    </PageLayout>
  )
}
