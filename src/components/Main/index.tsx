import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Component'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e react avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor em frente a uma tela com código"
    />
  </S.Wrapper>
)

export default Main
