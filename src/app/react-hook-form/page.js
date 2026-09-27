'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

const Page = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    console.log(data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-cyan-100 flex items-center justify-center px-4">
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-8 flex flex-col gap-5"
      >
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Enter your details below
          </p>
        </div>

        <input
          {...register("firstname")}
          placeholder="Enter Your First Name"
          className="h-12 w-full rounded-lg border border-gray-200 bg-white/80 px-4 text-gray-700 outline-none "
        />

        <input
          {...register("lastname")}
          placeholder="Enter Your Last Name"
          className="h-12 w-full rounded-lg border border-gray-200 bg-white/80 px-4 text-gray-700 outline-none "
            />
        <input
          {...register("email")}
          type="email"
          placeholder="Enter Your Email"
          className="h-12 w-full rounded-lg border border-gray-200 bg-white/80 px-4 text-gray-700 outline-none "
        />

        <button
          type="submit"
          className="h-12 w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-md  hover:from-blue-600 hover:to-cyan-600 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Page
