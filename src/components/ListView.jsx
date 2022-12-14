import React from 'react'
import { useQuery, gql } from "@apollo/client";


const POOLS_QUERY = gql`
 {
      pools(orderBy:totalValueLockedUSD orderDirection:desc){
        id,
        token0{
          id,
          name,
          symbol,
        }
        token1{
          id,
          name,
          symbol,
        }
        totalValueLockedUSD,
      }
  }
`;
const ListView = () => {
  const { data, loading, error } = useQuery(POOLS_QUERY);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  return (
    <div className="flex flex-col w-full space-y-3" >
    {
      data.pools.map((pool) => (
        <div key={pool.id}>
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col w-4/6 bg-slate-300 p-4 rounded-xl">
              <div className="flex flex-row items-center">
                <div className="self-start flex-1">
                  <b>ID : </b> {pool.id}
                </div>
                <div className="self-end flex-none">
                  <b>TVL :</b> {pool.totalValueLockedUSD} <b>USD</b>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="self-start flex-1 flex flex-col">
                  <b>Token 0</b>
                  <div><b>Name : </b>{pool.token0.name}</div>
                  <div><b>Symbol : </b>{pool.token0.symbol}</div>
                  <div><b>ID : </b>{pool.token0.id}</div>
                </div>
                <div className="self-end flex-1 flex flex-col">
                  <b>Token 1</b>
                  <div><b>Name : </b>{pool.token1.name}</div>
                  <div><b>Symbol : </b>{pool.token1.symbol}</div>
                  <div><b>ID : </b>{pool.token1.id}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
      )
    }
  </div>
  )
}

export default ListView
