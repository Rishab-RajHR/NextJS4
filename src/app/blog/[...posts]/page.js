'use client'

import { use } from "react";

const Posts = ({params}) => {

  const { posts } = use(params);

  return (
    <>
       <h2>Blog: {posts[0]}</h2>
       <h2>Post: {posts[1]}</h2>
    </>
  )
}

export default Posts