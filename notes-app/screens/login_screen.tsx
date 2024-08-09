import {
  StyleSheet,
  Text, View,
} from 'react-native';
import colors from '../constants';
import PrimaryButton from '../components/primary_button';
import PrimaryTextInput from '../components/primary_textinput';
import { useState } from 'react';

export type Props = {
  navigation: any
}

const users = [
  {
    email: 'bruno@gmail.com',
    password: '12345',
  },
];

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const foundUser = users.find((user) => email === user.email && password === user.password);
    if (foundUser) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Notes App
      </Text>

      <PrimaryTextInput
        placeholder={'Email'}
        onChangeText={setEmail}
      />
      <PrimaryTextInput
        placeholder={'Senha'}
        secure={true}
        onChangeText={setPassword}
      />

      <PrimaryButton text='Entrar' onPress={login} />
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
