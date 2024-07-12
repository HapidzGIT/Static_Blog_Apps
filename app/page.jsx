import React from 'react';
import getPostMetaData from '@/components/getPostMetaData';
import PostPreview from '@/components/PostPreview';


const Homepage = () => {
  const PostMetaData = getPostMetaData();
  const PostMetaDataPreview = PostMetaData.map((post) => (
    <PostPreview key={post.slug} {...post}/>
  ));
  return <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{PostMetaDataPreview}</div>;
};

export default Homepage;
