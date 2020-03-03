import './index.sass';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputProps } from 'component/Form/type';
import cx from 'classnames'

const Input = (props:InputProps) => {
  const { t } = useTranslation()
  return <div className="form-input">
    {props.icon ? <span className={cx('icon', `icon-${props.icon}`)}></span> : ''}
    <div className="form-input-inner">
      {props.prefix ? <span className="form-input-prefix">{props.prefix}</span> : ''}
      <input
        className={props.prefix ? 'form-input-with-prefix' : ''}
        placeholder={t(props.placeholder)}
        onChange={props.onChange}
      />
    </div>
  </div>
}

export default Input;