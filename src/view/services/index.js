import React from 'react';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import Item from './Item';

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar, nós damos!"
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas.!"
  },
  {
    id: 3,
    nome: "Vacina antirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano."
  }
]

export default function Servicos() {
  return <SafeAreaView>
    
    {/* Usado especificamente para android, para componentes não subscreverem a statusbar */}
    <StatusBar />
    
    <FlatList
      data={servicos}
      renderItem={({item}) => <Item { ... item }/>}
      keyExtractor={({id}) => String(id)}
    />
  </SafeAreaView>;
}
