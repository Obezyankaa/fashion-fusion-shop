export default function ProductDetails({ params }: {
    params: {productId: string}
}) {
  return (
    <>
          <h1>ProductId</h1>
          <div>{ params.productId }</div>
    </>
  );
}
