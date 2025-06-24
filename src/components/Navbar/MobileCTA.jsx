// components/MobileCTA.jsx
import React from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";

function MobileCTA({ phoneNumber, whatsappURL }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  if (!isMobile) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1a1a1a",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        zIndex: 1301,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Button
        variant="contained"
        color="success"
        startIcon={<WhatsAppIcon />}
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ flex: 1, mx: 1 }}
      >
        {t("whatsapp")}
      </Button>
      <Button
        variant="contained"
        color="primary"
        startIcon={<PhoneIcon />}
        href={`tel:${phoneNumber}`}
        sx={{ flex: 1, mx: 1 }}
      >
        {t("call")}
      </Button>
    </Box>
  );
}

export default MobileCTA;
