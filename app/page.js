import React from 'react';
import fs from 'fs';
import Link from 'next/link';

const getPostMetaData = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markDownPosts = files.filter((file) => file.endsWith('.md'));
  const slugs = markDownPosts.map((file) => file.replace('.md', ''));
  console.log(slugs);
  return slugs;
};

const Homepage = () => {
  const PostMetaData = getPostMetaData();
  const PostMetaDataPreview = PostMetaData.map((slug) => (
    <Link href={`posts/${slug}`}>
      <div key={slug} className="text-2xl">
        {slug}
      </div>
    </Link>
  ));
  return <div>{PostMetaDataPreview}</div>;
};

export default Homepage;
