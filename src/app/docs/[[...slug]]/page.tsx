import Link from "next/link";

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 3) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and conept {params.slug[1]} и
        ещё роутинг {params.slug[2]} 
      </h1>
    );
  } else if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and conept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return (
      <div>
        <h1>Viewing docs for feature {params.slug[0]}</h1>
      </div>
    );
  }
  return (
    <>
      <h1> Docs</h1>
      <Link href="/">вернуться на главную</Link>
    </>
  );
}
