import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { AppColor } from '../../utils/color';
import { Edit, Trash } from 'iconsax-react-nativejs';

const CardNotes = ({ item, onDelete, onUpdate }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.cardTextTitle}>{item.title}</Text>
        <Text style={styles.cardTextDesc}>{item.description}</Text>
        <Text style={styles.cardTextDate}>{item.date}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            right: 15,
            top: 15,
            gap: 10,
          }}
        >
          <TouchableOpacity onPress={onDelete}>
            <Trash size={20} color={AppColor.RED} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onUpdate}>
            <Edit size={20} color={AppColor.PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: AppColor.TEXTGRAY,
    borderRadius: 10,
    padding: 20,
    gap: 10,
  },
  cardTextTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  cardTextDesc: {
    fontSize: 15,
    fontWeight: '800',
    color: AppColor.TEXTGRAY,
  },

  cardTextDate: {
    fontSize: 15,
    fontWeight: '700',
    color: AppColor.TEXTGRAY,
  },
});
