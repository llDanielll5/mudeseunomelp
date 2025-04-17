"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Garantia7Icon } from "../icons";

const Section = styled("section")(({ theme }) => ({
  width: "100%",
  alignSelf: "center",
  display: "flex",
  justifyContent: "center",
}));

const Container = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(4),
  background: theme.palette.primary.main,
  zIndex: 1,
  padding: "2.5rem",
  borderRadius: 10,
  marginBottom: "2rem",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
  "@media screen and (max-width: 760px)": {
    width: "100%",
    gap: 0,
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
        <Box position="relative">
          <Garantia7Icon sx={{ fontSize: 200 }} />
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
            OU seu dinheiro de volta <strong>sem perguntas</strong> até <br />7
            dias após a compra.
          </Typography>
        </TextWrapper>
      </Container>
    </Section>
  );
}
