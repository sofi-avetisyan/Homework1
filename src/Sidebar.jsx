import { 
    Box,
    Text,
    Link
} from '@chakra-ui/react'
import { Link  as ReactLink } from 'react-router-dom';
import services from './services/service'
import { useState, useEffect } from 'react'

export default function Sidebar (){
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const categegory = await services.getCategories()
        setCategories(categegory.data)
        
    }

    

    useEffect(()=>{
        getCategories()
        
    }, [])
    console.log(categories);
    return(
        <>
        <Box 
        w={"300px"}
        height={"100vh"}
        paddingTop={"60px"}
        paddingLeft={"50px"}
        bgColor={"lightgrey"}
        >
        <Text
        fontSize={"30px"}
        color={"grey"}
        fontWeight={"bolder"}
        marginBottom={"30px"}
        >
            Categories
        </Text>
        <Box
        display={"flex"}
        flexDirection="column"
        >
        {
                categories.map((category)=> <Link
                color={"grey"}
                as={ReactLink}
                to={`categories/${category.id}`}
                fontSize={"20px"}
                marginBottom = {"10px"}
                key={category.id}
                >{category.name}</Link>)
        }
        </Box>
        
        </Box>
        </>
    )
}