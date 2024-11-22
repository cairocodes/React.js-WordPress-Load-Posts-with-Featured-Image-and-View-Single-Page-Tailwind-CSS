import React, { useEffect, useState } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('http://localhost:8888/cairocoders/wp-json/wp/v2/posts?_embed');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json(); 
            setPosts(posts);
        }
    
        loadPosts();
   }, [])
  return (
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {posts.map((post, index) => (
          <div key={index} className="max-w-sm border border-gray-200 rounded-md shadow">
            <div className="relative aspect-video">
              <img src={post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}
                alt={post.title.rendered}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-t-md object-cover"/>
            </div>
            <div className="p-5">
              <h1>
                <a
                  href={`/posts/${post.slug}`}>
                  {post.title.rendered}
                </a>         
              </h1>
            </div>
          </div>
        ))}
      </div>
 );
}