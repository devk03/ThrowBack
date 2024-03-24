import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Modal, FlatList, SafeAreaView, StatusBar } from 'react-native';

// Example images. Replace these URLs with your actual image sources.
const images = [
  { id: '1', src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' },
  { id: '2', src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' },
  { id: '3', src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' },
  { id: '4', src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' },
  { id: '5', src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' },
  { id: '6', src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' },
  { id: '7', src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' },
  { id: '8', src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' },
  { id: '9', src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' },
];

const Gallery = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item.src)} style={styles.imageWrapper}>
            <Image source={{ uri: item.src }} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image source={{ uri: 'https://via.placeholder.com/24/FF0000/FFFFFF?text=X' }} style={styles.closeIcon} />
            </TouchableOpacity>
            <Image source={{ uri: selectedImage }} style={styles.expandedImage} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  image: {
    aspectRatio: 1,
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  expandedImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
});

export default Gallery;


// const Gallery = () => (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Gallery</Text>
//     </View>
//   );
  
//   export default Gallery;
