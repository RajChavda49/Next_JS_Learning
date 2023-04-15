import { useRouter } from "next/router";
import Link from "next/link";
function Home() {
  const router = useRouter();
  return (
    <div>
      <div>
        <h1>Home Page</h1>
      </div>
      <Link href="/news" style={{ cursor: "pointer" }}>
        <h2>See News</h2>
      </Link>
    </div>
  );
}

export default Home;
