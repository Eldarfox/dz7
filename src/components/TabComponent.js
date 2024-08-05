import {Tab, Tabs} from "@mui/material";


const TabsComponent = ({categoriesSelect, value, setValue}) => {
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return(
        <Tabs
            centered
            value={value}
            onChange={handleChange}
        >
            {categoriesSelect.map((tab, idx) =>
                <Tab
                    key={idx}
                    value={tab['value']}
                    label={tab['label']}
                />)}
        </Tabs>
    )
}

export default TabsComponent