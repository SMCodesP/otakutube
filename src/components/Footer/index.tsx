import {
  Container,
  Author,
  BorderCustom,
  SocialNetworking,
  Discord,
  FooterContainer,
  ProjectThis,
} from './styles'

const Footer: React.FC = () => {
  return (
    <>
      <BorderCustom />
      <Container>
        <ProjectThis>
          <Author
            style={{
              alignSelf: 'flex-end',
            }}
          >
            Desenvolvido por <a href="https://smcodes.tk">SMCodes</a>
          </Author>
        </ProjectThis>
        <FooterContainer>
          <Author
            style={{
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            Feito com <span>❤️</span> por OtakuTube
          </Author>
          <span>Não hospedamos nenhum vídeo em nossos servidores, apenas os indexamos.</span>
        </FooterContainer>
        <SocialNetworking>
          <a about="_blank" href="https://discord.gg/SDYmjZG89B">
            <Discord title="Link para nosso discord" />
          </a>
        </SocialNetworking>
      </Container>
    </>
  )
}

export default Footer
