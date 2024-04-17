import { Button } from 'react-native';

function BackHomeBtn({ navigation }: any): React.JSX.Element {
    const jump = () => {
        navigation.navigate('Home');
    };
    return <Button onPress={jump} title={'back'} />;
}

export default BackHomeBtn;
