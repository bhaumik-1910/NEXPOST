const components = {
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      html: {
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#000',
          boxShadow: 'none',
          color: '#fff',
        },
      },
    },
  },
};

export default components;