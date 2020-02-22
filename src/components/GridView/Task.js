import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 15px;
    margin: 10px;
    margin-bottom: 8px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.isDragging ? 'lightgreen' : 'white'};
    transform: ${props => props.isDragging ? 'rotate(5deg)' : 'rotate(0deg)'}

`
export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.task.title}
                    </Container>
                )}
            </Draggable>
        )
    }
}