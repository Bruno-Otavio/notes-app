import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity, View,
} from 'react-native';
import colors from '../constants';
import PrimaryTextInput from '../components/primary_textinput';
import AntDesign from '@expo/vector-icons/AntDesign';
import FloatingActionButton from '../components/floatin_action_button';
import { useState } from 'react';
import AddNoteModal from '../components/add_note_modal';
import Note from '../components/note_component';

const HomeScreen = () => {
  interface INota {
    id: number,
    title: string,
    content: string,
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [noteList, setNoteList] = useState<INota[]>([]);

  const handleNote = () => {
    const nota = {
      id: Date.now(),
      title: title,
      content: content,
    }
    setNoteList([...noteList, nota]);
    setModalVisible(!modalVisible);
  }

  const removeNote = (id: number) => {
    const updatedNoteList = noteList.filter((note) => note.id !== id);
    setNoteList(updatedNoteList);
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.search}>
        <PrimaryTextInput
          placeholder='Notas..'
          onChangeText={() => {}}
        />
        <TouchableOpacity style={styles.button}>
          <AntDesign name="search1" size={24} color={colors.white} style={{ justifyContent: 'center', alignContent: 'center' }} />
        </TouchableOpacity>
      </View> */}
      <AddNoteModal
        visible={modalVisible}
        setVisible={setModalVisible}
        setTitle={setTitle}
        setContent={setContent}
        onAdd={handleNote}
      />
      <ScrollView>
        <FlatList
          data={noteList}
          renderItem={({ item }) => <Note key={item.id} title={item.title} content={item.content} remove={() => removeNote(item.id)} />}
          style={{ marginTop: 25 }}
        />
      </ScrollView>
      <FloatingActionButton onPress={() => setModalVisible(!modalVisible)} />
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
    marginTop: 25,
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
