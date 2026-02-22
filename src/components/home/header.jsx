import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { HamburgerMenu, More, SearchNormal } from 'iconsax-react-nativejs';
import { AppColor } from '../../utils/color';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 25, fontWeight: 'bold', color: AppColor.TEXTGRAY }}
      >
        My Notes
      </Text>

      <View style={styles.icons}>
        <TouchableOpacity style={{ flex: 8 }}>
          <SearchNormal size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <More size={23} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <HamburgerMenu size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
    gap: 10,
    paddingHorizontal: 20,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
