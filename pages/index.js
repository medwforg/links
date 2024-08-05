import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';


export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: '/banner.png'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

