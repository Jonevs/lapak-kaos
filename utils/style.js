import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
      textDecoration: 'none',
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#203040',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
   

  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
  btn: {
    textTransform: 'unset',
    color: '#ffffff',
  }
});
export default useStyles;