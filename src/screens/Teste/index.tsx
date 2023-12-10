import React, {useState, useCallback, useEffect} from 'react';
import { SectionList, FlatList, Image, View, Modal, TouchableOpacity,  ActivityIndicator, useWindowDimensions} from 'react-native';
import {
  Button1,
  Container,
  Container2,
  Desc,
  Image1,
  InfoContainer,
  InfoContainer2,
  Title,
  Title2,
  Title3,
  SCREEN_SPACE,
  VIDEO_HEIGHT,
  Player,
} from './styled';

import {WebView} from 'react-native-webview';
import YoutubeIframe from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Video } from 'expo-av';

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

interface VideoProps {
    videoId: string;
    width: number;
    videoReady: boolean;
    onReady: () => void;
    onFullScreenChange: (isFullScreen: boolean) => void;
  }
  
  const VideoComponent: React.FC<VideoProps> = ({ videoId, width, videoReady, onReady, onFullScreenChange }) => {
    const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);
  
    useEffect(() => {
      return () => {
        // Cleanup logic for the video component
      };
    }, []);
  
    return (
      <Container>
        <Player>
          <YoutubeIframe
            videoId={videoId}
            width={VIDEO_WIDTH}
            height={videoReady ? VIDEO_HEIGHT : 0}
            onReady={onReady}
            onFullScreenChange={onFullScreenChange}
          />
        </Player>
      </Container>
    );
  };




export default function Milho() {

    


  const DataItem:DataItem[] = [
    {
      key: '1',
      title: 'MILHO',
      content: '-O milho é um cereal muito importante na cultura e na agricultira do Brasil. Alimento celebrado, principalmente, na época das festas juninas, representa também 40% da safra total nacional de grãos. O delicioso ingrediente, que é base do preparo de bolos, curau, pamonha, broa, canjica, e tantas outras receitas, tem também diversos nutrientes importantes para a saúde, além de ser boa fonte de energia. Cultivado há mais de 7 mil anos, o milho carrega tradição e curiosidades que nem todos conhecem. Confira a seguir  a origem e outro fatos sobre o milho. ',
    },
    {
      key: '2',
      title: 'Nutrição para o plantio',
      content: 'O plantio do milho exige muitos nutrientes do solo. Em função disso, é fundamental prepará-lo para ter uma boa colheita. O ideal é que o solo seja bem drenado e fértil, além de rico em nutrientes e matéria orgânica. Atualmente, existem muitos problemas na produção de milho associados à falta de nutrientes como o potássio, fósforo, enxofre, zinco e magnésio. Isso porque o nitrogênio recebe muita atenção, deixando os outros nutrientes de lado. Portanto, para ter uma boa colheita, faça uma análise regular do solo, realizando uma correção quando preciso. Nesse contexto, a rotação de culturas contribui para reciclagem de resíduos, melhorando o solo e aumentando a matéria orgânica. Na adubação, destacamos alguns nutrientes para que a plantação de milho apresente bons rendimentos. Veja quais a seguir:',
    },
    {
      key: '3',
      title: 'Nitrogênio (N)',
      content: 'É um dos elementos mais extraídos e exportados da lavoura, usado em abundância no plantio e em cobertura. Em uma produção equivalente a 9,2 toneladas de grãos em um único hectare, um produtor precisa em média de 185 kg/ha. Ademais, a fonte de nitrogênio define o modo de aplicação e qual a melhor época de aproveitamento do nutriente. Deste modo, evitam-se perdas e aumenta a velocidade de disponibilidade deste nutriente para a planta.',
    },
    {
      key: '4',
      title: 'Potássio (K2O)',
      content: 'Na plantação de milho, este é o segundo elemento mais exigido. Isso por esse nutriente ser responsável pelo crescimento da planta, formação de frutos e a resistência a doenças fúngicas. Assim como ocorre com o nitrogênio, em solos argilosos a aplicação de potássio pode ser feita em uma única vez, visando uma menor perda de elementos por lixiviação neste tipo de solo.',
    },
    {
      key: '5',
      title: 'Fósforo (P2O5)',
      content: 'Nos solos de clima tropical, os níveis de fósforo são baixos. Portanto, a adubação fosfatada melhora o potencial produtivo do milho, aumentando sua produtividade. Isso porque este nutriente desempenha um importante papel no armazenamento e transferência de energia da célula, na respiração e na fotossíntese.',
    },
    {
      key: '6',
      type: 'image',
      source: 'https://th.bing.com/th/id/R.3531b9624c3fd6547d18e1e98ec5e8c0?rik=XWA%2fKNT6g231UQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-UasKRc5tHWA%2fUCww6I_HQWI%2fAAAAAAAAAMw%2fs_UcT395cL4%2fs1600%2fSem%2bt%c3%adtulo1.jpg&ehk=voZ%2b2fqi8OxOu5rJoU8rGsdEboqAnFw6yN2ZsyyqOi0%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      key: '7',
      type: 'video',
      videoId: 'RvcP6rgFQYo',
    },

    // Adicione mais objetos ao array conforme necessário
  ];
  
  const [data, setData] = useState<DataItem[]>([]); // Forneça o tipo específico para o estado
  const [videoReady, setVideoReady] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [pageLoaded, setPageLoaded] = useState(false); // Adicionado estado para controlar se a página está carregada

  
    const {width} = useWindowDimensions();

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


    if (item.type === 'image') {
      return (
        <Container>
          <InfoContainer>
            <TouchableOpacity onPress={() => handleImagePress(item.source)}>
            <Image1  source={{ uri: item.source }}/>
            </TouchableOpacity>
          </InfoContainer>
        </Container>
      );
    }
    
    if (item.type === 'video') {
        return (
          <VideoComponent
            videoId={item.videoId}
            width={width}
            videoReady={videoReady}
            onReady={() => setVideoReady(true)}
            onFullScreenChange={onFullScreenChange}
          />
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
        <Button1  onPress={() => setModalVisible(false)}>
          <Title3>FECHAR</Title3>
        </Button1>
        </Container2>
      </Modal>
    </View>
  ); 
}

