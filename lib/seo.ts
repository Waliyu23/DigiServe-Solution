import { Metadata } from 'next';
import { siteConfig } from './site';

export function generateMetadata(
  title: string,
  description: string,
  pathname: string,
  image?: string
): Metadata {
  const url = new URL(pathname, siteConfig.url).toString();
  const imageUrl = image ? new URL(image, siteConfig.url).toString() : `${siteConfig.url}/og/default.png`;

  return {
    title,
    description,
    keywords: ['digital services', 'software development', 'marketing', 'design', 'consulting'],
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateSchemaOrg(data: any) {
  return {
    '@context': 'https://schema.org',
    ...data,
  };
}
