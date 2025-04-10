//@ts-nocheck
import { Box, Grid, Typography, Button, alpha } from "@mui/material";
import { useEffect, useState } from "react";

const CountdownHeader = () => {
  const [timeLeft, setTimeLeft] = useState<number>(1150); // 1 hora em segundos

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

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems={"center"}
      spacing={2}
      sx={{ bgcolor: "primary.main", p: 3, color: "white" }}
    >
      <Grid item xs={12} md={6}>
        <Typography
          variant="headingXl"
          sx={{ textTransform: "uppercase", textAlign: "center" }}
        >
          Oferta Especial por tempo limitado!
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          variant="headingMd"
          color={"primary.main"}
          sx={{ bgcolor: "white", p: 1, borderRadius: "5px" }}
        >
          Tempo Restante: {formatTime(timeLeft)}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          sx={{
            color: "primary.main",
            bgcolor: "white",
            ":hover": { bgcolor: alpha("#FFF", 0.9) },
          }}
        >
          COMPRAR AGORA
        </Button>
      </Grid>
    </Grid>
  );
};

export default CountdownHeader;
