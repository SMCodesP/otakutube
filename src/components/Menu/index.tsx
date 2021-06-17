import React from 'react';

import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';

import { useTheme } from 'styled-components';

import {
  Container,
  ContainerGroup,
  Page,
  ListPage,
  Logo,
  ListOption,
  Option,
  User,
} from './styles';

const Menu: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <ContainerGroup>
        <Logo src="/vercel.svg" alt="Vercel Logo" width={112} height={46} />
      </ContainerGroup>
      <ContainerGroup>
        <ListPage>
          <Page className="location">Início</Page>
          <Page>Popular</Page>
          <Page>Notícias</Page>
          <Page>Discord</Page>
        </ListPage>
      </ContainerGroup>
      <ContainerGroup>
        <ListOption>
          <Option>
            <FiSearch size={24} color={theme.text} />
          </Option>
          <Option>
            <FiBell size={24} color={theme.text} />
          </Option>
          <Option>
            <IoMailOutline size={24} color={theme.text} />
          </Option>
          <Option>
            <User
              src="https://smcodes.tk/favicon.jpg"
              alt="Imagem de perfil"
              width={32}
              height={32}
            />
            <p>SMCodes</p>
            <FiChevronDown size={24} color={theme.text} />
          </Option>
        </ListOption>
      </ContainerGroup>
    </Container>
  );
};

export default Menu;
