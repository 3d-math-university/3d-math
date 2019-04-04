import React from 'react';
import { ImageBackground,Image, Text, View, ScrollView, Dimensions } from 'react-native';
import styles from '../style';
export class AppliedMathScreen extends React.Component {
    render() {
      return (
          <ScrollView style={styles.InfoPageView}>

              <ImageBackground source={require ('../../media/img/AppliedMath/header.png')} style={styles.StoryHeaderImage}>
                  <Text style={styles.StoryHeaderTextSmall}>Кафедра прикладной математики</Text>
              </ImageBackground>

              <View style={styles.InfoPageContainer}>
                  <Text style={styles.InfoPageText}>
                      В 1971 г.  основана кафедра прикладной математики под руководством Ю.А.Шевлякина.
                      В 1986 г. была открыта специальность «прикладная математика», программа которой была направлена на подготовку специалистов в области математического моделирования в механике, вычислительных методов и программирования.
                      В 1979 г.  на базе научной группы кафедры была создана Проблемная научно-исследовательская лаборатория (ПНИЛ).
                      С 1993 г. кафедру возглавил доктор физико-математических наук Валерий Николаевич Чехов.
                  </Text>

                  <View>
                      <Text style={styles.InfoPageHeader}>Преподаватели и сотрудники кафедры</Text>
                  </View>

                  <View style={styles.InfoCard}>
                      <View style={styles.InfoCardTop}>
                          <View style={styles.InfoCardImage}>
                              <Image source={require ('../../media/img/AppliedMath/chekhov.jpg')}/>
                          </View>
                          <View style={styles.InfoCardText}>
                              <Text style={styles.InfoCardPersonBold}>Чехов Валерий Николаевич</Text>
                              <Text>Заведующий кафедрой</Text>
                          </View>
                      </View>
                      <View style={styles.InfoCardBottom}>
                          <View style={styles.InfoCardTextFull}>
                              <Text>
                                  лауреат Государственной премии Украинской ССР области науки и техники, член Национального комитета Украины по теоретической и прикладной механики, профессор,  доктор физико-математических наук, заведующий кафедрой прикладной математики.
                              </Text>
                          </View>
                      </View>
                  </View>

                  <View style={styles.InfoPageImage}>
                      <Image source={require ('../../media/img/AppliedMath/img1.jpg')} style={{height:'100%', width:'100%'}}/>
                  </View>

                  <View style={styles.InfoCard}>
                      <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Гончарова Оксана Николаевна</Text> - доктор педагогических наук, профессор.</Text>
                      <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Демченко Надежда Христофоровна</Text> - кандидат физико-математических наук, доцент.</Text>
                      <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Дюличева Юлия Юрьевна</Text> - кандидат физико-математических наук, доцент.</Text>
                      <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Косова Екатерина Алексеевна </Text> - кандидат педагогических наук, доцент.</Text>
                      <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Лушников Валерий Алексеевич</Text> - старший преподаватель.</Text>
                      <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Ляшко Александр Дмитриевич</Text> - ассистент.</Text>
                      <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Макарьин Валентин Иванович</Text> - старший преподаватель.</Text>
                  </View>
              </View>

              <Text style={styles.footerText}>CFU Labs &copy; 2019</Text>
          </ScrollView>
      );
    }
}
