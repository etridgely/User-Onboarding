import React from 'react';
import './App.css';
import UserForm from './components/Form';

function App() {
  return (
    <div className="App">
     <h2>Welcome to Russian Not-Hacked!</h2>
     <p>We keep data sekure, komrade.  Very sekure.</p>
     <p className="russian">Американский учитель никогда не узнает. Я достиг трех.</p>
     <UserForm />
     <audio name="USSR" src="/user-onboarding/src/music/National Anthem of USSR.mp3" loop="false" hidden="true" autostart="true"></audio>
    </div>
  );
}

export default App;
