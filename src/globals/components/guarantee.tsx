"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const Section = styled("section")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(10, 2),
  display: "flex",
  justifyContent: "center",
  background: theme.palette.primary.main,
}));

const Container = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

const TextWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function GarantiaSection() {
  return (
    <Section>
      <Container>
        <Box position="relative" width={180} height={180}>
          <Image
            src="/images/garantia.png"
            alt="Selo de Garantia"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
        <TextWrapper>
          <Typography
            variant="headingLg"
            fontWeight={500}
            color="text.primary"
            textAlign={"center"}
            sx={{ color: "white" }}
          >
            Garantia de{" "}
            <strong style={{ textDecorationLine: "underline" }}>7 dias</strong>
          </Typography>
          <Typography
            variant="headingMd"
            fontWeight={400}
            color="text.secondary"
            textAlign={"center"}
            sx={{ color: "white" }}
          >
            Seu dinheiro de volta <strong>sem perguntas</strong> até <br />7
            dias após a compra.
          </Typography>
        </TextWrapper>
      </Container>
    </Section>
  );
}
