import React , { useEffect, useState, useRef } from 'react';
import {
    View,  
    Text,
    ImageBackground,
    Image,
    ScrollView,
    Button,
    // Section,
    FlatList,
    Animated,
    Dimensions,
    StyleSheet
} from 'react-native';
import Carousel,{ Pagination } from 'react-native-snap-carousel';

import {
    IconButton,
    TextButton,
    Cards,
    DPhotoCard,
    P_cards,
    // VerticalCourseCard,
    // LineDivider,
    // CategoryCard,
    // HorizontalCourseCard
} from "../components"

// import {
  
//     P_cards
// } from "../components/P_cards"
import{
    COLORS,
    FONTS,
    SIZES,
    icons,
    images,
   

} from "../constants";

import{

   DdummyData

} from '../Data/Data';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);


const {width, height} = Dimensions.get("window");
const data = DdummyData;

const Section =({ containerStyle, title, onPress, children }) => {
    return (
        <View
            style={{
                ...containerStyle
            }}
        >

            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding
                }}
            >
                <Text 
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                    >
                        {title}
                </Text>
                <TextButton
                    contentContainerStyle={{
                        width: 80,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    label="See All"
                    onPress={onPress}
                >


                </TextButton>

            </View>
                    {/* {children} */}
        </View>
    )
}

const DHomeScreen = () => {


    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 40,
                    marginBottom: 10,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                {/* Greeting  */}
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text style={{ ...FONTS.h2, fontWeight: 'bold', color: COLORS.black }}>Hello, Lalith Perera!</Text>
                    <Text 
                    style={{
                        color: COLORS.gray50,
                        ...FONTS.body3,
                        fontWeight: 'bold'
                    }}>
                        Sunday, 16th Oct 2022
                    </Text>

                </View>

                {/* Notification */}

                <IconButton
                    icon={icons.notifications}
                    iconStyle={{
                        tintColor: COLORS.black
                    }}
                ></IconButton>
            </View>
        )
    }

    function renderHorizontalScrollView() {
        return (

            <ScrollView>
              
                    <Text   
                    
                    style={{
                     ...FONTS.h3,
                     marginLeft: 30,
                     color: COLORS.black,
                     fontWeight: 'bold'
                     

                }}> Select a Ride</Text>
                
                <View style={{ height: 130, marginTop: 20 }}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                        <Cards imageUri={require('../assets/images/DayCard.png')}>

                        </Cards>
                        <Cards imageUri={require('../assets/images/NightCard.png')}>

                        </Cards>
                        <Cards imageUri={require('../assets/images/DayOff.png')}>

                        </Cards>
                        <Cards imageUri={require('../assets/images/NightOff.png')}>

                        </Cards>
                   
                    </ScrollView>


                </View>


            </ScrollView>        
            
            
            )
    }

        function renderPhotoCard() {

           const [index, setIndex] = useState(0);
           const isCarousel = useRef(null);
                return (

                    <View style = {{alignItems: 'center',
                    }}>

                        <Carousel
                            ref={isCarousel}
                            data={DdummyData}
                            renderItem={DPhotoCard}
                            sliderWidth= {SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            onSnapToItem={index => setIndex(index)}
                          
                        />

                        <Pagination
                            dotsLength= {data.length}
                            activeDotIndex={index}
                            carouselRef={isCarousel}
                            dotStyle={{
                                width:10,
                                height:10,
                                borderRadius:10,
                                marginBottom: -5,
                                marginHorizontal: 4,
                                backgroundColor: 'red',
                                
                            }}
                        
                        />


                     </View>
    
    
                      
                
                
                ) 
    }

    
 

    // function renderCategories() {
    //     return (
    //         <Section
    //             title="Categories"
    //         >

    //         <FlatList
    //             horizontal
    //             data={dummyData.categories}
    //             listKey="Categories"
    //             keyExtractor={item => 'Categories-${item.id}'}
    //             showsHorizontalScrollIndicator={false}
    //             contentContainerStyle={{
    //                 marginTop: SIZES.padding
    //             }}
    //             renderItem={({ item, index }) => (
    //                     <CategoryCard
    //                         category={item}
    //                         containerStyle={{
    //                             marginLeft: index == 0 ? SIZES.padding: SIZES.base,
    //                             marginRight: index == dummyData.categories.length - 1 ? SIZES.padding: 0
    //                         }}
    //                     />
    //             )}

    //             />

    //         </Section>
    //     )
    // }

    // function renderPopularCourses() {
    //     return(
    //         <Section
    //         title="Popular Courses"
    //         containerStyle={{
    //             marginTop: 30
    //         }}
    //     >
    
    //     <FlatList
           
    //         data={dummyData.courses_list_2}
    //         listKey="PopularCourses"
    //         scrollEnabled={false}
    //         keyExtractor={item => 'PopularCourses-${item.id}'}
    //         showsHorizontalScrollIndicator={false}
    //         contentContainerStyle={{
    //             marginTop: SIZES.radius,
    //             paddingHorizontal: SIZES.padding
    //         }}
    //         renderItem={({ item, index }) => (
    //                <HorizontalCourseCard
    //                     course={item}
    //                     containerStyle={{
    //                         marginVertical: SIZES.padding,
    //                         marginTop: index == 0 ? SIZES.radius : SIZES.padding
    //                     }}
                   
    //                >
    
    //                </HorizontalCourseCard>
    //         )}
    //         ItemSeparatorComponent={() => (
    //             <LineDivider
    //                     lineStyle={{
    //                         backgroundColor: COLORS.gray20
    //                     }}
                
    //             />
    //         )}
    
    //         />
    
    //     </Section>
    //     )
    
    // }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
 
        {/* header */}
      

        {/* cardlist */}
        
       
        {/* Content  */}
        <ScrollView
             contentContainerStyle={{
                paddingBottom: 150
             }} 
             showsVerticalScrollIndicator={false}
        >
              {renderHeader()}
            {/* Render Phto */}
           {renderPhotoCard()}
             {/* {renderStartLearning()} */}
             {renderHorizontalScrollView()}

             {/* Courses */}
             {/* {renderCourses()} */}

             {/* <LineDivider
                lineStyle={{
                    marginVertical: SIZES.padding
                }}
             /> */}

             {/* Categories */}
             {/* {renderCategories()} */}

             {/* popular Courses */}
             {/* {renderPopularCourses()} */}
        </ScrollView>  
        </View>
    )
}

export default DHomeScreen;