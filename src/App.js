import React from 'react';
import './style.css';
import Create from './components/Create';
import Read from './components/Read';
function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div>
        <Read />
      </div>
    </div>
  );
}

export default App;
