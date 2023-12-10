import React from 'react';
import { Container, Desc, Image, InfoContainer, Title } from './styled';
import { useNavigation } from '@react-navigation/native';

function Milho_Button(){
  
  const navigation = useNavigation();

  return (
    <Container activeOpacity={0.85} onPress={() => navigation.navigate('Milho')}> 
      <Image source={{ uri: 'https://th.bing.com/th/id/OIP.dANyYEZ0pfVz1P2Rei7XmgHaE6?pid=ImgDet&rs=1' }} />
      <InfoContainer>
        <Title>MILHO</Title>
        <Desc>
          Um cereal cultivado em grande parte do mundo e extensivamente utilizado como alimento humano ou para ração animal
        </Desc>
      </InfoContainer>
    </Container>
  );
};

export default Milho_Button;
