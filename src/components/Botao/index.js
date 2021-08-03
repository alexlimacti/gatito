import React from 'react';
import funcaoEstilosPadrao from '../../styles/estilosBotao';

import { TouchableOpacity, Text } from 'react-native';

export default function Botao({pequeno = false, invertido = false, valor, acao, estilos}){
  const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);
  return <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}>
      <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
}