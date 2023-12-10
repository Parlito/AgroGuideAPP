import { View, Text } from 'react-native'
import React from 'react'
import { Container, Input, InputContainer, Logo, Search } from './styled'

const search = require ("../../../../assets/icons/search.png");
const logo = require ("../../../../assets/images/logo.png");

const Header = () => {
  return (
    <Container>
        <Logo source={logo}/>
        <InputContainer>
            <Input 
            placeholder='Pesquisa'
            placeholderTextColor={"#696969"}
            />
            <Search source={search}/>
        </InputContainer>
    </Container>
  )
}

export default Header