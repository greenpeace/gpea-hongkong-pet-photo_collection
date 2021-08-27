import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import * as modalActions from 'store/actions/action-types/modal-actions'

function ModalWrapper({modal, closeModal}) {
  return (
    <Modal blockScrollOnMount={false} isOpen={modal.isOpen}>
    <ModalOverlay />
      <ModalContent>
        <Button onClick={()=>closeModal()}>Close</Button>
      </ModalContent>
  </Modal>
  );
}

const mapStateToProps = ({ modal }) => ({ modal });

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({ type: modalActions.CLOSE_MODAL });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
