import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "+8801234567890";
  const message = encodeURIComponent("Hi! I'm interested in ordering a gift.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 p-0 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] shadow-lg hover:shadow-xl transition-all animate-bounce"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <span className="absolute -top-2 -left-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
