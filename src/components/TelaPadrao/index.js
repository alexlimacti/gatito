import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilosGlobal, { cores } from '../../styles/estilosGlobal';
import estilos from '../../styles/estilosTelaPadrao/';

export default function TelaPadrao({ children }){
  return <>
    <SafeAreaView style={estilos.ajusteTela}>
    
    {/* Usado especificamente para android, para componentes não subscreverem a statusbar */}
    <StatusBar backgroundColor={cores.roxo} />
    <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={estilosGlobal.preencher}
    >
      {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilos.ajusteTelaBaixo} />
  </>
}