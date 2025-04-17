import { Box, Typography, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(36 * 53 * 51);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatUnits = () => {
    const dias = Math.floor(timeLeft / (60 * 60 * 24));
    const horas = Math.floor((timeLeft % (60 * 60 * 24)) / 3600);
    const minutos = Math.floor((timeLeft % 3600) / 60);
    const segundos = timeLeft % 60;

    return [
      { label: "Dias", value: dias },
      { label: "Horas", value: horas },
      { label: "Minutos", value: minutos },
      { label: "Segundos", value: segundos },
    ];
  };

  const unidades = formatUnits();

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #fe5f2f, #fe5f2f)",
        py: 4,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="headingXl" fontWeight="bold" mb={3} color="white">
        Essa oferta irá encerrar em:
      </Typography>

      <Grid container spacing={1} justifyContent="center">
        {unidades.map((item, index) => (
          <Grid key={index}>
            <Paper
              elevation={3}
              sx={{
                width: { md: 100, xs: 70 },
                height: { md: 105, xs: 75 },
                borderRadius: 1.5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="headingLg" fontWeight="bold" color="#000">
                {String(item.value).padStart(2, "0")}
              </Typography>
              <Typography variant={"bodyXs"} color="black">
                {item.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CountdownTimer;
