import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step 1 (Creating Context)
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling 

    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        console.log("printing the final URL");
        console.log(url);
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            // Setting data to useState variable from dataset
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error) {
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

     // fetchBlogPosts function called in App.js

    function handlePageChange(page) {
        setPage(page);
        // Calling fetchBlogPosts function for the page which is already seated (line no. 43)
        fetchBlogPosts(page);
    }


// This is created for giving value to childrean (line no.56)
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    // Step 2 (Providing)
    // .Provider ----> Syntax
    // Sending values to children ---> (value={value})
    // here children is App.js so we need to wrap the app component by <AppContextProvider> <AppContextProvider/> in App.js
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}