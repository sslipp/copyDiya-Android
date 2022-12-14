import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import CarouselPager from 'react-native-carousel-pager';
import Swipers from './Swipers';
import Swipers2 from './Swipers2';
import Swipers3 from './Swipers3';
import { LogBox } from 'react-native';
import Dots from 'react-native-dots-pagination';

export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    render() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        return (
            <View style={{ flex: 1 }}>
                <CarouselPager ref={ref => this.carousel = ref} containerPadding={31} animationDuration={400} pageSpacing={13} blurredOpacity={1} blurredZoom={0.85} onPageChange={i => {
                    this.setState({ active: i })
                    if (i === 0) {
                        this.props.SetBgCol('#97bdee')
                        this.props.SetBgCol1('#FEF495')
                        this.props.SetBgCol2('#FEF495')
                        this.props.SetVisibleElement(true)
                        this.props.SetVisibleElement2(false)
                    } else if (i === 1) {
                        this.props.SetBgCol('#DFC7D7')
                        this.props.SetBgCol1('#efe3ed')
                        this.props.SetBgCol2('#efe3ed')
                        this.props.SetBgCol3('#efe3ed')
                        this.props.SetVisibleElement(false)
                        this.props.SetVisibleElement2(true)
                        this.props.SetVisibleElement3(false)
                    } else if (i === 2) {
                        this.props.SetBgCol('#BEEEB4')
                        this.props.SetBgCol1('#EAF6E8')
                        this.props.SetBgCol3('#EAF6E8')
                        this.props.SetVisibleElement2(false)
                        this.props.SetVisibleElement3(true)
                    }
                }}>
                    <View key={'page0'}>
                        <Swipers Fam={this.props.Fam} Name={this.props.Name} Otch={this.props.Otch} Date={this.props.Date} gender={this.props.gender} image={this.props.image} pickImage={this.props.pickImage} bgCol2={this.props.bgCol2} visibleElement={this.props.visibleElement} />
                    </View>
                    <View key={'page1'}>
                        <Swipers2 Fam={this.props.Fam} Name={this.props.Name} Otch={this.props.Otch} Date={this.props.Date} gender={this.props.gender} image={this.props.image} pickImage={this.props.pickImage} bgCol1={this.props.bgCol1} visibleElement2={this.props.visibleElement2}
                            QrCode={this.props.QrCode} setQrCode={this.props.setQrCode} BarCode={this.props.BarCode} setBarCode={this.props.setBarCode}
                        />
                    </View>
                    <View key={'page2'}>
                        <Swipers3 Fam={this.props.Fam} Name={this.props.Name} Otch={this.props.Otch} Date={this.props.Date} gender={this.props.gender} image={this.props.image} pickImage={this.props.pickImage} bgCol3={this.props.bgCol3} visibleElement3={this.props.visibleElement3} QrCode={this.props.QrCodeTwo} setQrCode={this.props.setQrCodeTwo} BarCode={this.props.BarCodeTwo} setBarCode={this.props.setBarCodeTwo} />
                    </View>
                </CarouselPager>
                <Dots length={3} active={this.state.active} paddingVertical={24.5} activeColor='#0A0603' passiveColor='rgba(0, 0, 0, 0.3)' passiveDotWidth={6} passiveDotHeight={6} activeDotHeight={8} activeDotWidth={8} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#97bdee'
    },
});
