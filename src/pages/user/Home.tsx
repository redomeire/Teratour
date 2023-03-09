import UserLayout from "../../components/partials/layout/UserLayout";
import Input from "../../components/input/Input";
import Button from"../../components/button/Button";
import Typography from "../../components/typography/Typography";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
    return (
        <UserLayout>
            <p>Home</p>
            <Input
                label="label"
                placeholder="ini"
                beginningIcon={<AiOutlineSearch size={23}/>}
            />
            <Input
                label="label"
                placeholder="ini"
                beginningIcon={<AiOutlineSearch size={23}/>}
            />
            <div className="w-[200px]">
                <Button
                color="primary"
                    beginningIcon={<AiOutlineSearch size={23} />}
                    endIcon={<AiOutlineSearch size={23} />}
                    className="font-semibold ">
                    <Typography variant="h6">Hoi</Typography>
                </Button>
            </div>
            <Typography variant="body" className="">class</Typography>
        </UserLayout>
    );
}

export default Home;
