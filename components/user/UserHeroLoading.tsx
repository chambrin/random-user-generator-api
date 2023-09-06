'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaHome, FaPhoneAlt } from 'react-icons/fa';

export default function CardUserHero() {
    const [tab, setTab] = useState('info');
    const [user, setUser] = useState(null);
    const [x , setX] = useState(0);
    const [y, setY] = useState(0);

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
                <motion.button
                    variants={floatVariants}
                    initial="hidden"
                    animate="show"
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('info')}
                >
                    <FaUser />
                </motion.button>
                <motion.button
                    variants={floatVariants}
                    initial="hidden"
                    animate="show"
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('email')}
                >
                    <FaEnvelope />
                </motion.button>
                <motion.button
                    variants={floatVariants}
                    initial="hidden"
                    animate="show"
                    className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('address')}
                >
                    <FaHome />
                </motion.button>
                <motion.button
                    variants={floatVariants}
                    initial="hidden"
                    animate="show"
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => setTab('phone')}
                >
                    <FaPhoneAlt />
                </motion.button>
            </div>

            <div className=' bg-opacity-75 rounded-lg shadow-lg p-4 m-2 text-center'>
                {tab === 'info' && <p className='text-xl font-semibold'>{user.name}</p>}
                {tab === 'email' && <p className='text-xl font-semibold'>{user.email}</p>}
                {tab === 'address' && <p className='text-xl font-semibold'>{user.address}</p>}
                {tab === 'phone' && <p className='text-xl font-semibold'>{user.phone_number}</p>}
            </div>

        </div>
    );

}
