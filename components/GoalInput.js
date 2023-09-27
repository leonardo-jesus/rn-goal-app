import { StyleSheet, TextInput } from 'react-native';

function GoalInput(props) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="Your course goal!"
      onChangeText={props.handler}
      value={props.value}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 16,
  },
});

export default GoalInput;
