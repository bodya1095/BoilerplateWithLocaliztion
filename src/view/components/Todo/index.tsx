import React, { FC } from 'react';

// Elements
import { Button } from '../../elements';

// Localization
import { FormattedMessage } from 'react-intl';

// Styles
import { Container } from './styles';

// Types
import * as Types from '../../../bus/todos/types';

type PropTypes = Types.Todo & {
    isColor: boolean
    updateHandler: Function
    deleteHandler: Function
}

// interface PropTypes extends Types.Todo {
//     isColor: boolean
//     updateHandler: Function
//     deleteHandler: Function
// }

export const Todo: FC<PropTypes> = ({
    isColor, text, isCompleted, updateHandler, deleteHandler,
}) => {
    return (
        <Container isColor = { isColor }>
            <p>{text}</p>
            <Button onClick = { () => void updateHandler() }>
                {isCompleted ? <FormattedMessage
                    defaultMessage = 'Done'
                    id = 'button.text.done'
                               /> : <FormattedMessage
                    defaultMessage = 'In progress'
                    id = 'button.text.inProgress'
                     />}
            </Button>
            <Button onClick = { () => void deleteHandler() }>
                <FormattedMessage
                    defaultMessage = 'Delete'
                    id = 'button.text.del'
                />
            </Button>
        </Container>
    );
};
