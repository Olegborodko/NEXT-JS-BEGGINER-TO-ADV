import { notFound } from "next/navigation";

export default async function reviewDetails({ params }: {
  params: {
    reviewId: string
  }
}) {
  const { reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      reviews page {reviewId}
    </h1>
  );
}