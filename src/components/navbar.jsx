import React from "react";
import { useEffect,useState } from "react";
import Web3 from "web3";



function Navbar() {
  const [account, setAccount] = useState("");
  const [walletBalance, setWalletBalance] = useState("");

  async function loadWalletInfo() {
    try {
      // checking if metamask is installed
      if (window.ethereum) {
        
        // use metamask provider and request account acesss
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // retrieve current account
        const currentAccounts = accounts[0];
        setAccount(currentAccounts);

        // retrieve balance
        const weiBalance = await web3.eth.getBalance(currentAccounts);
        const etherBalance = web3.utils.fromWei(weiBalance, 'ether');
        setWalletBalance(etherBalance); 
  
      }
      else {
        console.log('Metamask is not installed');
      }
    }

    catch {
      console.log("error fetching wallet information")
    };
  };

  return(
    <nav className='flex justify-between items-center py-3 px-4 bg-gray-200'>
      <div>
        <h1 className='name text-2xl md:text-4xl'> Elijah Victor</h1>
      </div>
      <div className="flex flex-col gap-2 w-2/5 md:w-auto font-semibold">
        <button onClick={loadWalletInfo} className="w-full md:w-auto p-3 rounded-xl bg-black text-white text-sm md:text-lg "> Connect Wallet</button>
        <h3 className="">Wallet Balance $: {walletBalance} </h3>
      </div>
      </nav>
    )
}

export default Navbar;
