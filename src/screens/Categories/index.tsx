import React from 'react'
import { Container, SubTitle, Title } from './styled'
import NavBar from '../../components/common/NavBar'
import Nordeste_Button from '../../components/buttons_cat/nordeste'
import Sul_Button from '../../components/buttons_cat/sul'
import Sudeste_Button from '../../components/buttons_cat/suldeste'
import Norte_Button from '../../components/buttons_cat/norte'
import CentroOeste_Button from '../../components/buttons_cat/centro_oeste'
import { ScrollView} from 'react-native'


const Cat = () => {
  return (
    <Container>
        <Title>CATEGORIAS</Title>
        <SubTitle>- REGIÕES DO BRASIL -</SubTitle>
        <ScrollView>
        <Norte_Button/>
        <Nordeste_Button/>
        <CentroOeste_Button/>
        <Sul_Button/>
        <Sudeste_Button/>
        </ScrollView>
        <NavBar/>
    </Container>
  )
}

export default Cat