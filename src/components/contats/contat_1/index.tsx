import React from 'react'
import { Button1, Container, Desc1, Image, Img, InfoContainer, InfoContainer2, SubTitle, SubTitle2, Title } from './styled'
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';


const zap = require ("../../../../assets/icons/whats-icon.png");
const email = require ("../../../../assets/icons/e-mail-icon.png");


const Contat1 = (props) => {

  const { url, children, style = {}  } = props;

  const onPress = () => Linking.canOpenURL("").then(() => {
    Linking.openURL("");
});

const handleEmailPress = () => {
  // Substitua 'destinatario@email.com' pelo endereço de e-mail desejado
  const email = 'exemploemail@gmail.com';
  
  // Substitua 'Assunto do E-mail' pelo assunto desejado
  const subject = 'Suporte Técnico';

  // Substitua 'Corpo do E-mail' pelo corpo do e-mail desejado
  const body = '';

  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  // Abre o cliente de e-mail
  Linking.openURL(mailtoUrl);
};

  const navigation = useNavigation();
  
  return (
    <Container>
        <InfoContainer>
            <Title>Tec. Firmino</Title>
            <Button1 onPress={handleEmailPress}>
                <InfoContainer2>
                  <Img source={email}/>
                  <InfoContainer>
                    <SubTitle>EMAIL</SubTitle>
                    <SubTitle2>exemploemail@gmail.com</SubTitle2>
                  </InfoContainer>
                </InfoContainer2>
            </Button1>
            <Button1 onPress={onPress}>
                <InfoContainer2>
                  <Img source={zap}/>
                  <InfoContainer>
                    <SubTitle>CONTATO</SubTitle>
                    <SubTitle2>(xx)xxxxx-xxxx</SubTitle2>
                  </InfoContainer>
                </InfoContainer2>
            </Button1>
        </InfoContainer>
    </Container>
  )
}

export default Contat1