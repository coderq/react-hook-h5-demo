import './index.sass';
import React from 'react';
import { useHistory } from "react-router-dom";

const HeaderBar = () => {
  const history = useHistory()
  return <div className="nav header">
      <div className="btn btn-return" onClick={() => history.goBack()}></div>
    </div>
}

export default HeaderBar;