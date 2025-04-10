//@ts-nocheck
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const SobreSection = styled("section")(({ theme }) => ({
  backgroundColor: "#fff3c3",
  padding: theme.spacing(8, 2),
  position: "relative",
  overflow: "hidden",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.875rem",
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
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
  backgroundImage: "url(/pattern.png)", // você pode exportar o padrão da imagem original ou recriá-lo em SVG
  opacity: 0.1,
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
    <SobreSection>
      <PatternBackground />
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Title>Sobre o Autor - Grupo MMS</Title>
            <LogoText>
              <span>E-BOOK</span>
              <span style={{ fontFamily: "sans-serif" }}>🞂</span>
              <span>MMS</span>
            </LogoText>
            <SobreTexto>
              O grupo MMS tem a responsabilidade e a finalidade de oferecer
              serviços educacionais e jurídicos com vistas à difusão de
              conhecimento para a capacitação da população brasileira na busca
              por seus direitos. <br />
              <br />
              Esta obra foi elaborada por profissionais capacitados na temática,
              estando devidamente atualizada com a legislação nacional.
            </SobreTexto>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: "relative", zIndex: 1 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 400,
                mx: "auto",
              }}
            >
              <Image
                src="/matheus.png" // imagem do Matheus recortado com diamante
                alt="LOGO GRUPO MMS"
                width={400}
                height={500}
                style={{ borderRadius: 12 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SobreSection>
  );
}
