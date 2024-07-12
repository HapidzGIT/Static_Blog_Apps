import React from 'react';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetaData from '@/components/getPostMetaData';
import Link from 'next/link';

const getPostContent = (slug) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResults = matter(content)
  return matterResults;
};

export const generateStaticParams = async () => {
    const posts = getPostMetaData()
    return posts.map((post) => {
        slug : post.slug
    })
}
export default function Posts(props) {
  const slug = props.params.slug;
  const posts = getPostContent(slug);
  return (
    <div>
      <h1> &raquo; {slug}</h1>
    <Link href={'/'}>  <h1 className='my-5'> &laquo; Home</h1></Link>
      <article class="prose lg:prose-xl">
      <Markdown>{posts.content}</Markdown>
      </article>
    </div>
  );
}
