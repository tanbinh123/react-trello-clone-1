import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
    padding: 12px;
    margin: 10px;
    margin-bottom: 2px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .4);
    background-color: ${props => props.isDragging ? '#fafafa' : 'white'};
    transform: ${props => props.isDragging ? 'rotate(5deg)' : 'rotate(0deg)'}
    &:hover {
        background-color: #ddd;
    }
`

const Title = styled.h3`
    font-size: .9rem;
    font-family: 'Lato', Georgia, 'Times New Roman', Times, serif;
    font-weight: 300;
    opacity: .8;
    color: #333648;
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
                        <Title>{this.props.task.title}</Title>
                    </Container>
                )}
            </Draggable>
        )
    }
}