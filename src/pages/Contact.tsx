import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/home/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Dhaka, Bangladesh"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+880 1966 805533"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@combobasket.com"]
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["10 AM – 10 PM (Everyday)"]
    }
  ];

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "We deliver within Dhaka in 1-2 days and outside Dhaka in 3-5 business days. Cash on delivery available all over Bangladesh."
    },
    {
      question: "Can I track my order?",
      answer: "Yes! Once your order is shipped, you'll receive a tracking number via SMS to monitor your delivery status."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 7 days for unused items in original packaging. Contact our support team to initiate a return."
    },
    {
      question: "Do you deliver all over Bangladesh?",
      answer: "Yes, we deliver combo products to every district in Bangladesh with cash on delivery option."
    }
  ];

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ComboBasket",
    "description": "Need help with your combo product order? Contact ComboBasket customer support for fast assistance across Bangladesh.",
    "url": "https://combobasket.com/contact"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Contact ComboBasket | Online Combo Shopping Support in Bangladesh</title>
        <meta name="description" content="Need help with your combo product order? Contact ComboBasket customer support for fast assistance across Bangladesh." />
        <meta name="keywords" content="contact combobasket, combo product support, customer support bangladesh, online shopping help" />
        <link rel="canonical" href="https://combobasket.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact ComboBasket - Customer Support" />
        <meta property="og:description" content="Need help with your combo product order? Contact ComboBasket customer support for fast assistance across Bangladesh." />
        <meta property="og:url" content="https://combobasket.com/contact" />
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(contactJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact ComboBasket – We're Here to Help You</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                If you have any questions about our combo products, delivery, payment, or order status, 
                feel free to contact ComboBasket. Our support team is always ready to help!
              </p>
            </div>
          </div>

          {/* Contact Info Cards */}
          <section className="container mx-auto px-4 -mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form & Map */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-1.5" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-1.5" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-1.5" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+880 1966 805533" className="mt-1.5" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" className="mt-1.5" required />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      className="mt-1.5 min-h-[120px]" 
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-muted rounded-2xl h-[300px] flex items-center justify-center overflow-hidden">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Dhaka, Bangladesh</p>
                    <p className="text-sm">We deliver all across Bangladesh</p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-primary/5 rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Need Immediate Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent orders or quick questions about combo products, reach out to us directly on WhatsApp 
                    for the fastest response.
                  </p>
                  <a 
                    href="https://wa.me/8801966805533"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-muted/50 py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Find quick answers to common questions about our combo products and services
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                ))}
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

export default Contact;
