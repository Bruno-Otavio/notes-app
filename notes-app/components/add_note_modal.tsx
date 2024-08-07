import { Modal, View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import colors from "../constants";

export type Props = {
  visible: boolean,
  setVisible: any,
  setTitle: any,
  setContent: any,
  onAdd: any,
}

const AddNoteModal: React.FC<Props> = ({ visible, setVisible, setTitle, setContent, onAdd }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={() => setVisible(!visible)}
    >
      <View style={styles.modalCentered}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Adicionar Nota</Text>
          <TextInput
            style={styles.input}
            placeholder="Titulo da Nota..."
            onChange={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Conteúdo da Nota..."
            onChange={setContent}
          />
          <View style={styles.buttonsRow}>
            <Pressable
              style={styles.primaryButton}
              onPress={onAdd}
            >
              <Text style={{ ...styles.buttonText, color: colors.black }}>
                Adicionar
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setVisible(!visible)}
              style={styles.secondaryButton}
            >
              <Text style={styles.buttonText}>
                Cancelar
              </Text>
            </Pressable>
          </View>
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
    backgroundColor: colors.rose,
    paddingHorizontal: 15,
    paddingVertical: 15,
    rowGap: 15,

    width: '75%',

    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.coral,
  },
  title: {
    color: colors.white,
    fontSize: 25,
    textAlign: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    columnGap: 10,
  },
  primaryButton: {
    backgroundColor: colors.orange,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  secondaryButton: {
    backgroundColor: colors.coral,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.white,
  },
  input: {
    backgroundColor: colors.coral,
    color: colors.white,
    fontSize: 15,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default AddNoteModal;
