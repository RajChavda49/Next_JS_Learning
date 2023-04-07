import { useRouter } from "next/router";

function ReviewId() {
  const { query } = useRouter();

  return (
    <div>
      <h1>
        Review of {query?.reviewId} for Product {query?.productid}
      </h1>
    </div>
  );
}

export default ReviewId;
