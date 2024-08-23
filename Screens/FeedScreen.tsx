import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

interface Course {
    id: string;
    title: string;
    image: any;
    instructor: string;
    duration: string;
    price: number;
    rating: number;
    reviews: number;
}

const DATA: Course[] = [
    {
        id: '1',
        title: 'Introduction to React Native',
        image: require('./images/react.jpg'),
        instructor: 'Adham Hamdy',
        duration: '4-Months',
        price: 1200,
        rating: 4.45,
        reviews: 124,
    },
    {
        id: '2',
        title: 'Advanced JavaScript Concepts',
        image: require('./images/javascript.jpg'),
        instructor: 'Khaled Moahmed',
        duration: '2-Months',
        price: 700,
        rating: 4.81256,
        reviews: 409,
    },
    {
        id: '3',
        title: 'Network 101',
        image: require('./images/network.jpg'),
        instructor: 'Tony Medhat',
        duration: '2-Weeks',
        price: 350,
        rating: 4.01,
        reviews: 500,
    },

];

const CourseItem = ({ course }: { course: Course }) => (
    <View style={styles.courseItem}>
        <Image source={course.image} style={styles.courseImage} />
        <TouchableOpacity style={styles.heartButton}>
            <Text style={styles.heartIcon}>♡</Text>
        </TouchableOpacity>
        <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.courseInstructor}>{course.instructor}</Text>
            <Text style={styles.courseDuration}>{course.duration}</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>★ {course.rating.toFixed(2)}</Text>
                <Text style={styles.reviews}>({course.reviews} reviews)</Text>
            </View>
            <Text style={styles.price}>{course.price} L.E</Text>
        </View>
    </View>
);

const FeedScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Courses</Text>
            <FlatList<Course>
                data={DATA}
                renderItem={({ item }) => <CourseItem course={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff7fa',
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#7d4e7d',
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
    },
    courseItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        overflow: 'hidden',
        elevation: 3,

    },
    courseImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    courseInfo: {
        padding: 16,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    courseInstructor: {
        fontSize: 14,
        color: 'gray',
        marginTop: 4,
    },
    courseDuration: {
        fontSize: 14,
        marginTop: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    rating: {
        color: 'gold',
        marginRight: 10,
    },
    reviews: {
        fontSize: 12,
        color: 'gray',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    heartButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heartIcon: {
        fontSize: 20,
        color: 'red',
    },
});

export default FeedScreen;