import React, { 
  Component, Image, StyleSheet, View, Text, TextInput, TouchableHighlight
} from 'react-native';
import moment from 'moment';
import LeitnerBox from './LeitnerBox';

export default class CurrentDeck extends Component {
  render() {
    let {cards} = this.props;
    
    // <Text>Next Review</Text>
    // <Text>{moment(c.nextReview).calendar()}</Text>
    return (
      <View style={styles.container}>
        <View style={styles.rowWrapper} key={-1}>
          <Text style={[styles.headerText, styles.thirdGird]}>Word</Text>
          <Text style={[styles.headerText, styles.thirdGird]}>Hanzi</Text> 
          <Text style={[styles.headerText, styles.thirdGird]}>Level</Text> 
        </View>
        {cards.map(c =>
         <View style={styles.rowWrapper} key={c.id}>
          <Text style={[styles.englishText, styles.thirdGird]}>{c.english}</Text>
          <Text style={[styles.hanziText, styles.thirdGird]}>{c.hanzi}</Text> 
          <View style={styles.thirdGird}>
            <LeitnerBox leitnerBox={c.leitnerBox} />
          </View>
         </View>
        )}
      </View>
    );
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column'
  },
  rowWrapper: {
    flex: 1, 
    marginLeft: 20, 
    marginRight: 20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around'
  },
  hanziText: {
    fontSize: 24,
  },
  englishText: {
    fontSize: 22,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  thirdGird: {
    flex: 0.3
  }
}); 