'use client'
import { useState, useEffect } from 'react'
import { FaUser, FaEnvelope, FaHome, FaPhoneAlt } from 'react-icons/fa'

export default function CardUserHero() {
    const [tab, setTab] = useState('info')
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3002/api/user/1')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.log(error))
    }, [])

    if (!user) return <div>Loading...</div>

    return (
        <div className='UserGeneratorHero flex flex-col items-center justify-center p-5 gap-6'>
            <div className='w-1/2'>
                <img
                    className='rounded-full max-w-full h-auto object-cover mx-auto ring-2 ring-[#5142FC]'
                    src={user.user_image_url}
                    alt="User avatar"
                />
            </div>


            <div className='bg-white bg-opacity-20 rounded-lg shadow-lg p-4'>
                <p className=''>{user.name}</p>
            </div>

            
            <div className='px-6 py-4 text-black'>
                <div className='space-x-2'>
                    <button onClick={() => setTab('info')}><FaUser /></button>
                    <button onClick={() => setTab('email')}><FaEnvelope /></button>
                    <button onClick={() => setTab('address')}><FaHome /></button>
                    <button onClick={() => setTab('phone')}><FaPhoneAlt /></button>
                </div>
                {tab === 'info' && <p>{user.name}</p>}
                {tab === 'email' && <p>{user.email}</p>}
                {tab === 'address' && <p>{user.address}</p>}
                {tab === 'phone' && <p>{user.phone_number}</p>}
            </div>
        </div>



    )
}
