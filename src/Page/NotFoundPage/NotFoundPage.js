import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(5),
        },
}));

export default function NotFoundPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity="error">404 not found</Alert>
            <Alert severity="warning">Trang web không tồn tại, vui lòng kiểm tra lại !</Alert>
            <Alert severity="info">Trang web không tồn tại, vui lòng kiểm tra lại !</Alert>
            <Alert severity="success">Trang web không tồn tại, vui lòng kiểm tra lại !</Alert>
        </div>
    );
}