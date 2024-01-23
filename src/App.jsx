import React from "react"


function App() {

  return (
    <>
      <nav className='flex justify-between items-center py-3 px-4 bg-gray-200'>
        <div>
          <h1 className='name text-4xl'> Elijah Victor</h1>
        </div>
        <button className="border-2 p-3 rounded-xl bg-black text-white text-lg"> Connect Wallet</button>
      </nav>

      <div className=" flex w-full h-screen mt-auto justify-center bg-gray-50">
        <div className="w-1/3 h-1/3 border-2 border-black py-3 px-3 bg-gray-200" >
          <form action="submit" >
            <input type="text" id="address" name="walletAddress"/>
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
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
            </svg>

            <label for="amount">Amount:</label>
            <input type="amount" id="amount" name="amount"></input>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
