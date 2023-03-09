import Navbar from "@/components/partials/appbar/Navbar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="pt-10 px-10">
                {children}
            </div>
        </div>
    );
}

export default UserLayout;
