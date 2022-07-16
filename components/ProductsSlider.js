import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';

const ProductsSlider = () => {

  const [isActive, setActive] = useState(false)

  return(
    <div className={`p-12 flex flex-col items-center`}>
      <ul className={`flex flex-row justify-between w-1/3 text-lg font-semibold text-dark-grey`}>
        <li>All</li>
        <li>Bed</li>
        <li>Sofa</li>
        <li>Chair</li>
        <li>Light</li>
      </ul>
      <div className={`h-screen bg-gray-200 w-full`}>Products</div>
    </div>
  )
}

export default ProductsSlider