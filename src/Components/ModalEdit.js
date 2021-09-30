import React from 'react'
import {Modal, Button} from 'semantic-ui-react'
import EntryForm from './EntryForm';
function ModalEdit({isOpen, setIsOpen,description, value, isExpense, setValue, setDescription, setIsExpense}) {
    return (
    <Modal open={isOpen}>
        <Modal.Header>Edit Header</Modal.Header>
        <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={isExpense}/>
        <Modal.Actions>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
            <Button onClick={() => setIsOpen(false)} primary>Okay</Button>
        </Modal.Actions>
    </Modal>
    );
}

export default ModalEdit
