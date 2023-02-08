import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
 //   import LinearGradient from 'react-native-linear-gradient';
 import image from '../assets';
const { width, height } = Dimensions.get('window');
const COLORS = { primary: '#282534', white: '#fff', black: "#000", blue: '#0C7EFA' };
const slides = [
    {
        id: '1',
        image: image.monkey,
        title: 'Kids Story',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500',
    },
    {
        id: '2',
        image: image.child,
        title: 'Complete Study Material',
        subtitle: 'Sample paper,test paper ,last paper year paper NCERT ,solustion,MCQs ,ImportaNT Question',
    },
    
];

const Slide = ({ item }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: moderateVerticalScale(40), backgroundColor: "white", justifyContent: 'center', width: Dimensions.get('window').width, alignItems: 'center' }}>
            <Image
                source={item?.image}
                style={{ marginTop: moderateVerticalScale(20), height: moderateScale(300), width: moderateScale(280), resizeMode: 'contain' }}
            />
            <View style={{ marginTop: moderateVerticalScale(20) }}>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};

const OnBoarding = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.25,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                {/* Indicator container */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}>
                    {/* Render indicator */}
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: "#F08072",
                                    width: 25,
                                    borderRadius: moderateScale(10)
                                },
                            ]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View style={{ marginBottom: 20 }}>
                    <View style={{ height: 50 }}>
                        
                        <TouchableOpacity
                            style={styles.btn}
                        // onPress={() => navigation.navigate('Loginscreen')}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: "white" }}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
             <StatusTopBar />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: "black",
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    title: {
        color: "black",
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    image: {
        height: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: moderateScale(10),
        width: moderateScale(10),
        backgroundColor: "grey",
        marginHorizontal: 3,
        borderRadius: moderateScale(5)
    },
    btn: {
        flex: 1,
        height: 47,
        borderRadius: 10,
        backgroundColor: "#F08072",
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default SliderScreen;
