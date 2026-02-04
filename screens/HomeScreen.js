import {View,Text} from 'react-native';
import {safeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen(){

    return(

        <safeAreaView>
            <Text>
                Home Screen
            </Text>
        </safeAreaView>

    )
}