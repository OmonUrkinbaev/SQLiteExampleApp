import { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator, RefreshControl } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const UserList = () => {
    const [Users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const db = useSQLiteContext();

    const loadUsers = async () => {
        try {
            setIsLoading(true);
            const results = await db.getAllAsync(` SELECT * FROM users
                ORDER BY id DESC`);
            setUsers(results);
        } catch (error) {
            console.error("Database error", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <FlatList
            data={Users}
            refreshControl={
                <RefreshControl refreshing={isLoading} onRefresh={loadUsers} tintColor="#007AFF" />
            }
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                    <Text>{`${item.firstName} ${item.lastName}`}</Text>
                    <Text>{item.email}</Text>
                    <Text>{item.phone}</Text>
                </View>
            )}
            ListEmptyComponent={<Text>No users found</Text>}
        />
    );
};

export default UserList;

