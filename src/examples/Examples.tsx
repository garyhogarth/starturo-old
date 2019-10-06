import React from 'react'
import { Linking, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { useNavigation } from 'react-navigation-hooks'

const TAG = 'Examples'

const links = [
  {
    name: 'Gary Hogarth',
    icon: 'linkedin',
    url: 'http://linkedin.com/in/garyhogarth',
  },
  {
    name: '@garyhogarth',
    icon: 'twitter',
    url: 'http://twitter.com/garyhogarth',
  },
  {
    name: 'http://github.com/garyhogarth',
    icon: 'github',
    url: 'http://github.com/garyhogarth',
  },
]

export const Examples = () => {
  const { navigate } = useNavigation()
  return (
    <ScrollView>
      <ListItem
        testID={`${TAG} Button Counter`}
        title='Counters'
        subtitle='Counters using all including state management tools'
        onPress={() => navigate('Counter')}
        chevron
        bottomDivider
      />
      {links.map((link, i) => (
        <ListItem
          key={i}
          testID={`${TAG} Contact ${link.name}`}
          leftIcon={{ name: link.icon, type: 'font-awesome' }}
          title={link.name}
          onPress={() => Linking.openURL(link.url)}
          chevron
        />
      ))}
      {links.map((link, i) => (
        <ListItem
          key={i}
          testID={`${TAG} Contact ${link.name}`}
          leftIcon={{ name: link.icon, type: 'font-awesome' }}
          title={link.name}
          onPress={() => Linking.openURL(link.url)}
          chevron
        />
      ))}
      {links.map((link, i) => (
        <ListItem
          key={i}
          testID={`${TAG} Contact ${link.name}`}
          leftIcon={{ name: link.icon, type: 'font-awesome' }}
          title={link.name}
          onPress={() => Linking.openURL(link.url)}
          chevron
        />
      ))}
      {links.map((link, i) => (
        <ListItem
          key={i}
          testID={`${TAG} Contact ${link.name}`}
          leftIcon={{ name: link.icon, type: 'font-awesome' }}
          title={link.name}
          onPress={() => Linking.openURL(link.url)}
          chevron
        />
      ))}
      {links.map((link, i) => (
        <ListItem
          key={i}
          testID={`${TAG} Contact ${link.name}`}
          leftIcon={{ name: link.icon, type: 'font-awesome' }}
          title={link.name}
          onPress={() => Linking.openURL(link.url)}
          chevron
        />
      ))}
      {links.map((link, i) => (
        <ListItem
          key={i}
          testID={`${TAG} Contact ${link.name}`}
          leftIcon={{ name: link.icon, type: 'font-awesome' }}
          title={link.name}
          onPress={() => Linking.openURL(link.url)}
          chevron
        />
      ))}
    </ScrollView>
  )
}
