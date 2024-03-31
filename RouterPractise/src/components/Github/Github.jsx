import React, { useEffect ,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//     const [data, setData] = useState([])

//     useEffect(() => {
//    fetch('https://api.github.com/users/alka345')
//    .then(response => response.json())
//    .then(data =>{
//     console.log(data);
//     setData(data)
//    })
//     },[])

  return (
    <div className='w-full h-screen bg-black text-white flex justify-center items-center' >

      <img 
      src={data.avatar_url} alt="GitProfile" width={300} />
      <br />
      <span>Github Followers :{data.followers}</span>
    </div>
  )
}

export default Github
export const githubLoaderInfo = async() => {
const response = await fetch('https://api.github.com/users/alka345');
return response.json()
}