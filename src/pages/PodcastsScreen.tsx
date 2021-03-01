import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
  Dimensions,
} from 'react-native';
import {backgroundColor} from '../constants/colors';
import {Thumbnail} from 'react-native-thumbnail-video';
import {Header} from '../components';

interface props {
  children?: JSX.Element;
  route?: any;
  navigation?: any;
}

const PodcastsScreen: React.FC<props> = ({route, navigation}) => {
  const videos = [
    'https://www.youtube.com/watch?v=EbMgHbIjyow',
    'https://www.youtube.com/watch?v=xl32J4TCS0E',
    'https://www.youtube.com/watch?v=rtgN27z0oi0',
    'https://www.youtube.com/watch?v=MBItc_QAUUM',
    'https://www.youtube.com/watch?v=mh45igK4Esw',
    'https://www.youtube.com/watch?v=5MgBikgcWnY',
    'https://www.youtube.com/watch?v=4-079YIasck',
    'https://www.youtube.com/watch?v=uXCGM-CNnFI',
  ];
  return (
    <View style={styles.container}>
      <Header>Podcasts</Header>
      <ScrollView>
        {videos.map((item: string) => {
          return (
            <View style={styles.video}>
              <Thumbnail imageWidth={'100%'} url={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

interface Style {
  container?: ViewStyle;
  heading?: TextStyle;
  details?: TextStyle;
  image?: ImageStyle;
  txtContain?: ViewStyle;
  comma?: TextStyle;
  infoContainer?: ViewStyle;
  infoHead?: TextStyle;
  infoDetails?: TextStyle;
  val?: ViewStyle;
  video?: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  heading: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  details: {
    textAlign: 'justify',
    color: '#a1a1a1',
    maxWidth: '95%',
    fontFamily: 'serif',
    alignSelf: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  txtContain: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 5,
  },
  comma: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'notoserif',
  },
  infoContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoHead: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  infoDetails: {
    color: 'white',
    textAlign: 'center',
  },
  val: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  video: {
    marginVertical: 15,
    width: '95%',
    alignSelf: 'center',
  },
});
export {PodcastsScreen};
