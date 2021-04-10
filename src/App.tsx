import React from 'react';
import CustomComponent from './components/CustomComponent'
import LikeButton from './components/LikeButton'

function App() {
  return (
    <div className="App">
      <CustomComponent message={'Custom Component'} />
      <LikeButton />
    </div>
  );
}

export default App;
