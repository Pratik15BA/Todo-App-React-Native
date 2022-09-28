import React from 'react';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';

export default class Task extends React.Component {
    render(){
  return (
    <View key={this.props.keyval} style={styles.task}>
        <Text style={styles.taskDate}>{this.props.val.date}</Text>
        <Text style={this.props.val.completed ? styles.strike : styles.taskText}>{this.props.val.task}</Text>

        <TouchableOpacity onPress={this.props.updateMethod} style={styles.editButton}>
            <Text style={styles.deleteButtonText}><FontAwesome name="edit" size={24} color="black" /></Text>
        </TouchableOpacity>

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
    padding:10,
    borderBottomWidth:2,
    borderBottomColor:'#ededed',
  },
  taskDate:{
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:"orange",
    borderRightWidth:10,
    borderRightColor:'orange',
    fontSize:15,
  },
  taskText:{
    paddingTop:15,
    paddingLeft:20,
    paddingRight:10,
    borderLeftWidth:10,
    borderLeftColor:"orange",
    borderRightWidth:10,
    borderRightColor:'orange',
    fontSize:15,
  },
  strike:{
    textDecorationLine: 'line-through',
    textDecorationColor:'red',
    paddingTop:15,
    paddingLeft:20,
    paddingRight:10,
    borderLeftWidth:10,
    borderLeftColor:"orange",
    borderRightWidth:10,
    borderRightColor:'orange',
    fontSize:15,
  },
  editButton:{
    position:'absolute',
    top:10,
    right:90,
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
  },
  deleteButton:{
    position:'absolute',
    top:10,
    right:30,
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
  },
  strikeButton:{
    position:'absolute',
    top:10,
    right:60,
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
  },
  deleteButtonText:{
    color:'white'
  },
});
