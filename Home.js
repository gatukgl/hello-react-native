import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

import { Header, ListItem, Icon } from 'react-native-elements'

export const Home = () => {
  const [todos, setTodos] = useState([
    {
      name: 'a',
      isDone: false
    },
    {
      name: 'b',
      isDone: true
    }
  ])

  const toggleStatus = (item) => {
    const newTodos = todos.map((todo) => {
      if (todo.name === item.name) {
        todo.isDone = !todo.isDone
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <>
      <Header centerComponent={{ text: 'ALL TODOS', style: { color: 'white' } }} />
      <ScrollView>
        {todos.map((item, i) => (
          <ListItem key={i} onPress={() => toggleStatus(item)} bottomDivider>
            {item.isDone ? (
              <Icon name='check' color='green' type='font-awesome' />
            ) : (
              <Icon name='circle-o-notch' color='gray' type='font-awesome' />
            )}
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: 'bold' }}>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color='white' />
          </ListItem>
        ))}
      </ScrollView>
    </>
  )
}
