import Image from 'next/image'
import React from 'react'

import { Button } from '@/app/presentation/components'
import { HeroSectionModel } from './models'

export function HeroSection({
  button,
  description,
  title,
  subtitle,
}: HeroSectionModel) {
  return (
    <div className="mt-16 flex items-center justify-between gap-8">
      <div className="h-hero-image relative flex max-h-[670px] w-1/2 max-w-[578px] items-center overflow-hidden">
        <Image
          alt="Jr Contabilidade"
          src={
            'https://images.unsplash.com/photo-1671726203381-641d85af3bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80'
          }
          width={578}
          height={670}
        />
      </div>
      <div className="max-w-hero-texts-container flex w-1/2 flex-col">
        <h1 className="mb-16 font-raleway text-[2.5rem] font-semibold leading-[1.2] tracking-default md:text-[3.2rem] lg:text-[4rem]">
          {title}
        </h1>
        <h2 className="mb-4 font-raleway text-xl font-medium leading-[1.2] tracking-default text-red500 md:text-[1.375rem] lg:text-2xl">
          {subtitle}
        </h2>
        <p className="mb-32 text-sm leading-[1.6] tracking-default text-gray-400 md:text-base lg:text-lg">
          {description}
        </p>
        <div>
          <Button label={button.label} link={button.link} />
        </div>
      </div>
    </div>
  )
}
