import React from 'react'

import { PageLayoutHome } from '../../layouts/index'

import Loader from '../../components/Loader/index'
import Display from '../../components/Display/Display'
import KeyPad from '../../components/KeyPad/KeyPad'
import History from '../../components/History/History'

import { Field, ContainerHistory } from './components'

export default () => {
  return (
    <PageLayoutHome>
      <Field>
        <Display />
        <KeyPad />
      </Field>
      <History>
        <History />
      </History>
    </PageLayoutHome>
  )
}
