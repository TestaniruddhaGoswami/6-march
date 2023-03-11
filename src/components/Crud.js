import { useState } from "react";

let keyId = 0;

export default function Crud() {
  const [name, setName] = useState('');
  const [out, setOut] = useState([]);

  return (
    <>
      <h1>type in here</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setName('');
        setOut([
          ...out,
          { id: keyId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {out.map(out => (
          <li key={out.id}>{out.name}</li>
        ))}
      </ul>
    </>
  );
}
