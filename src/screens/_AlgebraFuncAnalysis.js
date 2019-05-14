import React, { Component } from 'react';
import { ImageBackground, Image, Text, View, ScrollView} from 'react-native';
import styles from '../style';
import {TabBar} from "../components/TabBar";


export class AlgebraFuncAnalysisScreen extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={styles.InfoPageView}>

                    <ImageBackground source={require ('../../media/img/AlgebraFuncAnalysis/header.jpg')} style={styles.StoryHeaderImage}>
                        <Text style={styles.StoryHeaderTextSmall}>Кафедра алгебры и функционального анализа</Text>
                    </ImageBackground>

                    <View style={styles.InfoPageContainer} isVisible={}>
                        <Text style={styles.InfoPageText}>
                            В 1971 году,  после реорганизации Крымского педагогического института создана кафедра алгебры и теории чисел.
                            В 1999 году преобразована в кафедру алгебры и функционального анализа Таврического национального университета им. В. И. Вернадского.
                            С 1971 г. до своей кончины в январе 2005 г. кафедрой заведовал доктор ф.-м. наук, профессор, заслуженный деятель науки и техники АР Крым, профессор Александр Васильевич Кужель.
                            С февраля 2005 года по настоящее время кафедрой заведует Игорь Владимирович Орлов доктор физико-математических наук, профессор.
                        </Text>

                        <View>
                            <Text style={styles.InfoPageHeader}>Преподаватели и сотрудники кафедры</Text>
                        </View>

                        <View style={styles.InfoCard}>
                            <View style={styles.InfoCardTop}>
                                <View style={styles.InfoCardImage}>
                                    <Image source={require ('../../media/img/AlgebraFuncAnalysis/orlov.jpg')}/>
                                </View>
                                <View style={styles.InfoCardText}>
                                    <Text style={styles.InfoCardPersonBold}>Орлов Игорь Владимирович</Text>
                                    <Text>Заведующий кафедрой</Text>
                                </View>
                            </View>
                            <View style={styles.InfoCardBottom}>
                                <View style={styles.InfoCardTextFull}>
                                    <Text>доктор физико-математических наук, профессор. Более 180 публикаций,  2 учебных пособия, 2 монографии, 4 диссертации учеников, Региональный грант РФФИ – руководитель, Грант РНФ (совместно с Воронежским государственным Университетом) – участник.</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.InfoPageImage}>
                            <Image source={require ('../../media/img/AlgebraFuncAnalysis/img1.jpg')} style={{height:'100%', width:'100%'}}/>
                        </View>

                        <View style={styles.InfoCard}>
                            <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Баран Инна Викторовна</Text> - ассистент, кандидат физ.-мат. наук</Text>
                            <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Кудряшов Юрий Леонтьевич</Text> - кандидат физико-математических наук, доцент.</Text>
                            <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Кузьменко Екатерина Михайловна</Text> - кандидат физико-математических наук, доцент.</Text>
                            <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Лукьянова Елена Александровна</Text> - кандидат физико-математических наук, доцент.</Text>
                            <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Пантина Людмила Павловна </Text> - ведущий специалист.</Text>
                            <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Решетова Эльзара Энверовна</Text> - кандидат педагогических наук, доцент.</Text>
                            <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Стонякин Федор Сергеевич</Text> - кандидат физико-математических наук, доцент.</Text>
                            <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Третьяков Дмитрий Вадимович</Text> - кандидат физико-математических наук, доцент.</Text>
                            <Text style={styles.InfoCardPerson}><Text style={styles.InfoCardPersonBold}>Тышкевич Дмитрий Леонидович</Text> - кандидат физико-математических наук, доцент.</Text>
                        </View>
                    </View>
                </ScrollView>

                <TabBar />
                <Text style={styles.footerText}>CFU Labs &copy; 2019</Text>
            </View>
        );
    }
}