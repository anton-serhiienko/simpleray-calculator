import React from 'react';
import css from './ProjectSizeSelect.module.css'
import projectPhoto from "../assets/house-with-solar-panels.png";
let projectSizeSelect = (props) =>{
    return (
        <div className={css.projectSelect}>
            <div className={css.sizeSelect}>
                {/*buttons*/}
                <div
                    onClick={() => props.chooseSmall()
                    }>Small
                </div>
                <div
                    onClick={() => props.chooseMedium()
                    }>Medium
                </div>
                <div
                    onClick={() => props.chooseLarge()
                    }>Large
                </div>
                <div
                    onClick={() => props.chooseExtraLarge()
                    }>Extra Large
                </div>
            </div>

            <div className={css.projectsInfo}>
                <label>Small</label>
                <div className={css.yellowMark}/>
                <div className={css.info}>
                    Up to 50,000 kWh/year (e.g. hog building, small welding shop,
                    small one story office building with warehouse)
                </div>
            </div>
            <img src={projectPhoto} alt=''/>
        </div>
    )
}

export default projectSizeSelect;