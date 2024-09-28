import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <div className="language-selector flex justify-end p-4">
        <button 
          onClick={() => changeLanguage('en')} 
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('es')} 
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Español
        </button>
      </div>
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <RobotList />
      )}
    </div>
  );
};

export default App;