import {
  Box,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  Stack,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HikingIcon from "@mui/icons-material/Hiking";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import LanguageIcon from "@mui/icons-material/Language";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

type Step = {
  titulo: string;
  descricao: string;
  icon: any;
};

const passos: Step[] = [
  {
    titulo: "Passo 1",
    descricao:
      "Saiba como iniciar o processo de mudança com segurança e de acordo com a legislação brasileira.",
    icon: <HikingIcon sx={{ fontSize: "100px" }} />,
  },
  {
    titulo: "Passo 2",
    descricao: "Identifique os documentos necessários para o pedido.",
    icon: <FilePresentIcon sx={{ fontSize: "100px" }} />,
  },
  {
    titulo: "Passo 3",
    descricao: "Emita os documentos pela internet.",
    icon: <LanguageIcon sx={{ fontSize: "100px" }} />,
  },
  {
    titulo: "Passo 4",
    descricao: "Apresente o pedido pessoalmente.",
    icon: <CoPresentIcon sx={{ fontSize: "100px" }} />,
  },
  {
    titulo: "Passo 5",
    descricao: "Pague as taxas necessárias.",
    icon: <MonetizationOnIcon sx={{ fontSize: "100px" }} />,
  },
  {
    titulo: "Passo 6",
    descricao: "Retire a nova certidão.",
    icon: <PostAddIcon sx={{ fontSize: "100px" }} />,
  },
  {
    titulo: "Passo 7",
    descricao: "Troque os seus documentos pessoais e finalize o procedimento!",
    icon: <MilitaryTechIcon sx={{ fontSize: "100px" }} />,
  },
];

export default function PassoAPasso() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        py: 10,
        px: 2,
        position: "relative",
      }}
    >
      {/* Linha central */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "4px",
          height: "100%",
          backgroundColor: "primary.main",
        }}
      />

      {passos.map((step, index) => {
        const isLeft = index % 2 === 0;

        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: isMobile
                ? "center"
                : isLeft
                ? "flex-start"
                : "flex-end",
              position: "relative",
              mb: 6,
              zIndex: 1,
            }}
          >
            <Card
              sx={{
                width: isMobile ? "100%" : "45%",
                backgroundColor: "primary.main",
                color: "#fff",
                borderRadius: 3,
                boxShadow: 5,
                position: "relative",
              }}
            >
              <CardContent
                sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
              >
                {step.icon}
                <Stack direction={"column"}>
                  <Typography variant="headingLg" fontWeight="bold">
                    {step.titulo}
                  </Typography>
                  <Typography variant="bodyLg">{step.descricao}</Typography>
                </Stack>
              </CardContent>
            </Card>

            {/* Conector entre a linha e o card */}
            {!isMobile && (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  width: 20,
                  height: 20,
                  backgroundColor: "primary.main",
                  borderRadius: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  border: "4px solid primary.main",
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
