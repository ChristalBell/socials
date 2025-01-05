import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "./Link";
const links = [
  { linkTitle: "GitHub", link: "https://github.com" },
  { linkTitle: "GitHub", link: "https://github.com" },
  { linkTitle: "GitHub", link: "https://github.com" },
  { linkTitle: "GitHub", link: "https://github.com" },
  { linkTitle: "GitHub", link: "https://github.com" },
];
const Card = () => {
  return (
    <Box
      className="cardBackground"
      sx={{
        padding: "2rem",
        borderRadius: "0.75rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src="/profile.jpg"
        alt="profile image"
        height={88}
        width={78}
        style={{ borderRadius: "50%", marginBottom: "1.5rem" }}
      />
      <Typography
        variant="h1"
        sx={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}
      >
        Christal Bell
      </Typography>
      <Typography
        className="neon"
        variant="h2"
        sx={{
          fontSize: "1.3125rem",
          fontWeight: "600",
          marginBottom: "1.5rem",
        }}
      >
        Los Angeles
      </Typography>
      <Typography
        sx={{
          fontSize: "1.3125rem",
          fontWeight: "600",
          marginBottom: "1.5rem",
        }}
      >
        Elevate Your Life
      </Typography>
      {links.map((link) => {
        return <Link linkData={link} key={link.link} />;
      })}
    </Box>
  );
};

export default Card;
