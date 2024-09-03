import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Kdrama from './Componentes/Kdramas';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galeria de Kdramas</Text>
      
      <ScrollView>
      <Kdrama
        nombre = 'Tale Of The Nine Tailed'
        imagen={require('./Imagenes/Zorro.jpg')}
      ></Kdrama>

      <Kdrama
        nombre = 'True Beauty'
        imagen={require('./Imagenes/Belleza.jpg')}
      ></Kdrama>

      <Kdrama
        nombre = 'Crash Landing On You'
        imagen={require('./Imagenes/Corazon.jpg')}
      ></Kdrama>

      <Kdrama
        nombre = 'King The Lang'
        imagen={require('./Imagenes/King.jpg')}
      ></Kdrama>

      <Kdrama
        nombre = 'Business Proposal'
        imagen={require('./Imagenes/Laboral.jpg')}
      ></Kdrama>

      <Kdrama
        nombre = 'Tomorrow'
        imagen={require('./Imagenes/Mañana.jpg')}
      ></Kdrama>

      <Kdrama
        nombre = 'W Two Worlds'
        imagen={require('./Imagenes/Mundos.jpg')}
      ></Kdrama>

      <Kdrama
        nombre = 'My Name'
        imagen={require('./Imagenes/Nombre.jpg')}
      ></Kdrama>

      <Kdrama
        nombre = 'Destined On You'
        imagen={require('./Imagenes/Predestinado.jpg')}
      ></Kdrama>

      <Kdrama
        nombre = 'See You In My 19th Life'
        imagen={require('./Imagenes/Vida.jpg')}
      ></Kdrama>
      </ScrollView>
     
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

