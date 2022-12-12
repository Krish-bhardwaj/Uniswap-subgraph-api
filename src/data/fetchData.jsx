// fetch data from api using axios and return data
import axios from 'axios';

const api = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3"

query = `
{
    pools(orderBy:totalValueLockedUSD orderDirection:desc){
      id,
      token0{
        name,
        symbol,
        txCount
      }
      token1{
        name,
        symbol,
        txCount
      }
      totalValueLockedUSD
    }
}
`;

const fetchData = async () => {
    const response = await axios.post(api, {query: query})
    return response.data.data;
}

export default fetchData;