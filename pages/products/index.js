import Link from "next/link";

const Products = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Link key={product?.id} href={`products/${product?.id}`}>
          {" "}
          <h1>
            {product?.id} {product?.title} {product?.price}
          </h1>
          <p>{product?.description}</p>
          <hr />
        </Link>
      ))}
    </>
  );
};

export default Products;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: { products: data },
    revalidate: 10,
  };
}
