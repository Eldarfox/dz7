import React, {useState} from 'react';
import {Container} from "@mui/material";
import TabsComponent from "../../components/TabComponent";
import ContactsPage from "../ContactsPage";
import CheckBoxPage from "../CheckBoxPage";
import TaskPage from "../TaskPage";


const VALUES = {
    oneItem: 'One',
    twoItem: 'Two',
    threeItem: 'Three'
}
const MainPage = () => {
    const categoriesSelect = [
        {value: VALUES.oneItem , label: 'one'},
        {value: VALUES.twoItem , label: 'two'},
        {value: VALUES.threeItem , label: 'three'}
    ]
    const GetCategories = ({value}) => {
        switch (value){
            case VALUES.oneItem: {
                return <ContactsPage/>
            }
            case VALUES.twoItem: {
                return <CheckBoxPage/>
            }
            case VALUES.threeItem: {
                return <TaskPage/>
            }
            default: return <></>
        }
    }
    const [value, setValue] = useState(categoriesSelect[0].value)
    return (
        <div>
            <Container>
                <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
                <GetCategories value={value}/>
            </Container>
        </div>
    );
};

export default MainPage;