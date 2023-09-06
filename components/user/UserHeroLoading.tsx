'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRedo, FaUser, FaEnvelope, FaHome, FaPhoneAlt, FaBriefcase, FaTransgender, FaBirthdayCake, FaGlobeEurope, FaGuitar } from 'react-icons/fa';
export default function CardUserHero() {
    const [tab, setTab] = useState('info');
    const [user, setUser] = useState(null);
    const [x , setX] = useState(0);
    const [y, setY] = useState(0);
    // animation de licon du bouton randomize
    const [isRotating, setIsRotating] = useState(false);
    // get the user data
    useEffect(() => {
        fetch('http://localhost:3002/api/user/1')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.log(error));
    }, [])

    // detect the mousemove and update x and y
    useEffect(() => {
        const handleMouseMove = (e) => {
            setX((e.clientY / window.innerHeight - 0.5) * 40);
            setY((e.clientX / window.innerWidth - 0.5) * -40);
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (!user) return <div className='loader bw'>
        <div className='flow-cross' />
    </div>;

    // Animation settings
    const floatVariants = {
        hidden: { y: -2 },
        show: {
            y: 2,
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: .600
            },
        },
    };



    const handleClick = () => {
        setIsRotating(true);
        setTimeout(() => {
            setIsRotating(false);
        }, 1000);
    };


    return (
        <div

            className='UserGeneratorHero flex flex-col items-center justify-center p-6 gap-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg'
        >
            <motion.div
                variants={floatVariants}
                initial="hidden"
                animate="show"
                className='w-1/2 p-5'
            >
                <img
                    className='rounded-full max-w-full h-auto object-cover mx-auto ring-2 ring-[#5142FC]'
                    src={user.user_image_url}
                    alt="User avatar"
                />
            </motion.div>

            <div className=''>
                <p className='text-2xl font-bold text-center'>{user.name}</p>
            </div>

            <div className='px-6 py-4 text-white space-x-2 flex justify-between'>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('info')}
                >
                    <FaUser />
                </button>
                <button
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('email')}
                >
                    <FaEnvelope />
                </button>
                <button
                    className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('address')}
                >
                    <FaHome />
                </button>
                <button
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('phone')}
                >
                    <FaPhoneAlt />
                </button>
                <button
                    className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('job')}
                >
                    <FaBriefcase />
                </button>
                <button
                    className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('gender')}
                >
                    <FaTransgender />
                </button>
                <button
                    className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('birthday')}
                >
                    <FaBirthdayCake />
                </button>
                <button
                    className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('website')}
                >
                    <FaGlobeEurope />
                </button>
                <button
                    className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('interests')}
                >
                    <FaGuitar />
                </button>
            </div>

            <div className='rounded-lg shadow-lg p-4 m-2 text-center'>
                {tab === 'info' && <p className='text-xl font-semibold'>{user.name}</p>}
                {tab === 'email' && <p className='text-xl font-semibold'>{user.email}</p>}
                {tab === 'address' && <p className='text-xl font-semibold'>{user.address}</p>}
                {tab === 'phone' && <p className='text-xl font-semibold'>{user.phone_number}</p>}
                {tab === 'job' && <p className='text-xl font-semibold'>{user.job}</p>}
                {tab === 'gender' && <p className='text-xl font-semibold'>{user.gender}</p>}
                {tab === 'birthday' && <p className='text-xl font-semibold'>{user.birthdate}</p>}
                {tab === 'website' && <p className='text-xl font-semibold'>{user.website}</p>}
                {tab === 'interests' && <p className='text-xl font-semibold'>{user.interests.join(', ')}</p>}
            </div>
            <div className='flex flex-col items-center justify-center'>
                <button
                    onClick={handleClick}
                    className='btn solid warn flex items-center compact'
                >
                    <FaRedo className={`mr-2 ${isRotating ? 'animate-spin' : ''}`} />
                    Randomize
                </button>
            </div>


        </div>

    );

}
