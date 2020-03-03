import './index.sass';
import React from 'react';
import HeaderBar from 'component/HeaderBar'
import { getExistsByMobile } from 'api/security'
import Form from 'component/Form';
import FormItem from 'component/Form/Item'
import Input from 'component/Form/Input';
import Button from 'component/Form/Button';
import Timer from 'component/Timer'
import Logo from './component/logo'
import { RefTimer } from 'component/Timer/type'

const errorDefault = {
  mobile: '',
  otp: ''
}
const AuthPage = () => {
  const refTimer:RefTimer = React.useRef(null)
  const [ mobile, setMobile ] = React.useState('')
  const [ step, setStep ] = React.useState(1)
  const [ error, setError ] = React.useState(errorDefault)
  
  async function handleNext() {
    setError(errorDefault)
    switch(step) {
      case 1: {
        const { succ, key } = await getCaptcha()
        if (succ) {
          setStep(2)
        } else {
          setError({
            ...errorDefault,
            mobile: `error.backend.${key}`
          })
        }
        break
      }
      case 2: {
        break
      }
      default:
    }
  }
  
  async function getCaptcha() {
    const res = await getExistsByMobile({ mobile })
    console.log('----res', res)
    // if (res.code)
    return { succ: true, key: '' }
  }
  
  function handleChange(key:String) {
    return (event:any) => {
      switch (key) {
        case 'mobile': {
          setMobile(event.target.value)
          break
        }
      }
    }
  }

  return <div className="pg auth">
    <HeaderBar />
    <div className="body">
      <Logo />
      <Form className="auth">
        <FormItem label="auth.form.captcha.label" error={error.otp}>
          <div className="form-input-with-timer">
            <Input onChange={handleChange('otp')} placeholder="auth.form.captcha.placeholder" />
            <Timer ref={refTimer} start={60} end={0} second={60} suffix="s" />
          </div>
        </FormItem>
        <FormItem>
          <Button onClick={handleNext} label="auth.form.button.next"/>
        </FormItem>
      </Form>
    </div>
  </div>
}

export default AuthPage;