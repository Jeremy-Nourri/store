import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addIds } from '../store/data';

export default function AddId() {

  const dispatch = useDispatch();

  function getRandom(){
    return Math.floor(Math.random() * 100);
  }

  return (
    <View>
      <Button title="Ajout d'un id random" onPress={() => dispatch(addIds({ id : getRandom()}))} />
    </View>
  );
}

