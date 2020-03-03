import React from 'react'
import { Props } from 'global'

export interface FormProps extends Props {
}

export interface FormItemProps extends Props {
  label?: string
  error?: string
}

export interface InputProps extends Props {
  label?: string
  value?: string
  placeholder?: string
  icon?: string
  prefix?: string
  suffixComponent?: React.Component
  onChange?: (event:React.ChangeEvent<HTMLInputElement>) => void
}

export interface ButtonProps extends Props {
  label?: string
  icon?: string
  onClick?: (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export interface AgreementProps extends Props {
  label?: string
  href?: string
  link?: string
  onChange?: (checked:boolean) => void
}