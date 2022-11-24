import {QuestionOutlineIcon} from "@chakra-ui/icons";
import {Tooltip} from "@chakra-ui/react";
import React from "react";


// @ts-ignore
const QuestionToolTip = (props) => {
    return (<Tooltip closeDelay={500}
                     label={props.label}
                     color='#fff'
                     bg='#000'
                     fontSize='md'>
        <QuestionOutlineIcon/>
    </Tooltip>)
}

export default QuestionToolTip;