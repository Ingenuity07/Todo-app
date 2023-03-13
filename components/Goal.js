import { useState } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Modal,
    Image,
    Alert
} from 'react-native';


export default function Goal({handleUpdate, handleDelete, goal, itemModel, setItemModel}) {
  
  const onDelete = (key)=>{
    Alert.alert(
      'Are you sure you want to Delete',
      '', // <- this part is optional, you can pass an empty string
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'OK', onPress: () => handleDelete(key)},
      ],
      {cancelable: true},
      
      
    );
  }
  
  
  return (
  <Modal  visible={itemModel} >
    <View style={styles.Container} >
        <View style={styles.goal}>
          <Text style={styles.textTitle} >{goal.title}</Text>
          <Text style={styles.textDesc} >{goal.description}</Text>
          </View>
         <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button onPress={()=>{handleUpdate(goal),setItemModel(!itemModel)}} title="Update" />
            </View>
            <View style={styles.button}>
              <Button color="#ff5c5c" onPress={()=>{ onDelete(goal.key)}}  title="Delete" />
            </View>
            <View style={styles.button}>
              <Button onPress={()=>{setItemModel(!itemModel)}}  title="Close" />
            </View>
        </View>
    </View>
  </Modal>
  )
}


const styles = StyleSheet.create({
      Container:{
        flex: 1,
        alignItems: 'center',
        padding:8,
        backgroundColor: '#000000'
      },
      goal:{
        marginTop:100,
        borderWidth: 1,
        fontSize:'100px',
        fontWeight:'bold',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '90%',
        margin:10,
        padding:8,
        borderRadius:10
      },
      textTitle:{
        fontSize:30,
        fontWeight:'bold',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '90%',
        margin:3,
        padding:8,
        color:'#120438',
        borderBottomColor: '#000000',
        borderBottomWidth:1
      },
      textDesc:{
        backgroundColor: '#e4d0ff',
        width: '90%',
        margin:10,
        padding:8,
        color:'#120438',
        fontSize:15,
      },
      buttonContainer:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
      },
      button:{
        width:100,
        margin:10,
      },
    })