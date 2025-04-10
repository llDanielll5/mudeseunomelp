import { Box, Container, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: theme.spacing(6, 2),
  textAlign: "center",
}));

const LegalText = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color: "white",
  maxWidth: 800,
  margin: "0 auto",
  marginBottom: theme.spacing(3),
}));

const LogoText = styled("div")(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.125rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
  margin: `${theme.spacing(2)} 0`,
}));

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <LegalText>
          Os produtos e serviços vendidos neste site não devem ser interpretados
          como uma promessa ou garantia de resultados. Seu nível de sucesso em
          alcançar os resultados divulgados com o uso de nossos produtos e
          informações depende do tempo que você dedica à aplicação do método,
          técnicas utilizadas, conhecimento e habilidades diferentes.
        </LegalText>

        <Divider
          sx={{
            backgroundColor: "primary.main",
            margin: "16px auto",
            width: "100%",
            maxWidth: 800,
          }}
        />

        <LogoText>
          {/* Substitua por um <Image> se você quiser usar uma logo SVG ou imagem */}
          <span>E-BOOK</span>
          <span style={{ fontFamily: "sans-serif" }}>🞂</span>
          <span>MMS</span>
        </LogoText>

        <Typography variant="bodyXs" color="white">
          © Copyright 2024. Todos os direitos reservados
        </Typography>
      </Container>
    </FooterWrapper>
  );
}
