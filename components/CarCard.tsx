"use client";

import React from 'react';
import { CarProps } from '@/types';
import { useState } from 'react';
import Image from 'next/image';
import  CustomButton  from './CustomButton';

interface CarCardProps{
    car:CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
      
        </h2>
      </div>
      
    </div>
    

    
    
  )
}

export default CarCard;