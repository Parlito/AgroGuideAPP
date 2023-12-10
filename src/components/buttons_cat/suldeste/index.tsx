import { FlatList, ListRenderItem, Alert } from 'react-native';
import React from 'react';
import { Container, Image, Title } from './styled';
import { useNavigation } from '@react-navigation/native';


function Sudeste_Button(){

  const navigation = useNavigation();

  return (
    <Container activeOpacity={0.85} onPress={() => navigation.navigate('Sudeste')}>
        <Image source={{uri: 'https://th.bing.com/th/id/R.aa10c2bfd838e5bd056089f2a423c650?rik=wKZqy2e%2bAxw3dA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-gU1hPGkbhPQ%2fTef9q5BK-5I%2fAAAAAAAAAAs%2f94fN6Qce9dU%2fw1200-h630-p-k-no-nu%2ftumblr_lm4tholHR61qkey3ao1_400.jpg&ehk=YPcwbRXF8S3GnNkc4Y%2bnSSvwjLckcPZ9LyZ808rl0TE%3d&risl=&pid=ImgRaw&r=0'}}/>
        <Title>SUDESTE</Title>
    </Container>
  );

}

export default Sudeste_Button;