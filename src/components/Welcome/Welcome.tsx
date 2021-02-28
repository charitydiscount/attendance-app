import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Theme, createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: { textAlign: 'center' },
    appHeader: {
      backgroundColor: theme.palette.primary.main,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
    },
    appLink: { color: theme.palette.success.main },
  })
);

const Welcome: React.FC<{}> = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src="/images/logo.svg" className="App-logo" alt="logo" />
        <h2>{t('welcome')}</h2>
        <a
          className={classes.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Welcome;
