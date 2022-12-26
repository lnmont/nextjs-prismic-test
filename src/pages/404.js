import Head from "next/head";
import { PageNotFound } from "../components/PageNotFound/Index";
import { PageTitle } from "../components/PageTitle";

export default function Error404() {
  return (
    <>
      <PageTitle
        title="Página não encontrada!"
        description="Página não encontrada!"
      />

      <PageNotFound />
    </>
  );
}
