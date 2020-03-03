import './index.sass';
import React from 'react';
import { FormItemProps } from 'component/Form/type';
import { useTranslation } from 'react-i18next';

const FormItem = (props:FormItemProps) => {
  const { t } = useTranslation()
  return <div className="form-item">
    {props.label ? <div className="label">{t(props.label)}</div> : ''}
    {props.children}
  </div>
}

export default FormItem;