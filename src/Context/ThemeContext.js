import React, { createContext, useState } from "react";


export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState({
    isDark: false,
    light: { bg: "#fff" },
    dark: { bg: "#162447", bg2:'#162449', syntax: '#fff', syntax2: "#e43f5a" },
  });


  const toggle = () => {
    if(theme.isDark === false){
      document.body.style.backgroundColor = "#162447";
    }else {
      document.body.style.backgroundColor = "#f7f7f7";
    }
    setTheme((prevValue) => {
      return {
        ...prevValue,
        isDark: !theme.isDark,
      };
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark: theme.isDark,
        light: theme.light,
        dark: theme.dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
