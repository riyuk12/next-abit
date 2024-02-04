import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout=({children}:DashboardLayoutProps)=>{
    return(
        <main className="">
            <Navbar />
            <div className="h-full w-full"> 
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default DashboardLayout;