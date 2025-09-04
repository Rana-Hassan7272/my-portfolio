import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Muhammad Hassan Shahbaz - Full Stack AI Engineer & GenAI Expert | Portfolio",
  description = "Full Stack AI Engineer & GenAI Expert specializing in AI agents, LLMs, machine learning, and modern web development. 3+ years experience building intelligent applications with React, TypeScript, and cutting-edge AI technologies.",
  keywords = "Full Stack AI Engineer, GenAI Expert, AI Developer, Machine Learning Engineer, React Developer, TypeScript, AI Agents, LLM, RAG Systems, MLOps, Python, Node.js, Portfolio, AI Solutions, Artificial Intelligence, Deep Learning, Natural Language Processing",
  image = "https://muhammadhassanshahbaz.vercel.app/profile.jpg",
  url = "https://muhammadhassanshahbaz.vercel.app/",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
