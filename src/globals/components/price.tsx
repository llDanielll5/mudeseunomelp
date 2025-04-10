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
  backgroundColor: "#fff3c3",
  backgroundImage: "url(/bg-pattern.png)", // você pode repetir esse padrão se quiser
  backgroundSize: "cover",
});

const HeaderImage = styled("div")({
  marginBottom: 16,
  display: "flex",
  justifyContent: "center",
});

const Title = styled(Typography)({
  fontWeight: 700,
  fontSize: 20,
  lineHeight: 1.4,
  marginBottom: 8,
});

const Subtitle = styled(Typography)({
  fontSize: 14,
  color: "#555",
  marginBottom: 16,
});

const OldPrice = styled(Typography)({
  textDecoration: "line-through",
  fontSize: 14,
  color: "#999",
  marginBottom: 4,
});

const PriceRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  marginBottom: 8,
});

const BigPrice = styled(Typography)({
  fontWeight: 800,
  fontSize: 32,
  color: "#3e1c0b",
  lineHeight: 1,
  marginLeft: 4,
});

const SmallText = styled(Typography)({
  fontSize: 12,
  color: "#333",
  marginBottom: 16,
});

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  fontWeight: 700,
  fontSize: 14,
  padding: "12px 16px",
  borderRadius: 8,
  textTransform: "none",
  marginBottom: 16,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },
}));

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
      sx={{ flexDirection: { xs: "column", md: "row" }, py: { xs: 0, md: 10 } }}
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
          <Typography variant="headingMd" fontWeight="bold">
            Tudo o que você terá acesso:
          </Typography>

          {[
            "Lorem Ipsum Dolor Sit",
            "Lorem Ipsum Dolor Sit",
            "Lorem Ipsum Dolor Sit",
            "Lorem Ipsum Dolor Sit",
            `Lorem Ipsum Dolor Sit`,
            "Lorem Ipsum Dolor Sit",
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
          src="/images/hero.png"
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
          12x R$ 8,08
        </Typography>

        <Typography variant="bodySm">ou 97,00 à vista</Typography>

        <Button
          variant="contained"
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
