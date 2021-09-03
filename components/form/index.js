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
            <FormControl id='email' isInvalid={errors.Email && touched.Email}>
              <FormLabel {...labelStyle}>{formContent.label_email}</FormLabel>
              <Input
                name='Email'
                type='email'
                placeholder={formContent.label_email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage color='red'>{errors.Email}</FormErrorMessage>
            </FormControl>
          </Box>

          <HStack>
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
          </HStack>

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
            >
              {formContent.submit_text}
            </Button>
          </Box>

          <Box>
            <HStack align='flex-start'>
              <Box pt={5} pb={4}>
                <FormControl id='optIn'>
                  <Checkbox name='OptIn' defaultChecked onChange={handleChange}>
                    <Text fontSize='xs'>{formContent.form_remind}</Text>
                  </Checkbox>
                </FormControl>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Form>
    </Box>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Email: "",
    LastName: "",
    OptIn: true,
  }),

  validate: (values) => {
    const errors = {};

    if (!values.Email) {
      errors.Email = formContent.empty_data_alert;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = formContent.invalid_email_alert;
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    props.createUser()
    setTimeout(() => {
      const data = {mail: values.Email, name: values.FirstName}
      localStorage.setItem('greenpeacePhotoCollection', JSON.stringify(data))
      setSubmitting(false)
      props.setModal(false)
      props.createUserSuccess(data)
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
