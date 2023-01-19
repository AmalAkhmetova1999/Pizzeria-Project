import MenuAdd from "./MenuAdd";
import React, { useState } from "react";

const defaultLanguage = "br";
export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem("lang");

    return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
  });

  React.useEffect(() => {
    window.localStorage.setItem("lang", language);
  }, [language]);

  return (
    <div className="App">
      <LanguageContext.Provider value={[language, setLanguage]}>
        <MenuAdd />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;