import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {todoListSelector , todoListSearch, todosRemaining} from '../../redux/selectors'

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todosRemaining)


  const handleTextChange = (event) => {
    setTodo(event.target.value);
  };
  const handlePriority = (value) => {
    setPriority(value);
  };
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todo,
        priority: priority,
        completed: false,
      })
    );
    setPriority("Medium")
    setTodo("")
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} prioriry={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todo} onChange={handleTextChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
