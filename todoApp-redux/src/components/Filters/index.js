import { Col, Row, Input, Typography, Radio, Select, Tag,Modal } from 'antd';
import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchFilter } from '../../redux/actions';
import { todoListSelector } from '../../redux/selectors';
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()
  const [search,setSearch] = useState("");
  const handleChangeText = (event) =>{
    setSearch(event.target.value)
    dispatch(searchFilter(event.target.value))
  }
  const todoList = useSelector(todoListSelector)
  const [todoAll, setTodoAll] = useState(todoList.length)
  const [todoCompleted,setTodoCompleted] = useState(todoList.filter(todo=> todo.completed===true).length)
  useEffect(()=>{
    setTodoAll(todoList.length)
    setTodoCompleted(todoList.filter(todo=> todo.completed===true).length)
    
  },[todoList])
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' onChange={handleChangeText} />
      </Col>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          All : {todoAll}   
         
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Completed : {todoCompleted}
         
        </Typography.Paragraph>
      </Col>
      
    </Row>
  );
}
