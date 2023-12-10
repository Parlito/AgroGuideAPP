import { FlatList, ListRenderItem, Alert } from 'react-native';
import React from 'react';
import { Container, Image, Title } from './styled';
import { useNavigation } from '@react-navigation/native';


function CentroOeste_Button(){

  const navigation = useNavigation();

  return (
    <Container activeOpacity={0.85} onPress={() => navigation.navigate('Centro Oeste')}>
        <Image source={{uri: 'https://www.infoescola.com/wp-content/uploads/2017/03/chapada-dos-veadeiros-392298664.jpg'}}/>
        <Title>CENTRO OESTE</Title>
    </Container>
  );

}

export default CentroOeste_Button;