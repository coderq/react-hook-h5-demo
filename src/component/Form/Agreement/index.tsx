import './index.sass';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AgreementProps } from 'component/Form/type';
import cx from 'classnames'

const Agreement = (props:AgreementProps) => {
  const { t } = useTranslation()
  const [ checked, setChecked ] = React.useState(false)

  function handleClick() {
    const newValue = !checked
    if (props.onChange) {
      props.onChange(newValue)
    }
    setChecked(newValue)
  }

  return <div className="form-agreement">
    <span className={cx("form-agreement-checkbox", checked ? 'checked' : '')} onClick={handleClick}></span>
    <span className="form-agreement-label"
      dangerouslySetInnerHTML={{
        __html: t(props.label, { href: t(props.href), link: props.link })
      }}
    />
  </div>
}

export default Agreement;