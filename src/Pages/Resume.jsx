import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Box, Button, Grid, Typography } from "@mui/material";
import Particle from "../components/Particle";
import pdf from "../assets/Nguyen_Minh_Doan_Full_Stack_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f4f4f9", minHeight: "100vh", py: 5 }}>
      <Container maxWidth="lg">
        <Particle />
        <Grid container justifyContent="center" sx={{ mb: 4 }}>
          <Button
            variant="contained"
            color="primary"
            href={pdf}
            target="_blank"
            sx={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Grid>

        <Grid container justifyContent="center" sx={{ mb: 4 }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Document file={pdf}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Box>
        </Grid>

        <Grid container justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            href={pdf}
            target="_blank"
            sx={{ maxWidth: "250px" }}
          >
             <AiOutlineDownload />
             &nbsp;Download CV
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}

export default Resume;
