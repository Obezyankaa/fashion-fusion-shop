import Link from "next/link"
import { notFound } from "next/navigation"

export default function ReviewDetails({ params }: {
    params: {
        productId: string,
        reviewId: string,
    }
}) {
    if (parseInt(params.reviewId) > 1000) {
        return notFound()
    } 
    return (
        <>
        <div>
            Product {params.productId}
            Reviews {params.reviewId}
            </div>
            <Link href="/" >вернуться на главную</Link>
        </>
     )
 }