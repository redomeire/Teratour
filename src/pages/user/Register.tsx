import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import RegisterForm from "@/feature/auth/components/RegisterForm";
import UserLayout from "../../components/partials/layout/UserLayout";
import { BsArrowUpRight } from "react-icons/bs";

const Register = () => {
    return (
        <UserLayout>
            <div className="flex items-start lg:flex-row flex-col justify-between p-10 bg-opacity-50 pt-20" style={{ background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80')", backgroundSize: 'cover' }}>
                <div className="md:w-[50%] pl-10 pt-20 text-white">
                    <Typography variant="h1" className="font-bold">Selamat Datang</Typography>
                    <Typography variant="body" className="mt-5">Ingin Liburan? Tapi bingung mau ke destinasi wisata mana? Buat rencana perjalanan dan liburan Anda dengan mudah hanya di Teratour!</Typography>
                    <Button
                    color="secondary"
                    className="mt-5"
                    endIcon={<BsArrowUpRight/>}
                    >Tonton Video</Button>
                </div>
                <RegisterForm />
            </div>
        </UserLayout>
    );
}

export default Register;
