import {View, Text, StyleSheet} from 'react-native';

export function Favorite(){
  return(
    <View style={styles.container}>
      <Text>Pagina de Favoritos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "green",
    }
})