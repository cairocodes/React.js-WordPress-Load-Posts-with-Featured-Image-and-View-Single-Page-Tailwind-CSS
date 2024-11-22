import React  from 'react';
import Posts from './Posts'
import { Suspense } from "react";
import { IoSearch } from "react-icons/io5"; //https://www.npmjs.com/package/react-icons npm install react-icons --save

function Home() {

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
        <div className="flex items-center justify-between gap-1 mb-5">
            <h1 className="text-4xl font-bold">React.js + WordPress Load Posts with Featured Image and View Single Page | Tailwind CSS</h1>
        </div> 
        <div className="overflow-x-auto py-10">
            <div className="mb-2 w-full text-right">
                <div className="relative flex flex-1">
                <input
                    type="text"
                    className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"
                    placeholder="Search..."
                />
                <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
                </div>
            </div>
            <Suspense fallback="Loading...">
                <Posts/>
            </Suspense>
        </div>
    </div>
  )
}

export default Home