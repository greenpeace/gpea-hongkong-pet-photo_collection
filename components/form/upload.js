import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import formContent from "components/form/content";
import * as signupActions from "store/actions/action-types/signup-actions";
import * as userActions from "store/actions/action-types/user-actions";
import { Form, withFormik } from "formik";
import axios from "axios"

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
  Textarea,
  Select
} from "@chakra-ui/react";

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    submitted,
    setFieldValue
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


  const handleFileUpload = (e) => {
    setFieldValue("File", e.target.files[0]);
  }

  return (
    <Box
      p={{ base: 0, sm: 6 }}
      rounded={{ base: 0, sm: "md" }}
      bg="white"
      overflow="hidden"
    >
      <Form onSubmit={handleSubmit}>
        <Flex direction={{ base: "column", sm: "row" }}>
          <Box flex={1}>
            <FormControl id="file" isInvalid={errors.File && touched.File}>
              <Input
                name="File"
                type="file"
                placeholder={formContent.label_file}
                onChange={(event) =>{
                    setFieldValue("File", event.target.files[0]);
                  }}
              />
              <FormErrorMessage color="red">{errors.File}</FormErrorMessage>
            </FormControl>
            <Box></Box>
          </Box>

          <Box flex={1}>
            <Box flex="1" pb={space}>
              <FormControl
                id="firstName"
                isInvalid={errors.FirstName && touched.FirstName}
              >
                <FormLabel {...labelStyle}>
                  {formContent.label_first_name}
                </FormLabel>
                <Input
                  name="FirstName"
                  type="text"
                  placeholder={formContent.label_first_name}
                  onChange={handleChange}
                />
                <FormErrorMessage color="red">
                  {errors.FirstName}
                </FormErrorMessage>
              </FormControl>
            </Box>

            <Box flex="1" pb={space}>
              <FormControl id="title" isInvalid={errors.Title && touched.Title}>
                <FormLabel {...labelStyle}>{formContent.label_title}</FormLabel>
                <Input
                  name="Title"
                  type="text"
                  placeholder={formContent.label_title}
                  onChange={handleChange}
                />
                <FormErrorMessage color="red">{errors.Title}</FormErrorMessage>
              </FormControl>
            </Box>

            <Box flex="1" pb={space}>
              <FormControl
                id="description"
                isInvalid={errors.Description && touched.Description}
              >
                <FormLabel {...labelStyle}>
                  {formContent.label_description}
                </FormLabel>
                <Textarea
                  name="Title"
                  type="text"
                  placeholder={formContent.label_description}
                  onChange={handleChange}
                />
                <FormErrorMessage color="red">
                  {errors.Description}
                </FormErrorMessage>
              </FormControl>
            </Box>

            <Box flex='1' pb={space}>
              <FormControl
                id='category'
                isInvalid={errors.Category && touched.Category}
              >
                <FormLabel {...labelStyle}>
                 {formContent.category}
                </FormLabel>
                <Select
                  name="Category"
                  placeholder={formContent.select}
                  onChange={handleChange}
                >
                {(process.env.CATEGORY || []).map((d) => (
                      <option key={d.LABEL} value={d.VALUER}>
                        {d.LABEL}
                      </option>
                    ))}
                </Select>
                <FormErrorMessage color='red'>
                  {errors.Category}
                </FormErrorMessage>
              </FormControl>
            </Box>

            <Box flex="1" pt={3} pb={3}>
              <Button
                w="100%"
                isLoading={isSubmitting}
                type="submit"
                height="48px"
                borderRadius="8"
                fontSize="xl"
                color="#FFF"
                letterSpacing={4}
                bg="#ff8100"
                _hover={{ bg: "campaign.climate" }}
              >
                {formContent.upload_text}
              </Button>
            </Box>
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
    Description: "",
    File: "",
    Category: ""
  }),

  validate: (values) => {
    const errors = {};

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    console.log(`values`, values);

    const formData = new FormData()
    formData.append("file", values.File);
    formData.append('upload_preset', 'quocv8wr')
    formData.append('resource_type', 'raw')

    axios.post(
      'https://api.cloudinary.com/v1_1/idt/image/upload',
      formData,
    ).then(async (res) => {
      const { statusText, data } = res

      console.log(`statusText--`,statusText)
      if (statusText === 'OK') {
        const gSheetFormData = [{
          timestamp: data.created_at,
          published: false,
          featured: false,
          id: data.public_id,
          title: values.Title, 
          url: data.url,
          description: values.Description,
          category: values.Category,
          author: values.FirstName,
          votes: 0
        }]

        axios.post(process.env.G_SHEET, gSheetFormData, {headers: {
          "content-type": "application/json"
        }})
        .then(function (res) {
          const {statusText} = res
          if(statusText === 'OK'){
            alert(`Uploaded`)
            setSubmitting(false)
          }
        })
        .catch(function (error) {
          console.log(error);
        });

        // if (response.statusText === 'OK') {
        //   setSubmitting(false)
        //   setStatus('submitted')
        //   setValues({
        //     ...values,
        //     CampaignData1__c: data.url,
        //   })
        //   // Tracking
        //   helper.sendPetitionTracking('rdpt')
        // } else {
        //   alert('Server errors')
        // }
      } else {
        alert('Something errors')
      }
    })

    // props.createUser()
    // setTimeout(() => {
    //   const data = {
    //     mail: values.Email,
    //     name: values.FirstName,
    //     description: values.Description,
    //   };
    //   setSubmitting(false);
    // }, 2000);
  },

  displayName: "BasicForm",
})(MyForm);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (bol) => {
      dispatch({ type: signupActions.SET_SIGNUP_MODAL, data: bol });
    },
    createUser: () => {
      dispatch({ type: signupActions.CREATE_USER });
    },
    createUserSuccess: (data) => {
      dispatch({ type: userActions.SET_USER_SUCCESS, data });
    },
  };
};

connect(null, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
