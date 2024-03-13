import * as React from 'react';
import CryptoJS from 'crypto-js';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

export default function SignIn() {
    console.log(import.meta.env.VITE_ENCRYPTION_KEY);
    const test = CryptoJS.AES.encrypt("{test: 'test'}", import.meta.env.VITE_ENCRYPTION_KEY).toString();
    console.log("encrypted", test);
    console.log("decrypted", CryptoJS.AES.decrypt(test, import.meta.env.VITE_ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8));
    return (
        <Box
            sx={{
            p: 2,
            borderRadius: 2,
            }}
        >
            <Paper elevation={8} sx={{padding: "10px 50px",}}>
                <Typography variant="h4" align="center">Sign In</Typography>
                <Box component="form" sx={{display:'flex',flexDirection:"column", alignItems:"center"}}>
                    <TextField required id="email" label="Email" variant="standard" sx={{minWidth:"20em"}}/>
                    <TextField required id="password" label="Password" variant="standard" sx={{minWidth:"20em"}}/>
                    <Button type="submit" variant="contained" sx={{marginTop:2, maxWidth:"9rem"}}>Sign In</Button>
                </Box>
            </Paper>
        </Box>
    );
}