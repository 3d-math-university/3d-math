import React from 'react';
import { ImageBackground,Image, Text, View, ScrollView, Dimensions } from 'react-native';
import styles from '../style';
export class AboutUsScreen extends React.Component {
    render() {
      return (
          <ScrollView style={styles.InfoPageView}>

          <ImageBackground source={require ('../../media/img/AboutUs/header.png')}
              style={styles.StoryHeaderImage}>
              <Text style={styles.StoryHeaderText}>О нас</Text>
            </ImageBackground>
            <View style={styles.InfoPageContainer}>
              <Text style={styles.InfoPageText}>Внезапно, сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Безусловно, внедрение современных методик требует анализа благоприятных перспектив.</Text>
              <View style={styles.InfoPageImage}>
              <Image source={require ('../../media/img/AboutUs/1.jpg')} style={{height:'100%', width:'100%'}}/>
             </View>
             <Text style={styles.InfoPageText} allowFontScaling={false}>В рамках спецификации современных стандартов, непосредственные участники технического прогресса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ограничены исключительно образом мышления. Предварительные выводы неутешительны: социально-экономическое развитие предполагает независимые способы реализации укрепления моральных ценностей. Мы вынуждены отталкиваться от того, что социально-экономическое развитие в значительной степени обусловливает важность существующих финансовых и административных условий.</Text>
              <View style={styles.InfoPageImage}>
                <Image source={require ('../../media/img/AboutUs/2.jpg')} style={{height:'100%', width:'100%'}}/>
              </View>
              <Text style={styles.InfoPageText} allowFontScaling={false}>Сложно сказать, почему явные признаки победы институциализации набирают популярность среди определенных слоев населения, а значит, должны быть функционально разнесены на независимые элементы. Также как внедрение современных методик создает предпосылки для форм воздействия. С учетом сложившейся международной обстановки, реализация намеченных плановых заданий прекрасно подходит для реализации системы обучения кадров, соответствующей насущным потребностям. Сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями. А еще акционеры крупнейших компаний, вне зависимости от их уровня, должны быть объективно рассмотрены соответствующими инстанциями.</Text>
              <View style={styles.InfoPageImage}>
                <Image source={require ('../../media/img/AboutUs/3.jpg')} style={{height:'100%', width:'100%'}}/>
              </View>
              <Text style={styles.InfoPageText} allowFontScaling={false}>Приятно, граждане, наблюдать, как сделанные на базе интернет-аналитики выводы могут быть указаны как претенденты на роль ключевых факторов. Также как семантический разбор внешних противодействий играет важную роль в формировании стандартных подходов! Ясность нашей позиции очевидна: высокое качество позиционных исследований предоставляет широкие возможности для экспериментов, поражающих по своей масштабности и грандиозности. Каждый из нас понимает очевидную вещь: экономическая повестка сегодняшнего дня влечет за собой процесс внедрения и модернизации модели развития.</Text>
              <View style={styles.InfoPageImage}>
                <Image source={require ('../../media/img/AboutUs/4.jpg')} style={{height:'100%', width:'100%'}}/>
              </View>
            </View>
                      <Text style={styles.footerText}>CFU Labs &copy; 2019</Text>
          </ScrollView>
      );
    }
}
