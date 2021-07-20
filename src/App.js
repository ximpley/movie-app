import React from 'react';

function Food({fav}){
  return <h1>I love {fav} </h1>
}

function App() {
  return (
    <div>
      <h1>안녕하세요</h1>
      <Food fav = "김치" />
    </div>
  );

}

export default App;
