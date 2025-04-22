import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { BOOK_VALUE } from "../utils/constants";

export default function Header() {
  return (
    <Box
      sx={{
        position: "relative",
        py: "2rem",
        backgroundImage: `
  radial-gradient(circle at right, rgba(254, 95, 47, 0.2) 0%, rgba(139, 56, 31, 0.90) 40%),
  url("/images/sign.jpg")
`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* LADO ESQUERDO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem" },
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              <BorderedText
                sx={{
                  color: "#ffa830",
                  fontSize: { xs: "3rem", md: "5rem" },
                }}
              >
                Domine
              </BorderedText>{" "}
              A MANEIRA DE MUDAR de nome <br />
              <BorderedText
                sx={{
                  color: "#ffa830",
                  fontSize: { xs: "3rem", md: "5rem" },
                }}
              >
                no BRASIL
              </BorderedText>{" "}
            </Typography>

            <Typography variant="bodyXl" sx={{ mb: 2 }}>
              Você sabia que mudar de nome no Brasil é um direito garantido por
              lei e que qualquer pessoa pode fazer isso sozinha,{" "}
              <b>sem depender de advogados ou gastar rios de dinheiro?</b>{" "}
              <br /> <br />
            </Typography>

            <Typography variant="headingMd" fontWeight={700} sx={{ mb: 2 }}>
              Neste eBook 100% prático, você vai aprender o passo a passo
              completo para mudar seu nome de forma legal, segura e rápida.
            </Typography>

            <br />
            <br />

            <Typography variant="bodySm" sx={{ mb: 4 }}>
              Se você não se reconhece mais no nome que tem, se deseja corrigir
              algo que te incomoda há anos, se pretende incluir um sobrenome
              familiar ou até mesmo está em processo de transição de gênero,
              esse guia é para você.
            </Typography>

            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: 2,
                p: 2,
                mt: 4,
                display: "inline-block",
              }}
            >
              <Typography variant="bodyLg" sx={{ color: "white" }}>
                OFERTA ESPECIAL POR <strong>TEMPO LIMITADO!</strong>
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                href="https://pay.hotmart.com/C97218807O"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  my: 1,
                  transition: ".3s",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    opacity: 0.8,
                  },
                }}
              >
                QUERO MEU EXEMPLAR AGORA
              </Button>

              <Typography variant="headingMd" sx={{ display: "block" }}>
                Apenas{" "}
                <strong>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(BOOK_VALUE)}
                </strong>
              </Typography>
              <Typography variant="bodyXs" color="gray">
                Aviso: O preço pode ser reajustado a qualquer momento.
              </Typography>
            </Box>
          </Grid>

          {/* LADO DIREITO - IMAGEM DO EBOOK */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="/images/ebook.png" // Altere conforme o caminho da sua imagem
              alt="E-book 20 Maneiras"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const BorderedText = styled(Box)`
  font-weight: 800;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
`;
