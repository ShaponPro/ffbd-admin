// ** React Imports
import { ReactNode, useState, Fragment, MouseEvent } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import InputBase from '@mui/material/InputBase'
import Button, { ButtonProps } from '@mui/material/Button'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Card, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import BrandLogo from 'public/images/logo/brandlogo.png'
import CoverImage from 'public/images/logo/coverImage.png'

//** import Icon
import SendIcon from '@mui/icons-material/Send'

//** import component
import NabBarComponent from 'src/components/NabBarComponent'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import { useSettings } from 'src/@core/hooks/useSettings'

const defaultValues = {
  email: '',
  username: '',
  password: '',
  terms: false
}
interface FormData {
  email: string
  terms: boolean
  username: string
  password: string
}

// ** Styled Components

const BoxContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  margin: '30px',
  gap: '20px',
  width: '1840px',
  [theme.breakpoints.up('md')]: {
    minWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: 450
  },
  height: '1107px',
  background: ' #ffffff',
  boxShadow: '2px 5px 20px rgba(22, 31, 41, 0.1)',
  borderRadius: '10px'
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '50%'
}))

const LeftWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '50%'
}))

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  background: ' #f3f3f4',
  padding: '20px',
  borderRadius: '5px',
  marginTop: '25px'
}))

const CardWrapper = styled(Card)<CardProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '20px',
  width: '890px',
  height: '190px',
  background: '#f3f3f4',
  borderRadius: '5px'
}))

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  borderRadius: '0',
  width: '850px',
  height: '39px',
  padding: '5px',
  boxShadow: ' inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)'
}))

const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: '125px',
  height: '42px',
  background: '#57ce66',
  borderRadius: '3px',
  border: 'none',
  color: 'white'
}))

const CancleButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: '125px',
  height: '42px',
  background: '#F3F3F4',
  borderRadius: '3px',
  border: 'none',
  color: 'rgba(22, 31, 41, 0.5)'
}))

