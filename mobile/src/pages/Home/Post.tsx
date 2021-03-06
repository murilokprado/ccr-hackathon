import React from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

interface Post {
  userName: string;
  userImage: string;
  dateTime: string;
  photo: string;
  whatsapp: string;
}

const Post = (props: Post) => {
  const navigation = useNavigation();

  function handleNavigationToProfile(props: Post) {
    navigation.navigate('Profile', { props });
  }

  function handleWhatsapp(whatsapp: string) {
    Linking.openURL(
      `whatsapp://send?phone=${whatsapp}&text=Gostaria de ser seu amigo`
    );
  }

  return (
    <View style={styles.momentsContainer}>
      <View style={styles.momentTab}></View>
      <View style={styles.moments}>
        <View style={styles.momentHeader}>
          <RectButton
            style={styles.imageMoment}
            onPress={() => handleNavigationToProfile(props)}
          >
            <Image source={props.userImage} style={styles.imageMoment} />
          </RectButton>
          <Text style={styles.momentDescription}>
            {props.userName} - {props.dateTime}
          </Text>
        </View>
        <Image source={props.photo} style={styles.imageStop} />
      </View>
      <View style={styles.footer}>
        <Text style={{ color: '#5B7488' }}>Curtido por </Text>
        <Text style={{ fontWeight: 'bold', color: '#5B7488' }}>Rubens </Text>
        <Text style={{ color: '#5B7488' }}>e outras 265 pessoas</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Icon name="thumb-up" style={styles.icon} />
          <Text style={{ color: '#5B7488' }}>Curtir</Text>
        </View>
        <View style={styles.action}>
          <Icon name="comment" style={styles.icon} />
          <Text style={{ color: '#5B7488' }}>Comentar</Text>
        </View>
        <RectButton
          style={styles.action}
          onPress={() => handleWhatsapp(props.whatsapp)}
        >
          <View style={styles.action}>
            <Icon name="whatsapp" style={styles.icon} />

            <Text style={{ color: '#5B7488' }}>Compartilhar</Text>
          </View>
        </RectButton>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  textBold: {
    fontSize: 32,
    fontFamily: 'Roboto_700Bold'
  },
  momentsContainer: {
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
    padding: 8
  },
  momentTab: {},
  moments: {},
  momentHeader: {
    marginTop: 5,
    flexDirection: 'row',
    height: 50,
    width: 'auto'
  },
  imageMoment: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 30,
    height: 30,
    borderRadius: 100,
    marginLeft: 10
  },
  imageStop: {
    width: 'auto',
    height: 200
  },
  momentDescription: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    alignSelf: 'center',
    marginLeft: 10,
    color: '#5B7488'
  },
  moment: {},
  footer: { flexDirection: 'row', paddingTop: 8 },
  actions: {
    flexDirection: 'row',
    paddingTop: 8,
    justifyContent: 'space-between'
  },
  action: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: { fontSize: 32, color: '#5B7488', marginRight: 4 }
});
