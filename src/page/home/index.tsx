import React from 'react';
import {
  useDispatch,
  useState,
} from 'store/user'
import {
  User
} from 'store/user/type'
import './index.sass'

const HomePage = () => {
  const userDispatch = useDispatch()
  const user = useState()

  React.useEffect(() => {
    console.log('----use', user)
    if (!user) {
      const initUser: User = {
        id: '' + 1,
        name: { first: 'yongqiang', last: 'zhang' },
        gender: 1,
        age: 33
      }
      console.log('---initUser', initUser)
      userDispatch({ type: 'UPDATE', payload: initUser })
    }
  })

  return user ? <div className="pg pg-home">
    <div>id: {user.id}</div>
    <div>name: {user.name.first + ' ' + user.name.last}</div>
    <div>gender: {user.gender}</div>
    <div>age: {user.age}</div>
  </div>: <div></div>
}

export default HomePage;