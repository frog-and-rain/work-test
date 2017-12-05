import T from 'prop-types';
import React from 'react';
import FaBan from 'react-icons/lib/fa/ban';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
import FaPencil from 'react-icons/lib/fa/pencil';
import { ActionView, BlockButton, SaveButton, EditButton } from './components.styled';

const Action = props => {
  const { onEditing, editing, handleUpdate, closeEditing } = props;
  return (
    !editing ? (
      <ActionView>
        <EditButton onClick={onEditing}>
          <FaPencil />
          {' Edit'}
        </EditButton>
      </ActionView>
    ) : (
      <ActionView>
        <BlockButton onClick={closeEditing}>
          <FaBan />
          {' Cancel'}
        </BlockButton>

        <SaveButton onClick={handleUpdate}>
          <FaFloppyO />
          {' Save'}
        </SaveButton>
      </ActionView>
    )
  );
};

Action.propTypes = {
  onEditing: T.func.isRequired,
  closeEditing: T.func.isRequired,
  handleUpdate: T.func.isRequired,
  editing: T.bool.isRequired,
};

export default Action;
