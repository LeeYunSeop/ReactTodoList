import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import { List } from 'react-virtualized';

const ListDiv = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );
  console.log('TodoList');
  return (
    // <List>
    //   {todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       onRemove={onRemove}
    //       onToggle={onToggle}
    //       key={todo.id}
    //     />
    //   ))}
    // </List>
    <List
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      List={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
