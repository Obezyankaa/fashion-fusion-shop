import Link from "next/link";

export default function ProductList() {

  const productId = 56

  return (
    <>
      <h1>ProductList List</h1>
      <div>
        <Link href="/products/1">product one</Link>
      </div>
      <div>
        <Link href="/products/2">product two</Link>
      </div>
      <div>
        <Link href="/products/3" replace>product three</Link>
      </div>
      <div>
        <Link href={`products/${productId}`}>product { productId}</Link>
      </div>
      <Link href="/">вернуться на главную</Link>
    </>
  );
}
