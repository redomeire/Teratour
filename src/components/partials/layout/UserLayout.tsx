import Navbar from "@/components/partials/appbar/Navbar";
import Footer from "@/components/partials/footer/Footer";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className={`${ window.location.pathname === '/user/login' ? '' : 'pt-16' } pb-10 min-h-screen`}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default UserLayout;
