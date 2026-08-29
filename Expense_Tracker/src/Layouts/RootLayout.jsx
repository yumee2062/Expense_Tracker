import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


export default function RootLayout(){
    return(
        <>
            <Header/>
            
            <main className="min-h-screen">
                <Outlet/>
            </main>


            <Footer/>
        </>
    )
}