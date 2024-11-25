"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter()

  const handleClick = () => {
    console.log('test');
    router.push("/");
  }

  return (
    <>
    <button onClick={handleClick}>
      Place order
    </button>
    </>
  );
}