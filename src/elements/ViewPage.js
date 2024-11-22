import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; 

export default function Posts() {
    const {slug}=useParams();

    const [posts, setData] = useState(null);

    useEffect(()=>{
        fetchPost();
    },[slug]);
     
    const fetchPost=async()=>{
        try{
          const response = await fetch("http://localhost:8888/cairocoders/wp-json/wp/v2/posts?_embed&slug="+slug);
            if(!response.ok) {
                // oups! something went wrong
                return;
            }

            const posts = await response.json();
            setData(posts);
        }catch(err){
            console.log("Something Wrong");
        }
    }

    return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-sm shadow p-8">
        {posts && posts.map((post, index) => (
        <div key={index}>
          <h1 className="text-2xl font-bold mb-5">{post.title.rendered}</h1>
            <div className="mb-4">            
              <div 
                dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }}
              />   
            </div>
        </div>
        ))}
     </div>
    </div>
  );
}