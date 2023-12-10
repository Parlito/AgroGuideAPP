import { FlatList, ListRenderItem, Alert } from 'react-native';
import React from 'react';
import { Container, Image, Title } from './styled';
import { useNavigation } from '@react-navigation/native';


function Sul_Button(){

  const navigation = useNavigation();

  return (
    <Container activeOpacity={0.85} onPress={() => navigation.navigate('Sul')}>
        <Image source={{uri: 'https://th.bing.com/th/id/OIP.I3VjO4cl9D9mc4yzcDuK4QHaEz?rs=1&pid=ImgDetMain'}}/>
        <Title>SUL</Title>
    </Container>
  );

}

export default Sul_Button;