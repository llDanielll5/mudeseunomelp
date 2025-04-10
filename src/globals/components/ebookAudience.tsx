"use client";

import { Box, Typography } from "@mui/material";
import { createTheme, styled } from "@mui/system";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LuggageIcon from "@mui/icons-material/Luggage";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
const theme = createTheme();

const SectionWrapper = styled(Box)({
  padding: "64px 24px",
  textAlign: "center",
});

const Title = styled(Typography)({
  fontSize: 24,
  fontWeight: 700,
  marginBottom: 40,
});

const CardRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  rowGap: "1rem",
  marginTop: "1rem",
  columnGap: "1rem",

  "@media screen and (max-width: 720px)": {
    flexDirection: "column",
  },
});

const Card = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  borderRadius: 16,
  color: theme.palette.primary.main,
  minHeight: "200px",
  padding: 20,
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  textAlign: "left",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",

  "@media screen and (max-width: 720px)": {
    width: "90%",
  },
}));

const CardText = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const CardTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: 14,
});

const CardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const audiences = [
  {
    icon: <ManageAccountsIcon sx={{ fontSize: "10rem" }} />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris in libero elementum feugiat. Cras pulvinar finibus purus. Proin leo nibh",
  },
  {
    icon: <ManageAccountsIcon sx={{ fontSize: "10rem" }} />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris in libero elementum feugiat. Cras pulvinar finibus purus. Proin leo nibh",
  },
  {
    icon: <ManageAccountsIcon sx={{ fontSize: "10rem" }} />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris in libero elementum feugiat. Cras pulvinar finibus purus. Proin leo nibh",
  },
  {
    icon: <ManageAccountsIcon sx={{ fontSize: "10rem" }} />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris in libero elementum feugiat. Cras pulvinar finibus purus. Proin leo nibh",
  },
];

export default function EbookAudience() {
  return (
    <SectionWrapper bgcolor={"primary.main"}>
      <Typography variant="headingXl" color="white">
        O Ebook é para aqueles que:
      </Typography>
      <CardRow>
        {audiences.map((v, i) => (
          <Card>
            {v.icon}
            <CardText>
              <CardDescription variant="bodyMd" textAlign={"center"}>
                {v.description}
              </CardDescription>
            </CardText>
          </Card>
        ))}
      </CardRow>
    </SectionWrapper>
  );
}
