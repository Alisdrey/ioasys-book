import React, { useState, useEffect } from 'react'
import { postLogin } from "../../services/services";
import { saveLogin, getToken } from "../../services/auth";
import background from '../../assets/img/background-default.svg';
import logo from '../../assets/img/logo.svg';
import { useHistory } from "react-router-dom";
import {
    TextField,
    FormControl,
    InputLabel,
    FilledInput,
    InputAdornment,
    CircularProgress
} from '@material-ui/core';
import { Background, Container, Widget, Logo, ButtonLogin } from './style'
import { Alert } from '../../components/';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#FFFFFF',
            opacity: 0.5
        },
        '& label': {
            color: '#FFFF',
            opacity: 0.5
        },
        '& .MuiInputBase-root': {
            color: '#FFFF',
            borderRadius: 5,
            opacity: 0.9,
            background: 'rgba(0, 0, 0, 0.32)'
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: 'none',
        },
        '& .MuiFilledInput-underline:before': {
            borderBottom: 'none',
        },
    },
})(TextField);

const useStyles = makeStyles(() => ({
    textField: {
        margin: '10px 0',
        width: '100%',
        '& label.Mui-focused': {
            color: '#FFFFFF',
            opacity: 0.5
        },
        '& label': {
            color: '#FFFF',
            opacity: 0.5
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: 'none',
        },
        '& .MuiFilledInput-underline:before': {
            borderBottom: 'none',
        },
        '& .MuiInputBase-root': {
            color: '#FFFF',
            borderRadius: 5,
            opacity: 0.9,
            background: 'rgba(0, 0, 0, 0.32)'
        },
    }
}));

const SignIn = () => {

    useEffect(() => {
        getToken() && history.push('/home');
    }, [])

    const history = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const login = () => {
        if (email === "" || password === "") {
            setError(true)
            return false;
        }
        setLoading(true);
        postLogin({
            email: email,
            password: password
        }).then(result => {
            if (result.data) {
                setLoading(false)
                saveLogin(result.headers.authorization, result.data.name)
                history.push('/home');
            }
        }).catch(e => {
            console.log(e);
            setError(true)
            setLoading(false)
        })
    }

    return (
        <Background backgroundImage={background}>
            <Container>
                <Widget>
                    <Widget.Logo>
                        <Logo logo={logo} />
                        <Logo.Text>Books</Logo.Text>
                    </Widget.Logo>
                    <CssTextField
                        autoComplete="off"
                        fullWidth
                        label="E-mail"
                        variant="filled"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                        <InputLabel>Senha</InputLabel>
                        <FilledInput
                            type='password'
                            name="passoword"
                            onChange={e => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    {loading ?
                                        <CircularProgress size={20} color='inherit' />
                                        :
                                        <ButtonLogin onClick={() => { login() }}>
                                            Entrar
                                       </ButtonLogin>
                                    }
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {error &&
                        <Alert text="Email e/ou senha incorretos." setError={(data) => setError(data)} />
                    }
                </Widget>
            </Container>
        </Background>
    )
}

export default SignIn
