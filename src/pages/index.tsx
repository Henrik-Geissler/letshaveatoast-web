import { withApollo } from '../utils/withApollo'
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from '@chakra-ui/core'
import { useToast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { Wrapper } from '../components/Wrapper'

const FRESH_TOAST = gql`
  query getToast {
    getToast {
      firstname
      lastname
      id
      amount
      category
    }
  }
`

const PUSH_TOAST = gql`
  query newToast($options: ToastInput!) {
    newToast(options: $options) {
      errors {
        field
        message
      }
      toast {
        firstname
        lastname
        id
        amount
        category
      }
    }
  }
`

interface StyleVProps {}

function validateName(value) {
  let error
  if (!value) {
    error = 'Name is required'
  }
  return error
}

//const format = val => `$` + val
//const parse = val => val.replace(/^\$/, '')

const format = val => val
const parse = val => val

const Todos: React.FC<StyleVProps> = () => {
  const { loading, error, data } = useQuery(FRESH_TOAST, {
    pollInterval: 500,
  })
  const [pushToast, res] = useLazyQuery(PUSH_TOAST)
  //const [value, setValue] = useState('1.00')

  console.log(data)
  const toast = useToast()
  if (data === undefined) return <>Loading down...</>
  if (res.loading) return <>Loading up ...</>
  toast({
    title: `${data.getToast.firstname} ${data.getToast.lastname}:`,
    description: `Let's have a $${data.getToast.amount} toast on ${data.getToast.category}`,
    status: 'success',
    duration: 3000,
    isClosable: false,
    position: 'top-right',
  })
  return (
    <Wrapper>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            pushToast({
              variables: {
                options: {
                  firstname: values.firstName,
                  lastname: values.lastName,
                  amount: Number.parseInt(values.amount),
                  category: Number.parseInt(values.category),
                }!,
              },
            })
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {props => (
          <Form>
            <Field name='firstName' validate={validateName}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.firstName && form.touched.firstName}
                >
                  <FormLabel htmlFor='firstName'>First name</FormLabel>
                  <Input {...field} id='firstName' placeholder='first name' />
                  <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='lastName' validate={validateName}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.lastName && form.touched.lastName}
                >
                  <FormLabel htmlFor='lastName'>Last name</FormLabel>
                  <Input {...field} id='lastName' placeholder='last name' />
                  <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='amount'>
              {({ field, form }) => (
                <FormControl id='amount'>
                  <FormLabel htmlFor='amount'>Amount</FormLabel>
                  <Select {...field} placeholder='Select amount'>
                    <option value='1'>$1</option>
                    <option value='5'>$5</option>
                    <option value='10'>$10</option>
                    <option value='50'>$50</option>
                    <option value='100'>$100</option>
                  </Select>
                </FormControl>
              )}
            </Field>
            <Field name='category'>
              {({ field, form }) => (
                <FormControl id='category'>
                  <FormLabel htmlFor='category'>Category</FormLabel>
                  <Select {...field} placeholder='Select category'>
                    <option value='0'>Option 0</option>
                    <option value='1'>Option 1</option>
                    <option value='2'>Option 2</option>
                    <option value='3'>Option 3</option>
                  </Select>
                </FormControl>
              )}
            </Field>
            <Button mt={4} isLoading={props.isSubmitting} type='submit'>
              Toast!
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default withApollo({ ssr: true })(Todos)
