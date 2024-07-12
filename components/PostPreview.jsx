import Link from 'next/link';
import React from 'react';

export default function PostPreview(post) {
  return (
    <div className="border-slate-300 border rounded-md shadow-md shadow-slate-500 w-full p-5">
      <Link href={`posts/${post.slug}`}>
        <div key={post.slug}>
          <h1 className="font-bold hover:underline mb-2"> {post.title}</h1>
          <h3 className="mb-2 opacity-70">{post.subtitle}</h3>
          <p className="opacity-30">18-01-2007</p>
        </div>
      </Link>
    </div>
  );
}
