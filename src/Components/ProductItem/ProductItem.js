import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class ProductItem extends Component {

    state = {
        open: false,
        id: ''
    }
    
    handleClickOpen = (id) => {
        this.setState({
            open: !this.state.open,
            id
        })
    };
    handleClose = () => {
        this.setState({
            open: !this.state.open,
            id: ''
        })        
    };

    onDelete = (id) => {
        this.props.onDelete(id)
        this.handleClose()        
    }        

    render() {
        const { product, index } = this.props
        const { open, id } = this.state
        const statusLabel = product.status ? 'Còn hàng' : 'Hết hàng'
        const statusColor = product.status ? 'primary' : 'secondary'

        return (
            <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell align="center">
                    <Chip
                        icon={<TagFacesIcon />}
                        label={statusLabel}
                        color={statusColor}
                    />

                </TableCell>
                <TableCell align="center">
                    <IconButton 
                        color="primary" 
                        aria-label="add to shopping cart"
                        component={ Link }
                        to={`/product/${product.id}/edit`}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        color="primary"
                        aria-label="delete"
                        onClick={() => this.handleClickOpen(product.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <Dialog
                        open={open}
                        onClose={ this.handleClose }
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Bạn muốn xóa sản phẩm ?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Sản phẩm bị xóa không thể phục hồi, nếu chắc chắn hãy nhấn vào nút xóa!
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={ this.handleClose } color="primary">
                                Hủy bỏ
                        </Button>
                            <Button onClick={() => this.onDelete(id) } color="primary" autoFocus>
                                Xóa
                        </Button>
                        </DialogActions>
                    </Dialog>
                </TableCell>
            </TableRow>
        )
    }
}