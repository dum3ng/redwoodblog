import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  Form,
  Submit,
  TextAreaField,
  TextField,
  Label,
  FieldError,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import toast, { Toaster } from 'react-hot-toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMuation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('contact created.')
    },
  })
  const formMethods = useForm()
  const onSubmit = (data) => {
    create({ variables: { input: data } })
    if (!error) formMethods.reset()
    console.log(data)
  }
  return (
    <>
      <MetaTags
        title="Contact"
        // description="Contact description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>ContactPage</h1>
      <Toaster />
      <Form onSubmit={onSubmit} error={error} formMethods={formMethods}>
        <FormError error={error} wrapperClassName="error" />
        <Label name="name">name</Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        ></TextField>
        <FieldError name="name" className="error"></FieldError>

        <Label name="email">email</Label>
        <TextAreaField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            // pattern: {
            //   value: /[^@]+@[^.]+\..+/,
            //   message: 'not valid email format',
            // },
          }}
        ></TextAreaField>
        <FieldError name="email" className="error"></FieldError>

        <Label name="message">message</Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>submit</Submit>
      </Form>
    </>
  )
}

export default ContactPage
