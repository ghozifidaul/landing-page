import Head from "next/head";

import type { Profile } from "@/data/types";

type SeoHeadProps = {
  profile: Profile;
  siteUrl?: string;
};

export default function SeoHead({ profile, siteUrl = "https://janedoe.dev" }: SeoHeadProps) {
  const title = `${profile.name} -- ${profile.role}`;
  const description = profile.bio;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl,
    sameAs: [profile.github, profile.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={profile.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Theme */}
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
