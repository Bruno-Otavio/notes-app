import {
  StyleSheet,
  TextInput,
} from 'react-native';
import colors from '../constants';

export type Props = {
  placeholder: string,
  secure?: boolean
}

const PrimaryTextInput: React.FC<Props> = ({ placeholder, secure=false }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        selectTextOnFocus={false}
        secureTextEntry={secure}
      />
    </>
  );
}

const styles = StyleSheet.create({
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

export default PrimaryTextInput;
