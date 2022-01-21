import React from 'react';
import Header from 'Components/Header';
import './App.scss';

interface IProps {
  name: string;
  age: number;
}

function App(props: IProps) {
  const { name, age } = props;
  return (
    <div className='app'>
      <Header />
      <span>{`测试`}</span>
    </div>
  );
}

export default App;
