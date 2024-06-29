import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {

  // const [gif, setGif] = useState('');
  // const [loading, setLoading] =useState(false);
 
  
  // async function fetchData(){
  //   // Loading the UI until the  fetchData function run on UI.
  //   setLoading(true);
  //   // This url need API Key so we fetch the API from environment variable(.env) and give to it. |
  //   // Why random GIF is printing in UI ---> Because below api is random (random?api_key).
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   // fetching url data by axios
  //   // fetching data (const {data}) <-----> from url (await axios.get(url))  ---> Follow Screenshot
  //   const {data} = await axios.get(url);
  //   // fetching End GIF URL path by path  (Follow Screenshot).
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);

  // }

  // // After first re-render it will call the fetchData function.
  // useEffect (() =>{
  //   fetchData();  
  // }, [])
  

  // function clickHandler(){
  //   fetchData(); 
  // }



  const {gif, loading, fetchData} =useGif();




  return (

    <div className='w-1/2  bg-green-400 rounded-lg border border-black 
    flex flex-col items-center gap-y-9 mt-[15px]'>


      <h1 className='mt-[15px] text-2xl underline uppercase font-bold '>A Random Gif</h1>

      {
        loading ? (<Spinner/>) : ( <img src={gif} width="450" />)
      }

     

      <button onClick={() => fetchData()}
        className='w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]'
      >
        Generate
      </button>


    </div>
  )
}

export default Random
