import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assests/logo.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      backgroundColor: "#01000a",
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "5px",
        marginLeft: "10px",
      }}
    >
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
