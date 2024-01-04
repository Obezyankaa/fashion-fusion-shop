import Link from "next/link";

export default function ProductList() {
    return (
      <>
        <h1>ProductList List</h1>
        <div> product one</div>
        <div> product two</div>
        <div> product three</div>
        <Link href="/">вернуться на главную</Link>
      </>
    );
}