import React from 'react'

import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const [search, setSearch] = React.useState('');

    let navigate = useNavigate();

    const routeChange = () => {
        if (search === '') return;
        let path = search;
        navigate(path);
    }

    const routeChangeToAllowance = () => {
        navigate('allowance');
    }

    return (
        <div className="flex justify-center m-4">
                <div className="relative flex  items-stretch w-full">
                    
                    <input className="flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border-gray-600 border-2   m-0 rounded-l-full " placeholder="Enter Pool Address to retrive its result" type='text' value={search} onChange={(e)=>setSearch(e.target.value)} />

                    <button className="btn px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase shadow-md transition duration-150 ease-in-out flex items-center " type="button" id="button-addon2"  onClick={routeChange}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>

                </div>
                    <button className="btn px-6 bg-gray-600 text-white font-medium text-xs leading-tight uppercase shadow-md transition duration-150 ease-in-out flex items-center rounded-r-full border-l-4 border-white " type="button" id="button-addon2"  onClick={routeChangeToAllowance}>
                        Allowance
                    </button>
            </div>
    )
}

export default SearchBar;
