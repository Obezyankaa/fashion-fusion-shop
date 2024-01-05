import { Metadata } from "next";
import Link from "next/link";
import { resolve } from "path/posix";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({ params }: Props): Promise <Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    })
  }) 
  return {
    title: `product ${title}`,
  };
}


export default function ProductDetails({ params }: Props) {
  return (
    <>
      <h1>ProductId {params.productId}</h1>
      <Link href="/">вернуться на главную</Link>
    </>
  );
}