const Register = () => {
  // ** States

  // ** Hooks
  const theme = useTheme()
  const { register } = useAuth()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings
  const schema = yup.object().shape({
    password: yup.string().min(5).required(),
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    terms: yup.bool().oneOf([true], 'You must accept the privacy policy & terms')
  })

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    const { email, username, password } = data
    register({ email, username, password }, err => {
      if (err.email) {
        setError('email', {
          type: 'manual',
          message: err.email
        })
      }
      if (err.username) {
        setError('username', {
          type: 'manual',
          message: err.username
        })
      }
    })
  }

  return (
    <>
      <NabBarComponent />
      <BoxContainer>
        {/***** Left side Container */}
        <LeftWrapper>
          {/*****Card 1 */}
          <CardWrapper sx={{ display: 'flex' }}>
            <Typography component='div' variant='h5'>
              <b>Brand Logo*</b>
            </Typography>
            <CardContent>
              <CardMedia component='img' sx={{ width: 120 }} image={BrandLogo.src} alt='Brand Logo' />
              <Typography
                variant='caption'
                color='text.secondary'
                sx={{ fontWeight: 400, color: 'rgba(48, 48, 48, 0.5)', paddingLeft: '20px' }}
              >
                Recommended image size 150px X 150px and max 150kb
              </Typography>
            </CardContent>
          </CardWrapper>
          {/*****Card 1 End*/}

          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <BoxWrapper sx={{}}>
              <Grid item xs={6} md={8}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  *Brand Name
                </Typography>
                <Item>
                  <InputBase placeholder='Search and Filter' style={{ fontSize: '14px' }} />
                </Item>
              </Grid>

              <Grid item xs={6} md={8} sx={{ marginTop: '10px' }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Parent Brand Name
                </Typography>
                <Item>
                  <InputBase placeholder='Type parent brand name' style={{ fontSize: '14px' }} />
                </Item>
              </Grid>

              <Grid item xs={6} md={8} sx={{ marginTop: '10px' }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Company Name
                </Typography>
                <Item>
                  <InputBase placeholder='Type company name' style={{ fontSize: '14px' }} />
                </Item>
              </Grid>

              <Grid item xs={6} md={8} sx={{ marginTop: '10px' }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Company Address
                </Typography>
                <Item>
                  <InputBase placeholder='Type company address' style={{ fontSize: '14px' }} />
                </Item>
              </Grid>

              <Grid item xs={6} md={8} sx={{ marginTop: '10px' }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Description
                </Typography>
                <Item>
                  <InputBase placeholder='Type description' style={{ fontSize: '14px' }} />
                </Item>
              </Grid>
            </BoxWrapper>

            <BoxWrapper>
              <Grid item xs={6} md={8}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Business Name
                </Typography>
                <Item>
                  <InputBase placeholder='Type business name' style={{ fontSize: '14px' }} />
                </Item>
              </Grid>

              <Grid item xs={6} md={8} sx={{ marginTop: '10px' }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Upload TIN
                </Typography>
                <Item>
                <Button variant="outlined" component="label" size="small" color="secondary">
                    Choose File
                    <input type='file' hidden />
                  </Button>
                  <InputBase placeholder=' No File Chosen' style={{ fontSize: '14px' }} />
                </Item>
                <Typography
                  variant='caption'
                  color='text.secondary'
                  sx={{ fontWeight: 400, color: 'rgba(48, 48, 48, 0.5)', paddingLeft: '550px' }}
                >
                  Recommended image format pdf and max 500kb
                </Typography>
              </Grid>

              <Grid item xs={6} md={8} sx={{ marginTop: '10px' }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Upload BIN
                </Typography>
                <Item>
                <Button variant="outlined" component="label" size="small" color="secondary">
                    Choose File
                    <input type='file' hidden />
                  </Button>
                  <InputBase placeholder=' No File Chosen' style={{ fontSize: '14px' }} />
                </Item>
                <Typography
                  variant='caption'
                  color='text.secondary'
                  sx={{ fontWeight: 400, color: 'rgba(48, 48, 48, 0.5)', paddingLeft: '550px' }}
                >
                  Recommended image format pdf and max 500kb
                </Typography>
              </Grid>

              <Grid item xs={6} md={8} sx={{ marginTop: '10px' }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  Upload NID
                </Typography>
                <Item>
                  <Button variant="outlined" component="label" size="small" color="secondary">
                    Choose File
                    <input type='file' hidden />
                  </Button>
                  <InputBase placeholder='  No File Chosen' style={{ fontSize: '14px' }} />
                </Item>
                <Typography
                  variant='caption'
                  color='text.secondary'
                  sx={{ fontWeight: 400, color: 'rgba(48, 48, 48, 0.5)', paddingLeft: '550px' }}
                >
                  Recommended image format pdf and max 500kb
                </Typography>
              </Grid>
            </BoxWrapper>
          </form>
        </LeftWrapper>
        {/***** Left side Container end****/}

        {/***** Right side Container */}
        <RightWrapper>
          {/*****Card 2 */}
          <CardWrapper sx={{ display: 'flex' }}>
            <Typography component='div' variant='h5'>
              <b>Cover Image</b>
            </Typography>
            <CardContent>
              <CardMedia component='img' sx={{ width: 200 }} image={CoverImage.src} alt='Brand Logo' />
              <Typography
                variant='caption'
                color='text.secondary'
                sx={{ fontWeight: 400, color: 'rgba(48, 48, 48, 0.5)', paddingLeft: '20px' }}
              >
                Recommended image size 500px X 263px and max 300kb
              </Typography>
            </CardContent>
          </CardWrapper>
          {/*****Card 2  End*/}

          <BoxWrapper sx={{}}>
            <Grid item xs={3}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Website
              </Typography>
              <Item>
                <InputBase placeholder='Type web address' style={{ fontSize: '14px' }} />
              </Item>
            </Grid>

            <Grid item xs={3} sx={{ marginTop: '10px' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Social Media URL
              </Typography>
              <Item>
                <InputBase placeholder='Type social media address' style={{ fontSize: '14px' }} />
              </Item>
              <Typography
                  variant='caption'
                  color='text.secondary'
                  sx={{ fontWeight: 400, color: 'black', paddingLeft: '730px' }}
                >
                  Max 5 Categories
                </Typography>
            </Grid>

            <Grid item xs={3} sx={{ marginTop: '10px' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Category
              </Typography>
              <Item>
                <InputBase placeholder='Type category' style={{ fontSize: '14px' }} />
              </Item>
            </Grid>

            <Grid item xs={3} sx={{ marginTop: '10px' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Preferred Hashtag
              </Typography>
              <Item>
                <InputBase placeholder='Type preferred hashtag' style={{ fontSize: '14px' }} />
              </Item>
            </Grid>

            <Grid item xs={3} sx={{ marginTop: '10px' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Preferred Brand Tag
              </Typography>
              <Item>
                <InputBase placeholder='Type preferred brand tag' style={{ fontSize: '14px' }} />
              </Item>
            </Grid>

            <Grid item xs={3} sx={{ marginTop: '10px' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Contact Name
              </Typography>
              <Item>
                <InputBase placeholder='Type contact name' style={{ fontSize: '14px' }} />
              </Item>
            </Grid>

            <Grid item xs={3} sx={{ marginTop: '10px' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Contact Number
              </Typography>
              <Item>
                <InputBase placeholder='Type contact number' style={{ fontSize: '14px' }} />
              </Item>
            </Grid>

            <Grid item xs={3} sx={{ marginTop: '10px' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                Email*
              </Typography>
              <Item>
                <InputBase placeholder='Type email address' style={{ fontSize: '14px' }} />
              </Item>
            </Grid>
          </BoxWrapper>

          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'end',
              height: '180px',
              width: '100%',
              paddingLeft: '630px'
            }}
          >
            <Link passHref href='/login'>
              <CancleButton>Cancel</CancleButton>
            </Link>
            <Link passHref href='/createBrand'>
              <SubmitButton>
                <SendIcon />
                Submit
              </SubmitButton>
            </Link>
          </Box>
        </RightWrapper>
        {/***** Right side Container End*/}
      </BoxContainer>
    </>
  )
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true

export default Register
