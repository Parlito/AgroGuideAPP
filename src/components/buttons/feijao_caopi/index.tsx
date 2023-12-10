import React from 'react'
import { Container, Desc, Image, InfoContainer, Title } from './styled'
import { useNavigation } from '@react-navigation/native';

const Feijao_Caopi_Button = () => {
  const navigation = useNavigation();
  return (
    <Container activeOpacity={0.85} onPress={() => navigation.navigate('Feijão Caupi')}>
        <Image source={{
          uri: 'https://assets.revistacultivar.com.br/d17c32e1-d747-4239-9f76-11f9565f0585.jpg',
        }}/>
        <InfoContainer>
            <Title>FEIJÃO-CAUPI</Title>
            <Desc>
            Proporciona nutrientes essenciais como proteínas, ferro, cálcio, vitaminas, carboidratos e fibras
            </Desc>
        </InfoContainer>
    </Container>
  )
}

export default Feijao_Caopi_Button