"use client";

import Image from "next/image";
import { alpha, Stack, styled } from "@mui/system";
import { Box, Typography, Button, Divider } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PixIcon from "@mui/icons-material/Pix";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  AmexIcon,
  BoletoIcon,
  EloCardIcon,
  MasterCardIcon,
  VisaCardIcon,
} from "../icons";

const Container = styled(Box)({
  px: 2,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  backgroundColor: "transparent",
});

const PaymentIcons = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: 8,
  marginTop: 8,
  flexWrap: "wrap",
});

export default function Price() {
  return (
    <Container
      sx={{
        flexDirection: { xs: "column", md: "row" },
        bgColor: "transparent",
        py: { xs: 0, md: 10 },
        position: "relative",
        zIndex: 1,
        pb: { xs: 2 },
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          maxWidth: "100%",
          color: "white",
          width: { md: "65%", xs: "80%" },
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Stack>
          <Typography variant="headingMd" fontWeight="bold" mb={1}>
            Benefícios que nosso e-book lhe traz:
          </Typography>

          {[
            "Tenha finalmente um nome que te represente de verdade",
            "Não espere por ninguém e nem dependa de Advogado.",
            "Remova traumas que seu nome lhe trouxe no passado.",
            "Economize muito por ter o conhecimento certo para o que precisa",
            "Exercite um direito legal seu Constitucional",
            "E muito mais...",
          ].map((item, index) => (
            <Box key={index} display="flex" alignItems={"center"} my={1.5}>
              <CheckCircleIcon sx={{ color: "success.light", mr: 1 }} />
              <Typography variant="bodySm">{item}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 4,
          p: 3,
          maxWidth: 380,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          border: "2px solid #8f2821",
          mx: { xs: 2, md: 0 },
        }}
      >
        <Image
          src="/images/ebook.png"
          alt="Mockup do ebook"
          width={300}
          height={100}
          style={{ objectFit: "contain" }}
        />

        <Typography variant="headingSm" fontWeight="bold" mt={2}>
          Saiba como Mudar de Nome com Facilidade
        </Typography>

        <Typography variant="bodySm" color="textSecondary" mt={1}>
          APROVEITE ESSA OPORTUNIDADE
        </Typography>

        <Typography
          variant="bodySm"
          mt={2}
          sx={{ textDecoration: "line-through", color: "#555" }}
        >
          De R$ 247,00
        </Typography>

        <Typography variant="bodySmBold" fontWeight="medium">
          Por apenas:
        </Typography>

        <Typography variant="headingLg" fontWeight="bold" color="#7c2e15">
          12x R$ 10,03
        </Typography>

        <Typography variant="bodySm">ou 97,00 à vista</Typography>

        <Button
          variant="contained"
          href="https://pay.hotmart.com/C97218807O"
          sx={{
            mt: 3,
            backgroundColor: "primary.main",
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#652610",
            },
            px: 3,
          }}
        >
          QUERO TER ACESSO AO EBOOK
        </Button>

        <PaymentIcons>
          <VisaCardIcon sx={{ fontSize: 32, color: "primary.main" }} />
          <MasterCardIcon sx={{ fontSize: 32 }} />
          <AmexIcon sx={{ fontSize: 32, color: "primary.main" }} />
          <EloCardIcon sx={{ fontSize: 32, color: "primary.main" }} />
          <PixIcon sx={{ fontSize: 32, color: "primary.main" }} />
          <BoletoIcon sx={{ fontSize: 32, color: "primary.main" }} />
        </PaymentIcons>
      </Box>
    </Container>
  );
}
