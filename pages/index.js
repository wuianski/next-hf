import Layout from "../components/layout";
import Nav from "../components/nav";

export default function Index() {
  return (
    <>
      <div>Layout Example (Index)</div>
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Nav />
      {page}
    </Layout>
  );
};
