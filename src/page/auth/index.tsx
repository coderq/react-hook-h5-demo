import './index.sass';
import React from 'react';
import { getExistsByMobile } from 'api/security'
import Form from 'component/Form';
import FormItem from 'component/Form/Item'
import Input from 'component/Form/Input';
import Agreement from 'component/Form/Agreement'
import Button from 'component/Form/Button';
import Logo from './component/logo'
const errorDefault = {
  mobile: '',
  otp: ''
}
const AuthPage = () => {
  const [ mobile, setMobile ] = React.useState('')
  const [ step, setStep ] = React.useState(1)
  const [ error, setError ] = React.useState(errorDefault)
  
  async function handleNext() {
    console.log('----step', step)
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
    <div className="body">
      <Logo />
      <Form className="auth">
        <FormItem label="auth.form.mobile.label" error={error.mobile}>
          <Input icon="mobile" prefix="+91" placeholder="auth.form.mobile.placeholder" onChange={handleChange('mobile')} />
        </FormItem>
        <FormItem>
          <Agreement
            label="auth.form.agreement.label"
            href="auth.form.agreement.href"
            link="/agreement"
          />
        </FormItem>
        <FormItem>
          <Button onClick={handleNext} label="auth.form.button.next"/>
        </FormItem>
      </Form>
    </div>
  </div>
}

export default AuthPage;