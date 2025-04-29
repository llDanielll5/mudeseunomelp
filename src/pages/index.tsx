import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Hero from "../globals/components/hero";
import Footer from "../globals/components/footer";
import About from "../globals/components/about";
import FAQ from "../globals/components/faq";
import CountdownHeader from "../globals/components/countDownHeader";
import CustomTextField from "../globals/components/custom-text-field";
import axios from "axios";
import * as Yup from "yup";

interface ContactFormInterface {
  name: string;
  phone: string;
  email: string;
  text: string;
}

const Home = () => {
  const initialValues: ContactFormInterface = {
    name: "",
    phone: "",
    email: "",
    text: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    phone: Yup.string().required("Telefone é obrigatório"),
    email: Yup.string()
      .required("Campo email obrigatório")
      .email("Deve informar um Email valido"),
  });

  const onSubmit = async (values: ContactFormInterface) => {
    console.log("teste");
    try {
      const { data } = await axios.post("/api/send-email", values, {
        headers: { "Content-Type": "application/json" },
      });
      if (data.success) alert("Enviado!");
    } catch (err: any) {
      return console.log(
        err?.error.message ?? err?.error?.response?.data ?? err?.error?.response
      );
    }
  };

  return (
    <Box width={"100%"}>
      <Hero />
      <CountdownHeader />
      <About />
      <FAQ />
      {/* <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant="headingLg" color="primary.main">
          Contate-nos
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount={false}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <Grid
              container
              spacing={2}
              width={{ md: "60%", xs: "90%" }}
              p={2}
              component={Form}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <CustomTextField
                  name="name"
                  label="Digite seu nome Completo"
                  sx={{ bgcolor: "white" }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <CustomTextField
                  name="phone"
                  label="Digite seu Telefone"
                  sx={{ bgcolor: "white" }}
                  mask="phone"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <CustomTextField
                  name="email"
                  label="Digite seu E-mail"
                  sx={{ bgcolor: "white" }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <CustomTextField
                  multiline
                  rows={5}
                  name="text"
                  label="Digite sua mensagem completa"
                  sx={{ bgcolor: "white" }}
                />
              </Grid>

              <Button fullWidth type="submit" disabled={isSubmitting}>
                Enviar
              </Button>
            </Grid>
          )}
        </Formik>
      </Stack> */}
      <Footer />
    </Box>
  );
};

export default Home;
