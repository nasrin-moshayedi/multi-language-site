import React from 'react'
import { withTranslation } from 'react-i18next'
import { Trans } from 'react-i18next';

class ThankYou extends React.Component {
  render() {
    return (
        <div>
          <Trans i18nKey='thankYou.label'/>
        </div>
    )
  }
};

export default withTranslation()(ThankYou)
