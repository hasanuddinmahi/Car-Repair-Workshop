// components/Navbar/navItems.js

export const phoneNumber = "+971505219792";
export const whatsappMessage = encodeURIComponent(
  "Hello! I would like to know more about your services."
);
export const whatsappURL = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${whatsappMessage}`;

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const extraItems = [
  {
    label: "Call",
    href: `tel:${phoneNumber}`,
    icon: "phone",
  },
  {
    label: "WhatsApp",
    href: whatsappURL,
    icon: "whatsapp",
    external: true,
  },
];
