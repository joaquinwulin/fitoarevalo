export const WHATSAPP_NUMBER = "34600000000";
export const WHATSAPP_MESSAGE =
  "Hola, me interesa tener mi propia app de pedidos. ¿Me pueden dar más información?";

export const getWhatsAppUrl = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
