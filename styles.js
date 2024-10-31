import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        backgroundColor: 'lightyellow',
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingHorizontal: 40,
        backgroundColor: 'lightpink',
        marginVertical: 10, 
        marginTop: 10,
    },
    taskText: {
        fontSize: 16,
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgray',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});

export default globalStyles;