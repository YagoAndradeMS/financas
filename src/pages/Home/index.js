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

list = [
  {
    id: 1,
    label: 'Conta de luz',
    value: '75,55',
    date: '03/17/24',
    type: 0 //despesa
  },
  {
    id: 2,
    label: 'Água',
    value: '50,00',
    date: '03/15/24',
    type: 0 // despesa
  },
  {
    id: 3,
    label: 'Aluguel',
    value: '1500,00',
    date: '03/05/24',
    type: 0 // despesa
  },
  {
    id: 4,
    label: 'Supermercado',
    value: '300,00',
    date: '03/10/24',
    type: 0 // despesa
  },
  {
    id: 5,
    label: 'Transporte (ônibus/metrô)',
    value: '200,00',
    date: '03/20/24',
    type: 0 // despesa
  },
  {
    id: 6,
    label: 'Internet',
    value: '90,00',
    date: '03/25/24',
    type: 0 // despesa
  },
  {
    id: 7,
    label: 'Salario',
    value: '100,00',
    date: '03/12/24',
    type: 1 // lucro
  },
  {
    id: 8,
    label: 'Lazer (cinema, restaurante)',
    value: '200,00',
    date: '03/08/24',
    type: 0 // despesa
  },
  {
    id: 9,
    label: 'Mesada',
    value: '150,00',
    date: '03/22/24',
    type: 1 // lucro
  },
  {
    id: 10,
    label: 'Celular',
    value: '120,00',
    date: '03/19/24',
    type: 0 // despesa
  }
]


export default function Home() {
  return (
    <TouchableOpacity style={styles.container}>
      <Header name={'Yago Andrade Matias da Silva'} />
      <Balance />

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
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14
  },
  list: {
    marginLeft: 18,
    marginRight: 18,

  }
});
