// hero section
import Image from 'next/image'
import React from "react";
import CardUserHero from "@/components/user/UserHeroLoading";

export default function Hero() {
    return (
        <section className='grid grid-cols-2'>

             <div className="">
                <h1 className='text-4xl font-bold'>Random User Generator API</h1>
                 <h2 className='text-2xl font-bold'>Votre source pour obtenir des profils d'utilisateurs aléatoires.</h2>
             </div>

            <div className="">
<CardUserHero />
             </div>
        </section>
    )
}
