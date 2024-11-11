import { createContext, useContext, useState } from 'react';

// Creating a ToggleContext using React's Context API
const ToggleContext = createContext();

const Toggle = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <ToggleContext.Provider value={{ active, setActive }}>
      {children}
    </ToggleContext.Provider>
  );
};


const ToggleButton = () => {
  const { active, setActive } = useContext(ToggleContext);
  return (
    <button onClick={() => setActive(!active)}>
      {active ? 'Close' : 'Open'}
    </button>
  );
};


const Active = () => {
  const { active } = useContext(ToggleContext);
  return active ? <div>🟢 Active</div> : null;
};


const Inactive = () => {
  const { active } = useContext(ToggleContext);
  return !active ? <div>🔴 Inactive</div> : null;
};

// Attaching components to Toggle for compound usage
Toggle.ToggleButton = ToggleButton;
Toggle.Active = Active;
Toggle.Inactive = Inactive;

export default Toggle;
