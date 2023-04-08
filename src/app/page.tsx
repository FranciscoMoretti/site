// Import your Client Component
import HomePage from './home-page';

// async function getPosts() {
//   const res = await fetch('https://...');
//   const posts = await res.json();
//   return posts;
// }

export default function Page() {
    // export default async function Page() {
  // Fetch data directly in a Server Component
//   const recentPosts = await getPosts();
  // Forward fetched data to your Client Component
  return <HomePage />;
}