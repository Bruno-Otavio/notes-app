import {
  StyleSheet,
  Text
} from 'react-native';

export type Props = {
  title: string,
  content: string,
};

const Note: React.FC<Props> = ({ title, content }) => {
  return (
    <>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </>
  )
}

const styles = StyleSheet.create({

});

export default Note;
