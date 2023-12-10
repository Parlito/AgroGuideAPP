import Feijao_Caopi_Button from '../../components/buttons/feijao_caopi'
import Mandioca_Button from '../../components/buttons/mandioca'
import Milho_Button from '../../components/buttons/milho'
import Header from '../../components/common/Header'
import { Container } from './styled'
import { ScrollView } from 'react-native';
import React from 'react'
import Banana_Button from '../../components/buttons/banana'
import Manga_Button from '../../components/buttons/manga'
import NavBar from '../../components/common/NavBar'

const Home = () => {
  return (
    <Container>
        <Header/>
        <ScrollView>
          <Milho_Button/>
          <Mandioca_Button/>
          <Feijao_Caopi_Button/>
          <Banana_Button/>
          <Manga_Button/>
        </ScrollView>
        <NavBar/>
    </Container>
  )
}
export default Home

