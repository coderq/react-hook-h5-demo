import React from 'react'
import { Props } from 'global'

export interface TimerProps extends React.PropsWithRef<Props> {
  prefix?: string
  suffix?: string
  start: number,
  end: number,
  second: number
}

export type RefTimer = React.RefObject<TimerProps>