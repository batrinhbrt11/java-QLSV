import { Row, Tag, Checkbox,Button,Modal , Input} from "antd";
import { useState } from "react";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleCompleted } from "../../redux/actions";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ todoId,name, prioriry, completed }) {
  const [checked, setChecked] = useState(completed);
  const dispatch= useDispatch()
  const [nameText,setNameText] = useState(name)
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleCompleted(todoId));
  };
  const handleDelete = (e) =>{
 
    dispatch(deleteTodo(todoId))
  }
  //Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const data = {todoId,nameText}
    dispatch(editTodo(data))
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleNameChange = (event )=>{
    setNameText(event.target.value)
  }
  //end modal
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >

      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <div>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
          {prioriry}
        </Tag>
        <Button type="primary" shape="circle" icon= {<EditFilled />} onClick={showModal} />
        <Button type="primary" shape="circle" icon= {<DeleteFilled />} onClick= { handleDelete}/>
      </div>
      <Modal title="Edit Todo" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input defaultValue={nameText} onChange={handleNameChange}/>
      </Modal>
    </Row>
    
  );
}
