import React, { useEffect, useState } from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList
} from "react-native";
import { EnviromentButton } from "../components/EnviromentButton";

import { Header } from "../components/Header";
import api from "../services/api";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnviromentProps {
  key: string,
  title: string
}

export function PlantSelect() {
  const [enviroments, setEnviroment] = useState<EnviromentProps[]>();

  useEffect(() => { // useEffect é um hook para ser carregado antes da tela
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments');
      setEnviroment(data);
    }

    fetchEnviroment();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text  style={styles.subtitle}>
          você quer colocar sua planta?
        </Text>
      </View>
      <View>
        <FlatList
          data={enviroments}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              active 
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false} // não mostra a barra de rolagem
          contentContainerStyle={styles.enviromentList}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.background
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  }
});