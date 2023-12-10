import React from 'react'
import { Container, Desc, Image, InfoContainer, Title } from './styled'
import { useNavigation } from '@react-navigation/native';

const Banana_Button = () => {
  const navigation = useNavigation();
  
  return (
    <Container activeOpacity={0.85} onPress={() => navigation.navigate('Banana')}>
        <Image source={{
          uri: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/penseorg/catalog/fotos-produtos/banana-comprida.png',
        }}/>
        <InfoContainer>
            <Title>BANANA</Title>
            <Desc>
            uma planta herbácea vivaz acaule da família Musaceae. São cultivadas em 130 países
            </Desc>
        </InfoContainer>
    </Container>
  )
}

export default Banana_Button