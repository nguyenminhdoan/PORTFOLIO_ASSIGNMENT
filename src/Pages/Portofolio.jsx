import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// const orderApp = "../assets/orderApp.png";
import orderApp from "../assets/orderApp.png";
import ecommerce from "../assets/ecommerce.jpg";
import cert1 from "../assets/Cumlaude.jpg";
import cert2 from "../assets/Samsung-Innovation-cert.jpg";
import cert3 from "../assets/Mobile-challenge-cert.jpg";
const PROJECT_DATA = [
  {
    id: "Aritmatika Solver",
    Link: "",
    TechStack: ["Python"],
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    Title: "Aritmatika Solver",
    Img: orderApp,
    Features: [
      "Menghitung suku tertentu dari barisan aritmatika dengan menggunakan rumus suku ke-n.",
      "Menentukan suku pertama atau beda jika hanya dua suku diketahui dalam barisan aritmatika.",
      "Menghitung jumlah n suku pertama dari deret aritmatika dengan langkah perhitungan yang jelas.",
    ],
    Github: "",
  },
  {
    id: "AutoChat-Discord",
    Title: "AutoChat-Discord",
    Link: "",
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    Features: [
      "Customize the message content as needed.",
      "Send messages to multiple Discord channels simultaneously.",
      "Set custom delay intervals between messages for controlled messaging.",
      "AutoChat runs non-stop to ensure continuous messaging.",
    ],
    TechStack: [
      "ReactJS",
      "AOS",
      "Tailwind CSS",
      "Material UI",
      "Python",
      "Firebase",
      "Sweetalert2",
      "Vite",
      "CSS",
    ],
    Img: ecommerce,
    Github: "Private",
  },
  {
    id: "Buku Catatan",
    Github: "",
    Link: "",
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    TechStack: ["ReactJS", "Vite", "CSS"],
    Title: "Buku Catatan",
    Img: "https://www.quytech.com/blog/wp-content/uploads/2021/09/Features-of-real-estate-app-development-scaled.jpg",
    Features: [
      "Pengguna dapat membuat, mengedit, dan mengatur catatan dengan mudah sesuai kebutuhan.",
      "Memungkinkan pengguna untuk menemukan catatan dengan cepat menggunakan kata kunci.",
    ],
  },
  {
    id: "Growtopia-Calculator",
    Github: "",
    Title: "Growtopia-Calculator",
    Link: "",
    Img: "https://idapgroup.com/blog/blog/wp-content/uploads/2023/05/image4.png",
    Features: [
      "Menghitung modal awal, profit kotor, dan profit bersih secara otomatis dari penjualan tools.",
      "Mensimulasikan jumlah pack yang dijual dan harga per pack untuk merencanakan strategi penjualan.",
      "Memberikan ringkasan data penjualan untuk membantu analisis performa toko vending.",
    ],
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    TechStack: ["GSAP", "AOS", "HTML", "CSS", "Javascript"],
  },
  {
    id: "IT Support Bekasi",
    Github: "Private",
    Img: "https://oyelabs.com/wp-content/uploads/2024/02/Instagram-Clone.png",
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    Features: [
      "Menawarkan jasa layanan IT seperti service, maintenance, dan instalasi CCTV.",
      "Menampilkan galeri proyek yang telah dikerjakan.",
      "Fitur kontak untuk mempermudah konsultasi dan permintaan layanan.",
    ],
    TechStack: ["ReactJS", "Vite", "Tailwind CSS", "AOS", "CSS"],
    Title: "IT Support Bekasi",
    Link: "",
  },
  {
    id: "Portofolio-V4",
    Github: "",
    Title: "Portofolio-V4",
    Features: [
      "Menampilkan berbagai proyek yang telah diselesaikan dengan berbagai detail informasi",
      "Menampilkan sertifikat yang saya peroleh",
      "Menampilkan teknologi yang di pakai di setiap proyek",
    ],
    TechStack: ["ReactJS", "MUI", "Tailwind CSS", "Vercel", "AOS"],
    Img: "https://www.sourcecodester.com/sites/default/files/images/janobe/2019-08-05_1.png",
    Link: "",
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
  },
  {
    id: "QR Code Generator",
    TechStack: ["Popperjs", "Javascript", "HTML", "CSS"],
    Link: "",
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    Img: "https://repository-images.githubusercontent.com/129268678/0cde9100-f822-11e9-96ef-fbfa2b0a1c74",
    Title: "QR Code Generator",
    Features: [
      "Mengubah teks atau URL menjadi QR Code dengan mudah.",
      "Menyediakan opsi untuk mengunduh QR Code yang telah dibuat.",
    ],
    Github: "",
  },
  {
    id: "The-Cats",
    Github: "",
    Title: "The Cats",
    Link: "",
    Features: [
      "Melihat koleksi foto kucing yang dibagikan oleh orang lain.",
      "Mengunggah foto kucing Anda untuk dibagikan dengan orang lain.",
    ],
    Img: "https://www.scalefocus.com/wp-content/uploads/2023/11/SF_FocusCalc_banner_hero_n.png",
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    TechStack: [
      "ReactJS",
      "Vite",
      "Tailwind CSS",
      "Sweetalert2",
      "Firebase",
      "Material UI",
      "CSS",
    ],
  },
  {
    id: "Web Kelas V1",
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    Features: [
      "Menyediakan jadwal pelajaran yang memudahkan siswa mengakses informasi terkait kelas.",
      "Menampilkan jadwal piket untuk membantu siswa mengatur tugas dan tanggung jawab.",
      "Fitur menfess yang memungkinkan siswa berbagi pesan secara anonim dengan teman-teman mereka.",
    ],
    TechStack: ["HTML", "CSS", "Javascript", "Boostrap", "AOS"],
    Title: "Web Kelas V1",
    Github: "Private",
    Img: "https://blog.cgify.com/wp-content/uploads/2020/11/financial_application_development.jpg",
    Link: "",
  },
  {
    id: "Web Kelas V2",
    TechStack: [
      "Firebase",
      "ReactJS",
      "CSS",
      "Material UI",
      "Sweetalert2",
      "Slick",
      "Tailwind CSS",
      "AOS",
      "Vite",
    ],
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    Link: "",
    Title: "Web Kelas V2",
    Github: "",
    Img: "https://www.toyotafinancial.com/content/dam/tmcc-webcommons/toyotafinancial/landing-page/tfs/supercharged_payments.png",
    Features: [
      "Menyediakan fitur Text Anonim untuk berbagi pesan anonim antar siswa.",
      "Menyediakan Gallery untuk berbagi foto-foto kegiatan kelas.",
      "Menyediakan Schedule yang memudahkan siswa mengakses jadwal pelajaran dan kegiatan kelas.",
      "Menyediakan Structure yang menampilkan informasi terkait struktur dan organisasi kelas.",
    ],
  },
  {
    id: "WhatsApp Clone",
    Github: "",
    TechStack: ["HTML", "CSS", "Javascript", "Bootstrap", "SweetAlert2"],
    Features: [
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    ],
    Link: "",
    Title: "WhatsApp Clone",
    Description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    Img: "https://sendbird.sfo3.digitaloceanspaces.com/cms/Blog-mobile-WhatsApp-messenger-clone.png",
  },
];

const CERT_DATA = [
  {
    Img: cert1,
  },
  {
    Img: cert2,
  },
  {
    Img: cert3,
  },
  {
    Img: cert3,
  },
  {
    Img: cert2,
  },
  {
    Img: cert1,
  },
  {
    Img: cert2,
  },
];

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${
            isShowingMore
              ? "group-hover:-translate-y-0.5"
              : "group-hover:translate-y-0.5"
          }
        `}
      >
        <polyline
          points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
        ></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  // const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else {
      setShowAllCertificates((prev) => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects
    ? PROJECT_DATA
    : PROJECT_DATA.slice(0, initialItems);
  const displayedCertificates = showAllCertificates
    ? CERT_DATA
    : CERT_DATA.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portofolio"
      style={{ marginTop: "80px" }}
    >
      {/* Header section - unchanged */}
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={
                <Code className="mb-2 w-5 h-5 transition-all duration-300" />
              }
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <Award className="mb-2 w-5 h-5 transition-all duration-300" />
              }
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={
                <Boxes className="mb-2 w-5 h-5 transition-all duration-300" />
              }
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {PROJECT_DATA.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("projects")}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("certificates")}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <TechStackIcon
                      TechStackIcon={stack.icon}
                      Language={stack.language}
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
