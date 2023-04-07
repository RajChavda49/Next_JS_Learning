import { useRouter } from "next/router";

function Docs() {
  const { query } = useRouter();
  return <h1>Docs pages</h1>;
}
export default Docs;
