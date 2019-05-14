import React from 'react';
import { ImageBackground,Image, Text, View, ScrollView, Dimensions } from 'react-native';
import styles from '../style';
import {TabBar} from "../components/TabBar";
export class DifferentialEquationsScreen extends React.Component {
    render() {
      return (
          <View style={{flex:1}}>
              <ScrollView style={styles.InfoPageView}>
                  <ImageBackground source={require ('../../media/img/DifferentialEquations/header.png')} style={styles.StoryHeaderImage}>
                      <Text style={styles.StoryHeaderTextSmall}>Кафедра дифференциальных уравнений</Text>
                  </ImageBackground>

                  <View style={styles.InfoPageContainer}>
                      <Text style={styles.InfoPageText}>
                            В 1971г. образована кафедра геометрии под руководством доцента О.И. Рудницкого.
                            В 1973г. образована кафедра  дифференциальных и интегральных уравнений. В период становления заведующим кафедрой был профессор Ю.И. Черский.
                            В 2010г. образована кафедра дифференциальных уравнений и геометрии в результате слияния кафедры дифференциальных и интегральных уравнений и кафедры геометрии.
                      </Text>

                      <View>
                          <Text style={styles.InfoPageHeader}>Преподаватели и сотрудники кафедры</Text>
                      </View>

                      <View style={styles.InfoCard}>
                          <View style={styles.InfoCardTop}>
                              <View style={styles.InfoCardImage}>
                                  <Image source={require ('../../media/img/DifferentialEquations/anashkin.jpg')}/>
                              </View>
                              <View style={styles.InfoCardText}>
                                  <Text style={styles.InfoCardPersonBold}>Анашкин Олег Васильевич</Text>
                                  <Text>Заведующий кафедрой</Text>
                              </View>
                          </View>
                          <View style={styles.InfoCardBottom}>
                              <View style={styles.InfoCardTextFull}>
                                  <Text>
                                  профессор, главный редактор журнала «Динамические системы», председатель  оргкомитета Крымской международной математической школы «Метод функций Ляпунова и его приложения». доктор физико-математических наук.</Text>
                              </View>
                          </View>
                      </View>

                      <View style={styles.InfoPageImage}>
                          <Image source={require ('../../media/img/DifferentialEquations/img1.png')} style={{height:'100%', width:'100%'}}/>
                      </View>

                      <View style={styles.InfoCard}>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Рудницкий Олег Иванович</Text> - кандидат физико-математических наук, доцент.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Лукьяненко Владимир Андреевич</Text> - кандидат физико-математических наук, доцент.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Криворучко Александр Иванович</Text> - кандидат физико-математических наук, доцент.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Терновский Валерий Александрович</Text> - кандидат педагогических наук, доцент.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Хазова Юлия Александровна</Text> - кандидат физико-математических наук, доцент, старший преподаватель.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Апанович Татьяна Ивановна</Text> - ассистент.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Плышевская  Светлана  Петровна</Text> - ассистент.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Юсупова Ольга Владимировна</Text> - ассистент.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Слюсарева Кира Валерьевна</Text> - ведущий специалист</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Корнута Анжелика Александровна</Text> - старший преподаватель</Text>
                      </View>
                  </View>

              </ScrollView>

              <TabBar />
              <Text style={styles.footerText}>CFU Labs &copy; 2019</Text>
          </View>
      );
    }
}
