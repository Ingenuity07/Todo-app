import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
        Text,
        View,
        Button,
        FlatList,} from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';





export default function App() {
  
  const [goal,setGoal] = useState([
    {title:"Shinz wo", description:"description 1", key : Math.random().toString()},
    {title:"Sasagyo", description:"description 2",key : Math.random().toString()},
    {title:"Tatakaye", description:"description 3",key : Math.random().toString()}
  ])
  
  const [modal,setModal] = useState(false)
  const [updatedGoal, setUpdatedGoal] = useState('')
  
  const handleDelete = (key) => {
    setGoal(goal => goal.filter((item) => item.key !== key ))
    console.log("Deleted", goal)
  }
  
  const addGoalHandler = (text,description, update)=>{
    setGoal(goal => [...goal,{title:text, description:description,key : new Date().toLocaleString()}])
    console.log("Added", goal)
    setModal(!modal)
  }
  
  const handleUpdate = (goal) =>{
    setUpdatedGoal(goal)
    setModal(!modal)
  }
  
  const makeupdate = (text,description,key)=>{
    setGoal(goal.map((item )=> { if (item.key===key) return {title:text, description:description,key :key} ; return item }))
    console.log("Added", goal)
    setModal(!modal)
  }
  
  return (
   <>
    <StatusBar style='light' />
    
    <View style={styles.appContainer}>
    <Button title='Add goal' onPress={()=>{setModal(!modal),setUpdatedGoal('')}}  />
      {modal && <GoalInput addGoalHandler={addGoalHandler} setModal={setModal} modal={modal} updatedGoal={updatedGoal} makeupdate={makeupdate}/>}
      <View style={styles.goalsContainer}>
        <Text>List of Tasks...</Text>
        <FlatList data={goal}
          keyExtractor={item => item.key}
          alwaysBounceVertical={false} 
          renderItem = {(itemData)=> <GoalItem handleUpdate={handleUpdate} handleDelete={handleDelete} goal={itemData.item} /> }  
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:10,
    marginTop:80,
  },
  goalsContainer:{
    flex:1
  },
});
