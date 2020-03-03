import './index.sass';
import React from 'react';
import { TimerProps } from 'component/Timer/type';

const STATUS = {
  START: 1,
  PAUSE: 2,
  STOP: 3
}
const Timer = (props:TimerProps, ref: React.Ref<unknown>) => {
  const [ value, setValue ] = React.useState(props.start)
  console.log('----3333', value)
  const [ , setStatus ] = React.useState(STATUS.STOP)
  const diffPerSecond = (props.end - props.start) / props.second
  
  let handler: NodeJS.Timeout = null
  function timer() {
    const newValue = ~~(value + diffPerSecond)
    console.log('----timer', value, newValue)
    if (newValue <= props.end) return

    setValue(newValue)
    setTimeout(timer, 1000)
  }

  function start() {
    setStatus(STATUS.START)
    handler = setTimeout(timer, 1000)
  }
  
  function pause() {
    setStatus(STATUS.PAUSE)
    clearTimeout(handler)
  }
  
  function reset() {
    setValue(props.start)
    start()
  }
  
  React.useImperativeHandle(ref, () => ({
    start, pause, reset
  }));

  return <div className="timer">
    {props.prefix ? <span>{props.prefix}</span> : ''}
    <span>{value}</span>
    {props.suffix ? <span>{props.suffix}</span> : ''}
  </div>
}

export default React.forwardRef(Timer);