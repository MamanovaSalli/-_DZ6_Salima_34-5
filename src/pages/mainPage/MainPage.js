import {containerVariant} from "../../App";
import {Container} from "../../components/Container"
import {useState} from "react";
import TabsComponent from "../../components/Tabs";
import Souz from "../../components/Souz";
import ArticlePage from "../articlePage/ArticlePage";


const VALUES = {
    souz: 'souz',
    history: 'history',
    organ: 'organ',
    project: 'project',
    ourTeam: 'ourTeam'
}

const GetCategories = ({value}) => {
    switch (value) {
        case VALUES.souz:{
            return <Souz/>
        }
        case VALUES.project: {
            return <ArticlePage/>
        }
        default: return <></>
    }
}

const MainPage = () => {


    const categoriesSelect = [
        {value: VALUES.souz, label: 'О союзе'},
        {value: VALUES.history, label: 'История организации'},
        {value: VALUES.organ, label: 'Органы управления и их деятельность'},
        {value: VALUES.project, label: 'Реализуемые проекты'},
        {value: VALUES.ourTeam, label: 'Наша команда'}
    ]

    const [value, satValue] = useState(categoriesSelect?.[0].value)

    return (
        <Container variant={containerVariant.small}>
           <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={satValue}/>
            <GetCategories value={value}/>
        </Container>
    )
}
export default MainPage