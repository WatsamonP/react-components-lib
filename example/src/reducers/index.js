import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import authReducer from './authReducer';
// reducer รับ action มาดูว่าจะทำ ? 
// แล้วส่ง action ไปหา store
// pure Function นะ --> return Object ใหม่ / ไม่แก้ Object เดิม

// combineReducers = รวมหลายๆ reducers 
// เพราะเราอาจจะมีหลายๆ reducerss
export default combineReducers({
  auth: authReducer,
  data: dataReducer
})