import { FC, useEffect, useState } from 'react';

interface Props {
  skills: string[];
}

export const Skills: FC<Props> = ({ skills }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 1800);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
