import React, { Component } from 'react';
import {Text, View, ScrollView, ImageBackground} from 'react-native';
import { MenuButton } from '../components/buttons/MenuButton';
import styles from '../style';

export class ForEnrolleeScreen extends Component {
    render() {
        const {forEnrolleeScreenStyle} = styles;

        return (
            <ImageBackground source={require('../../media/img/background.jpg')} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <View style={forEnrolleeScreenStyle}>
                        <MenuButton
                            text="Вступительные испытания"
                            source={require("../../media/icons/enrollee/sheet.png")}
                            onPress={() => this.props.navigation.navigate('E_Sheet')}
                        />
                        <MenuButton
                            text="Направления подготовки"
                            source={require("../../media/icons/enrollee/sign.png")}
                            onPress={() => this.props.navigation.navigate('E_Sign')}
                        />
                        <MenuButton
                            text="О приёме с ОВ"
                            source={require("../../media/icons/enrollee/star.png")}
                            onPress={() => this.props.navigation.navigate('E_Star')}
                        />
                        <MenuButton
                            text="Перечень документов"
                            source={require("../../media/icons/enrollee/paper.png")}
                            onPress={() => this.props.navigation.navigate('E_Paper')}
                        />
                        <MenuButton
                            text="Порядок учёта инд. достижений"
                            source={require("../../media/icons/enrollee/student.png")}
                            onPress={() => this.props.navigation.navigate('E_Student')}
                        />
                        <MenuButton
                            text="Правила приёма"
                            source={require("../../media/icons/enrollee/medal.png")}
                            onPress={() => this.props.navigation.navigate('E_Medal')}
                        />
                        <MenuButton
                            text="Сроки и места приёма"
                            source={require("../../media/icons/enrollee/time.png")}
                            onPress={() => this.props.navigation.navigate('E_Time')}
                        />
                        <MenuButton
                            text="Статистика прошлых лет"
                            source={require("../../media/icons/enrollee/graphic.png")}
                            onPress={() => this.props.navigation.navigate('E_Graphic')}
                        />
                        <MenuButton
                            text="Целевой курс"
                            source={require("../../media/icons/enrollee/success.png")}
                            onPress={() => this.props.navigation.navigate('E_Success')}
                        />
                    </View>

                    <Text style={styles.footerText}>CFU Labs &copy; 2019</Text>
                </ScrollView>
            </ImageBackground>
        )
    }
}