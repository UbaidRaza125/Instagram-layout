"use client";

import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const posts = [
  {
    id: 1,
    username: "sana",
    profileImage: "/story2.jpg",
    postImage: "/post1.jpg",
    likes: 1245,
    caption: "Beautiful day ✨",
    comments: 32,
  },
  {
    id: 2,
    username: "aliya",
    profileImage: "/story3.jpg",
    postImage: "/post2.jpg",
    likes: 987,
    caption: "Enjoying the little moments ❤️",
    comments: 21,
  },
  {
    id: 3,
    username: "ayesha",
    profileImage: "/story4.jpg",
    postImage: "/post3.jpg",
    likes: 2341,
    caption: "Good vibes only 🌸",
    comments: 48,
  },
  {
    id: 4,
    username: "zainab",
    profileImage: "/story5.jpg",
    postImage: "/post4.jpg",
    likes: 1567,
    caption: "Weekend mood ☀️",
    comments: 37,
  },
  {
    id: 5,
    username: "hira",
    profileImage: "/story6.jpg",
    postImage: "/post5.jpg",
    likes: 892,
    caption: "Just another beautiful day 🌷",
    comments: 19,
  },
  {
    id: 6,
    username: "maham",
    profileImage: "/story7.jpg",
    postImage: "/post6.jpg",
    likes: 3210,
    caption: "Making memories 💫",
    comments: 64,
  },
  {
    id: 7,
    username: "laiba",
    profileImage: "/story8.jpg",
    postImage: "/post7.jpg",
    likes: 1764,
    caption: "Smile, it's a beautiful day 😊",
    comments: 29,
  },
  {
    id: 8,
    username: "noor",
    profileImage: "/story1.jpg",
    postImage: "/post8.jpg",
    likes: 2156,
    caption: "Peace and happiness 🌿",
    comments: 41,
  },
  {
    id: 9,
    username: "maria",
    profileImage: "/story2.jpg",
    postImage: "/post9.jpg",
    likes: 1432,
    caption: "Life is better with good memories 📸",
    comments: 26,
  },
  {
    id: 10,
    username: "iqra",
    profileImage: "/story3.jpg",
    postImage: "/post10.jpg",
    likes: 2890,
    caption: "Keep shining ✨",
    comments: 53,
  },
];

const Post = () => {
  const [likedPosts, setLikedPosts] = useState([]);

  const handleLike = (id) => {
    setLikedPosts((prev) => {
      if (prev.includes(id)) {
        return prev.filter((postId) => postId !== id);
      }

      return [...prev, id];
    });
  };

  return (
    <div className="w-[600px] mx-auto mt-8">
      {posts.map((post) => {
        const isLiked = likedPosts.includes(post.id);

        return (
          <div
            key={post.id}
            className="border-b border-gray-200 pb-5 mb-7"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={post.profileImage}
                  alt={post.username}
                  className="w-8 h-8 rounded-full object-cover"
                />

                <p className="text-sm font-semibold">
                  {post.username}
                </p>
              </div>

              <BsThreeDots className="text-lg cursor-pointer" />
            </div>

            {/* POST IMAGE */}
            <img
              src={post.postImage}
              alt="Post"
              className="w-full h-[500px] object-cover rounded-sm"
            />

            {/* ACTION ICONS */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-4">

                {/* LIKE */}
                <button
                  type="button"
                  onClick={() => handleLike(post.id)}
                  className="focus:outline-none"
                >
                  <FaRegHeart className="text-2xl cursor-pointer hover:scale-110" />
                </button>

                {/* COMMENT */}
                <FiMessageCircle className="text-2xl cursor-pointer hover:scale-110" />

                {/* SEND */}
                <FiSend className="text-2xl cursor-pointer hover:scale-110" />
              </div>

              {/* BOOKMARK */}
              <FiBookmark className="text-2xl cursor-pointer hover:scale-110" />
            </div>

            {/* LIKES */}
            <p className="font-semibold text-sm mt-3">
              {(post.likes + (isLiked ? 1 : 0)).toLocaleString()} likes
            </p>

            {/* CAPTION */}
            <p className="text-sm mt-1">
              <span className="font-semibold mr-2">
                {post.username}
              </span>

              {post.caption}
            </p>

            {/* COMMENTS */}
            <p className="text-gray-500 text-sm mt-2">
              View all {post.comments} comments
            </p>

            {/* ADD COMMENT */}
            <p className="text-gray-400 text-xs mt-3">
              Add a comment...
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
