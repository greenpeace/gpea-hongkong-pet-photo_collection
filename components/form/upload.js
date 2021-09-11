import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import formContent from 'components/form/content'
import { base64Decode } from 'components/utils'
import * as signupActions from 'store/actions/action-types/signup-actions'
import * as userActions from 'store/actions/action-types/user-actions'
import { Form, withFormik } from 'formik'
import axios from 'axios'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Checkbox,
  Textarea,
  Select,
  Stack,
  Center,
  Image,
  Icon,
} from '@chakra-ui/react'

import { AiOutlineCloudUpload } from 'react-icons/ai'

const MyForm = (props) => {
  const uploadRef = useRef(null)
  const [name, setName] = useState('')
  const [imagePreview, setImagePreview] = useState('')
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
    setFieldValue,
  } = props

  const space = 4
  const labelStyle = {
    fontSize: 'xs',
    color: 'gray.400',
  }

  useEffect(() => {
    const localUser =
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem(`greenpeacePhotoCollection`))
        : null
    setName(base64Decode(localUser.name))
    setFieldValue('Name', base64Decode(localUser.name))
    setFieldValue('UserId', localUser.name)
  }, [])

  const handleFileUpload = () => {
    uploadRef.current.click()
  }

  const handleReset = () => {
    setFieldValue('File', '')
    setImagePreview('')
  }

  useEffect(() => {
    if (values.File) {
      setImagePreview(URL.createObjectURL(values.File))
    }
  }, [values.File])

  return (
    <Container rounded={{ base: 0, sm: 'md' }} bg='white'>
      <Form onSubmit={handleSubmit}>
        <Flex direction={{ base: 'column', sm: 'row' }} align={`flex-start`}>
          <Box flex={1} mb={6}>
            {imagePreview ? (
              <Box>
                <Image src={imagePreview} alt='Image' />
                <Button onClick={() => handleReset()} mt={4}>
                  刪除
                </Button>
              </Box>
            ) : (
              <Box>
                <Stack spacing={4} mb={4}>
                  <Heading>上傳作品</Heading>
                  <Text>
                    請仔細輸入你的資料；一經提交即視為最終確認。
                    <br />
                    如對比賽詳情有任何疑問或查詢，請電郵至
                    lantauphoto2021@greenpeace.org。
                  </Text>
                </Stack>
                <Center
                  border={`1px dashed #d9d9d9`}
                  bgColor={`#fafafa`}
                  borderRadius={`2px`}
                  onClick={() => handleFileUpload()}
                  cursor={`pointer`}
                  _hover={{
                    border: `1px dashed #000`,
                  }}
                  minH={`xs`}
                >
                  <Stack justifyContent={'center'} alignItems={'center'}>
                    <Icon as={AiOutlineCloudUpload} w={8} h={8} />
                    <Text>將照片拖動到此處，或選擇要上傳的檔案。</Text>
                  </Stack>
                </Center>
              </Box>
            )}

            <FormControl id='File' isInvalid={errors.File && touched.File}>
              <FormErrorMessage color='red'>{errors.File}</FormErrorMessage>
              <Box className='upload-btn-wrapper' h={0} overflow={`hidden`}>
                <Button>Upload a file</Button>
                <Input
                  variant={'clear'}
                  textAlign={`center`}
                  name='File'
                  type='file'
                  onChange={(event) => {
                    setFieldValue('File', event.target.files[0])
                  }}
                  ref={uploadRef}
                />
              </Box>
            </FormControl>
          </Box>

          <Box flex={1} width={'100%'}>
            <Box flex={1} pb={space}>
              <FormControl id='Name' isInvalid={errors.Name && touched.Name}>
                <FormLabel {...labelStyle}>{formContent.label_name}</FormLabel>
                <Input
                  name='Name'
                  type='text'
                  defaultValue={name}
                  placeholder={formContent.label_name}
                  onChange={handleChange}
                />
                <FormErrorMessage color='red'>{errors.Name}</FormErrorMessage>
              </FormControl>
            </Box>

            <Box flex={1} pb={space}>
              <FormControl id='title' isInvalid={errors.Title && touched.Title}>
                <FormLabel {...labelStyle}>{formContent.label_title}</FormLabel>
                <Input
                  name='Title'
                  type='text'
                  placeholder={formContent.label_title}
                  onChange={handleChange}
                />
                <FormErrorMessage color='red'>{errors.Title}</FormErrorMessage>
              </FormControl>
            </Box>

            <Box flex={1} pb={space}>
              <FormControl
                id='Description'
                isInvalid={errors.Description && touched.Description}
              >
                <FormLabel {...labelStyle}>
                  {formContent.label_description}
                </FormLabel>
                <Textarea
                  name='Description'
                  type='text'
                  placeholder={formContent.label_description}
                  onChange={handleChange}
                />
                <FormErrorMessage color='red'>
                  {errors.Description}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Box flex={1} pb={space}>
              <FormControl
                id='category'
                isInvalid={errors.Category && touched.Category}
              >
                <FormLabel {...labelStyle}>{formContent.category}</FormLabel>
                <Select
                  name='Category'
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

            <Box flex={1} pt={3} pb={3}>
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
                _hover={{ bg: 'campaign.climate' }}
              >
                {formContent.upload_text}
              </Button>
            </Box>
          </Box>
        </Flex>
      </Form>
    </Container>
  )
}

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Name: '',
    Title: '',
    Description: '',
    File: '',
    Category: '',
    UserId: '',
  }),

  validate: (values) => {
    const errors = {}

    if (!values.Name) {
      errors.Name = formContent.empty_data_alert
    }

    if (!values.Title) {
      errors.Title = formContent.empty_data_alert
    }

    if (!values.Description) {
      errors.Description = formContent.empty_data_alert
    }

    if (!values.Category) {
      errors.Category = formContent.empty_data_alert
    }

    if (!values.File) {
      errors.File = `請上傳圖片`
    }

    return errors
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    const formData = new FormData()
    formData.append('file', values.File)
    formData.append('upload_preset', process.env.CLOUDINARY_PRESET)
    formData.append('resource_type', 'raw')

    axios.post(process.env.CLOUDINARY_API, formData).then(async (res) => {
      const { statusText, data } = res
      if (statusText === 'OK') {
        const gSheetFormData = [
          {
            timestamp: data.created_at,
            published: false,
            featured: false,
            id: data.public_id,
            title: values.Title,
            url: data.url,
            description: values.Description,
            category: values.Category,
            author: values.Name,
            votes: 0,
            userId: values.UserId,
          },
        ]

        axios
          .post(`${process.env.G_SHEET}/photo-collection`, gSheetFormData, {
            headers: {
              'content-type': 'application/json',
            },
          })
          .then(function (res) {
            const { statusText } = res
            if (statusText === 'OK') {
              props.router.push('/thankyou')
              setSubmitting(false)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        alert('Something errors')
      }
    })
  },

  displayName: 'BasicForm',
})(MyForm)

const mapStateToProps = () => {
  return {}
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
    },
  }
}

connect(null, mapDispatchToProps)(MyForm)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MyEnhancedForm))
