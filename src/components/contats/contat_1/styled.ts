import { styled} from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    height: 10px auto;
    flex-direction:row;
    margin: 20px auto;
    background-color: green;
    border-radius: 16px;
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-left:5px;
    margin-top: 5px;
`;

export const InfoContainer = styled.View`
    flex: 1;
    padding: 5px;
    justify-content: space-around;
    margin-left:5px;
`;

export const InfoContainer2 = styled.View`
    flex-direction:row;
    justify-content: start;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: white;
    font-weight: bold;
`;
export const Desc1 = styled.Text`
    font-size: 10px;
    color: white;
    font-weight: bold;
    text-align: justify;
`;

export const SubTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
`;

export const SubTitle2 = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: white;
`;

export const Button1 = styled.TouchableOpacity`
    width: 90%;
    height: 10px auto;
`;

export const Img = styled.Image`
    margin-top: 10px;
    width: 19px;
    height: 19px;
`;