import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';
import colors from '../constants';
import Feather from '@expo/vector-icons/Feather';

export type Props = {
  title: string,
  content: string,
  remove: any
};

const Note: React.FC<Props> = ({ title, content, remove }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <View>
        <Pressable
          onPress={remove}
        >
          <Feather name="trash" size={24} color={colors.blue} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    paddingVertical: 15,
    paddingHorizontal: 15,

    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginVertical: 5,
    width: 350,
  },
  title: {
    color: colors.blue,
    fontSize: 25,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 20,
  },
});

export default Note;
