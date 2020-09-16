import { isSignedIn } from 'firebase/authentication';
import React from 'react';
import { Auth } from 'routes/Auth';
import { Private } from 'routes/Private'
import './App.less'


function App() {
  return (isSignedIn() ? <Private /> : <Auth />);
}

export default App;
