import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import { list } from '../../components/api/fake';
import Actions from '../../components/Actions';

export default function Home() {
  return (
    <TouchableOpacity style={styles.container}>
      <Header name={'Yago Andrade Matias da Silva'} />
      <Balance/>
      <Actions/>

      <Text style={styles.title}> Últimas movimentações </Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginLeft: 18,
    marginRight: 18,

  }
});
