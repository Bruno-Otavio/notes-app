import {
  StyleSheet,
  Text, View,
} from 'react-native';
import colors from '../constants';
import PrimaryButton from '../components/primary_button';
import PrimaryTextInput from '../components/primary_textinput';

export type Props = {
  navigation: any
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const login = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        InkWell
      </Text>

      <PrimaryTextInput
        placeholder={'Email'}
      />
      <PrimaryTextInput
        placeholder={'Senha'}
        secure={true}
      />

      <PrimaryButton text='Entrar' onPress={login}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.orange,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 25,

    marginBottom: 15,

    width: '75%',

    color: colors.white,
    fontSize: 20,
    fontWeight: '500',

    backgroundColor: colors.rose,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: colors.coral,
  },
});

export default LoginScreen;
