import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorList from './components/DoctorList';
import NurseList from './components/NurseList';
import {Header} from './components/header/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/nurses" element={<NurseList />} />
        </Routes>
    </Router>
  );
};

export default App;
