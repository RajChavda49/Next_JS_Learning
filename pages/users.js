import User from "./components/User";

function UserList({ blogs }) {
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog?.id}>
          {/* <User user={user} /> */}
          <img
            src={`https://appideas.onrender.com${blog?.image?.src}`}
            alt={blog.image.alt}
          />
        </div>
      ))}
      blogs
    </div>
  );
}
export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://appideas.onrender.com/api/blog");
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { blogs: data?.blogs },
  };
}
