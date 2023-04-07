import { useRouter } from "next/router";

function ProductDetails() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Product Details {query?.productid}</h1>
    </div>
  );
}

export default ProductDetails;
