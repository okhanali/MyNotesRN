import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { AppColor } from '../../utils/color';

const Create = ({ route, navigation }) => {
  const { addNewNotes, editNote, note } = route.params;
  const [title, setTitle] = useState(note ? note.title : '');
  const [desc, setDesc] = useState(note ? note.description : '');

  const handleSave = () => {
    if (note) {
      editNote(note.id, { title: title, description: desc });
    } else {
      addNewNotes({ title: title, description: desc });
    }
    navigation.goBack();
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        gap: 30,
        backgroundColor: AppColor.GRAY,
      }}
    >
      <Text style={styles.textTitle}>Başlık</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Başlık Giriniz..."
        style={styles.textInput}
      />
      <Text style={styles.textTitle}>Açıklama</Text>
      <TextInput
        value={desc}
        onChangeText={text => setDesc(text)}
        placeholder="Açıklama Giriniz..."
        style={styles.textInput}
      />

      <TouchableOpacity style={styles.createBtn} onPress={handleSave}>
        <Text style={styles.createBtnText}>{note ? 'Güncelle' : 'Ekle'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  textInput: {
    borderWidth: 0.5,
    padding: 20,
    borderRadius: 20,
    backgroundColor: AppColor.WHITE,
  },
  createBtn: {
    backgroundColor: AppColor.PRIMARY,
    padding: 20,
    width: '40%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  createBtnText: {
    color: AppColor.WHITE,
    fontSize: 20,
    textAlign: 'center',
  },
});
