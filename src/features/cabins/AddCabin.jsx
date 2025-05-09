import React from 'react'
import CreateCabinForm from './CreateCabinForm'
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'


function AddCabin(){
    return (
        <Modal>
            <Modal.Open opens="cabin-form">
                <Button>Add new Cabin</Button>
            </Modal.Open>
            <Modal.Window name="cabin-form">
                <CreateCabinForm />
            </Modal.Window>
        </Modal>
    )
}
// function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false)

//   return (
//     <div>
//        <Button onClick={()=>setIsOpenModal((show)=>!show)}>Add new Cabins</Button>
//             {/* {isOpenModal && } */}
//             {isOpenModal && <Modal onClose ={()=>setIsOpenModal(false)}><CreateCabinForm onCloseModal ={()=>setIsOpenModal(false)}/></Modal>}
//     </div>
//   )
// }

export default AddCabin
