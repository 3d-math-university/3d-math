import React,{Component} from 'react';
import { ImageBackground,Image, Text, View, ScrollView, Dimensions } from 'react-native';
import styles from '../../../style';

export class History extends Component {
    render() {
      return (
          <View style={{flex: 1}}>
              <ScrollView style={styles.InfoPageView}>

                  <ImageBackground source={require ('../../../../media/img/MathAnalysis/header.jpg')} style={styles.StoryHeaderImage}>
                      <Text style={styles.StoryHeaderTextSmall}>Кафедра прикладной математики и информатики</Text>
                  </ImageBackground>

                  <View style={styles.InfoPageContainer}>
                      <Text style={styles.InfoPageText}>
                            С 1981 года кафедрой руководит профессор Н.Д. Копачевский.
                            С 1990 года силами кафедры проводится международная конференция «Крымская осенняя математическая школа-симпозиум (КРОМШ)».
                      </Text>

                      <View>
                          <Text style={styles.InfoPageHeader}>Преподаватели и сотрудники кафедры</Text>
                      </View>

                      <View style={styles.InfoCard}>
                          <View style={styles.InfoCardTop}>
                              <View style={styles.InfoCardImage}>
                                  <Image source={require ('../../../../media/img/MathAnalysis/kopachevsky.jpg')}/>
                              </View>
                              <View style={styles.InfoCardText}>
                                  <Text style={styles.InfoCardPersonBold}>Копачевский Николай Дмитриевич</Text>
                                  <Text>Заведующий кафедрой</Text>
                              </View>
                          </View>
                          <View style={styles.InfoCardBottom}>
                              <View style={styles.InfoCardTextFull}>
                                  <Text>Доктор физико-математических наук, профессор. Руководитель научной школы «Операторные методы в механике сплошных сред». Заслуженный деятель науки и техники Украины. Лауреат государственной премии Украины (2013 г.). Заслуженный работник образования Крыма. Действительный член Крымской Академии Наук и Петровской Академии Наук и Искусств (ПАНИ). Председатель Оргкомитета международной конференции КРОМШ (http://kromsh.info).</Text>
                              </View>
                          </View>
                      </View>

                      <View style={styles.InfoPageImage}>
                          <Image source={require ('../../../../media/img/MathAnalysis/img1.jpg')} style={{height:'100%', width:'100%'}}/>
                      </View>

                      <View style={styles.InfoCard}>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Муратов Мустафа Абдурешитович</Text> - декан факультета, профессор кафедры математического анализа, доктор физико-математических наук</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Старков Павел Александрович</Text> - Заместитель декана по учебной работе ,доцент кафедры математического анализа, кандидат физико-математических наук</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Пашкова Юлия Сергеевна</Text> - доцент кафедры математического анализа, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Закора Дмитрий Александрович</Text> - доцент кафедры математического анализа, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Войтицкий Виктор Иванович</Text> - доцент кафедры математического анализа, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Вронский Борис Михайлович</Text> - доцент кафедры математического анализа, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Сёмкина Екатерина Владимировна</Text> - доцент кафедры математического анализа, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Кушнерёва Галина Ивановна</Text> - старший преподаватель кафедры математического анализа.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Марянин Борис Давыдович</Text> - доцент кафедры математического анализа, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Смирнова Светлана Ивановна</Text> - доцент кафедры математического анализа, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Смолич Владимир Павлович</Text> - доцент кафедры математического анализа, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Тихонов Алексей Сергеевич</Text> - доцент кафедры математического анализа, кандидат физико-математических наук.</Text>
                          <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Цветков Денис Олегович</Text> - доцент кафедры математического анализа, кандидат физико-математических наук.</Text>
                      </View>
                  </View>
                  <Text style={styles.footerText}>CFU Labs &copy; 2019</Text>
              </ScrollView>             
          </View>
      );
    }
}
