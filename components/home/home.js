import { Text, View, TouchableHighlight } from 'react-native';
import styles from './home.scss';
import { useState } from 'react';
import Dialog from '../dialog/dialog';
import ViewDialog from '../viewDialog/viewDialog';
import { Button } from 'react-native-paper';


export default function Home() {
  
    const [visible, setVisible] = useState(false);
    const [showView, setShowView] = useState(visible);
    const [visibleView, setVisibleView] = useState(false);
    const [showViewView, setShowViewView] = useState(visibleView);
  
    return (
      <View style={styles.container}>
      <View style={styles.frame}>
  
        <Dialog visible={visible} setVisible={setVisible} showView={showView} setShowView={setShowView}/>
        <ViewDialog visibleView={visibleView} setVisibleView={setVisibleView} showViewView={showViewView} setShowViewView={setShowViewView} />
        
        <View style={styles.card}>
          <Text style={styles.text} >Money spent today:</Text>
          <View style={styles.cardBotonContainer} >
            <Text style={styles.ammount} >$540</Text>
            <TouchableHighlight style={styles.boton} onPress={() => {setVisibleView(true); setShowViewView(true)}}>
                <Text style= {{color:'white'}} >view</Text>
            </TouchableHighlight>
          </View>
        </View>
  
        <View style={styles.card2}>
          <Text style={styles.text} >Money spent this week:</Text>
          <View style={styles.cardBotonContainer}>
            <Text style={styles.ammount} >$2450</Text>
            <TouchableHighlight style={styles.boton} onPress={() => {setVisibleView(true); setShowViewView(true)}}>
                <Text style= {{color:'white'}} >view</Text>
            </TouchableHighlight>
          </View>
        </View>
  
        <View style={styles.card3}>
          <Text style={styles.text} >Money spent this month:</Text>
          <View style={styles.cardBotonContainer}>
            <Text style={styles.ammount} >$12850</Text>
            <TouchableHighlight style={styles.boton} onPress={() => {setVisibleView(true); setShowViewView(true)}}>
                <Text style= {{color:'white'}} >view</Text>
            </TouchableHighlight>
          </View>  
        </View>
  
        <View style={styles.addcont}> 
          <TouchableHighlight onPress={() => {setVisible(true); setShowView(true)}}>
            <View style={styles.add}>
              <Text style={styles.textadd} >+ Add spending</Text>
            </View>
          </TouchableHighlight>
        </View>

      </View>  
      </View>
    );
  }