"use client"
import React from 'react'
import './Photos.css'
import axios from 'axios'
import { photosAction } from '@/redux/actions/photoAction'


export const Photos = () => {
  
  return (
    <div>
          <div className="photos">Photos</div>
          <button onClick={ photosAction }>get Photos</button>
          <h6>
              please check console for store updation, while clicking on the button.
         </h6>
    </div>
  )
}
