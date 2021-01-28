import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/widget'
import Footer from '../src/components/Footer/footer'
import GitHubCorner from '../src/components/GitHubCorner/gitHubCorner'
import QuizBackground from '../src/components/QuizBackground/quizBackground'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

const Home = () => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Titulo</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Pergunta</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl=""/>
    </QuizBackground>
  );
}

export default Home;