import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ProductList from '../../Components/ProductList/ProductList';
import ProductItem from '../../Components/ProductItem/ProductItem';

import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../Actions/index';

const mapStateToProps = state => { // lấy tất cả product từ store
    return {
        products: state.products
    };
}
const mapDispatchToProps = (dispatch, props) => { 
    return {
        fetchAllProducts: () => {  // lưu lên store
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct: id => {
            dispatch(actDeleteProductRequest(id))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(class ProductListPage extends Component {    

    componentDidMount() {
        this.props.fetchAllProducts();        
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }
    
    render() {        
        const { products } = this.props      
        return (
            <React.Fragment>
                <Grid container style={{ marginTop: 15}}>
                    <Grid item sm={1} />
                    <Grid item sm={10} style={{ backgroundColor: '#f5f5f5', padding: 10}}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            style={{marginTop: 10}} 
                            component={Link}
                            to="/Product/add"
                        >
                            Thêm mới sản phẩm
                        </Button>
                        <Typography component="h2" variant="h6" color="primary">
                            Danh Sách Sản Phẩm
                        </Typography>
                        <ProductList>
                            {this.showProducts(products)}
                        </ProductList>
                    </Grid>
                    <Grid item sm={2} />
                </Grid>
            </React.Fragment>
        )
    }

    showProducts(products){
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete = { this.onDelete }
                    />
                )
            })
        }
        return result;
    }
})

