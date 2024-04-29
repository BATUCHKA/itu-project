import { useState } from "react";
import myImage from '../../assets/images/logo.png';
import { Box, Typography } from '@mui/material';
import './header.css';
import { useNavigate } from 'react-router-dom';

const headerSections = [
  { label: "SimpleBits", desc: "lorem ipsum", path: "/" },
  { label: "Work", desc: "lorem ipsum", path: "/work" },
  { label: "Shop", desc: "lorem ipsum", path: "/shop" },
  { label: "About", desc: "lorem ipsum", path: "/about" }
];

export const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleBoxClick = (sectionIndex: number, path: string) => {
    setActiveIndex(current => current === sectionIndex ? null : sectionIndex);
    navigate(path);
  };

  return (
    <Box className="containerStyle">
      <Box sx={{ height: "100%" }}>
        <Box className="imageBox">
          <Box component="img" sx={{ width: "50px", height: "50px" }} alt="logo" src={myImage} />
        </Box>
      </Box>
      {headerSections.map((section, sectionIndex) => (
        <Box key={sectionIndex} onClick={() => handleBoxClick(sectionIndex, section.path)} style={{ cursor: 'pointer' }}>
          <Typography
            style={{ color: activeIndex === sectionIndex ? 'white' : '#ab966b' }}
            className={`textStyle`}
          >
            {section.label}
          </Typography>
          <Typography
            style={{ color: activeIndex === sectionIndex ? 'white' : '#ab966b' }}
            className={`secondTextStyle`}
          >
            {section.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
