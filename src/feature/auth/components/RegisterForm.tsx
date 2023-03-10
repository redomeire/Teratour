import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Typography from "@/components/typography/Typography";
import { useState } from "react";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const RegisterForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [forms, setForms] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        await axios.post('https://reqres.in/api/login', {
            email: forms.email,
            password: forms.password
        })
            .then((result) => {
                console.log(result);
                window.localStorage.setItem('token', result.data.token)

                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }).catch((err) => {
                console.error(err)
            });
    }

    return (
        <form onSubmit={handleSubmit} className="p-7 rounded-xl md:w-[350px] bg-white ">
            <Typography variant="h4" className="font-bold mx-auto mb-5 text-center" >Daftar Akun</Typography>
            <Input
                label="Nama lengkap"
                type="text"
                placeholder="Masukkan Nama"
                className="mb-3"
                required
                onChange={e => {
                    setForms(prev => {
                        return { ...prev, email: e.target.value }
                    })
                }}
            />
            <Input
                label="Username"
                placeholder="Masukkan username"
                className="mb-3"
                required
                onChange={e => {
                    setForms(prev => {
                        return { ...prev, email: e.target.value }
                    })
                }}
            />
            <Input
                label="Email"
                type="email"
                placeholder="Masukkan email"
                className="mb-3"
                required
                onChange={e => {
                    setForms(prev => {
                        return { ...prev, email: e.target.value }
                    })
                }}
            />
            <Input
                label="Password"
                required
                type={passwordVisible ? "text" : "password"}
                placeholder="Masukkan Password"
                className="mb-3"
                endIcon={passwordVisible ? <RiEyeLine className="cursor-pointer" size={20} onClick={() => { setPasswordVisible(prev => !prev) }} /> : <RiEyeCloseLine className="cursor-pointer" onClick={() => { setPasswordVisible(prev => !prev) }} size={20} />}
                onChange={e => {
                    setForms(prev => {
                        return { ...prev, password: e.target.value }
                    })
                }}
            />
            <Input
                label="Konfirmasi password"
                required
                type="password"
                placeholder="Masukkan Password"
                endIcon={passwordVisible ? <RiEyeLine className="cursor-pointer" size={20} onClick={() => { setPasswordVisible(prev => !prev) }} /> : <RiEyeCloseLine className="cursor-pointer" onClick={() => { setPasswordVisible(prev => !prev) }} size={20} />}
                onChange={e => {
                    setForms(prev => {
                        return { ...prev, password: e.target.value }
                    })
                }}
            />
            <div className="flex items-center justify-between mt-5">
                <div className="flex items-center justify-start">
                    <div>
                        <Input
                            type="checkbox"
                            className="w-fit"
                        />
                    </div>
                    <Typography variant="body" className="ml-2 mt-1">Ingat Saya</Typography>
                </div>
                <Button color="link" className="mt-1 text-sm">Lupa Password</Button>
            </div>
            <Button color="primary" className="w-full mt-5">Masuk</Button>
            <div className="relative mt-7">
                <hr className="w-full h-[2px] bg-gray-300" />
                <div className="absolute right-1/2 translate-x-[50%] -top-2 bg-white px-3">
                    <Typography variant="body2" className="text-gray-400">atau</Typography>
                </div>
            </div>
            <Button
                type="button"
                color="secondary-grey"
                className="mt-7 w-full"
                beginningIcon={<FcGoogle />}
            >Masuk dengan Google</Button>
            <Typography variant="body2" className="text-center mt-5 flex items-center justify-center">Sudah punya akun ?
                <a href="/user/login" className="text-red-600 font-[600]">
                    <Button type="button" color="link">Masuk</Button>
                </a>
            </Typography>
        </form>
    );
}

export default RegisterForm;
