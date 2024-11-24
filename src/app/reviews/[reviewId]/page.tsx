import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    reviewId: string;
  };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { reviewId } = await params;

  return {
    title: `Review ${reviewId}`,
  };
};

export default async function reviewDetails({ params }: Props) {
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