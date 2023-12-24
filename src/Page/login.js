import '../App.css';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { Button, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { useContext } from 'react';
import { userContext } from '../Context/context';
import { addUser } from '../API/api';
import { useNavigate } from 'react-router-dom';
function Login() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      email: '',
      phone: '',
      address: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Vui lòng nhập tên của bạn'),
      date: Yup.string()
        .required('Vui lòng nhập ngày sinh'),
      email: Yup.string()
        .required('Vui lòng nhập địa chỉ email'),
      phone: Yup.string()
        .required('Vui lòng nhập số điện thoại'),
    }),
    onSubmit: async (values) => {
      values.step1 = false;
      values.step2 = false;
      values.step3 = false;
      values.step4 = false;
      const res = await addUser(values);
      if (res) {
        setUser(res);
        navigate('/Home');
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Đã có lỗi, vui lòng thử lại!",
        });
      }
    }
  })
  console.log(user);
  const { handleChange, values, errors, touched, handleSubmit, handleBlur } = formik;
  return (
    <div className="homepage">
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-div'>
          <TextField helperText={touched.name && errors.name} onBlur={handleBlur} error={touched.name && Boolean(errors.name)} fullWidth label='Tên của bạn' onChange={handleChange} name='name' value={values.name} variant='standard' size='small'></TextField>
        </div>
        <div className='form-div'>
          <TextField helperText={touched.date && errors.date} onBlur={handleBlur} error={touched.date && Boolean(errors.date)} fullWidth label='Ngày sinh' onChange={handleChange} name='date' value={values.date} variant='standard' size='small'></TextField>
        </div>
        <div className='form-div'>
          <TextField helperText={touched.email && errors.email} onBlur={handleBlur} error={touched.email && Boolean(errors.email)} fullWidth label='Địa chỉ email' onChange={handleChange} name='email' value={values.email} variant='standard' size='small'></TextField>
        </div>
        <div className='form-div'>
          <TextField helperText={touched.phone && errors.phone} onBlur={handleBlur} error={touched.phone && Boolean(errors.phone)} fullWidth label='Điện thoại' onChange={handleChange} name='phone' value={values.phone} variant='standard' size='small'></TextField>
        </div>
        <div className='form-div'>
          <TextField onBlur={handleBlur} fullWidth label='Địa chỉ' onChange={handleChange} name='address' value={values.address} variant='standard' size='small'></TextField>
        </div>
        <div className='mt-20'>
          <Button variant='contained' type='submit'>
            Tiếp Tục
          </Button>
        </div>
      </form>

    </div>)
}
export default Login;