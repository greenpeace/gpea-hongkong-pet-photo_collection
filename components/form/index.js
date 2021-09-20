import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import formContent from 'components/form/content'
import { base64Encode, saveLocalStorage, usePrevious } from 'components/utils'
import * as helper from 'components/utils/helper'
import * as signupActions from 'store/actions/action-types/signup-actions'
import * as userActions from 'store/actions/action-types/user-actions'
import { Form, withFormik } from 'formik'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Flex,
  Text,
  Heading,
  HStack,
  Checkbox,
  Stack,
  Select,
  useToast,
} from '@chakra-ui/react'

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
  } = props
  const toast = useToast()
  const mobileCountryCode = [
    { label: '+852', value: '852' },
    { label: '+853', value: '853' },
  ]
  const space = 4
  const labelStyle = {
    fontSize: 'xs',
    color: 'gray.400',
  }
  const [birthDateYear, setBirthDateYear] = useState([])

  useEffect(() => {
    let optionYear = []
    async function fetchOptionYear() {
      let nowYear = new Date().getFullYear()
      let targetYear = nowYear - 110
      for (var i = nowYear - 18; i >= targetYear; i--) {
        await optionYear.push({ label: i, value: i.toString() })
      }
      setBirthDateYear(optionYear)
    }
    fetchOptionYear(optionYear)
  }, [])

  return (
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
          {/* <Box flex={1} pb={space}>
              <FormControl id="Name" isInvalid={errors.Name && touched.Name}>
                <FormLabel {...labelStyle}>{formContent.label_name}</FormLabel>
                <Input
                  name="Name"
                  type="text"
                  placeholder={formContent.label_name}
                  onChange={handleChange}
                />
                <FormErrorMessage color="red">{errors.Name}</FormErrorMessage>
              </FormControl>
            </Box> */}
          <Box flex='1' pb={space}>
            <FormControl
              id='lastName'
              isInvalid={errors.LastName && touched.LastName}
            >
              <FormLabel {...labelStyle}>
                {formContent.label_last_name}
              </FormLabel>
              <Input
                name='LastName'
                type='text'
                placeholder={formContent.label_last_name}
                onChange={handleChange}
              />
              <FormErrorMessage color='red'>{errors.LastName}</FormErrorMessage>
            </FormControl>
          </Box>
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

        <FormControl>
          <FormLabel {...labelStyle}>
            {formContent.label_phone_optional}
          </FormLabel>
        </FormControl>

        <HStack align='flex-end'>
          <Box
            pb={space}
            mb={errors.MobilePhone && touched.MobilePhone ? '28px' : 0}
          >
            <FormControl id='mobileCountryCode'>
              <Select name='MobileCountryCode' onChange={handleChange}>
                {mobileCountryCode &&
                  mobileCountryCode.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.label}
                    </option>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Box flex='1' pb={space}>
            <FormControl
              id='mobilePhone'
              isInvalid={errors.MobilePhone && touched.MobilePhone}
            >
              <Input
                type='number'
                name='MobilePhone'
                placeholder={formContent.label_phone}
                onChange={handleChange}
              />
              <FormErrorMessage color='red'>
                {errors.MobilePhone}
              </FormErrorMessage>
            </FormControl>
          </Box>
        </HStack>

        <Box flex='1' pb={space}>
          <FormControl
            id='Birthdate'
            isInvalid={errors.Birthdate && touched.Birthdate}
          >
            <FormLabel {...labelStyle}>
              {formContent.label_year_of_birth_optional}
            </FormLabel>
            <Select placeholder={formContent.select} onChange={handleChange}>
              {birthDateYear &&
                birthDateYear.map((d) => (
                  <option key={d.value} value={`${d.value}-01-01`}>
                    {d.value}
                  </option>
                ))}
            </Select>
            <FormErrorMessage color='red'>{errors.Birthdate}</FormErrorMessage>
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
            bg='orange.500'
            _hover={{ bg: 'campaign.climate' }}
          >
            {formContent.submit_text}
          </Button>
        </Box>

        <Box>
          <HStack align='flex-start'>
            <Box pt={4} pb={4}>
              <FormControl id='optIn'>
                <Checkbox
                  name='OptIn'
                  defaultChecked
                  onChange={handleChange}
                  alignItems={'flex-start'}
                >
                  <Text fontSize='xs' color={'gray.900'}>
                    {formContent.form_remind}
                  </Text>
                </Checkbox>
              </FormControl>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </Form>
  )
}

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Email: '',
    FirstName: '',
    LastName: '',
    MobileCountryCode: '852',
    MobilePhone: '',
    Birthdate: '',
    OptIn: true,
  }),

  validate: (values) => {
    const errors = {}

    if (!values.Email) {
      errors.Email = formContent.empty_data_alert
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = formContent.invalid_email_alert
    }

    if (!values.FirstName) {
      errors.FirstName = formContent.empty_data_alert
    }

    if (!values.LastName) {
      errors.LastName = formContent.empty_data_alert
    }

    // if (
    //   values.MobilePhone.toString().length === 8 &&
    //   values.MobileCountryCode === "852"
    // ) {
    //   const regex = /^[2,3,5,6,8,9]{1}[0-9]{7}$/i;
    //   if (!regex.test(values.MobilePhone)) {
    //     errors.MobilePhone = formContent.invalid_format_alert;
    //   }
    // }

    // if (
    //   values.MobilePhone.toString().length === 8 &&
    //   values.MobileCountryCode === "853"
    // ) {
    //   const regex = /^[6]{1}[0-9]{7}$/i;
    //   if (!regex.test(values.MobilePhone)) {
    //     errors.MobilePhone = formContent.invalid_format_alert;
    //   }
    // }

    return errors
  },

  handleSubmit: async (values, { setSubmitting, props }) => {
    const fallbackValue = (d) => (d ? d : '')
    const hiddenFormData = props.hiddenForm.data
    // let birthdateValue = values.Birthdate ? `${values.Birthdate}-01-01` : ''
    const FORM_URL = helper.getPostURL()
    const CAMPAIGN_ID =
      process.env.NODE_ENV === 'production'
        ? helper.getCampaignID()
        : '7012u000000OxDYAA0'
    const getHiddenFields = document.querySelectorAll(
      'input[value][type="hidden"]:not([value=""])'
    )
    const hiddenFormValue = [...getHiddenFields].reduce(
      (obj, e) => ({ ...obj, [e.name]: e.value }),
      {}
    )

    const formData = {
      ...hiddenFormValue,
      ...values,
      // TODO: Match values from hidden from
      UtmMedium: fallbackValue(hiddenFormData.utm_medium),
      UtmSource: fallbackValue(hiddenFormData.utm_source),
      UtmCampaign: fallbackValue(hiddenFormData.utm_campaign),
      UtmContent: fallbackValue(hiddenFormData.utm_content),
      UtmTerm: fallbackValue(hiddenFormData.utm_term),
      CampaignId: `${CAMPAIGN_ID}`,
    }

    const response = await fetch(`${FORM_URL}`, {
      method: 'POST',
      body: Object.keys(formData).reduce((postData, key) => {
        postData.append(key, formData[key])
        return postData
      }, new FormData()),
    })

    if (response.statusText === 'OK') {
      props.createUser()
      const getData = JSON.parse(
        localStorage.getItem('greenpeacePhotoCollection')
      )
      const name = `${values.FirstName} ${values.LastName}`
      const data = {
        // mail: base64Encode(values.Email),
        name: base64Encode(name),
        userId: getData.userId,
        signed: true,
        // TODO: save?
        // mobile: `${values.MobileCountryCode} ${values.MobilePhone}`,
        // birthDate: values.Birthdate
      }

      localStorage.setItem('greenpeacePhotoCollection', JSON.stringify(data))
      setSubmitting(false)
      props.setModal(false)
      props.createUserSuccess(data)
    }
  },

  displayName: 'BasicForm',
})(MyForm)

const mapStateToProps = ({ user, signup, hiddenForm }) => {
  return { user, signup, hiddenForm }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (bol) => {
      dispatch({ type: signupActions.SET_SIGNUP_MODAL, data: bol })
    },
    createUser: () => {
      dispatch({ type: signupActions.CREATE_USER })
    },
    createUserSuccess: (data) => {
      dispatch({ type: userActions.SET_USER_SUCCESS, data })
      dispatch({ type: signupActions.CREATE_USER_SUCCESS })
    },
  }
}

connect(null, mapDispatchToProps)(MyForm)

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm)
