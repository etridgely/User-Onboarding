import React from 'react';
import './App.css';
import UserForm from './components/Form';

function App() {
  return (
    <div className="App">
     <h2>Welcome to Russian Not-Hacked</h2>
     <p>We keep data sekure, komrade.  Very sekure.</p>
     <p className="russian">Американский учитель никогда не узнает. Я достиг трех.</p>
     <UserForm />
    </div>
  );
}

export default App;
