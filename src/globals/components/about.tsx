//@ts-nocheck
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Price from "./price";
import GarantiaSection from "./guarantee";
import StepByStep from "./stepByStep";

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.875rem",
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  zIndex: 1,
}));

const LogoText = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "1.25rem",
  fontWeight: 700,
  color: theme.palette.primary.main,
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

const PatternBackground = styled("div")(() => ({
  backgroundImage: "url(/images/background-about.jpg)", // você pode exportar o padrão da imagem original ou recriá-lo em SVG
  backgroundSize: "cover",
  opacity: 0.3,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
}));

const SobreTexto = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#3B1A00",
  zIndex: 1,
  position: "relative",
  textAlign: "justify",
}));

export default function Sobre() {
  return (
    <Box sx={{ bgcolor: "white", position: "relative", maxWidth: "100%" }}>
      <PatternBackground />

      <Stack
        py={4}
        zIndex={1}
        width={{ md: "100%", xs: "100%" }}
        zIndex={1}
        position={"relative"}
        direction={"column"}
        alignItems={"center"}
      >
        <Stack
          direction={"column"}
          width={{ md: "50%", xs: "100%" }}
          bgcolor={"primary.main"}
          borderRadius={2}
          p={2}
        >
          <Typography variant="headingXl" color="white" textAlign={"center"}>
            Siga os passos abaixo para:
          </Typography>

          {[
            "Mudar o seu primeiro nome",
            "Acrescentar um nome composto",
            "Acrescentar um sobrenome familiar",
          ].map((item, index) => (
            <Typography
              variant="bodyXl"
              color="white"
              textAlign={"center"}
              key={index}
            >
              {item}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <StepByStep />
      <Divider
        sx={{
          bgcolor: "primary.main",
          height: "10px",
          zIndex: 10,
          position: "relative",
        }}
      />
      <Price />
      <GarantiaSection />

      <Grid container spacing={4} alignItems="center" p={5} maxWidth={"100%"}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ position: "relative", zIndex: 1 }}
          maxWidth={"100%"}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "100%",
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledImage
              src="/images/hammer.png" // imagem do Matheus recortado com diamante
              alt="LOGO GRUPO MMS"
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }} sx={{ position: "relative", zIndex: 1 }}>
          <Title>Sobre o Autor</Title>

          <SobreTexto>
            <b>O Grupo MMS</b> <br />
            Comprometido com a capacitação da população brasileira e a promoção
            do acesso à justiça, o Grupo MMS oferece serviços educacionais e
            jurídicos de alta qualidade. <br /> <br /> Esta obra, elaborada por
            profissionais com expertise na temática e rigorosamente atualizada
            com a legislação nacional, visa difundir conhecimento essencial para
            a efetiva busca por direitos.
          </SobreTexto>
        </Grid>
      </Grid>
    </Box>
  );
}

const StyledImage = styled("img")`
  border-radius: "20px";
  max-width: 70%;
`;
