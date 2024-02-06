import Image from 'next/image'
import React from 'react'

interface ChoiceCardProps{
    src:string , 
    alt:string,
    title:string,
    description:string
}

const ChoiceCard = ({ src, alt, title, description }:ChoiceCardProps) => (
  <div className="w-[450px] flex gap-2 rounded-lg p-4 bg-gray-800 text-white">
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
      <ChoiceCard
        src="/practice.svg"
        alt="practice"
        title="Practice"
        description="we provide best UI/UX designer that will create best Performance website and applications with animations"
      />
      <ChoiceCard
        src="/practice.svg"
        alt="practice"
        title="Practice"
        description="we provide best UI/UX designer that will create best Performance website and applications with animations"
      />
    </div>
  );
}

export default Choices