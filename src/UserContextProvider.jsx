import { createContext, useEffect, useReducer } from "react";


export const UserContext = createContext();
export const UserReducer = (state, action) => {
    switch (action.type) {
        case "ADD_DOC":
            const { id, name, username } = action.payload;
            const newDoc = {id, name, username}
            
            return [...state, newDoc];
        case "TOGGLE_STYLE":
            return !action.payload
           
  default:
    return state;
  }
};

const getUsersFromStorage = () => {
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : [];
};

const getThemeFromStorage = () => {
    const localData = localStorage.getItem("darkmode");
    return localData ? JSON.parse(localData) : [];
};

const setUserInStorage = (users) => localStorage.setItem("users", JSON.stringify(users));
const setTheme = (data) => localStorage.setItem("darkmode", data);

const UserContextProvider = ({ children }) => {
    //const [users, setUsers] = useState(getUsersFromStorage());
    const [users, dispatch] = useReducer(
        UserReducer, 
        {},
        getUsersFromStorage //inicializa estado
    );

    const [mode, dispatchMode] = useReducer(
        UserReducer, 
        {},
        getThemeFromStorage 
    );
        
    useEffect(() => {
        setUserInStorage(users);
        setTheme(mode);
    }, [users, mode]);


   // const addUser = (user) => {
   //     setUsers((prevUsers) => [...prevUsers, user]);
   // };
    const addUser = (user) => dispatch({ type: "ADD_DOC", payload: user });
    const toggleStyle = () => {dispatchMode({ type: "TOGGLE_STYLE" , payload:mode});};
    return (
        <UserContext.Provider value={{users, mode, addUser , toggleStyle}}>
        {children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;