import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "917024832751";
    const message = "Hello! I would like to inquire about your pathology services.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="whatsapp-bubble">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;