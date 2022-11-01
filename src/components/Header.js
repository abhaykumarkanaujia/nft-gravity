import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Colors, Devices } from "./Theme";
import Button from "./styled/Button.styled";
import SearchBar from "./Header/SearchBar";
import SearchBarMob from "./Header/MobileSearchBar";
import { useState } from "react";

const HeaderEl = styled.header`
  z-index: 10;
  display: flex;
  color: ${Colors.White};
  width: 100%;
  align-items: center;
  height: 100%;
  gap: 1rem;
  padding: 1rem 1.5rem;
  top: 0;
  background-color: ${Colors.Background};
  box-shadow: 0px 0px 3rem ${Colors.Primary};
  

  position: sticky;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoText = styled.a`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${Colors.White};
  display:none;
  
  
`;

const Logo = styled.img`
  width: 75px;
  padding-right: 1rem;
  
`;

const Nav = styled.nav`
  margin-left: auto;
  padding-right: 1rem;
  display: none;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 3rem;
  }

  @media ${Devices.Laptop} {
    display: block;
  }
`;

const NavItem = styled.a`
  font-size: 1rem;
  font-weight: 400;
`;

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${Devices.Laptop} {
    display: none;
  }
`;
const MenuIcon = styled(SearchIcon)``;

const AuthItems = styled(NavItem)`
  font-size: 1rem;
  display: none;
  @media ${Devices.Laptop} {
    display: inherit;
  }
`;

export default function Header({ mobileMenu }) {
  const { MobileMenuIsOpen, setMobileMenuIsOpen } = mobileMenu;
  const [SearchIsOpen, setSearchIsOpen] = useState(false);

  function toggleMenu() {
    setMobileMenuIsOpen(!MobileMenuIsOpen);
  }

  return (
    <HeaderEl>


      <MenuIcon>
        {MobileMenuIsOpen ? (
          <IoClose
            style={{ fontSize: "2.5rem" }}
            color={Colors.Primary}
            onClick={() => {
              toggleMenu();
            }}
          />
        ) : (
          <FiMenu
            onClick={() => {
              toggleMenu();
            }}
          />
        )}
      </MenuIcon>


      <Center>
        <Logo src="/images/logi.png" />
        <LogoText href="#">GRAVITY</LogoText>
        <SearchBar />
        <Nav>
          <ul>
            <li>
              <NavItem href="https://event-ticket-marketplace.vercel.app/">Event Marketplace</NavItem>
            </li>
            <li>
              <NavItem href="#">Warranty Management</NavItem>
            </li>
            <li>
              <Button>Connect Wallet</Button>
            </li>
          </ul>
        </Nav>
      </Center>



      {SearchIsOpen ? (
        <SearchBarMob
          SearchIsOpen={SearchIsOpen}
          setSearchIsOpen={setSearchIsOpen}

        />
      ) : (
        ""
      )}


      <SearchIcon>
        <CgSearch
          onClick={() => {
            setSearchIsOpen(!SearchIsOpen);
          }}
        />
      </SearchIcon>


    </HeaderEl>
  );
}
