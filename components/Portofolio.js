import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomImage from './CustomImage';

export default function App() {
  const [likeCountForForume, setLikeCountForForume] = useState(0);
  const [likeCountForWedding, setLikeCountForWedding] = useState(0);
  const [likeCountForLanding, setLikeCountForLanding] = useState(0);

  const handleLikeForForume = () => {
    setLikeCountForForume(likeCountForForume + 1);
  };

  const handleDislikeForForume = () => {
    if (likeCountForForume > 0) {
      setLikeCountForForume(likeCountForForume - 1);
    }
  };

  const handleLikeForWedding = () => {
    setLikeCountForWedding(likeCountForWedding + 1);
  };

  const handleDislikeForWedding = () => {
    if (likeCountForWedding > 0) {
      setLikeCountForWedding(likeCountForWedding - 1);
    }
  };

  const handleLikeForLanding = () => {
    setLikeCountForLanding(likeCountForLanding + 1);
  };

  const handleDislikeForLanding = () => {
    if (likeCountForLanding > 0) {
      setLikeCountForLanding(likeCountForLanding - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <CustomImage
        source={require('../assets/bella.jpg')} 
        style={styles.avatar}/>
        <Text style={styles.title}>Nabella Rahmatus Sania</Text>
        <Text style={styles.subTitle}>
          Haloo 👋🏻, Saya adalah siswa SMK Telkom Purwokerto yang duduk di bangku
          kelas 12. Di SMK Telkom saya mengambil jurusan RPL.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('haloo guyss 👋🏻👋🏻')}>
          <Text style={styles.textButton}>Contact Me</Text>
        </TouchableOpacity>

        <Text style={styles.recent}>My Recent Project</Text>

        <Text style={styles.projectTitle}>Website Forume</Text>
        <CustomImage
        source={require('../assets/forume.png')} 
        style={styles.projectImage}/>
        <Text style={styles.projectDescription}>
          Website Forume adalah website yang digunakan untuk tanya jawab
          mengenai semua hal yang ingin ditanyakan.
        </Text>
        <TouchableOpacity
          style={styles.buttonProject1}
          onPress={() => Alert.alert('Project Design Wedding Invitation')}>
          <Text style={styles.textButton1}>Detail</Text>
        </TouchableOpacity>

        <View style={styles.likeDislikeContainer}>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={handleLikeForForume}>
            <Text style={styles.likeButtonText}>Like</Text>
          </TouchableOpacity>
          <Text style={styles.likeCountText}>Likes: {likeCountForForume}</Text>
          <TouchableOpacity
            style={styles.dislikeButton}
            onPress={handleDislikeForForume}>
            <Text style={styles.dislikeButtonText}>Dislike</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.projectTitle}>Design Wedding Invitation</Text>
        <Image
          style={styles.projectImage}
          source={require('../assets/wedding.png')}
        />
        <Text style={styles.projectDescription}>
          Seperti namanya, design wedding invitation adalah design undangan
          pernikahan yang digunakan secara online.
        </Text>
        <TouchableOpacity
          style={styles.buttonProject1}
          onPress={() => Alert.alert('Project Design Wedding Invitation')}>
          <Text style={styles.textButton1}>Detail</Text>
        </TouchableOpacity>

        <View style={styles.likeDislikeContainer}>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={handleLikeForWedding}>
            <Text style={styles.likeButtonText}>Like</Text>
          </TouchableOpacity>
          <Text style={styles.likeCountText}>Likes: {likeCountForWedding}</Text>
          <TouchableOpacity
            style={styles.dislikeButton}
            onPress={handleDislikeForWedding}>
            <Text style={styles.dislikeButtonText}>Dislike</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.projectTitle}>Design Landing Page</Text>
        <Image
          style={styles.projectImage}
          source={require('../assets/landingPage.png')}
        />
        <Text style={styles.projectDescription}>
          Design landing page sebuah website mengenai penjelasan singkat tentang
          restaurant pizza.
        </Text>
        <TouchableOpacity
          style={styles.buttonProject1}
          onPress={() => Alert.alert('Project Design Wedding Invitation')}>
          <Text style={styles.textButton1}>Detail</Text>
        </TouchableOpacity>

        <View style={styles.likeDislikeContainer}>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={handleLikeForLanding}>
            <Text style={styles.likeButtonText}>Like</Text>
          </TouchableOpacity>
          <Text style={styles.likeCountText}>Likes: {likeCountForLanding}</Text>
          <TouchableOpacity
            style={styles.dislikeButton}
            onPress={handleDislikeForLanding}>
            <Text style={styles.dislikeButtonText}>Dislike</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFECEF',
  },
  title: {
    color: '#372948',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 10,
    fontSize: 15,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#372948',
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#FFC4C4',
    width: 125,
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textButton: {
    fontWeight: 'bold',
    color: '#A10035',
  },
  buttonProject1: {
    backgroundColor: '#FFC4C4',
    width: 125,
    height: 35,
    marginTop: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignSelf: 'left',
    alignItems: 'center',
    borderRadius: 5,
  },
  textButton1: {
    fontWeight: 'bold',
    color: '#A10035',
  },
  avatar: {
    width: 150,
    height: 170,
    borderRadius: 100,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  recent: {
    color: '#263159',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  projectTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
  },
  projectImage: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  projectDescription: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
  },
  likeDislikeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 90,
  },
  likeButton: {
    backgroundColor: '#FFC4C4',
    width: 60,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  likeButtonText: {
    fontWeight: 'bold',
    color: '#A10035',
  },
  likeCountText: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#A10035',
  },
  dislikeButton: {
    backgroundColor: '#FFC4C4',
    width: 80,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 10,
  },
  dislikeButtonText: {
    fontWeight: 'bold',
    color: '#A10035',
  },
});
