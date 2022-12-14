import React from 'react'
import { ethers } from 'ethers'

const ABI = [
    "function allowance(address owner, address spender) external view returns (uint256)"
];

const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/2BfT7PmhS5UzBkXbguSIXm5Nk3myk0ey`)

const returnAllowanceValue = async (contractAddress,ownerAddress,spenderAddress) => {

    const contract = new ethers.Contract(contractAddress, ABI, provider)
    const value = await contract.allowance(ownerAddress,spenderAddress);
    console.log(`Value : ${value}\n`)
    alert(`Allowance value : ${value}\n`)
    
}

const Allowance = () => {

  return (
    <div  className='flex flex-col justify-center items-center space-y-4' >
        <label className='text-2xl'>Allowance</label>
        <input type="text" id="contractAddress" placeholder="Contract Address" className='h-8 w-1/3 bg-slate-100 rounded-md text-xl text-black' />
        <input type="text" id="ownerAddress" placeholder="Owner Address" className='h-8 w-1/3 bg-slate-100 rounded-md text-xl text-black'/>
        <input type="text" id="spenderAddress" placeholder="Spender Address" className='h-8 w-1/3 bg-slate-100 rounded-md text-xl text-black'/>
        <button
        className='h-8 w-1/3 bg-slate-400 hover:bg-slate-700 hover:text-slate-100 rounded-md text-xl text-black' 
        onClick={() => {
            const contractAddress = document.getElementById('contractAddress').value
            const ownerAddress = document.getElementById('ownerAddress').value
            const spenderAddress = document.getElementById('spenderAddress').value
            returnAllowanceValue(contractAddress,ownerAddress,spenderAddress)
        }}>
            Submit
        </button>
    </div>
  )
}

export default Allowance