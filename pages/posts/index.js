import Link from "next/link";
import { useRouter } from "next/router";

export function Posts({ posts }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post?.id}>
          <Link href={`/posts/${post?.id}`} passHref>
            <h2>
              <span>{post?.id}</span>
              {post?.title}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}
export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: { posts: data.slice(0, 10) },
  };
}
