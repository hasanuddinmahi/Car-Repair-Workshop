import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fab, Tooltip } from "@mui/material";

function FloatingWhatsApp() {
  const phoneNumber = "+971505219792"; // Replace with your UAE number
  const message = encodeURIComponent("Hello! I would like to know more about your services.");
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`;

  return (
    <>
      <style>
        {`
          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            50% {
              box-shadow: 0 0 12px 6px rgba(37, 211, 102, 0.5);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
          }
          @keyframes floatUpDown {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        `}
      </style>

      <Tooltip title="Chat with us" placement="left" arrow>
        <Fab
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          sx={{
            position: "fixed",
            bottom: { xs: "70px", sm: "24px" }, // 70px so it floats above MobileCTA on mobile
            right: { xs: 16, sm: 24 },
            backgroundColor: "#25D366",
            color: "white",
            zIndex: 1305, // higher than MobileCTA (1301)
            animation: `pulseGlow 2.5s infinite ease-in-out, floatUpDown 3s infinite ease-in-out`,
            boxShadow: "0 4px 12px rgba(37, 211, 102, 0.6)",
            transition: "background-color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              backgroundColor: "#20b857",
              transform: "scale(1.15)",
              boxShadow: "0 6px 20px rgba(32, 184, 87, 0.9)",
            },
          }}
        >
          <WhatsAppIcon fontSize="large" />
        </Fab>
      </Tooltip>
    </>
  );
}

export default FloatingWhatsApp;