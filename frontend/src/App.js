import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Notes from './pages/Notes';
import Note from './pages/Note';

function App() {
  let notespage = (
    <React.Fragment>
      <div className="container dark">
        <div className="app">
          <Header />
          <Notes />
        </div>
      </div>
    </React.Fragment>
  );

  let singlenote = (
    <React.Fragment>
      <div className="container dark">
        <div className="app">
          <Note />
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <Router>
      <Routes>
          <Route path="/" element={notespage}/>
          <Route path="/note/:id" element={singlenote} />
      </Routes>
    </Router>
  );
}

export default App;
