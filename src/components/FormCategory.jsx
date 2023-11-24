import { Box, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { useContext } from 'react';
import ArticlesContext from '../context/ArticlesProvider';

const CATEGORIES = [
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "general", label: "General" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

export const FormCategory = () => {

    const { category, handlerChangeCategory } = useContext(ArticlesContext);
    return (

        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handlerChangeCategory}
                    >
                        {CATEGORIES.map((category) => ( 
                            <MenuItem key={category.value} value={category.value}>{category.label}</MenuItem>
                        ))};
                    </Select>    
                </FormControl>
            </Box>
        </>

    )
};
