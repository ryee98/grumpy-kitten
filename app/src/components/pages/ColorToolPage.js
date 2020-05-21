import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ColorForm } from '../ColorForm';
import toolPageStyles from './ToolPage.module.css';
import colorToolPageStyles from './ColorToolPage.module.css';
import './ColorToolPage.css';

export const ColorToolPage = (props) => {
    const { colors,
         onAddColor: addColor,
         onRefreshColors: refreshColors,
         onDeleteColor : onDelete} = props; // destructuring - a best practice maps props.colors to the colors variable
    console.log("ColorToolPage", colors, addColor, refreshColors, onDelete);

    useEffect(() => {

        refreshColors();
    
      }, []);

/* 
    const [
        colorForm, // model data, state data
    ] = useForm({name: '', hexcode: '',});


    const addColor = (color) => {
        setColors(colors.concat({
            ...color,
            id: Math.max(...colors.map(c => c.id), 0) + 1,
        }));
    }
*/
    return (
        <>
            <SectionHeader headerText="Color Tool" />
            <section>
                <h3 className={toolPageStyles.contentSectionHeader}>
                    Color List
                </h3>

                <ul className={colorToolPageStyles.colorList}>
                    {colors.map(color =>
                        <li key={color.id}>
                            {color.name} - {color.hexcode} <button key={color.id} onClick={() => onDelete(color.id)}>X</button></li>
                    )}
                </ul>
            </section>

            <section>
                <h3 className={toolPageStyles.contentSectionHeader}>
                    Color Form
                </h3>
                <ColorForm buttonText="Add Color" onSubmitColor={addColor}/>
            </section>
        </>
    );
}