import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/home/WhatsAppButton";
import { Shield, Lock, Eye, Database } from "lucide-react";

const Privacy = () => {
  const privacyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - ComboBasket.com",
    "description": "ComboBasket protects your personal data and privacy while shopping combo products online in Bangladesh.",
    "url": "https://combobasket.com/privacy"
  };

  const privacyHighlights = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We use industry-standard security to protect your data"
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "All payment information is encrypted and secure"
    },
    {
      icon: Eye,
      title: "No Third-Party Sharing",
      description: "We never sell or share your data with third parties"
    },
    {
      icon: Database,
      title: "Limited Collection",
      description: "We only collect data necessary for order processing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>ComboBasket Privacy Policy | Secure Online Shopping Bangladesh</title>
        <meta name="description" content="ComboBasket protects your personal data and privacy while shopping combo products online in Bangladesh." />
        <meta name="keywords" content="combobasket privacy, data protection, secure shopping bangladesh, online privacy policy" />
        <link rel="canonical" href="https://combobasket.com/privacy" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy - ComboBasket.com" />
        <meta property="og:description" content="ComboBasket protects your personal data and privacy while shopping combo products online in Bangladesh." />
        <meta property="og:url" content="https://combobasket.com/privacy" />
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(privacyJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy – ComboBasket.com</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ComboBasket values customer privacy and data protection. We collect customer information 
                only to process orders, ensure delivery, and provide better combo product offers.
              </p>
            </div>
          </div>

          {/* Privacy Highlights */}
          <section className="container mx-auto px-4 -mt-8 mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyHighlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Privacy Content */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-lg space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    We collect only the information necessary to process your orders and provide a better shopping experience:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Customer name
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Phone number
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Shipping address
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Email address (optional)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Order history and preferences
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>To process and deliver your combo product orders</li>
                    <li>To send order confirmations and shipping updates via SMS/email</li>
                    <li>To provide customer support and respond to inquiries</li>
                    <li>To improve our products and services</li>
                    <li>To send promotional offers (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mt-4">
                    <li>SSL encryption for all data transmission</li>
                    <li>Secure payment processing through trusted providers</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited employee access to customer data</li>
                    <li>Secure data storage with backup systems</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Disclosure</h2>
                  <p className="text-muted-foreground">
                    <strong>We never sell or share your personal data with third parties for marketing purposes.</strong>
                  </p>
                  <p className="text-muted-foreground mt-4">
                    We may share information only with:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mt-2">
                    <li>Delivery partners (for shipping purposes only)</li>
                    <li>Payment processors (for transaction processing)</li>
                    <li>Law enforcement (if required by law)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Request access to your personal data</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your account and data</li>
                    <li>Opt-out of promotional communications</li>
                    <li>Contact us with any privacy concerns</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    For privacy-related inquiries or to exercise your data rights, contact us:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mt-4">
                    <li>Email: support@combobasket.com</li>
                    <li>Phone: +880 1966 805533</li>
                  </ul>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    Last updated: January 2026. This privacy policy may be updated periodically. 
                    We encourage you to review this page for any changes.
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

export default Privacy;
