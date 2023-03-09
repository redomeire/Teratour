import UserLayout from "../../components/partials/layout/UserLayout";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Typography from "../../components/typography/Typography";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
    return (
        <UserLayout>
            <p>Home</p>
            <Input
                label="label"
                placeholder="ini"
            />
            <Button
            endIcon={<AiOutlineSearch/>}
            className="font-semibold w-full">hoi</Button>
            <Typography variant="body" className="">class</Typography>
        </UserLayout>
    );
}

export default Home;
