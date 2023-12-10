import { FlatList, ListRenderItem, Alert } from 'react-native';
import React from 'react';
import { Container, Image, Title } from './styled';
import { useNavigation } from '@react-navigation/native';


function Norte_Button(){

  const navigation = useNavigation();

  return (
    <Container activeOpacity={0.85} onPress={() => navigation.navigate('Norte')}>
        <Image source={{uri: 'https://www.gabarite.com.br/_midia/post/monte-roraima-relevo-regiao-norte-do-brasil.jpg'}}/>
        <Title>NORTE</Title>
    </Container>
  );

}

export default Norte_Button;