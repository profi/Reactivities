import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Header, Icon, List } from 'semantic-ui-react'

function App() {
  const [activities, setactivities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/activities')
    .then(response => {
      setactivities(response.data)
    })
  },[])

  return (
    <div>
      <Icon name='users' circular />
      <Header as='h2' icon="users" content="Reactivities" />
      <List>
        {activities.map((activity: any) =>(
          <List.Item key = {activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>   
  
  )
}

export default App
