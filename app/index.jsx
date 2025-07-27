import PostItImage from '@/assets/images/post-it.png'
import { useRouter } from 'expo-router'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Image source={PostItImage} style={styles.image} />
      <Text style={styles.title}>Bem-vindo ao Notes App</Text>
      <Text style={styles.subtitle}>
        Anote seus pensamentos, em qualquer hora e em qualquer lugar
      </Text>
      <TouchableOpacity>
        <Text style={styles.button} onPress={() => router.push('/notes')}>
          Clique aqui
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
})

// https://www.youtube.com/watch?v=bCpFbERgj7s
// PAREI EM 20:00
