import Head from "next/head";
import Footer from "./components/Footer";
export default function AffiliateDisclosure() {
  return (
    <>
      <Head>
        <title>Affiliate Disclosure | Check My Leak</title>
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Affiliate Disclosure</h1>

        <p className="mb-4">
          Some links on this website are affiliate links. This means that if you
          choose to click on a link and make a purchase, I may earn a commission
          at no additional cost to you.
        </p>

        <p className="mb-4">
          I only recommend tools and services that I believe are genuinely
          useful for improving digital security and privacy. I do not accept
          paid placements or promote products I would not use myself.
        </p>

        <p className="mb-4">
          The information provided on this site is for educational purposes
          only and should not be considered legal or financial advice.
        </p>
        <p>
          If you have any questions about this disclosure, you can contact me
          through the site.
        </p>
      </main>
      <Footer />
    </>
  );
}
