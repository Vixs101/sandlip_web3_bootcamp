import React from "react";
import Navbar from "./components/navbar.jsx"


function App() {

  return (
    <>
      <Navbar/>
      <div className=" flex w-full h-96 items-center justify-center bg-gray-50">
        <div className="flex flex-col gap-3 w-66 md:w-1/3 border-2 border-black rounded-xl py-3 px-3 bg-gray-200 shadow-lg" >
          <form action="submit" className="flex flex-col gap-4">
            {/* receivers wallet */}
            <div className="flex justify-between bg-gray-50 items-center rounded-lg px-2">
              <input type="text" id="address" name="walletAddress" placeholder="Wallet Address" className="p-2 bg-transparent w-10/12 outline-none"/>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6 ">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
              </svg>
            </div>

            {/* amount */}
            <div className="flex justify-between bg-gray-50 items-center rounded-lg px-2">
              <input type="amount" id="amount" name="amount" placeholder="Amount" className="p-2 bg-transparent w-10/12 outline-none"></input>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </div>
          </form>
          <button className=" place-self-center mt-8 border-2 w-36 p-3 rounded-xl bg-black text-white text-lg"> Send</button>
        </div>
      </div>
    </>
  )
}

export default App
