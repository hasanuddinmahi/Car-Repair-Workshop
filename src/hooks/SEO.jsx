import React from "react";
import { Helmet } from "react-helmet";

function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Nidham Alaudddin Workshop",
    // "image": "https://yourdomain.com/logo.jpg", // Replace with your logo URL
    "url": "https://car-repair-workshop.vercel.app/", // Replace with your website URL
    "telephone": "+971505219792",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Abu Dhabi",
      "addressRegion": "Abu Dhabi",
      "addressCountry": "AE"
    },
    "openingHours": "Su-Sa 09:00-20:00",
    "sameAs": [
      "https://wa.me/971505219792",
      // "https://www.facebook.com/yourpage",     // Replace or remove
      "https://www.instagram.com/nidhamaluddin_workshop" // Replace or remove
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Car Denting" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Car Repair" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Auto Repair" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Car Painting" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Accidental Repair" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Auto Body Work" }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Title & Basic Meta */}
      <title>Nidham Alaudddin Workshop | Car Repair & Auto Repair Shop in Abu Dhabi</title>
      <meta
        name="description"
        content="Nidham Alaudddin Workshop offers expert car & auto repair, denting, painting, accidental repair, and auto body services across Abu Dhabi. Reliable, fast, and affordable car repair solutions."
      />
      <meta
        name="keywords"
        content="car denting, car painting, car repair Abu Dhabi, Abu Dhabi auto repair, auto body shop, accidental car repair, Nidham Alaudddin Workshop"
      />
      <meta name="author" content="Nidham Alaudddin Workshop" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph for Facebook & WhatsApp */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content="Nidham Alaudddin Workshop" />
      <meta
        property="og:description"
        content="Professional car repair, denting, painting, and accidental repair services across Abu Dhabi."
      />
      <meta property="og:image" content="https://yourdomain.com/og-image.jpg" /> {/* Replace */}
      <meta property="og:url" content="https://car-repair-workshop.vercel.app/" /> {/* Replace */}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Nidham Alaudddin Workshop" />
      <meta
        name="twitter:description"
        content="Auto body repair, denting, painting, and accidental repair services across Abu Dhabi."
      />
      {/* <meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg" /> Replace */}

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export default SEO;
