import React from 'react';

import { Container, TabsContainer, TabItem, TabText } from './styles';

import { Entypo as Icon } from '@expo/vector-icons';

interface TabsParadas {
  translateY: Function;
}

export default function TabsParadas(props: TabsParadas) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: props.translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp'
            })
          }
        ],
        opacity: props.translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp'
        })
      }}
    >
      <TabsContainer>
        <TabItem>
          <Icon name="location-pin" size={24} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="location-pin" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="location-pin" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="location-pin" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="location-pin" size={24} color="#fff" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
