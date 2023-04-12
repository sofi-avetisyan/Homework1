import services from "./services/service"
import { useState, useEffect } from "react"
import { 
    Box, 
    Image, 
    Button
} from '@chakra-ui/react'
import { useParams } from "react-router-dom";


export default function Images(){
    let x=20
    const [images, setImages] = useState([])
    const { id }=useParams();

    const getImages = async() => {
        const images = await services.getImages(id)
        setImages(images.data)


        
    }
    useEffect(()=> {
        getImages()
        console.log(images);
    },[id])

    const getImages1 = async() => {
        const images = await services.getImages(id)
        const images1 = images.data    
        setImages((prev)=>[...prev, ...images1])
        
    }
    
    const handleClick = ()=>{
        getImages1()
        
    }

    return(
        <>
        <Box
        display={"flex"}
        flexDirection={"column"}
        >
            <Box
            display={"flex"}
            flexWrap={"wrap"}
            >
            {
                images.map((img)=> <Image src={img.url} width="200px" height={"200px"} key={img.id} margin="10px"/>)
            }
            </Box>
            <Button
            onClick={handleClick}
            width={"200px"}
            height="70px"
            >More</Button>
         </Box>
        
            
        </>
    )
}