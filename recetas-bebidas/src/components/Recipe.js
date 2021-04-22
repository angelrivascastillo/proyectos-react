import React, { useContext, useState } from 'react'
import ModalContext from '../contexts/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 320,
        maxWidth: 620,
        height: 650,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({ recipe }) => {
    // configuracion del modal de material ui 
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const classes = useStyles()

    const handeOpen = () => {
        setOpen(true)
    }
    const handeClose = () => {
        setOpen(false)
    }

    const { idDrink, strDrink, strDrinkThumb } = recipe
    const { setIdrecipe, inforecipe, setRecipe } = useContext(ModalContext)

    // muestra y formatea los ingredientes
    const mostrarIngredientes = information => {
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            if (information[`strIngredient${i}`])
                ingredientes.push(
                    <>{information[`strIngredient${i}`]} {information[`strMeasure${i}`]}</>
                )
        }
        return ingredientes
    }
    return (
        <div className='col-md-4 mb-3'>
            <div className="card">
                <h2 className="card-header">
                    {strDrink}
                </h2>
                <img src={strDrinkThumb} alt={`Imagen de : ${strDrinkThumb}`} className="card-image-top" />
                <div className="card-body">
                    <button className="btn btn-block btn-primary" type='button'
                        onClick={() => {
                            setIdrecipe(idDrink)
                            handeOpen()
                            console.log({ inforecipe });
                        }}
                    >
                        Ver receta
                    </button>
                    <Modal open={open}
                        onClose={() => {
                            handeClose()
                            setIdrecipe(null)
                            setRecipe({})

                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{inforecipe.strDrink}</h2>
                            <h3 className='mt-3'>Instrucciones</h3>
                            <p>{inforecipe.strInstructions}</p>
                            <img alt="" className='img-fluid my-4 img-modal' src={inforecipe.strDrinkThumb} />
                            <h3>Ingredientes y cantidades</h3>
                            {mostrarIngredientes(inforecipe).map((li, i) => (
                                <li key={i}>{li}</li>
                            ))}
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recipe
