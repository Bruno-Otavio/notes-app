import { Modal, View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import colors from "../constants";

export type Props = {
  visible: boolean,
  setVisible: any,
}

const AddNoteModal: React.FC<Props> = ({ visible, setVisible }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={() => setVisible(!visible)}
    >
      <View style={styles.modalCentered}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Adicionar Nota</Text>
          <TextInput/>
          <Pressable>
            <Text>Adicionar</Text>
          </Pressable>
          <Pressable
            onPress={() => setVisible(!visible)}
          >
            <Text>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalCentered: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: colors.orange,
    paddingHorizontal: 15,
    paddingVertical: 25
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  }
});

export default AddNoteModal;
