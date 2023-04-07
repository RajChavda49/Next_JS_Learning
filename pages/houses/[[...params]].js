import { useRouter } from "next/router";

function Houses() {
  const { query } = useRouter();

  if (query?.params !== undefined && query.params.length === 1) {
    return <h1>Houses minmum value is {query?.params[0]}</h1>;
  } else if (query?.params !== undefined && query.params.length === 2) {
    return (
      <h1>
        House minmum value is {query?.params[0]} & House maximum values is{" "}
        {query?.params[1]}
      </h1>
    );
  } else {
    return <h1>Houses</h1>;
  }
}
export default Houses;
