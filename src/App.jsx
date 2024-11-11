import Test from "./components/test";
import Toggle from "./components/toggle";
import React from "react";



function App() {

  return (
   <>
   <Test>
   <Test.Trigger />
   <Toggle>
      <Toggle.Active />
      <Toggle.ToggleButton />
      <Toggle.Inactive />
   </Toggle>
</Test>
   
   
   </>
  )
}

export default App
