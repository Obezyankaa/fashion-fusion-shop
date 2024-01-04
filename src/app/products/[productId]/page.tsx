import Link from "next/link";

export default function ProductDetails({ params }: {
    params: {productId: string}
}) {
  return (
    <>
      <h1>ProductId {params.productId}</h1>
      <Link href="/">вернуться на главную</Link>
    </>
  );
}
