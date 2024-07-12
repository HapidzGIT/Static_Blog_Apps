import React from 'react';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  return content;
};
export default function Posts(props) {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return (
    <div>
      <h1>ini adalaha halaman Pages : {slug}</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
}
