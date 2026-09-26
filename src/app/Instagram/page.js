import Navbar from '@/Components/Navbar'
import Post from '@/Components/Post'
import Story from '@/Components/Story'
import React from 'react'

const posts = [
  {
    id: 1,
    username: "john",
    profileImage: "/profile.jpg",
    postImage: "/post.jpg",
    likes: 100,
    caption: "Hello Instagram!",
    comments: 10,
  },
]

const page = () => {
  return (
    <div>
      <Navbar />
      <Story />
      <Post posts={posts} />
    </div>
  )
}

export default page
