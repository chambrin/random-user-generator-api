// hero section
import Image from 'next/image'
import React from "react";
import CardUserHero from "@/components/user/UserHeroLoading";

export default function Hero() {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2'>

            <div className="flex flex-col justify-center px-16 mb-32 ">
                <h1 className='text-5xl font-bold w-fit font-bold from-[#6366F1] via-[#D946EF] to-[#FB7185] bg-gradient-to-r bg-clip-text text-transparent'>Random User Generator API</h1>
                <h2 className='text-2xl font-bold'>{`Votre source pour obtenir des profils d'utilisateurs aléatoires.`}</h2>
                <p className="text-lg  mt-4">
                    {`  Que vous ayez besoin de données de test, d'illustrer vos maquettes ou simplement
                    de générer du contenu fictif, mon API de génération de profils d'utilisateurs
                    aléatoires est là pour vous. Obtenez des informations telles que le nom, l'adresse,
                    l'adresse e-mail, le numéro de téléphone, l'emploi, la date de naissance et bien plus encore.
                    Utilisez ces données pour créer des scénarios réalistes et apporter de la vie à vos projets ! `}
                </p>
            </div>

            <div className="">
                <CardUserHero />
            </div>
        </section>
    )
}
