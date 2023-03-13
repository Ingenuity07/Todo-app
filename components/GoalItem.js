
import { 
    StyleSheet,
    Text,
    View,
    Pressable,
    Modal
} from 'react-native';
import Goal from './Goal'

import { useState } from 'react';


export default function GoalItem({goal, handleUpdate, handleDelete}) {

const [itemModel, setItemModel] = useState(false)



return ( 
         <View style={styles.goalItem}>
            <Pressable android_ripple={{color:'#dddddd'}} onPress={()=>setItemModel(!itemModel)} >
              <Text style={styles.goalText}>{goal.title}</Text>
            </Pressable>
          { itemModel && <Goal handleUpdate={handleUpdate} handleDelete={handleDelete} goal={goal} itemModel={itemModel} setItemModel={setItemModel} />}
         </View>   
    )
  }

const styles = StyleSheet.create({

 goalItem:{
    margin : 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
    height:60,
    
    },
  goalText:{
    color:'white',
    padding : 8, 
    justifyContent:'center',
    alignItems:'center',
    fontSize:20
    },
    
})