import React from 'react'
import PostList from '../../PostList/PostList'
import useToken from '../../useToken'
import {useLocation} from "react-router-dom"
import { getToken, useSaveToken } from '../../useToken'

export default function Home() {
  return (
    <div>
        <h3>Home</h3>
        <p>shop now</p>
        <PostList/>
        </div>
  )
}
