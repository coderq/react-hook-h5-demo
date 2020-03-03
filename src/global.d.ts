import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AxiosPromise, AxiosResponse } from 'axios'

export interface Props extends React.ComponentProps {
  children?: JSX.Element[] | JSX.Element | React.ReactNode
  className?: string
  ref?: React.RefObject
}

export interface RoutedProps extends Props, RouteComponentProps {}

export type ApiResponse = {
  code: Number,
  data: Any,
  key?: String,
  msg?: String
}
export type ApiFunction = (data: Object) => AxiosPromise<ApiResponse>
