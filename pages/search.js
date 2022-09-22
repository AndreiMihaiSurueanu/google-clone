import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import mockedResponse from "../Response";

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? mockedResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CUSTOM_SEARCH_API_KEY}&cx=${process.env.NEXT_PUBLIC_GOOGLE_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // After the SERVER has rendered... Pass the results to the client..
  return {
    props: {
      results: data,
    },
  };
}
