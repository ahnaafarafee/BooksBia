import Head from "next/head";
import Link from "next/link";

export default function copyright() {
  return (
    <div className="blog-detail-page">
      <Head>
        <title> Copyright Declaimer | Deyal</title>
      </Head>
      <h1>Copyright Declaimer</h1>

      <p>
        If you require any more information or have any questions about our
        site's disclaimer, please feel free to contact us by email at
        ahnaafarafee@gmail.com. Our Disclaimer was generated with the help of
        the{" "}
        <a href="https://www.disclaimergenerator.net/">Disclaimer Generator</a>.
      </p>

      <h2>Disclaimers for Deyal</h2>
      <p>
        Articles posted on our website are intellectual assets of respected
        authors. No part of any of the articles should be reproduced in any
        manner without the permission of the author. If you want to share any of
        the articles a credit to the original author and link of the original
        post is of course highly appreciated!
      </p>
      <p>
        All the information on this website - https://read-deyal.com - is
        published in good faith and for general information purpose only. Deyal
        does not make any warranties about the completeness, reliability and
        accuracy of this information. Any action you take upon the information
        you find on this website (Deyal), is strictly at your own risk. Deyal
        will not be liable for any losses and/or damages in connection with the
        use of our website.
      </p>

      <p>
        From our website, you can visit other websites by following hyperlinks
        to such external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone 'bad'.
      </p>

      <p>
        Please be also aware that when you leave our website, other sites may
        have different privacy policies and terms which are beyond our control.
        Please be sure to check the Privacy Policies of these sites as well as
        their "Terms of Service" before engaging in any business or uploading
        any information. Our Privacy Policy was created by{" "}
        <a href="https://www.generateprivacypolicy.com/">
          the Privacy Policy Generator
        </a>
        .
      </p>

      <h2>Consent</h2>

      <p>
        By using our website, you hereby consent to our disclaimer and agree to
        its terms.
      </p>

      <h2>Update</h2>

      <p>
        Should we update, amend or make any changes to this document, those
        changes will be prominently posted here.
      </p>

      <Link href="/contact">
        <a style={{ color: "blue" }}>Contact us</a>
      </Link>
    </div>
  );
}
