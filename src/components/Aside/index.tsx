import React from "react";
import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
} from "./style";
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
} from "react-icons/md";
import logoImg from "../../assets/logo.svg";

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#"><MdDashboard /> Dashboard</MenuItemLink>
                <MenuItemLink href="#"><MdArrowUpward /> Entradas</MenuItemLink>
                <MenuItemLink href="#"><MdArrowDownward /> Saídas</MenuItemLink>
                <MenuItemLink href="#"><MdExitToApp /> Sair</MenuItemLink>
            </MenuContainer>
        </Container>
    );
};

export default Aside;