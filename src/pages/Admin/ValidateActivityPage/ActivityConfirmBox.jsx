/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { userActivities } from '../../../../mock';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function ActivityConfirmBox({operation, handleClose, open, selectedActivities}) {
  const navigate = useNavigate()

  function sendActivitiesStatus(type){
    if(type === "validar"){
      selectedActivities.forEach(id => {
        userActivities.forEach(activity => {
          if(activity.id === id) activity.status = "success"
        })
      })
      handleClose()
      navigate("/admin")
      toast.success("Atividade(s) validada(s) com sucesso! :)")
    } else {
      selectedActivities.forEach(id => {
        userActivities.forEach(activity => {
          if(activity.id === id) activity.status = "denied"
        })
      })
      handleClose()
      navigate("/admin")
      toast.success("Atividade(s) invalidada(s) com sucesso! :)")
    }
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Tem certeza que deseja ${operation} essa(s) atividade(s)?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {'Se tiver tudo certo, pode clicar em "Continuar", senão é só clicar em "Cancelar" ou em qualquer lugar fora dessa caixa! :)'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => sendActivitiesStatus(operation)} autoFocus>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}