import React from 'react'
import { Container, Desc, Image, InfoContainer, Title } from './styled'
import { useNavigation } from '@react-navigation/native';

const Manga_Button = () => {
  const navigation = useNavigation();
  
  return (
    <Container activeOpacity={0.85} onPress={() => navigation.navigate('Manga')}>
        <Image source={{
          uri: 'https://boomi.com.br/wp-content/uploads/2022/09/11-beneficios-da-manga-para-a-saude.png',
        }}/>
        <InfoContainer>
            <Title>MANGA</Title>
            <Desc>
            A manga é o fruto da mangueira, árvore frutífera da família Anacardiaceae
            </Desc>
        </InfoContainer>
    </Container>
  )
}

export default Manga_Button