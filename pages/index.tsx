import type { NextPage } from "next";
import HomePage from "../components/HomePage";

import Layout from "./Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default Home;
