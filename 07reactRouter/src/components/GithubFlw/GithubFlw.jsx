import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'
function github() {
  const data= useLoaderData()
  // const [data, setData] =useState([])
  // useEffect(() => {
    
  //   fetch('https://api.github.com/users/TahirSanadi')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data);
  //     setData(data)
  //   })
  // }, [])
  
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt='Git Picture' width={100}/>
    </div>
  )
}

export default github


export const githubInfoLoder = async ()=>{
  const response=await fetch('https://api.github.com/users/TahirSanadi')
  return response.json()
}