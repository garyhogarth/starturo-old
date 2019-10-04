import React from 'react'
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native'
import Communications from 'react-native-communications'
import { Card, ListItem } from 'react-native-elements'
import { useNavigation } from 'react-navigation-hooks'

const credits = [
  {
    name: 'Gary Hogarth',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'slimitapp.com',
    onPress: () => Linking.openURL('http://www.slimitapp.com'),
  },
  {
    name: 'Twitter',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'support#starturoapp.com',
    onPress: () => Communications.email('supportstarturoapp.com', '', '', 'Support', ''),
  },
]

const links = [
  {
    name: 'Photo by Chris Lawton',
    avatar_url: 'https://images.unsplash.com/profile-1516741428453-58f3028fbeba',
    subtitle: 'http://unsplash.com/photos/Y8iaxOGqlLc',
    onPress: () => Linking.openURL('https://unsplash.com/photos/Y8iaxOGqlLc'),
  },
  {
    name: 'Photo by Katie Smith',
    avatar_url: 'https://images.unsplash.com/profile-1480551298789-292a66dd9dcb',
    subtitle: 'http://unsplash.com/photos/uQs1802D0CQ',
    onPress: () => Linking.openURL('https://unsplash.com/photos/uQs1802D0CQ'),
  },
  {
    name: 'Photo by Rachael Gorjestani',
    avatar_url: 'https://images.unsplash.com/profile-1485473833485-5a23addd840b',
    subtitle: 'http://unsplash.com/photos/evsoUV1EyXY',
    onPress: () => Linking.openURL('https://unsplash.com/photos/evsoUV1EyXY'),
  },
]
const TAG = 'About'
export const About = () => {
  const { navigate } = useNavigation()

  return (
    <View>
      <Card title='Who are we?'>
        {credits.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            onPress={l.onPress}
            chevron={true}
          />
        ))}
      </Card>

      <Card title='Thank You'>
        {links.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            onPress={l.onPress}
            chevron={true}
          />
        ))}
      </Card>
    </View>
  )
}

About.navigationOptions = {
  title: 'About',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
