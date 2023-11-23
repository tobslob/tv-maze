import "./globals.css";

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch("https://api.tvmaze.com/schedule/full");
  const data = await res.json();

  return {
    props: { data },
  };
}

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
