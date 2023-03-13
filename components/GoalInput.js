import { useState } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Modal,
    Alert
} from 'react-native';

export default function GoalInput({addGoalHandler, setModal, modal, updatedGoal, makeupdate}) {


const [text, setText] = useState(updatedGoal?updatedGoal.title:'')
const [description, setDescription] = useState(updatedGoal?updatedGoal.description:'')

const goalTextHandler = (text)=>{
    setText(text)
}

const goalDescriptionHandler = (description)=>{
  setDescription(description)
}  

const handlePress = (key) =>{

  if(!text) { Alert.alert('Required','Title is required')
  return;}
  if(!description) { Alert.alert('Required','Description is required')
  return;}
  
  if(updatedGoal)handleUpdate(key)
  else handleGoal()
}
  
const handleGoal = ()=>{
  addGoalHandler(text, description, updatedGoal)
  setText("")   
  setDescription("")
}

const handleUpdate = (key)=>{
  makeupdate(text, description, key)
  setText("")   
  setDescription("")
}

console.log(updatedGoal)

  return (
  <Modal visible={modal} >
    <View style={styles.inputContainer} >
        <Text style={styles.textTitle} >Add Details...</Text>
         <View style={styles.textInput}><TextInput value={text}  onChangeText={goalTextHandler}  placeholder='Task'></TextInput></View>
        <View style={styles.textInputDesc}><TextInput value={description}  onChangeText={goalDescriptionHandler} multiline={true} placeholder='Description' ></TextInput></View>
        
        <View style={styles.buttonContainer}>
          
        <View style={styles.button}>
            <Button onPress={()=>setModal(!modal)}  title="Close" />
          </View>
          <View style={styles.button}> 
            <Button onPress={()=>handlePress(updatedGoal?updatedGoal.key:'',updatedGoal)} title={updatedGoal?"Update ":"Add "} />
          </View>
        </View>
    </View>
  </Modal>
  )
}


const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        alignItems: 'center',
        padding:8,
        backgroundColor: '#000000'
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '90%',
        margin:10,
        padding:8,
        color:'#120438',
        borderRadius:6
      },
      textInputDesc:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '90%',
        height:100,
        margin:10,
        padding:8,
        color:'#120438',
        borderRadius:6
      },
      buttonContainer:{
        flexDirection: 'row'
      },
      button:{
        width:100,
        margin:10
      },
      textTitle:{
        marginTop:70,
        fontSize:30,
        fontWeight:'bold',
        borderColor: '#e4d0ff',
        width: '90%',
        margin:3,
        padding:8,
        color:'#ffffff',
        borderBottomColor: '#000000',
        borderBottomWidth:1
      },
    
    })