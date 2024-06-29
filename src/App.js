import React from 'react';
import TodoList from './components/TodoList';
import image from '../src/images/BlacktoDolistBackground.jpg'

export default function App() {
  const myStyle = {
    backgroundImage: `url(${image})`,
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundSize: "cover",
    textAlign: "center",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
  };

  return (
    <div style={myStyle}>
      <TodoList/>
    </div>
  );
}
