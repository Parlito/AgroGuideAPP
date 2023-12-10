import React, {useState, useCallback, useEffect} from 'react';
import { FlatList, ActivityIndicator, useWindowDimensions } from 'react-native';
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

export default function Mandioca() {
  const DataItem = [
    {
      key: '1',
      title: 'MANDIOCA',
      content: '-A mandioca, também conhecida como aipim, maniva, macaxeira, uaipi e castelinha, é uma planta de grande importância no que diz respeito à alimentação mundial, sendo o cultivo de maior importância depois do trigo, arroz, milho, batata e cevada. Essa planta caracteriza-se por ser uma importante fonte de amido, sendo utilizada tanto na alimentação humana como na de outros animais.',
    },
    {
      key: '2',
      title: 'Adubação nitrogenada',
      content: 'A mandioca responde bem à aplicação de adubos orgânicos (estercos, tortas, compostos, adubos verdes e outros), que devem ser preferidos como fonte de nitrogênio. Esses adubos devem ser aplicados na cova, sulco ou a lanço, no plantio ou com alguns dias de antecedência para que ocorra a sua fermentação, como acontece com a torta de mamona. A adubação mineral é recomendada na dose de 40 kg de N/ha, com uréia ou sulfato de amônio. Essa aplicação deve ser efetuada em cobertura ao redor da planta, no período de 30 a 60 dias após a brotação das manivas, com o solo úmido.',
    },
    {
      key: '3',
      title: 'Adubação fosfatada e potássica',
      content: 'A recomendação é efetuada de acordo com a disponibilidade de fósforo e potássio mostrados na análise do solo. O método de análise normalmente utilizado na rotina para determinação desses nutrientes é o método de Mehlich 1, e a interpretação dos resultados da análise para fósforo é efetuada de acordo com o teor de argila do solo',
    },
    {
      key: '4',
      title: 'Recomendações',
      content: 'Para a cultura da mandioca recomenda-se a adubação no sulco de plantio. Nessa recomendação não está prevista a adubação corretiva e utiliza-se, portanto, uma adubação de manutenção maior no sulco de plantio. O superfosfato simples e o superfosfato triplo são os adubos fosfatados mais utilizados, sendo que o superfosfato simples tem a vantagem de conter também cerca de 12% de enxofre na sua composição, nutriente que será fornecido juntamente com o fósforo. Para adubação potássica utiliza-se o cloreto de potássio. Normalmente utilizam-se formulações que contêm o fósforo e o potássio para suprimento desses nutrientes, ajustando-se o volume aplicado para que forneça os nutrientes em quantidades próximas às recomendadas.',
    },
  {
    key: '5',
    type: 'video',
    videoId: '0Utr3M31lG0',
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
