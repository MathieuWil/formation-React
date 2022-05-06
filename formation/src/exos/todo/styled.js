import styled from 'styled-components'

export const TodoInput = styled.div`
  min-height: 80px;
  background-color: darkslategrey;
  display: flex;
  margin: 30px 300px;
  justify-content: space-between;
  box-shadow: 3px 3px 10px darkslategrey;
  border-radius: 10px;
`

export const InputText = styled.input`
  min-height: 80px;
  background-color: #ededed;
  border: none;
  width: 80%;
  border-radius: 5px 0px 0px 5px;
  padding-left: 30px;
  font-weight: 600;
  font-size: 16px;
  font-family: sans-serif;
`

export const AddTodoButton = styled.button`
  min-height: 80px;
  background-color: #c8f0c7;
  border: none;
  width: 20%;
  border-radius: 0px 5px 5px 0px;
`
export const Todo = styled(TodoInput)`
  background-color: ${props => (!props.done ? '#dcdcdc' : '#c8f0c7')};
  transition: all 0.5s;
  transform: ${props => (props.done ? 'scale()' : 'scale(.9)')};
  padding-left: 30px;
  font-weight: 600;
  font-size: 16px;
  font-family: sans-serif;
  vertical-align: baseline;
  align-items: center;
`

export const TodoLabel = styled.p``

export const RemoveTodoButton = styled(AddTodoButton)`
  background-color: #f0c7c7;
`
