import './index.sass';
import React, { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    console.log('---1111')
    const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example