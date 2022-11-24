import {QuestionOutlineIcon} from "@chakra-ui/icons";
import {Tooltip} from "@chakra-ui/react";
import React from "react";


// @ts-ignore
const QuestionUrltip = (props) => {
    return (<Tooltip closeDelay={500}
                     fontSize='md'
                     color='#fff'
                     bg='#000'>
        <a href={props.url}><QuestionOutlineIcon/></a>
    </Tooltip>)
}

export default QuestionUrltip;