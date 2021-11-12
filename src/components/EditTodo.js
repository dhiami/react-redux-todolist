import React from 'react'
import { useState } from 'react';
import {Button,Modal,} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { editHandler } from "../redux/action";
export default function EditTodo({task}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input, setInput] = useState(task.text);
    const dispatch = useDispatch();
  const submissionHandler = (e) => {
    e.preventDefault();
    dispatch(editHandler(task.ID, input));
    console.log(task.id);
  };
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        <i class="fas fa-edit"></i>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <input onChange={(e) => setInput(e.target.value)} value={input}></input>
            <Button variant="secondary" onClick={handleClose}>
            <i class="fas fa-times"></i>
            </Button>
            <Button variant="primary" onClick={submissionHandler}>
            <i class="far fa-save"></i>
            </Button>
        </Modal>
      </>
    );
  }