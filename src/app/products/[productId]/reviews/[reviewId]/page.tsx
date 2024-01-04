import Link from "next/link"

export default function ReviewDetails({ params }: {
    params: {
        productId: string,
        reviewId: string,
    }
}) {
    return (
        <>
        <div>
            Product {params.productId}
            Reviews {params.reviewId}
            </div>
            <Link href="/" ></Link>
        </>
     )
 }