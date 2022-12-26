import Head from "next/head";

export function PageTitle({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
    </>
  );
}
