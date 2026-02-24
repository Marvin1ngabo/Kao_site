import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "250788871118"; // WhatsApp format without + or spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
