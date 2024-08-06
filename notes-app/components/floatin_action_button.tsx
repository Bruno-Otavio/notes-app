import { TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from "../constants";

export type Props = {
  onPress: any,
}

const FloatingActionButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.circle}
      onPress={onPress}
    >
      <AntDesign name="plus" size={32} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: colors.coral,

    borderRadius: 100,

    position: 'absolute',
    bottom: 40,
    right: 40,

    padding: 13,
  }
});

export default FloatingActionButton;
