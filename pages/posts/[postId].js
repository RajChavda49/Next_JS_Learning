import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>
        <span>{post?.id}.</span>
        {post?.title}
      </h1>
      <h3>{post?.body}</h3>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: { postId: `${post?.id}` },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await response.json();

  if (!data?.id) {
    return { notFound: true };
  }
  return {
    props: { post: data },
  };
}
