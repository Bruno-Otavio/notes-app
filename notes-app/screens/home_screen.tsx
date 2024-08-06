import {
  Modal,
  Pressable,
  StyleSheet,
  Text, TouchableOpacity, View,
} from 'react-native';
import colors from '../constants';
import PrimaryTextInput from '../components/primary_textinput';
import AntDesign from '@expo/vector-icons/AntDesign';
import FloatingActionButton from '../components/floatin_action_button';
import { useState } from 'react';
import AddNoteModal from '../components/add_note_modal';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <PrimaryTextInput
          placeholder='Notas..'
        />
        <TouchableOpacity style={styles.button}>
          <AntDesign name="search1" size={24} color={colors.white} style={{ justifyContent: 'center', alignContent: 'center' }} />
        </TouchableOpacity>
      </View>
      <AddNoteModal visible={modalVisible} setVisible={setModalVisible}/>
      <FloatingActionButton onPress={() => setModalVisible(true)} />
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
  search: {
    flexDirection: 'row',
    flexBasis: 'auto',
    gap: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    backgroundColor: colors.coral,
    alignItems: 'center',
    justifyContent: 'center',

    height: 52,
    width: 52,

    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.coral,
  },
});

export default HomeScreen;
