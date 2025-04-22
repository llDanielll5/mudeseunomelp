"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Section = styled("section")(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(10, 2),
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "center",
}));

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
}));

const LeftSide = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const WhatsAppButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  textTransform: "none",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  fontSize: "1rem",
  justifyContent: "flex-start",
  gap: theme.spacing(1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },
}));

const RightSide = styled(Box)(({ theme }) => ({
  flex: 2,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#FFF",
  borderRadius: "8px",
  boxShadow: "none",
  overflow: "hidden",
  borderLeft: `6px solid ${theme.palette.primary.main}`,
  "&:before": {
    display: "none",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  minHeight: 56,
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
  "& .MuiTypography-root": {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const faqs = [
  {
    question: "Para quem é esse produto?",
    answer:
      "Para maiores de 18 anos que desejam alterar o primeiro nome, incluir um nome composto ou adicionar um sobrenome familiar sem burocracia, em qualquer lugar do Brasil.",
  },
  {
    question: "Como funciona o 'Prazo de Garantia'?",
    answer:
      "O Prazo de Garantia é o período determinado para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório.",
  },
  {
    question: "É possível realizar o pedido de alteração sozinho(a)?",
    answer:
      "Sim! Alterações simples como correções de grafia, inclusões de sobrenome familiar, mudanças do primeiro nome e acréscimos de nome composto, entre outros casos, podem ser facilmente solicitadas desde que cumpram os requisitos legais. O e-book apresenta todas as orientações necessárias! ",
  },
  {
    question: "Como acessar o produto?",
    answer: `Você receberá o acesso por email. O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital. Você também pode acessar o produto comprado nesta página: \n
01 - Faça login na Hotmart clicando em 'Entrar'
02 - Acesse o menu lateral, clique em 'Minha conta'
03 - Clique em 'Minhas compras' e lá estarão todos os produtos que você já comprou!`,
  },
  {
    question: "Como faço para comprar?",
    answer:
      "Para comprar este e-book, clique no botão “Comprar agora”. Lembre-se de que nem todos os livros estarão sempre disponíveis para compra. ",
  },
];

export default function FAQSection() {
  return (
    <Section>
      <Container>
        <LeftSide>
          <Typography variant="headingLg" fontWeight={700} color="primary.main">
            Ficou com <br /> alguma dúvida?
          </Typography>
          <Typography variant="bodySm" color="text.secondary">
            Confira as respostas para as perguntas frequentes ou entre em
            contato conosco:
          </Typography>
          {/* <WhatsAppButton
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/551181755598"
          >
            ATENDIMENTO POR WHATSAPP
          </WhatsAppButton> */}
        </LeftSide>
        <RightSide>
          {faqs.map((faq, index) => (
            <StyledAccordion key={index}>
              <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#5B2000" />}
              >
                <Typography>{faq.question}</Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </RightSide>
      </Container>
    </Section>
  );
}
