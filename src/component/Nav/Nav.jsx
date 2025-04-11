import { useNavigate } from "react-router-dom";
import { NavbarContainer, NavLink } from "./Nav.style";

const Nav = () => {
  const navi = useNavigate();

  return (
    <>
      <NavbarContainer>
        <NavLink onClick={() => navi("/")}>123123</NavLink>
        <NavLink onClick={() => navi("/MainMypage")}>123123</NavLink>
      </NavbarContainer>
    </>
  );
};

export default Nav;
