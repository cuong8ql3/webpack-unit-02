import React, { Component } from 'react';

import { Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';



export default class ProductActionPage extends Component {
    render() {
        return (
            <Grid container style={{ marginLeft: 20 }}>
                <form>
                    <TextField label="Tên sản phẩm" margin="normal" fullWidth />
                    <TextField label="Giá" margin="normal" fullWidth/>
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={state.checkedB}
                                // onChange={handleChange}
                                name="checked"
                                color="primary"
                            />
                        }
                        label="Còn hàng"
                    />
                    <Button color="primary" variant="contained" >Lưu lại</Button>

                </form>
            </Grid>
        )
    }
}



