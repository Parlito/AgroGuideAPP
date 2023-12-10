import React, {useState, useCallback, useEffect} from 'react';
import { FlatList, View, ActivityIndicator, useWindowDimensions } from 'react-native';
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



export default function Manga() {
  const DataItem = [
    {
      key: '1',
      title: 'MANGA',
      content: '-As mangas são uma deliciosa fruta tropical que só pode ser cultivada fora dos trópicos em condições muito especializadas, como em uma estufa mantida por especialistas em um jardim botânico. Se você mora nas zonas climáticas USDA 10 e superiores (Miami a Honolulu) ou em qualquer outra área tropical, cultivar uma mangueira pode ser gratificante no verão, quando produz seus frutos suculentos.',
    },
    {
      key: '2',
      title: 'Condições ambientais',
      content: 'As mangueiras crescem bastante, de modo que requerem uma área em pleno sol, onde suas raízes e galhos podem se espalhar sem afetar outras plantas ou edifícios. Se você plantar uma mangueira no topo ou no centro de uma colina, este será um local favorável. Evite plantar sua manga em uma área sujeita a ventos fortes, mas se você precisar plantá-la em um local como esse, construa um quebra-vento protetor.',
    },
    {
      key: '3',
      title: 'Solo favorecido',
      content: 'As mangas se saem bem em solos profundos e bem drenados, de qualquer tipo - argila, barro e areia - todos são adequados, mas a manga não prosperará em solos pesados ​​e constantemente molhados. A manga prefere um pH do solo entre 5,5 e 7,5 e se sai bem em solo alcalino. Para aumentar o pH do solo, coloque cal hidratada em sua área de plantio; para reduzir o pH, adicione enxofre.',
    },
    {
      key: '4',
      title: 'Aditivos para o solo',
      content: 'As mangueiras se dão bem quando você adiciona composto ao solo. Eles também se beneficiam de um anel de cobertura morta, com vários centímetros de profundidade, espalhado em torno de sua linha de gotejamento, a cerca de um metro do tronco, mas nunca o tocando.',
    },
    {
      key: '5',
      title: 'Fertilizante',
      content: 'Adubar mangueiras com alimentos vegetais com alto nitrogênio cerca de três vezes durante a estação de crescimento ativo. Evite adicionar fertilizantes durante o outono e o inverno. As mangas respondem bem ao fertilizante orgânico porque podem sofrer queimaduras químicas. Evite fertilizar demais as árvores jovens, principalmente porque elas favorecem a emulsão de peixes. Se o seu solo tiver alto teor de areia, sua mangueira se beneficiará de uma quantidade maior de fertilizante, pois qualquer fertilizante passará rapidamente através do solo arenoso muito poroso.',
    },
    {
      key: '6',
      title: 'Prevenção de danos causados ​​por insetos e doenças',
      content: 'Árvores saudáveis ​​são menos propensas a convidar pragas de insetos e desenvolver doenças do que as árvores estressadas. Quando você fornece o solo correto e as emendas à área de plantio de sua manga, ele o recompensará com crescimento saudável e numerosas frutas. A fertilização adequada também fortalece a árvore e ajuda a mantê-la forte, o que permitirá que a árvore evite doenças fúngicas, como o oídio. A doença chamada antracnose pode ocorrer quando as chuvas ocorrem durante o início da colheita das frutas: para evitá-la, aplique spray de cobre a cada dois meses, começando quando a árvore iniciar seu crescimento ativo na primavera, mas antes das flores abrirem.',
    },
    {
      key: '7',
      type: 'video',
      videoId: 'Oyrk7VAVjUY',
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
