import React from 'react';
import './App.css';
import LoginMember from './components/LoginRegister/LoginMember';
import RegisterMember from './components/LoginRegister/RegisterMember';
import LoginManager from './components/LoginRegister/LoginManager';
import RegisterManager from './components/LoginRegister/RegisterManager';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/MainPage'; // Corrected import
import EditeProfile from './components/EditeProfile/EditeProfile';
import ManagerDetail from './components/ManagerDetail/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hisroty_main from './components/History/History_Main';
import Ecommerce from './components/Ecommerce/ecommerce';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/loginMember" element={<LoginMember />} />
          <Route path="/registerMember" element={<RegisterMember />} />
          <Route path="/loginManager" element={<LoginManager />} />
          <Route path="/registerManager" element={<RegisterManager />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/editeProfile" element={<EditeProfile />} />
          <Route path="/managerdetail" element={<ManagerDetail />} />
          <Route path="/history" element={<Hisroty_main/>} />
          <Route path="/ecommerce" element={<Ecommerce/>} />
          {/* Default route */}
          <Route path="*" element={<MainPage/>} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;