import React, { createContext, useState } from 'react';

// Creating a TestContext using React's Context API
const TestContext = createContext();

const Test = ({ children }) => {
  const [active, setActive] = useState(false); // State to manage active/inactive

  return (
    <TestContext.Provider value={{ active, setActive }}>
      {children}
    </TestContext.Provider>
  );
};

// Creating a Trigger component for TestContext
const Trigger = () => {
  const { active, setActive } = React.useContext(TestContext);
  return (
    <button onClick={() => setActive(!active)}>
      
    </button>
  );
};

// Assign Trigger component as a property of Test
Test.Trigger = Trigger;

export default Test;
