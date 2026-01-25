import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import WhatsAppButton from "@/components/home/WhatsAppButton";

const Index = () => {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ComboBasket",
    "url": "https://combobasket.com",
    "description": "Buy smart combo products online in Bangladesh from ComboBasket.com. Socks, gloves, caps, makeup & daily essentials in affordable combo packs with cash on delivery.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://combobasket.com/products?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ComboBasket",
    "url": "https://combobasket.com",
    "logo": "https://combobasket.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/combobasket",
      "https://www.instagram.com/combobasket"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-1966-805533",
      "contactType": "customer service",
      "areaServed": "BD",
      "availableLanguage": ["Bengali", "English"]
    }
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ComboBasket",
    "image": "https://combobasket.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "postalCode": "1000",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.8103",
      "longitude": "90.4125"
    },
    "telephone": "+880-1966-805533",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "10:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "14:00",
        "closes": "22:00"
      }
    ],
    "priceRange": "৳৳"
  };

  return (
    <>
      <Helmet>
        <title>ComboBasket.com | Best Combo Products Online in Bangladesh</title>
        <meta name="description" content="Buy smart combo products online in Bangladesh from ComboBasket.com. Socks, gloves, caps, makeup & daily essentials in affordable combo packs with cash on delivery." />
        <meta name="keywords" content="combo products Bangladesh, buy combo items online BD, socks gloves cap combo, makeup combo offer, daily essentials combo, winter combo products BD, buy combo items online" />
        <link rel="canonical" href="https://combobasket.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ComboBasket.com | Best Combo Products Online in Bangladesh" />
        <meta property="og:description" content="Buy smart combo products online in Bangladesh. Socks, gloves, caps, makeup & daily essentials in affordable combo packs with cash on delivery." />
        <meta property="og:url" content="https://combobasket.com" />
        <meta property="og:site_name" content="ComboBasket" />
        <meta property="og:locale" content="en_BD" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ComboBasket.com | Best Combo Products Online in Bangladesh" />
        <meta name="twitter:description" content="Buy smart combo products online in Bangladesh. Affordable combo packs with cash on delivery." />
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(homeJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* SEO Intro Section */}
          <section className="sr-only">
            <h1>ComboBasket – Bangladesh's No.1 Combo Product E-commerce Platform</h1>
            <p>
              ComboBasket.com is a leading Bangladeshi e-commerce platform where customers can buy combo products online at the best price. 
              We sell daily essentials, winter items, fashion accessories, and makeup products in smart combo packs that help you save money and time. 
              Instead of buying items separately, get everything together in one affordable combo.
            </p>
          </section>
          
          <HeroSection />
          <CategorySection />
          <FeaturedProducts />
          <HowItWorks />
          <Testimonials />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
