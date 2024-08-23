import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    TextInput,
} from 'react-native';


type Instructor = {
    id: number;
    username: string;
    company: string;
    photo: string;
};

const InstructorScreen: React.FC = () => {
    const [instructors, setInstructors] = useState<Instructor[]>([]);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        fetch('https://fake-json-api.mock.beeceptor.com/users')
            .then(response => response.json())
            .then(data => setInstructors(data))
    }, []);


    const filteredInstructors = instructors.filter(instructor =>
        instructor.username.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const renderInstructor = ({ item }: { item: Instructor }) => (
        <View style={styles.instructorItem}>
            <View style={styles.instructorInfo}>
                <Text style={styles.instructorName}>{item.username}</Text>
                <Text style={styles.instructorCompany}>{item.company}</Text>
            </View>
            <Image source={{ uri: item.photo }} style={styles.instructorImage} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Instructors</Text>
            <TextInput
                style={styles.searchBar}
                placeholder="Search by username"
                onChangeText={setSearchQuery}
            />
            <FlatList
                data={filteredInstructors}
                renderItem={renderInstructor}
                keyExtractor={item => item.id.toString()}
            />
        </View>
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
    searchBar: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        fontSize: 16,
    },
    instructorItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 3,
    },
    instructorInfo: {
        flex: 1,
    },
    instructorName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    instructorCompany: {
        fontSize: 17,
        color: 'gray',
        marginTop: 4,
    },
    instructorImage: {
        width: 70,
        height: 70,
        borderRadius: 30,
        marginLeft: 16,
    },
});

export default InstructorScreen;