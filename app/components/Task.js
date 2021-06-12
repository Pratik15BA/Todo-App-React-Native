import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';

export default class Task extends React.Component {
    render(){
  return (
    <View key={this.props.keyval} style={styles.task}>
        <Text style={styles.taskText}>{this.props.val.date}</Text>
        <Text style={this.props.val.completed ? styles.strike : styles.taskText}>{this.props.val.task}</Text>

        <TouchableOpacity onPress={this.props.strikeMethod} style={styles.strikeButton}>
            <Text style={styles.deleteButtonText}><AntDesign name="checkcircle" size={24} color="black" /></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}><AntDesign name="delete" size={24} color="black" /></Text>
        </TouchableOpacity>
    </View>
    
  );
    }
}

const styles = StyleSheet.create({
  task:{
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor:'#ededed'
  },
  taskText:{
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:"orange",
  },
  strike:{
    textDecorationLine: 'line-through',
    textDecorationColor:'red',
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:"orange",

  },
  deleteButton:{
    position:'absolute',
    padding:10,
    top:10,
      right:10,
      bottom:10,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center',
  },
  strikeButton:{
    position:'absolute',
    padding:10,
    top:10,
      right:70,
      bottom:10,
      backgroundColor:'green',
      alignItems:'center',
      justifyContent:'center',
  },
  deleteButtonText:{
    color:'white'
  },
});
