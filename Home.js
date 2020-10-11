import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { Header, ListItem, Icon, Input, Button, Text, Card } from 'react-native-elements'

export const Home = () => {
  const [todos, setTodos] = useState([])
  const [taskName, setTaskName] = useState('')

  const toggleStatus = (item) => {
    const newTodos = todos.map((todo) => {
      if (todo.name === item.name) {
        todo.isDone = !todo.isDone
      }
      return todo
    })

    setTodos(newTodos)
  }

  const addTask = (taskName) => {
    const newTodos = todos.concat({
      name: taskName,
      isDone: false
    })
    setTodos(newTodos)
    setTaskName('')
  }

  return (
    <>
      <Header centerComponent={{ text: 'ALL TODOS', style: { color: 'white' } }} />
      <ScrollView style={{ paddingTop: 8 }}>
        <Input placeholder='Add new item' onChangeText={setTaskName} value={taskName} />
        <Button
          icon={<Icon name='add' size={15} color='white' />}
          title='Add'
          containerStyle={{ paddingHorizontal: 8 }}
          onPress={() => addTask(taskName)}
        />

        {todos.length < 1 ? (
          <Card containerStyle={{ padding: 48 }}>
            <Icon name='file' type='font-awesome' color='gray' />
            <Text style={{ textAlign: 'center', color: 'gray', paddingTop: 16 }}>No task</Text>
          </Card>
        ) : (
          todos.map((item, i) => (
            <ListItem key={i} onPress={() => toggleStatus(item)} bottomDivider>
              {item.isDone ? (
                <>
                  <Icon
                    name='check'
                    color='green'
                    type='font-awesome'
                    style={{ paddingRight: 8 }}
                  />
                  <ListItem.Content>
                    <ListItem.Title color='gray'>{item.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron color='white' />
                </>
              ) : (
                <>
                  <Icon
                    name='circle-o-notch'
                    color='gray'
                    type='font-awesome'
                    style={{ paddingRight: 8 }}
                  />
                  <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: 'bold' }}>{item.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron color='white' />
                </>
              )}
            </ListItem>
          ))
        )}
      </ScrollView>
    </>
  )
}
