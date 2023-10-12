import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function ShoppingCart() {
  return (
    <div>ShoppingCart
        <Link  to={`/usercart`}><FaShoppingCart/></Link>
    </div>
  )
}
