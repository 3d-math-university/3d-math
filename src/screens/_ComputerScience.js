import React from 'react';
import { ImageBackground,Image, Text, View, ScrollView, Dimensions } from 'react-native';
import styles from '../style';
import {TabBar} from "../components/TabBar";
export class ComputerScienceScreen extends React.Component {
    render() {
      return (
          <View style={{ flex:1 }}>
              <ScrollView style={styles.InfoPageView}>

                  <ImageBackground source={require ('../../media/img/ComputerScience/header.jpg')} style={styles.StoryHeaderImage}>
                      <Text style={styles.StoryHeaderTextSmall}>Кафедра прикладной математики и информатики</Text>
                  </ImageBackground>

                  <View style={styles.InfoPageContainer}>
                      <Text style={styles.InfoPageText}>
                            В июне 1994 года профессором В.И. Донским была основана кафедра информатики – сначала в составе 6 человек   – и начала вести учебную работу по дисциплинам математического факультета, а также организовала подготовку группы студентов специальности «математика» со специализацией «информатика».
                            В 1995 – 1996 учебном году была открыта специальность «информатика».
                            В 1998 г. при кафедре информатики была создана Лаборатория программного обеспечения компьютерных систем для проведения научно-исследовательских работ.
                            В 2002 г. совместно с Крымским научным центром НАНУ кафедрой информатики был основан научный журнал «Таврический вестник информатики и математики» http://tvim.info.
                            С 2005 года команды программистов под руководством доцента кафедры информатики А. И. Козлова успешно участвуют в европейских полуфиналах и мировых финальных соревнованиях ACM ICPC.
                      </Text>

                      <View>
                          <Text style={styles.InfoPageHeader}>Преподаватели и сотрудники кафедры</Text>
                      </View>

                      <View style={styles.InfoCard}>
                          <View style={styles.InfoCardTop}>
                              <View style={styles.InfoCardImage}>
                                  <Image source={require ('../../media/img/ComputerScience/donskoy.jpg')}/>
                              </View>
                              <View style={styles.InfoCardText}>
                                  <Text style={styles.InfoCardPersonBold}>Донской Владимир Иосифович</Text>
                                  <Text>Заведующий кафедрой</Text>
                              </View>
                          </View>
                          <View style={styles.InfoCardBottom}>
                              <View style={styles.InfoCardTextFull}>
                                  <Text>Заслуженный деятель науки и техники Украины, академик Академии Высшей школы Украины, академик Крымской Академии наук, заведующий кафедрой информатики, доктор физико-математических наук, профессор, главный редактор журнала «Таврический вестник информатики и математики».</Text>
                              </View>
                          </View>
                      </View>

                      <View style={styles.InfoPageImage}>
                          <Image source={require ('../../media/img/ComputerScience/img1.jpg')} style={{height:'100%', width:'100%'}}/>
                      </View>

                      <View style={styles.InfoCard}>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Руденко Людмила Ивановна</Text> - доцент кафедры информатики, кандидат физико-математических наук, доцент.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Козлов Александр Иванович</Text> - доцент кафедры информатики, кандидат технических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Козлова Маргарита Геннадьевна</Text> - доцент кафедры информатики, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Чехов Владимир Валерьевич</Text> - доцент кафедры информатики, кандидат технических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Анафиев Айдер Сератович</Text> - доцент кафедры информатики, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Блыщик Владимир Федорович</Text> - доцент кафедры информатики, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Ильченко Анатолий Васильевич</Text> - старший преподаватель кафедры информатики.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Чудиновских Александр Ильич</Text> - старший преподаватель кафедры информатики.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Кудла Алексей Александрович</Text> - ассистент кафедры информатики.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Германчук Мария Сергеевна</Text> - ассистент кафедры информатики.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Белозуб Владимир Антонович</Text> - ассистент кафедры информатики.</Text>
                      </View>
                  </View>

              </ScrollView>

              <TabBar />
              <Text style={styles.footerText}>CFU Labs &copy; 2019</Text>
          </View>
      );
    }
}
