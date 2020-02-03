import React from 'react'
import {Trans} from 'react-i18next'
import { withTranslation } from 'react-i18next'

class Hello extends React.Component {
  render() {
    return (
        <div>
          <Trans i18nKey='hello.label'/>
        </div>
    )
  }
}
export default withTranslation()(Hello);
