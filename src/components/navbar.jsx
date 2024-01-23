import React from "react";


async function ConnectWallet() {
  console.log('connecting wallet....')
}

function Navbar() {
    return(
        <nav className='flex justify-between items-center py-3 px-4 bg-gray-200'>
        <div>
          <h1 className='name text-2xl md:text-4xl'> Elijah Victor</h1>
        </div>
        <button onClick={ConnectWallet} className=" w-2/5 md:w-auto p-3 rounded-xl bg-black text-white text-sm md:text-lg "> Connect Wallet</button>
      </nav>
    )
}

export default Navbar;
