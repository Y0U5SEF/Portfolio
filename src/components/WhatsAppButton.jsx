import { siWhatsapp } from "simple-icons";

const PHONE = "447828725827";
const MESSAGE = "Hi Youssef! 👋 I found your portfolio and would like to get in touch.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d={siWhatsapp.path} />
      </svg>
    </a>
  );
}
