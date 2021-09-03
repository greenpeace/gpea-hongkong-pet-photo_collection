import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import formContent from "components/form/content"
import * as signupActions from 'store/actions/action-types/signup-actions'
import * as userActions from 'store/actions/action-types/user-actions'
import { Form, withFormik } from "formik";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Flex,
  Text,
  HStack,
  Checkbox,
  Textarea
} from "@chakra-ui/react";

const MyForm = (props) => {
  const {
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    submitted,
  } = props;

  const space = 4;

  const labelStyle = {
    fontSize: "xs",
    color: "gray.400",
  };

  useEffect(() => {
    if (submitted) {
      setSubmitting(false);
    }
  }, [submitted]);

  return (
    <Box
      p={{ base: 0, sm: 6 }}
      rounded={{ base: 0, sm: "md" }}
      bg='white'
      overflow='hidden'
    >
      <Form onSubmit={handleSubmit}>
        <Flex direction='column'>
          <Box flex='1' pb={space}>
            <FormControl
              id='firstName'
              isInvalid={errors.FirstName && touched.FirstName}
            >
              <FormLabel {...labelStyle}>
                {formContent.label_first_name}
              </FormLabel>
              <Input
                name='FirstName'
                type='text'
                placeholder={formContent.label_first_name}
                onChange={handleChange}
              />
              <FormErrorMessage color='red'>
                {errors.FirstName}
              </FormErrorMessage>
            </FormControl>
          </Box>

          <Box flex='1' pb={space}>
            <FormControl
              id='title'
              isInvalid={errors.Title && touched.Title}
            >
              <FormLabel {...labelStyle}>
                {formContent.label_title}
              </FormLabel>
              <Input
                name='Title'
                type='text'
                placeholder={formContent.label_title}
                onChange={handleChange}
              />
              <FormErrorMessage color='red'>
                {errors.Title}
              </FormErrorMessage>
            </FormControl>
          </Box>

          <Box flex='1' pb={space}>
            <FormControl
              id='description'
              isInvalid={errors.Description && touched.Description}
            >
              <FormLabel {...labelStyle}>
                {formContent.label_description}
              </FormLabel>
              <Textarea 
                name='Title'
                type='text'
                placeholder={formContent.label_description}
                onChange={handleChange}
              />
              <FormErrorMessage color='red'>
                {errors.Description}
              </FormErrorMessage>
            </FormControl>
          </Box>

          <Box flex='1' pt={3} pb={3}>
            <Button
              w='100%'
              isLoading={isSubmitting}
              type='submit'
              height='48px'
              borderRadius='8'
              fontSize='xl'
              color='#FFF'
              letterSpacing={4}
              bg='#ff8100'
              _hover={{ bg: "campaign.climate" }}
              type='submit'
            >
              {formContent.upload_text}
            </Button>
          </Box>

        </Flex>
      </Form>
    </Box>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    FirstName: "",
    Title: "",
    Description: ""
  }),

  validate: (values) => {
    const errors = {};

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    console.log(`values`, values)
    // props.createUser()
    setTimeout(() => {
      const data = {mail: values.Email, name: values.FirstName, description: values.Description}
      setSubmitting(false)
    }, 2000);
  },

  displayName: "BasicForm",
})(MyForm);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (bol) => {
      dispatch({ type: signupActions.SET_SIGNUP_MODAL, data: bol});
    },
    createUser: () => {
      dispatch({ type: signupActions.CREATE_USER});
    },
    createUserSuccess: (data) => {
      dispatch({ type: userActions.SET_USER_SUCCESS, data});
    }
  };
};

connect(null, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
