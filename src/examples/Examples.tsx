import { PointsBubble } from '#starturo/app/common/PointsBubble'
import React, { useState } from 'react'
import { Linking, SafeAreaView, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { useNavigation } from 'react-navigation-hooks'

const TAG = 'Examples'

interface Link {
  name: string
  icon: string
  url: string
}

const links: Link[] = [
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
    <>
      <ListItem
        testID={`${TAG} Button Counter`}
        title='Counters'
        subtitle='Counters using all including state management tools'
        onPress={() => navigate('Counter')}
        chevron
        bottomDivider
      />
      <ListItem
        testID={`${TAG} Button Points Bubble`}
        title='Points Bubble'
        subtitle='Points Bubble'
        onPress={() => navigate('Counter')}
        chevron
        bottomDivider
      />
      <PointsBubble />
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
    </>
  )
}
