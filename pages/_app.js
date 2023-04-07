// import '../styles/globals.css'

import Header from "./components/Header";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
