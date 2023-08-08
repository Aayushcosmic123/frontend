import React, {useEffect, useState, useContext} from 'react'
import LinkBox from '../components/LinkBox'
import UserHeader from '../components/UserHeader'
import {toast} from 'react-toastify'
import UserContext from '../context/userContext'

const dashboard = () => {

  const [data, setData] = useState({});
  const {setUserData} = useContext(UserContext);

  useEffect(()=>{
    if(!localStorage.getItem('LinkSpectrumToken')) return window.location.href = "/login";
    fetch('https://linkspectrum-backend.onrender.com/data/dashboard', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem('LinkSpectrumToken')
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.status==='error') return toast.error('Error happened');
      setData(data.userData);
      setUserData(data.userData);
      localStorage.setItem('userHandle', data.userData.handle);
      // toast.success(data.message)
    }).catch(err=>{
      console.log(err);
    })
  }, [])

  return (
    <>
      <div className='bg-orange-100'>
        <UserHeader />
        <main>
          <section className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
            <LinkBox lbTitle="Links" lbNumber={data.links} lbSvg="url" lbTheme="red"/>
            <LinkBox lbTitle="Profile Visits" lbNumber="523" lbSvg="growth" lbTheme="blue"/>
            <LinkBox lbTitle="Total Clicks" lbNumber={(data.links)*10} lbSvg="email" lbTheme="red"/>
            <LinkBox lbTitle="Followers Growth" lbNumber="30%" lbSvg="ig" lbTheme="blue"/>
          </section>
          <section>

          </section>
        </main>
      </div>
    </>
  )
}

export default dashboard