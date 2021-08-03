import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilos from '../../styles/estilosGlobal';

export default function TelaPadrao({ children }){
  return <SafeAreaView style={estilos.preencher}>
    
    {/* Usado especificamente para android, para componentes não subscreverem a statusbar */}
    <StatusBar />
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={estilos.preencher}
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
}