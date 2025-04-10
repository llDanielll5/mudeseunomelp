// components/Hero.tsx
import { Box, Button, Stack, styled, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        bgcolor: "#fff3c3",
        padding: { xs: ".6rem", md: "2rem" },
        columnGap: { xs: ".6rem", md: "2rem" },
      }}
    >
      {/* Seção de Texto */}
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="headingLg"
          color="white"
          gutterBottom
          textAlign={"center"}
          sx={{ bgcolor: "primary.main", borderRadius: "5px" }}
        >
          EBOOK
        </Typography>
        <Stack p={2}>
          <Typography
            variant="headingLg"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            7 Passos para a mudança de nome
          </Typography>
          <Typography variant="headingMd" color="text.secondary" gutterBottom>
            Aprenda a mudar você mesmo o seu <strong>NOME</strong>
          </Typography>
          <Typography variant="bodyLg" color="text.secondary" marginBottom={3}>
            Ao ler este e-book você vai aprender, de forma clara e prática, como
            alterar o seu Registro Civil em qualquer Município do Brasil, sem
            precisar de processo judicial ou auxílio jurídico.
          </Typography>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<WorkspacePremiumIcon />}
        >
          QUERO TER ACESSO AO EBOOK
        </Button>
        <Stack
          direction="row"
          spacing={1}
          mt={2}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {/* Adicione aqui os ícones de formas de pagamento */}
          {/* Exemplo: */}
          {/* <Image src="/visa.png" alt="Visa" width={40} height={25} /> */}
          {/* <Image src="/mastercard.png" alt="Mastercard" width={40} height={25} /> */}
          {/* ... outros ícones */}
        </Stack>
      </Box>

      {/* Seção de Imagens */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "40%" },
        }}
      >
        <img src="/images/hero.png" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
};

const Container = styled(Box)`
  background-image: url(/images/hero.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  min-height: 700px;
  align-items: left;
  justify-content: center;
  padding: 1rem;
`;

export default Hero;
