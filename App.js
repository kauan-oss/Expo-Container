import React from 'react';
import { ScrollView } from 'react-native';
import Titulo from './componentes/Titulo';
import Saudacao from './componentes/Saudacao';
import FotoPerfil from './componentes/FotoPerfil';
import CartaoUsuario from './componentes/CartaoUsuario';

export default function App(){
  return<ScrollView>
      <Titulo />
      <Saudacao nome='Kauan' />
      <FotoPerfil />

      <CartaoUsuario 
      nome='João da Silva'
      descricao = 'Programador Mobile'
      img='perfil00'
      />

      <CartaoUsuario 
      nome='Maria da Silva'
      descricao = 'Médica'
      img='perfil01'
      />

      <CartaoUsuario 
      nome='Pamela Raiane'
      descricao = 'Programadora Mobile'
      img='perfil02'
      />

      <CartaoUsuario 
      nome='Kauan Stipp'
      descricao = 'Assistente de TI'
      img='perfil03'
      />

      <CartaoUsuario 
      nome='Marlon Ribeiro'
      descricao = 'Advogado'
      img='perfil04'
      />

      </ScrollView>
    }