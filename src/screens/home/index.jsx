import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/home/header';
import { AppColor } from '../../utils/color';
import CardNotes from '../../components/home/cardNotes';
import { Add } from 'iconsax-react-nativejs';
import AppRoutes from '../../utils/route';

const Home = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const addNewNotes = newNoteData => {
    const form = {
      id: Date.now(),
      title: newNoteData.title,
      description: newNoteData.description,
      date: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setNotes(prev => [form, ...prev]);
  };

  const removeNote = id => {
    setNotes(prev => prev.filter(item => item.id !== id));
  };
  const editNote = (id, updateData) => {
    setNotes(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updateData } : item)),
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <CardNotes
            item={item}
            onDelete={() => removeNote(item.id)}
            onUpdate={() =>
              navigation.navigate(AppRoutes.CREATE, {
                note: item,
                editNote: editNote,
              })
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate(AppRoutes.CREATE, { addNewNotes })}
      >
        <Add size={50} color={AppColor.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.GRAY,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: AppColor.PRIMARY,
    borderRadius: 100,
  },
});
