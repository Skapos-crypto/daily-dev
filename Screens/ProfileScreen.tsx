import React, { PropsWithChildren } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    GestureResponderEvent

} from 'react-native';

interface CustomButtonProps {
    text: string;
    backgroundColor?: string;
   
  }

const CustomButton: React.FC<CustomButtonProps> = ({text, backgroundColor='#6c586a'}) =>{
return(
    <TouchableOpacity
    style  = {[styles.button, {backgroundColor}]}>

        <Text 
        style={{fontSize:25, color:'white',alignSelf:'center'}}>{text}</Text>
    </TouchableOpacity>


);
};



const ProfileScreen: React.FC = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.contentContainer}>
                <Image
                    style={styles.logo}
                    source={require('./images/profile.png')}
                />
                <Text style={{ fontSize: 25, fontWeight: 'semibold', color: '#6c586a' }}>Mohamed#223</Text>
                <View style={styles.info}>
                    <InfoItem label="Following" value="5" />
                    <InfoItem label="Liked" value="12" />
                    <InfoItem label="Followers" value="8" />
                </View>
                <View style={styles.info_buttons}>

                
              <CustomButton
                  text="Courses"
                  backgroundColor="#6c586a"
                  
              />
              <CustomButton
                  text="Settings"
                  backgroundColor="#6c586a"
                  
              />


                </View>
            </View>
            <ScrollView style={styles.coursesContainer}>
                <Text style={styles.coursesTitle}>My Courses</Text>
                <TouchableOpacity onPress={() => Alert.alert('lets go')}>
                    <CourseItem
                        title='Introduction to React Native'
                        image={require('./images/physics.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('lets go')}></TouchableOpacity>
                <CourseItem
                    title='Advanced JavaScript'
                    image={require('./images/js.png')} />
                <TouchableOpacity onPress={() => Alert.alert('lets go')}>
                    <CourseItem
                        title='UI/UX Design Principles'
                        image={require('./images/ui.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('lets go')}>
                    <CourseItem
                        title='Network 101'
                        image={require('./images/net.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('lets go')}>
                    <CourseItem
                        title='Artificial intelligence'
                        image={require('./images/ai.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('lets go')}>
                    <CourseItem
                        title='Database'
                        image={require('./images/database.png')} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
    </View>
);

const CourseItem: React.FC<{ title: string, image: any }> = ({ title, image }) => (
    <View style={styles.courseItem}>
        <Image source={image} style={styles.courseImage} />
        <Text style={styles.courseTitle}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff7fa',
        paddingTop: 20,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#7d4e7d',
        marginLeft: 20,
        marginBottom: 20,
    },
    contentContainer: {
        alignItems: 'center',

    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 50,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,

    },
    infoItem: {
        alignItems: 'center',


    },
    infoLabel: {
        fontSize: 18,
        color: '#7d4e7d',
    },
    infoValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#7d4e7d',
    },
    coursesContainer: {
        flex: 1,
        //flexDirection: 'row',
        marginTop: 20,
    },
    coursesTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#7d4e7d',
        marginLeft: 20,
        marginBottom: 10,
    },
    courseItem: {
        backgroundColor: '#f5dbf0',
        padding: 15,
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 10,

    },
    courseTitle: {
        fontSize: 16,
        color: '#7d4e7d',
        fontWeight: 'bold'
    },
    courseImage: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginBottom: 10
    },
    info_buttons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
        //backgroundColor: '#6c586a',
        //borderRadius: 12,

    },
    button:{
        //marginTop:"10%",
        alignSelf:"center",
        borderWidth:1,
        padding:10,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor:"#55e23c",
        minWidth:"40%",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    
    }
});

export default ProfileScreen;