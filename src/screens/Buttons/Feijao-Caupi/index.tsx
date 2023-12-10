import React,  {useState, useCallback, useEffect} from 'react';
import { FlatList, Image, View, Modal, TouchableOpacity, Text, Button, ActivityIndicator, useWindowDimensions } from 'react-native';
import {
  Container,
  Container2,
  Button1,
  Desc,
  Image2,
  InfoContainer,
  InfoContainer2,
  Title,
  Title2,
  Title3,
  SCREEN_SPACE,
  VIDEO_HEIGHT,
  Player,
} from './styled';

import YoutubeIframe from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';

// Defina um tipo para os diferentes tipos de dados
type DataItem = {
  key: string;
  title: string;
  content: string;
  type: undefined;
  source: undefined;
  videoId: undefined;
} | {
  key: string;
  type: string;
  source: string;
  title: undefined;
  content: undefined;
  videoId: undefined;
} | {
  // Adicione mais tipos conforme necessário
};

export default function FeijaoCaupi() {
  const DataItem = [
    {
      key: '1',
      title: 'FEIJÃO-CAUPI',
      content: '-O crescimento e o desenvolvimento das plantas são influenciados diretamente pelo ambiente em que são cultivadas, especialmente pelo solo e clima. As principais características das plantas do feijão-caupi, que se relacionam com o ambiente são: hábito de crescimento, ciclo e porte. A partir do conhecimento dessas relações, é possível, por meio do zoneamento agrícola de risco, definir regiões de aptidão climática para o cultivo agrícola e as épocas mais adequadas de semeadura.',
    },
    {
      key: '2',
      title: 'Momento ideal para o plantio',
      content: 'No caso específico do feijão-caupi, segundo zoneamento apresentado para o Estado do Piauí, para solos dos tipos 1 (argila < 15 %) e 2 (argila entre 15 % e 35 %), mais comuns na região, os períodos mais favoráveis para semeadura são: Região dos cerrados – de 1 de dezembro a 10 de janeiro. Região central – de 20 de dezembro a 31 de janeiro.Região norte – de 1 de janeiro a 28 de fevereiro.',
    },
    {
      key: '3',
      title: 'Preparo do solo para plantio de feijão',
      content: 'Bom, temos três principais meios para o preparo do solo para plantio de feijão ou de qualquer cultura anual. O primeiro deles é o velho conhecido preparo convencional, que tem o objetivo de revolver a camada superficial do solo. Esse preparo é realizado normalmente com discos como arados, grades pesadas ou arado de aiveca. O importante é evitar o uso recorrente da mesma profundidade dos implementos e trabalhar o solo com o teor de umidade ideal. Tudo isso para evitar camadas de compactação que, como vimos, prejudicam muito a produtividade do feijoeiro. O segundo método é o preparo reduzido, que visa reduzir o número de operações e dos problemas com erosão. O principal implemento para a realização da operação é o arado escarificador que deve ser utilizado com o solo de 30% a 40% da capacidade de campo.',
    },
    {
      key: '4',
      type: 'image',
      source: 'https://blog.aegro.com.br/wp-content/uploads/2020/04/2-preparo-do-solo-para-plantio-de-feijao.gif',
    },
    {
      key: '5',
      type: 'video',
      videoId: '1IsGVpNlWZw',
    },

    // Adicione mais objetos ao array conforme necessário
  ];

  const [data, setData] = useState<DataItem[]>([]); // Forneça o tipo específico para o estado
  const [videoReady, setVideoReady] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [pageLoaded, setPageLoaded] = useState(false); // Adicionado estado para controlar se a página está carregada

  
    const {width} = useWindowDimensions();
    const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);

    const onFullScreenChange = useCallback((isFullScreen : boolean) => {
        if(isFullScreen)
        {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        }
        else
        {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
    }, []);

    const cleanupVideo = () => {
      setVideoReady(false);
    };

    useEffect(() => {
      // Simula uma requisição assíncrona para carregar os dados
      const fetchData = async () => {
        try {
          // Substitua esta linha pela lógica real de chamada de API
          // const response = await fetch('sua API aqui');
          // const result = await response.json();
  
          // Atualize o estado com os dados obtidos
          setData(DataItem);
          setPageLoaded(true); // Marque a página como carregada quando os dados estiverem prontos
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      return () => {
        cleanupVideo();
      };
    }, []);

  const handleImagePress = (imageSource) => {
    setSelectedImage(imageSource);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => {

    if(!pageLoaded){
      return(
        <Container>
          <ActivityIndicator size='large' color="green"/>
        </Container>
      );
    }

    if (item.type === 'video') {
      return (
        <Container>
          <Player>
            <YoutubeIframe
              videoId={item.videoId}
              width={VIDEO_WIDTH}
              height={videoReady ? VIDEO_HEIGHT : 0}
              onReady={() => setVideoReady(true)}
              onFullScreenChange={onFullScreenChange}
            />
          </Player>
        </Container>
      );
    }

    if (item.type === 'image') {
      return (
        <Container>
          <InfoContainer>
          <TouchableOpacity onPress={() => handleImagePress(item.source)}>
            <Image2 source={{ uri: item.source }}/>
            </TouchableOpacity>
          </InfoContainer>
        </Container>
      );
    }

    return (
      <Container>
        <InfoContainer>
          <Title2>{item.title}</Title2>
          <Desc>{item.content}</Desc>
        </InfoContainer>
      </Container>
    );
  };

  return (
    <View>
    <FlatList
      data={DataItem}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      showsVerticalScrollIndicator={false}
    />
     <Modal visible={modalVisible} transparent>
        <Container2>
        <Image
            style={{ width: '90%', height: '90%', resizeMode: 'contain' }}
            source={{ uri: selectedImage }}
          />
        <Button1  onPress={() => setModalVisible(false)}><Title3>FECHAR</Title3></Button1>
        </Container2>
      </Modal>
    </View>
  );
}
