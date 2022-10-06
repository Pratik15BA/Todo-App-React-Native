import React from 'react';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';

export default class Task extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      touched: false
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({ touched: !this.state.touched })
  }
  render() {
    return (
      <TouchableOpacity onPress={this.onClick}>
        <View key={this.props.keyval} style={styles.task}>
          <Text style={this.props.val.completed ? styles.dateBorder : styles.taskDate}>{this.props.val.date}</Text>
          <Text style={this.props.val.completed ? styles.strike : styles.taskText}>{this.props.val.task}</Text>

          <TouchableOpacity onPress={this.props.updateMethod} style={this.state.touched ? styles.editButton : styles.hidden}>
            <Text style={styles.deleteButtonText}><FontAwesome name="edit" size={30} color="black" /></Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.strikeMethod} style={this.state.touched ? styles.strikeButton : styles.hidden}>
            <Text style={styles.deleteButtonText}><AntDesign name="checkcircle" size={30} color="black" /></Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.deleteMethod} style={this.state.touched ? styles.deleteButton : styles.hidden}>
            <Text style={styles.deleteButtonText}><AntDesign name="delete" size={30} color="black" /></Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  hidden: {
    display: 'none'
  },
  task: {
    position: 'relative',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  taskDate: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#D18700",
    borderRightWidth: 10,
    borderRightColor: '#D18700',
    fontSize: 15,
  },
  taskText: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 10,
    borderLeftWidth: 10,
    borderLeftColor: "#D18700",
    borderRightWidth: 10,
    borderRightColor: '#D18700',
    fontSize: 15,
  },
  strike: {
    textDecorationLine: 'line-through',
    textDecorationColor: 'red',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 10,
    borderLeftWidth: 10,
    borderLeftColor: "#00D989",
    borderRightWidth: 10,
    borderRightColor: '#00D989',
    fontSize: 15,
    fontStyle: 'italic',
  },
  dateBorder: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#00D989",
    borderRightWidth: 10,
    borderRightColor: '#00D989',
    fontSize: 15,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 110,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 30,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  strikeButton: {
    position: 'absolute',
    top: 10,
    right: 70,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: 'white'
  },
});
