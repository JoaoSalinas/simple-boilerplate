import GlobalStyles from '../src/styles/global'
export const  decorators = [
  (Story) => (
    <>
    <GlobalStyles></GlobalStyles>
    <Story></Story>
    </>
  )
  ]
