import * as React from 'react';
import { useForm } from 'react-hook-form';
import { SelectChangeEvent } from '@mui/material';
import { NoticeForm } from './edit-notice-page'; // asegúrate de tener este archivo separado
import { NoticeFormProps } from '../types';

const AddNoticePage = () => {
  const methods = useForm<NoticeFormProps>();
  const [isSaving, setIsSaving] = React.useState(false);
  const [selectedRoleId, setSelectedRoleId] = React.useState<number>(0);

  const handleSubmit = methods.handleSubmit(async (data) => {
    setIsSaving(true);
    // aquí puedes llamar a tu endpoint para guardar la data
    console.log('Form submitted:', data);
    setIsSaving(false);
  });

  const handleRoleChange = (event: SelectChangeEvent<string | number>) => {
    const value = Number(event.target.value);
    setSelectedRoleId(value);
  };

  const handleRecipientChange = (_event: SelectChangeEvent<string | number>) => {
    // lógica adicional si es necesario
  };

  return (
    <NoticeForm
      isSaving={isSaving}
      onSubmit={handleSubmit}
      methods={methods}
      selectedRoleId={selectedRoleId}
      handleRoleChange={handleRoleChange}
      handleRecipientChange={handleRecipientChange}
    />
  );
};

export default AddNoticePage;
