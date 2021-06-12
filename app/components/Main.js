import React from 'react';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert, Image} from 'react-native';
import Task from './Task'


const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('items', value)
    } catch (e) {
      // saving error
    }
  }

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('items')
    return jsonValue != null ? Promise.resolve(JSON.parse(jsonValue)) : []
  } catch(e) {
    // error reading value
  }
  return []
}




export default class Main extends React.Component {
    constructor(props){
        super(props)
        //const items= JSON.parse(localStorage.getItem('items'))
        this.state = {
            taskArray:[],
            taskText:''
        }
        const values = getData().then((data)=>{
          this.setState({taskArray:data})
        })
    }

    addNote(){
        if(this.state.taskText){
          const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
            var d = new Date();
            console.log(d.toLocaleString('default', { month: 'long' }))
            this.state.taskArray.push({
                date:d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear() ,
                task: this.state.taskText,
                completed: false
            });
            this.setState({taskArray:this.state.taskArray})
            this.setState({taskText: ''})
            //localStorage.setItem('items', JSON.stringify(this.state.taskArray));
            storeData(JSON.stringify(this.state.taskArray))
        }
    }

    deleteTask(key){
        this.state.taskArray.splice(key, 1)
        this.setState({taskArray:this.state.taskArray})
        //localStorage.setItem('items', JSON.stringify(this.state.taskArray));
        storeData(JSON.stringify(this.state.taskArray))
    }

    strikeTask(key){
        const item = this.state.taskArray[key]
        item.completed = !item.completed
        this.setState({taskArray:this.state.taskArray})
        //localStorage.setItem('items', JSON.stringify(this.state.taskArray));
        storeData(JSON.stringify(this.state.taskArray))
    }

    showMore(){
      Alert.alert(
        "About Us",
        "This Application is developed by Pratik Moharkar.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        {
          cancelable: true,
          onDismiss: () =>
            console.log("Alert Closed")
        }
      );
    }

    render(){
        let tasks = this.state.taskArray.map((val, key) =>{
            return <Task key={key} keyval={key} val={val} deleteMethod={()=> this.deleteTask(key)} strikeMethod={()=> this.strikeTask(key)}></Task>
        })
        //var logo = require('./img/icon.png')
return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
            style={styles.logo}
            source={require('./icon.png')}/>
            <Text style={styles.headerText}>TODO</Text>
            <TouchableOpacity style={styles.aboutButton} onPress={this.showMore.bind(this)}>
              <Feather name="more-vertical" size={24} color="black" />
            </TouchableOpacity>
        </View>

        
        
        <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}>
          {tasks}
        </ScrollView>
        
        <View style={styles.footer}>
            <TextInput
            style={styles.textInput}
            placeholder="> Enter Task"
            onChangeText={(taskText)=> this.setState({taskText})}
            value={this.state.taskText}
            placeholderTextColor="white"
            underlineColorAndroid="transparent">

            </TextInput>
        </View>
        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}><Ionicons name="add" size={50} color="black" /></Text>
        </TouchableOpacity>
        
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  header:{
    backgroundColor:'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd',
    paddingTop:30
  },
  headerText:{
    fontSize:20,
    padding:25
  },
  logo:{
    width:50,
    height:50,
    position:'absolute',
    top:40,  
    left:20,
    alignItems:'center',
    justifyContent:'center',
  },
  scrollContainer:{
    flex:1,
    marginBottom:'100'
  },
  footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    zIndex:10,
  },
  textInput:{
    alignSelf:'stretch',
    color:"#fff",
    padding:20,
    backgroundColor: "#252525",
    borderTopWidth:2,
    borderTopColor:'#ddd'
  },
  addButton:{
      position:'absolute',
      zIndex:11,
      right:20,
      bottom:90,
      backgroundColor:'orange',
      width:90,
      height:90,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation:8
  },
  addButtonText:{
      color:"#fff",
      fontSize:24
  },
  aboutButton:{
    position:'absolute',
    padding:10,  
    right:10,
    top:40,
    alignItems:'center',
    justifyContent:'center',
  },
  scrollView: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderColor: 'black',
    marginBottom:60,
  },
  contentContainer: {
    justifyContent: 'center',
  }
});