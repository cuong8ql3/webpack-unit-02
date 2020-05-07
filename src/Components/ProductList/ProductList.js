import React, { Component } from 'react';

// import ProductItem from '../ProductItem/ProductItem';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class ProductList extends Component {    
    render() {                
        return (
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Mã SP</TableCell>
                        <TableCell>Tên sản phẩm</TableCell>
                        <TableCell>Giá ($)</TableCell>
                        <TableCell align="center">Trạng thái</TableCell>
                        <TableCell align="center">Hành động</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.children}            
                </TableBody>
            </Table>
        )
    }    
}