import { FlatList, ListRenderItem, Alert } from 'react-native';
import React from 'react';
import { Container, Image, Title } from './styled';
import { useNavigation } from '@react-navigation/native';


function Nordeste_Button(){

  const navigation = useNavigation();

  return (
    <Container activeOpacity={0.85} onPress={() => navigation.navigate('Nordeste')}>
        <Image source={{uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/a6/dd/a6/hotel-fazenda-bastiao.jpg?w=1400&h=-1&s=1'}}/>
        <Title>NORDESTE</Title>
    </Container>
  );

}

export default Nordeste_Button;
