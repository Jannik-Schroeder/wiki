import * as React from "react";
import Script from "next/script";


export default {
  projectLink: "https://github.com/jannik-schroeder/wiki",
  docsRepositoryBase: "https://github.com/jannik-schroeder/wiki/blob/master/src/pages",
  titleSuffix: " – SCPX Wiki",
  logo: (
    <>
      <span className="mr-2 ml-2 font-extrabold hidden md:inline">
        SCPX Wiki
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Personal Knowledge Base by jsde
      </span>
    </>
  ),
  head: () => (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Personal Knowledge Base by jsde"
      />
      <meta
        name="og:description"
        content="Personal Knowledge Base by jsde"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="apple-itunes-app" content="app-id=1594898306" />
      <script
	  src="https://www.googletagmanager.com/gtag/js?id=UA-84834352-1"
	  strategy="afterInteractive"
      />
      <script id="google-analytics" strategy="afterInteractive">
	  {`
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){window.dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-84834352-1');
	`}
      </script>
 
    </>
  ),
  search: true,
  unstable_faviconGlyph: "✦",
  defaultMenuCollapsed: true,
  prevLinks: true,
  nextLinks: true,
  floatTOC: true,
  footer: true,
  footerEditLink: "Edit this page on GitHub",
  footerText: (
    <>
      © {new Date().getFullYear()} Jannik Schroeder. All rights reserved.
    </>
  ),
  darkMode: true,
};
