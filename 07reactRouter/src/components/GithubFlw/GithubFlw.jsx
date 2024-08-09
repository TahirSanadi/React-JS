import React, { useEffect, useState } from 'react'

function github() {
  useEffect(() => {
    const [data, setData] =useState([])
    fetch('https://api.github.com/users/TahirSanadi')
    .then(response=>response.json)
    .then(data=>{
      console.log(data);
      setData(data)
    })
  }, [])
  
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
        Github Followers:{data.followers}
    </div>
  )
}

export default github