import { notFound } from "next/navigation";

export default function reviewDetails({ params }: {
  params: {
    reviewId: string
  }
}) {

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      reviews page {params.reviewId}
    </h1>
  );
}