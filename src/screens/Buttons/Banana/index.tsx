import React, {useState, useCallback, useEffect} from 'react';
import { FlatList, View, Modal, TouchableOpacity,  ActivityIndicator, useWindowDimensions} from 'react-native';

import {
  Container,
  Desc,
  Image,
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


export default function Banana() {
  const DataItem = [
    {
      key: '1',
      title: 'BANANA',
      content: '-A banana é, sem dúvida, uma das frutas mais democráticas e amadas do Brasil. Facilmente utilizada em qualquer receita, é também um alimento prático para comer, nutritivo e que vai bem em qualquer hora do dia. Por tudo isso e pela facilidade de cultivo, saber como plantar banana é um conhecimento útil para quem quer investir nessa cultura ou mesmo para consumo próprio.',
    },
    {
      key: '2',
      title: 'Observações',
      content: 'O melhor local é aquele com solo fértil, bem drenado, rico em matéria orgânica e livre de encharcamentos. A bananeira não gosta de muito frio (a temperatura ideal é entre 20 °C e 25 °C, mas é aceitável uma variação entre 15 °C e 35 °C) e nem cresce em solo muito úmido, porque ele causa maior incidência de doenças nas folhas e frutos.',
    },
    {
      key: '3',
      title: 'Prepare a terra, cuide com as covas e espaçamento',
      content: 'Caso você queira um volume de produção maior e um melhor controle de pragas, uma opção é aplicar algum defensivo no solo ao menos um mês antes do início do cultivo para evitar a infestação de insetos e outros parasitas. Passado esse tempo, uma dica para todos os que querem aprender como plantar banana é enriquecer a área de plantio com compostos orgânicos para receber as mudas. Essas mudas são chamadas de rizomas, que nada mais são do que partes de uma planta já adulta. O indicado é que elas sejam postas em covas de 30 centímetros de largura por 30 centímetros de profundidade. É fundamental que elas estejam, no mínimo, distantes dois metros uma da outra, para não comprometer o crescimento da vizinha.',
    },
    {
      key: '4',
      title: 'Plante em época de chuva e calor',
      content: 'Como dissemos, a bananeira não gosta de frio, então é melhor que o plantio ocorra em época de temperaturas mais amenas ou até mais altas. Outro cuidado para quem quer entender como plantar banana é fazer isso em um período mais chuvoso. É verdade que a bananeira não gosta de solo encharcado (já dissemos isso aqui), mas isso não significa que ela não goste de chuva. Este é um cultivo muito propício para regiões mais tropicais, como o Brasil. Por isso, é comum que o processo de irrigação seja necessário e farto. O cuidado é, apenas, garantir que o solo tenha um bom escoamento. Portanto, caso a região seja mais seca, é fundamental fazer a irrigação artificial frequentemente.',
    },
    {
      key: '5',
      title: 'Cuide com a manutenção das plantas',
      content: 'Para que as plantas cresçam saudáveis e gerem frutos de qualidade é indicado um cuidado especial em relação a nutrição das plantas. Também é muito positivo que as folhas sejam observadas com atenção. Caso alguma apareça seca, ela precisa ser retirada. Se a causa desse ressecamento for alguma doença, a poda evita que ela se alastre pela planta. Aparecendo insetos ou fungos na plantação, uma dica de ouro para quem quer saber como plantar banana é cobrir os cachos com sacos de plástico e fazer duas aberturas de ar nele, uma de cada lado, permitindo a circulação de oxigênio e a saída da umidade. Desse modo, é possível proteger os frutos. Esse acompanhamento precisa ser feito ao longo de um ano, quando as bananas começam a ficar aptas para a colheita. O tempo pode ser até menor, dependendo das condições climáticas e do solo. Então, logo que as frutas amadurecerem, os cachos devem ser cortados com bastante cuidado para evitar pancadas que os machuquem. Isso pode alterar a cor e o sabor das bananas.',
    },
    {
      key: '6',
      type: 'video',
      videoId: 'G7Yg6lBkxX0',
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
            <Image
              style={{ width: 310, height: 210}}  // Ajuste o estilo conforme necessário
              source={{ uri: item.source }}
            />
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
    <FlatList
      data={DataItem}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      showsVerticalScrollIndicator={false}
    />
  );
}
