import { Button } from 'react-native';

function AddGoalButton(props) {
  function addGoalHandler() {
    props.onAddGoal(props.enteredGoalText);
    props.setEnteredGoalText('');
  }

  return <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />;
}

export default AddGoalButton;
