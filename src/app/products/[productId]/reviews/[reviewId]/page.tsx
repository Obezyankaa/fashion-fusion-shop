'use client'
import Link from "next/link"
import { notFound } from "next/navigation"

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetails({ params }: {
    params: {
        productId: string,
        reviewId: string,
    }
}) {
    const random = getRandomInt(2)

    if (random === 1) {
        throw new Error("Error loading review")    
    }

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