import React from "react";

import Button from "./components/Button";
import Container from "./Container";

/**
 * Material-ui
 */
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Form from "./components/Form";
import H1 from "./components/H1";
import H3 from "./components/H3";
import ButtonWrapper from "./ButtonWrapper";
import FieldsWrapper from "./FieldsWrapper";
import TextLineWrapper from "./TextLineWrapper";
import BalanceRow from "./components/BalanceRow";

import validationSchema from "./utils/validation-schema";
import { transactions } from "./utils/fakedata";
import { Formik } from "formik";

import { createGlobalStyle } from "styled-components";
import AlverataBlack from "./fonts/Alverata-Black.otf";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    flexGrow: 1,
    maxWidth: 1400,
    paddingRight: '4em',
    paddingLeft: '4em',
  },
  sendMoney: {
    borderTopWidth: 0,
    borderRightWidth: 0.1,
    borderRightColor: "#E9EAF4",
    borderRightStyle: "solid",
  },
  transAmount: {
    right: 0
  },
  transList: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  }
}));

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: AlverataBlack;
    src: url('${AlverataBlack}') format('opentype');
  }
`;

function App() {
  const state = {
    totalSent: "4,500.00",
    leftAvailable: "13,500.00"
  };

  const classes = useStyles();
  const { totalSent, leftAvailable } = state;
  return (
    <Container>
      <Grid container spacing={10} className={classes.gridContainer}>
        <Grid item xs={6} className={classes.sendMoney}>
          <div style={{ paddingRight: 100 }}>
            <TextLineWrapper>
              <H1>Send Money</H1>
            </TextLineWrapper>
            <Formik
              initialValues={{ email: "", fullname: "", amount: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  // Simulate a form post
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FieldsWrapper>
                    <TextField
                      error={
                        errors.fullname && touched.fullname ? true : false
                      }
                      helperText={
                        errors.fullname && touched.fullname && errors.fullname
                      }
                      label="Name"
                      name="fullname"
                      id="fullname"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullname}
                      margin="normal"
                    />
                    <TextField
                      error={errors.email && touched.email ? true : false}
                      helperText={errors.email && touched.email && errors.email}
                      label="Email address"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      margin="normal"
                    />
                    <TextField
                      error={errors.amount && touched.amount ? true : false}
                      helperText={
                        errors.amount && touched.amount && errors.amount
                      }
                      label="Amount"
                      id="amount"
                      name="amount"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.amount}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">£</InputAdornment>
                        )
                      }}
                      margin="normal"
                    />
                  </FieldsWrapper>
                  <ButtonWrapper>
                    <Button
                      type="submit"
                      text={"Send"}
                      disabled={isSubmitting}
                    />
                  </ButtonWrapper>
                </Form>
              )}
            </Formik>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.myAccount}>
          <div style={{ paddingLeft: 100 }}>
            <TextLineWrapper>
              <H1>My Account</H1>
            </TextLineWrapper>
            <BalanceRow totalSent={totalSent} leftAvailable={leftAvailable} />
            <TextLineWrapper>
              <H3>Transactions</H3>
            </TextLineWrapper>
            <List dense className={classes.transList}>
              {transactions.map(item => (
                <React.Fragment key={`${item.id}`}>
                  <ListItem
                    dense
                    divider
                    disableGutters
                    alignItems="center"
                    justify="center"
                  >
                    <ListItemText primary={item.name} secondary={item.email} />
                    <ListItemSecondaryAction className={classes.transAmount}>
                      <ListItemText
                        primary={`£${item.amount}`}
                        align="center"
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
      <GlobalStyle />
    </Container>
  );
}

export default App;
