import React, { useMemo, useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const showMsg = useMemo(() => `${name} clicou ${count} vezes.`, [count, name]);

  useDocumentTitle(showMsg());

  return (
    <>
      <input type="text" onChange={e => setName(e.target.value)}></input>
      <div>{showMsg()}</div>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </>
  );
};

export default Counter;
