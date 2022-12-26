import Head from "next/head";
import { useRouter } from "next/router";

import { ListCharacters } from "../components/Home/ListCharacters/Index";
import { SectionHero } from "../components/Home/SectionHero/Index";
import { PageTitle } from "../components/PageTitle";
import { getPrismicClient } from "../services/prismic";

export default function Home({ resultPrismic, characters }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <PageTitle
        title="Marvel Studios - What if...?"
        description="Página da Marvel da serie What if...?"
      />

      {resultPrismic && <SectionHero data={resultPrismic} />}
      {characters && <ListCharacters data={characters} />}
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentPages = await prismic.getSingle("home");
  const { data } = contentPages;

  const characters = await prismic.getAllByType("character");

  return {
    props: {
      resultPrismic: data,
      characters,
    },
    revalidate: 60,
  };
};
