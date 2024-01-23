import React from "react"


function Navbar() {
    return(
        <nav className='flex justify-between items-center py-3 px-4 bg-gray-200'>
        <div>
          <h1 className='name text-2xl md:text-4xl'> Elijah Victor</h1>
        </div>
        <button className=" w-2/5 md:w-auto p-3 rounded-xl bg-black text-white text-sm md:text-lg hover:text-xl"> Connect Wallet</button>
      </nav>
    )
}

export default Navbar;
