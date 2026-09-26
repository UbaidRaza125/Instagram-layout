"use client"
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const Post = ({ posts }) => {
  const [likedPosts, setLikedPosts] = useState([]);

  const handleLike = (id) => {
    setLikedPosts((prev) =>
      prev.includes(id)
        ? prev.filter((postId) => postId !== id)
        : [...prev, id]
    );
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
                  {isLiked ? (
                    <FaHeart className="text-2xl cursor-pointer text-red-500" />
                  ) : (
                    <FaRegHeart className="text-2xl cursor-pointer text-black hover:scale-110" />
                  )}
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
