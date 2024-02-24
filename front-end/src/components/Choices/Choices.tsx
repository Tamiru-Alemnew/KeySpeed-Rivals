import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface ChoiceCardProps{
    src:string , 
    alt:string,
    title:string,
    description:string
}

const ChoiceCard = ({ src, alt, title, description }:ChoiceCardProps) => (
  <div className="hover:bg-green-900  transition-colors duration-300 ease-in-out w-[450px] flex gap-2 rounded-lg p-4 bg-gray-800 text-white">
    <Image src={src} width={150} height={150} alt={alt} />
    <div>
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  </div>
);

function Choices() {
  return (
    <div className="flex gap-12 justify-center my-20">
      <Link href="/practice">
        <ChoiceCard
          src="/practice.svg"
          alt="practice"
          title="Practice"
          description="Practice typing with our custom made typing test"
        />
      </Link>

    <Link href="/multiplayer">
      <ChoiceCard
        src="/practice.svg"
        alt="practice"
        title="Multiplayer"
        description="Compete with other players in real time"
        />
    </Link>
    </div>
  );
}

export default Choices