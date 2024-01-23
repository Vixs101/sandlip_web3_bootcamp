import React from "react";
import Navbar from "./components/navbar.jsx";
import Form from "./components/form.jsx";


function App() {

  return (
    <>
      <Navbar/>
      <div className=" flex w-full h-96 items-center justify-center bg-gray-50">
        <Form/>
      </div>
    </>
  )
}

export default App
