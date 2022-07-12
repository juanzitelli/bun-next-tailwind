import Head from "next/head";

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Bun 💘 Next.js</title>
        <meta name="description" content="Bun next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className=" text-blue-500 text-3xl">Hello World from Bun!</h1>
    </div>
  );
}
