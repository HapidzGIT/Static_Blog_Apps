import fs from 'fs';
import matter from 'gray-matter';

const getPostMetaData = () => {
    const folder = 'posts/';
    const files = fs.readdirSync(folder);
    const markDownPosts = files.filter((file) => file.endsWith('.md'));
  
    const posts = markDownPosts.map((filename) => {
      const fileContents = fs.readFileSync(`posts/${filename}`, 'utf8');
      const matterResults = matter(fileContents);
      return {
        title: matterResults.data.title,
        data: matterResults.data.data,
        subtitle: matterResults.data.subtitle,
        slug: filename.replace('.md', ''),
      };
    });
    return posts;
  };

  export default getPostMetaData