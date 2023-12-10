import React from 'react'
import { Container, Desc, Image, InfoContainer, Title } from './styled'
import { useNavigation } from '@react-navigation/native';

const Mandioca_Button = () => {
  const navigation = useNavigation();
  return (
    <Container activeOpacity={0.85} onPress={() => navigation.navigate('Mandioca')}>
        <Image source={{
          uri: 'https://blog4.mfrural.com.br/wp-content/uploads/2020/09/mandioca-doenca2.jpg',
        }}/>
        <InfoContainer>
            <Title>MANDIOCA</Title>
            <Desc>
            conhecida como mandioca, macaxeira, aipim, castelinha, uaipi, mandioca-doce, mandioca-mansa, maniva, maniveira, pão-de-pobre, mandioca-brava e mandioca-amarga
            </Desc>
        </InfoContainer>
    </Container>
  )
}

export default Mandioca_Button