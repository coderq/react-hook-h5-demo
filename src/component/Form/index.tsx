import './index.sass';
import React from 'react';
import cx from 'classnames';
import { FormProps } from 'component/Form/type';

const Form = (props:FormProps) => {
  return <div className={cx('form', props.className)}>
    {props.children}
  </div>
}

export default Form