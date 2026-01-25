import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/home/WhatsAppButton";

const Terms = () => {
  const termsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - ComboBasket.com",
    "description": "Read ComboBasket terms and conditions for combo product shopping, delivery, payments, and returns in Bangladesh.",
    "url": "https://combobasket.com/terms"
  };

  return (
    <>
      <Helmet>
        <title>ComboBasket Terms & Conditions | Online Shopping Policy Bangladesh</title>
        <meta name="description" content="Read ComboBasket terms and conditions for combo product shopping, delivery, payments, and returns in Bangladesh." />
        <meta name="keywords" content="combobasket terms, online shopping terms, combo product policy, bangladesh ecommerce terms" />
        <link rel="canonical" href="https://combobasket.com/terms" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms and Conditions - ComboBasket.com" />
        <meta property="og:description" content="Read ComboBasket terms and conditions for combo product shopping, delivery, payments, and returns in Bangladesh." />
        <meta property="og:url" content="https://combobasket.com/terms" />
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(termsJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms and Conditions – ComboBasket.com</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                By using ComboBasket.com, you agree to follow our terms and conditions. 
                These terms ensure a safe and transparent online shopping experience for buying combo products in Bangladesh.
              </p>
            </div>
          </div>

          {/* Terms Content */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
              <div className="bg-card rounded-2xl p-8 shadow-lg space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. General Terms</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>All combo product prices are listed in BDT (Bangladeshi Taka)</li>
                    <li>Product images are for reference only and may vary slightly from actual products</li>
                    <li>Combo offers and prices may change without prior notice</li>
                    <li>Orders may be cancelled before shipping if stock is unavailable</li>
                    <li>We reserve the right to limit quantities for bulk orders</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Ordering & Payment</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Orders can be placed through our website 24/7</li>
                    <li>Cash on Delivery (COD) is available all over Bangladesh</li>
                    <li>Online payment options include bKash, Nagad, and card payments</li>
                    <li>Order confirmation will be sent via SMS and email</li>
                    <li>Customers must provide accurate delivery information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Delivery Policy</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Delivery time within Dhaka: 1-2 business days</li>
                    <li>Delivery time outside Dhaka: 3-5 business days</li>
                    <li>Delivery charges vary by location and order value</li>
                    <li>Free delivery may be available on orders above a certain amount</li>
                    <li>Customers will receive tracking information once shipped</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Returns & Refunds</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Returns accepted within 7 days of delivery for unused items</li>
                    <li>Products must be in original packaging with tags intact</li>
                    <li>Refunds will be processed within 7-10 business days</li>
                    <li>Shipping costs for returns are borne by the customer</li>
                    <li>Damaged or defective items will be replaced free of charge</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Information</h2>
                  <p className="text-muted-foreground">
                    For any questions regarding these terms, please contact us:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mt-4">
                    <li>Email: support@combobasket.com</li>
                    <li>Phone: +880 1966 805533</li>
                    <li>Support Hours: 10 AM – 10 PM (Everyday)</li>
                  </ul>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    Last updated: January 2026. ComboBasket.com reserves the right to modify these terms at any time. 
                    Continued use of the website constitutes acceptance of any changes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Terms;
