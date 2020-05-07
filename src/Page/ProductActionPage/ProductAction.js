import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinkPage from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../Actions/index';
import { connect } from 'react-redux';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    container: {
        borderStyle: 'soild'
    }
});

const mapStateToProps = state => { // lấy tất cả product từ store
    return {
        itemEditing: state.ItemEditing
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(class ProductAction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            cbStatus: ''
        }
    }

    componentDidMount() {
        const { match } = this.props
        if (match) {
            const id = match.params.id
            this.props.onEditProduct(id)
        }
    } 
    
    // static getDerivedStateFromProps(props, state) {
    //     const { itemEditing } = props       
    //     if(itemEditing.id !== state.id) {
    //         return props
    //     }                
    //     return null
    // }

    // componentDidUpdate(props, state) {
    //     const { itemEditing } = props
    //     if(itemEditing.id !== state.id) {
    //         this.setState({
    //             id: itemEditing.id,
    //             txtName: itemEditing.name,
    //             txtPrice: itemEditing.price,
    //             cbStatus: itemEditing.status
    //         })
    //     }
    // }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.itemEditing) {
            const { itemEditing } = nextProps
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                cbStatus: itemEditing.status
            })
        }
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        const { id, txtName, txtPrice, cbStatus } = this.state
        const { history } = this.props
        const product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: cbStatus
        }

        if (id) {
            // update: http://localhost:3000/products/:id => method: 'PUT'
            this.props.onUpdateProduct(product)
            history.goBack()
        } else {
            this.props.onAddProduct(product)
            history.goBack()
        }
    }

    render() {       
        const { classes } = this.props;
        const { txtName, txtPrice, cbStatus } = this.state

        return (
            <Container component="main" maxWidth="xs" className={classes.container}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" color='primary'>
                        Vui lòng nhập đầy đủ thông tin *
                </Typography>
                    <form className={classes.form} noValidate onSubmit={this.onSave}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Tên Sản Phẩm"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Giá Sản Phẩm"
                            type="number"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                        <FormControlLabel
                            control={<Checkbox
                                color="primary"
                                name="cbStatus"
                                type="checkbox"
                                value={cbStatus}
                                onChange={this.onChange}
                                checked={cbStatus === true ? true : false}
                            />}
                            label="Còn hàng"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Lưu lại
                        </Button>
                        <LinkPage component={Link} to="/Product-list" variant="body2">
                            {"Quay lại trang sản phẩm >>>"}
                        </LinkPage>
                    </form>
                </div>
            </Container>
        );
    }
}))